
global.Game = Database.instance().define('game', {
  location:                 { type:Sequelize.STRING  },
  dayNumber:                { type:Sequelize.INTEGER },
  phase:                    { type:Sequelize.STRING  },
  food:                     { type:Sequelize.INTEGER },
  currentProject:           { type:Sequelize.STRING  },
  currentProjectProgress:   { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {
    time: function() { return GAME_PHASES[Game._instance.phase]; }
  }
});

Game.EventPhases = {
  'wake':         { type:'single',  label:'Early Morning', control:'evening' },
  'early':        { type:'single',  label:'Early Morning', control:'evening' },
  'morning':      { type:'control', label:'Morning'                          },
  'before-work':  { type:'queue',   label:'Afternoon',     control:'morning' },
  'work-report':  { type:'report',                                           },
  'after-work':   { type:'queue',   label:'Afternoon',     control:'morning' },
  'evening':      { type:'control', label:'Evening'                          },
  'training':     { type:'queue',   label:'Evening',       control:'evening' },
  'train-report': { type:'report'                                            },
  'night':        { type:'single',  label:'Night',         control:'evening' },
  'late-night':   { type:'single',  label:'Late Night',    control:'evening' },
};

Game.loadGame = async function() { Game._instance = await Game.findByPk(1); }
Game.saveGame = async function() { await Game._instance.save(); }
Game.instance = function() { return Game._instance; }

Game.start = async function(debugStart) {
  if (Game._instance != null) { throw "Cannot start a new Game. A Game currently exists." }

  Game.clearEventQueues();
  Game._instance = await Game.create({
    id: 1,
    dayNumber: 1,
    phase: 'early',
    food: Configuration.startingFood,
  });

  debugStart ?
    (await Configuration.onDebugStart()):
    (await Configuration.onStart());

  await Composer.render();
}

Game.clear = async function() {
  Game.clearEventQueues();
  Game._instance = null;
  Flag.clear();

  await Promise.all(Database.getPersistedModels().map(model => {
    return model.destroy({ where:{}, truncate:true })
  }));
}

Game.setLocation = function(code) {
  Game._instance.location = Location.lookup(code).code;
}

Game.setPhase = function(phase) {
  Game._instance.phase = phase;
}

// === Game Event Queues =======================================================

Game.currentEvent = function() {
  return Game._currentEvent;
}

Game.clearEventQueues = function() {
  Game._currentEvent = null;
  Game._eventQueues = {
    'wake':        [],
    'early':       [],
    'before-work': [],
    'after-work':  [],
    'planning':    [],
    'night':       [],
    'late-night':  [],
  };
}

// Set an event to occur as soon as the game reaches the appropriate phase. If
// an event cannot be added this will throw an exception. That shouldn't be a
// problem though. Classes that add events should know when it's safe to set an
// event, but we'll see. It may be nessessary to add an isValid() function that
// does the same checks and returns true or false.
Game.addEvent = function(code, state={}) {
  const event = Event.lookup(code);
  const phase = event.setting.phase;

  ensureValidEvent(event);

  Game._eventQueues[phase].push({ event, state });
}

// chainEvent() continues the currently running event. The state carries over
// from the previous event, but if changes are nessessary can be added to the
// new state argument and merged into the current state.
Game.chainEvent = function(code, state={}) {
  if (Game._currentEvent == null) { throw `Cannot chain event because there is no current event.` }

  Game._currentEvent.event = Event.lookup(code);
  Game._currentEvent.state = extend(Game._currentEvent.state, state);
}

// The pullNextEvent() function is used to display the next event that should
// be displayed in the client and should only be called by the Composer or a
// spec. To determine the next event we see if there are any events in the
// queue for the current phase. If not we advance the phase and check the next
// queue if we advance phases until we reach a control phase we stop and return
// null.
Game.pullNextEvent = function() {
  let phase = Game.instance().phase;

  // There is an event, wonderful. Remove it from the event queue for the
  // phase, set it to the current event and return it.
  if (Game.checkEvent()) {
    Game._currentEvent = Game._eventQueues[phase].shift();
    return Game._currentEvent;
  }

  if (phase == 'wake')        { Game.setPhase('early');        return Game.pullNextEvent(); }
  if (phase == 'early')       { Game.setPhase('morning');      return null; }
  if (phase == 'morning')     { /* Control Phase */            return null; }
  if (phase == 'before-work') { Game.setPhase('work-report');  return null; }
  if (phase == 'after-work')  { Game.setPhase('evening');      return null; }
  if (phase == 'evening')     { /* Control Phase */            return null; }
  if (phase == 'training')    { Game.setPhase('train-report'); return null; }
  if (phase == 'night')       { Game.setPhase('late-night');   return Game.pullNextEvent(); }
  if (phase == 'late-night')  { Game.setPhase('wake');         return Game.pullNextEvent(); }
}

// If an event or events have been set for the current game phase then fetch
// the first event in the queue.
Game.checkEvent = function(phase) {
  return Game._eventQueues[phase||Game.instance().phase][0];
}

// Ensure that the event can be added to the current events. In order for an
// event to be set as a current event it must not be a location event. There
// cannot already be an event in the phase if it's one of the limited phases.
//
// Also you cannot set an event outside of the control gate where the event
// happens, meaning you cannot set an evening event when the game is in the
// morning phases. This is because the current events are not saved and will
// be cleared when the game is quit and loaded.
function ensureValidEvent(event) {
  const eventPhase = event.setting.phase;
  const eventPhaseData = Game.EventPhases[eventPhase];
  const currentPhase = Game._instance.phase;
  const currentPhaseData = Game.EventPhases[currentPhase];

  if (ArrayUtility.contains(['single','queue'],eventPhaseData.type) == false) {
    throw `Cannot add ${event.code}. ${eventPhase} has the wrong phase type.`; }

  if (eventPhaseData.type == 'single' && Game._eventQueues[eventPhase].length > 0) {
    throw `Cannot add ${event.code}. An event is already set for ${phase}`; }

  if (eventPhaseData.control != currentPhaseData.control) {
    throw `Cannot add ${code}. The phase is in the wrong control state.`; }
}
