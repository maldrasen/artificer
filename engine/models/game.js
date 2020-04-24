
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
    time: function() { return Game.EventPhases[Game._instance.phase].label; }
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

Game.instance = function() { return Game._instance; }

Game.saveGame = async function() {
  await Game._instance.save();
}

Game.loadGame = async function() {
  Game.clearEventQueues();
  Game._instance = await Game.findByPk(1);
}

Game.start = async function(debugStart) {
  if (Game._instance != null) { throw "Cannot start a new Game. A Game currently exists." }

  Game.clearEventQueues();
  Game._instance = await Game.create({
    id: 1,
    dayNumber: 1,
    phase: 'early',
    location: 'courtyard',
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

Game.nextDay = async function() {
  Game.setDayNumber(Game.dayNumber()+1);
  Game.log(`Starting Day ${Game.dayNumber()}`,true);

  await Game.setPhase('wake');
}

// === Short Cut Accessors and Mutators ========================================

Game.dayNumber = function() { return Game._instance.dayNumber; }
Game.phase = function() { return Game._instance.phase; }
Game.time = function() { return Game._instance.time; }
Game.location = function() { return Game._instance.location; }
Game.food = function() { return Game._instance.food; }

Game.setDayNumber = function(day) { Game._instance.dayNumber = day; }
Game.setLocation = function(code) { Game._instance.location = Location.lookup(code).code; }
Game.addFood =    function(count) { Game._instance.food += count; }
Game.removeFood = function(count) { Game._instance.food = Math.max(0, Game._instance.food - count); }

Game.setCurrentProject = function(project) {
  Game._instance.currentProject = project;
  Game._instance.currentProjectProgress = 0;
}

Game.currentProject = function() { return Game._instance.currentProject }
Game.currentProjectProgress = function() { return Game._instance.currentProjectProgress }
Game.addProjectProgress = function(value) { Game._instance.currentProjectProgress += value; }

// === Game Event Queues =======================================================

Game.log = function(message,header) {
  if (Environment.Verbose) {
    console.log(header ? `\n=== ${message} ===` : `-     ${message}`);
  }
}

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

  Game.log(`Event Added [${phase}]  - ${event.code}`);
  Game._eventQueues[phase].push({ event, state });
}

// Start a location event. Location events are usually made available in the
// client when an associated available event is added, however they can also be
// started directly with an action as is the case with the debug actions, in
// which case there will be no available event.
Game.startLocationEvent = async function(code) {
  let availableEvent = await AvailableEvent.findOne({ where:{ code:code }});
  let state = {};

  if (availableEvent) {
    state = availableEvent.state || {};
    await availableEvent.destroy();
  }

  Game.log(`Location Event Started - ${code}`);
  Game._currentEvent = { event:Event.lookup(code), state:state };
}

// chainEvent() continues the currently running event. The state carries over
// from the previous event, but if changes are nessessary can be added to the
// new state argument and merged into the current state.
//
// If the original event is queued without the actors already in the state
// they're probably being selected after the event starts by the
// CharacterAgent. When this is the case we will almost always want to chain
// these selected actors to the next event, but their IDs are stashed in the
// choices object. If we pass the choices back into the chain though we
// automatically fetch the actors from it.
Game.chainEvent = function(code, state={}, choices={}) {
  if (Game._currentEvent == null) { throw `Cannot chain event because there is no current event.` }

  if (choices) {
    if (state.actors == null) { state.actors = {}; }
    each(Object.keys(choices.event.actorIDs), key => {
      state.actors[key] = choices.event.actorIDs[key]
    });
  }

  Game.log(`Chained: ${code}`);
  Game._currentEvent.event = Event.lookup(code);
  Game._currentEvent.state = extend(Game._currentEvent.state, state);
}

// The pullNextEvent() function is used to display the next event that should
// be displayed in the client and should only be called by the Composer or a
// spec. To determine the next event we see if there are any events in the
// queue for the current phase. If not we advance the phase and check the next
// queue if we advance phases until we reach a control phase we stop and return
// null.
Game.pullNextEvent = async function() {
  let phase = Game.phase();

  // There is an event, wonderful. Remove it from the event queue for the
  // phase, set it to the current event and return it.
  if (Game.checkEvent()) {
    Game._currentEvent = Game._eventQueues[phase].shift();
    return Game._currentEvent;
  }

  if (phase == 'wake') {
    await Game.setPhase('early');
    return await Game.pullNextEvent();
  }
  if (phase == 'early') {
    await Game.setPhase('morning');
    return null;
  }
  if (phase == 'morning') {
    return null;
  }
  if (phase == 'before-work') {
    await Game.setPhase('work-report');
    return null;
  }

  // If there are no after-work events and the training has been unlocked then
  // advance the game to the evening phase. Otherwise skip the evening and the
  // training report and advance to the night phase, then pull any night events.
  if (phase == 'after-work')  {
    if (Flag.lookup('training-view') == 'Y') {
      await Game.setPhase('evening');
      return null;
    } else {
      await Game.setPhase('night');
      return Game.pullNextEvent();
    }
  }
  if (phase == 'evening') {
    return null;
  }
  if (phase == 'training') {
    await Game.setPhase('train-report');
    return null;
  }
  if (phase == 'night') {
    await Game.setPhase('late-night');
    return await Game.pullNextEvent();
  }
  if (phase == 'late-night') {
    await Game.nextDay();
    return await Game.pullNextEvent();
  }
}

// If an event or events have been set for the current game phase then fetch
// the first event in the queue, if a queue for this phase exists.
Game.checkEvent = function(phase) {
  return (Game._eventQueues[phase||Game.phase()]||[])[0];
}

// When the game phase changes we need to add any valid available events that
// may be ready to enqueue.
Game.setPhase = async function(phase) {
  Game._instance.phase = phase;
  Game.log(`[phase change] ${phase}`);

  let available = (await AvailableEvent.validEvents()).filter(availableEvent => {
    return Random.upTo(100) < availableEvent.chance
  });

  // If multiple events are available for this single event phase, then just
  // choose one at random. I don't really have any way of knowing which event
  // should take priority over another right now, though that might be a
  // thing I want to add.
  if (available.length > 0 && Game.EventPhases[Game.phase()].type == 'single') {
    available = [Random.from(available)];
  }

  await Promise.all(available.map(async availableEvent => {
    Game.addEvent(availableEvent.code, availableEvent.state)
    await availableEvent.destroy();
  }));
}

// Ending an event is a little tricky. If an event is chained it should happen
// in the event's onFinish() function. If a new event hasn't been chained we
// want to clear the current event.
Game.endEvent = async function(choices) {
  const startingCode = Game._currentEvent.event.code;
  await Event.onFinish(choices);

  if (startingCode == Game._currentEvent.event.code) {
    Game.log(`Ending Event: ${startingCode}`);
    Game._currentEvent = null;
  }
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
    throw `Cannot add ${event.code}. The phase is in the wrong control state.`; }
}
