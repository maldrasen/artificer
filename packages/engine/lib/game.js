// The primary purpose of the Game object is to manage the event queue. Because
// the implementation of the phased queues is rather complex I want to keep the
// Game as part of the main engine package. A specific scenario may not use all
// of the phases and flags and such, but it's better for a scenario to just
// work around unused phases than to make everything extremely configurable.

global.Game = (function() {

  let _currentEvent;
  let _eventQueues;

  async function start(debug) {
    clearEventQueues();

    setPhase('early');
    setLocation('basement');
    setDayNumber(1);
    setFood(1);

    Game.addEvent(debug ?
      Configuration.events.debugStart:
      Configuration.events.gameStart);

    await Composer.render();
  }

  async function clear() {
    clearEventQueues();
    Flag.clear();

    await Promise.all(Database.getPersistedModels().map(model => {
      return model.destroy({ where:{}, truncate:true })
    }));
  }

  function getCurrentEvent() { return _currentEvent; }
  function getDayNumber() { return Flag.lookup('game.dayNumber'); }
  function getFood() { return Flag.lookup('game.food'); }
  function getLocation() { return Flag.lookup('game.location'); }
  function getPhase() { return Flag.lookup('game.phase'); }

  function setCurrentEvent(event) { _currentEvent = event; }
  function setDayNumber(day) { Flag.set('game.dayNumber',day); }
  function setLocation(code) { Flag.set('game.location',code); }
  function setFood(food) { Flag.set('game.food',food); }

  // Is this actually a method or was it a property?
  // time: function() { return Game.EventPhases[Game._instance.phase].label; }

  // Game.loadGame = async function() {
  //   Game.clearEventQueues();
  //   Game._instance = await Game.findByPk(1);
  // }

  // Game.nextDay = async function() {
  //   Game.setDayNumber(Game.dayNumber()+1);
  //   Game.log(`Starting Day ${Game.dayNumber()}`,true);
  //
  //   await setPhase('wake');
  // }
  //
  // // === Short Cut Accessors and Mutators ========================================
  //
  // Game.dayNumber = function() { return Game._instance.dayNumber; }
  // Game.time = function() { return Game._instance.time; }
  // Game.location = function() { return Game._instance.location; }
  // Game.food = function() { return Game._instance.food; }
  //
  // Game.setDayNumber = function(day) { Game._instance.dayNumber = day; }
  // Game.setLocation = function(code) { Game._instance.location = Location.lookup(code).code; }
  // Game.addFood =    function(count) { Game._instance.food += count; }
  // Game.removeFood = function(count) { Game._instance.food = Math.max(0, Game._instance.food - count); }
  //
  // Game.setCurrentProject = function(project) {
  //   Game._instance.currentProject = project;
  //   Game._instance.currentProjectProgress = 0;
  // }
  //
  // Game.currentProject = function() { return Game._instance.currentProject }
  // Game.currentProjectProgress = function() { return Game._instance.currentProjectProgress }
  // Game.addProjectProgress = function(value) { Game._instance.currentProjectProgress += value; }







  // === Game Event Queues =======================================================

  function log(message,header) {
    if (Environment.Verbose) {
      console.log(header ? `\n=== ${message} ===` : `-     ${message}`);
    }
  }


  function clearEventQueues() {
    _currentEvent = null;
    _eventQueues = {
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
  function addEvent(code, state={}) {
    const event = Event.lookup(code);
    const phase = event.setting.phase;

    ensureValidEvent(event);

    Game.log(`Event Added [${phase}]  - ${event.code}`);
    _eventQueues[phase].push({ event, state });
  }

  // // Start a location event. Location events are usually made available in the
  // // client when an associated available event is added, however they can also be
  // // started directly with an action as is the case with the debug actions, in
  // // which case there will be no available event.
  // Game.startLocationEvent = async function(code) {
  //   let availableEvent = await AvailableEvent.findOne({ where:{ code:code }});
  //   let state = {};
  //
  //   if (availableEvent) {
  //     state = availableEvent.state || {};
  //     await availableEvent.destroy();
  //   }
  //
  //   Game.log(`Location Event Started - ${code}`);
  //   Game.setCurrentEvent({ event:Event.lookup(code), state:state });
  // }
  //
  // // chainEvent() continues the currently running event. The state carries over
  // // from the previous event, but if changes are nessessary can be added to the
  // // new state argument and merged into the current state.
  // //
  // // If the original event is queued without the actors already in the state
  // // they're probably being selected after the event starts by the
  // // CharacterAgent. When this is the case we will almost always want to chain
  // // these selected actors to the next event, but their IDs are stashed in the
  // // choices object. If we pass the choices back into the chain though we
  // // automatically fetch the actors from it.
  // Game.chainEvent = function(code, state={}, choices={}) {
  //   if (Game.setCurrentEvent(null)) { throw `Cannot chain event because there is no current event.` }
  //
  //   if (choices.event && choices.event.actorIDs) {
  //     if (state.actors == null) { state.actors = {}; }
  //     each(Object.keys(choices.event.actorIDs), key => {
  //       state.actors[key] = choices.event.actorIDs[key]
  //     });
  //   }
  //
  //   Game.log(`Chained: ${code}`);
  //   _currentEvent.event = Event.lookup(code);
  //   _currentEvent.state = extend(_currentEvent.state, state);
  // }
  //
  // // The pullNextEvent() function is used to display the next event that should
  // // be displayed in the client and should only be called by the Composer or a
  // // spec. To determine the next event we see if there are any events in the
  // // queue for the current phase. If not we advance the phase and check the next
  // // queue if we advance phases until we reach a control phase we stop and return
  // // null.
  // Game.pullNextEvent = async function() {
  //   let phase = getPhase();
  //
  //   // There is an event, wonderful. Remove it from the event queue for the
  //   // phase, set it to the current event and return it.
  //   if (Game.checkEvent()) {
  //     setCurrentEvent(_eventQueues[phase].shift());
  //     return _currentEvent;
  //   }
  //
  //   if (phase == 'wake') {
  //     await Game.setPhase('early');
  //     return await Game.pullNextEvent();
  //   }
  //   if (phase == 'early') {
  //     await Game.setPhase('morning');
  //     return null;
  //   }
  //   if (phase == 'morning') {
  //     return null;
  //   }
  //   if (phase == 'before-work') {
  //     await Game.setPhase('work-report');
  //     return null;
  //   }
  //
  //   // If there are no after-work events and the training has been unlocked then
  //   // advance the game to the evening phase. Otherwise skip the evening and the
  //   // training report and advance to the night phase, then pull any night events.
  //   if (phase == 'after-work')  {
  //     if (Flag.lookup('training-view') == 'Y') {
  //       await Game.setPhase('evening');
  //       return null;
  //     } else {
  //       await Game.setPhase('night');
  //       return Game.pullNextEvent();
  //     }
  //   }
  //   if (phase == 'evening') {
  //     return null;
  //   }
  //   if (phase == 'training') {
  //     await Game.setPhase('train-report');
  //     return null;
  //   }
  //   if (phase == 'night') {
  //     await Game.setPhase('late-night');
  //     return await Game.pullNextEvent();
  //   }
  //   if (phase == 'late-night') {
  //     await Game.nextDay();
  //     return await Game.pullNextEvent();
  //   }
  // }
  //
  // // If an event or events have been set for the current game phase then fetch
  // // the first event in the queue, if a queue for this phase exists.
  // Game.checkEvent = function(phase) {
  //   return (_eventQueues[phase||getPhase()]||[])[0];
  // }

  // When the game phase changes we need to add any valid available events that
  // may be ready to enqueue.
  async function setPhase(phase) {
    Game.log(`[phase change] ${phase}`);
    Flag.set('game.phase',phase);

    let available = (await AvailableEvent.validEvents()).filter(availableEvent => {
      return Random.upTo(100) < availableEvent.chance
    });

    // If multiple events are available for this single event phase, then just
    // choose one at random. I don't really have any way of knowing which event
    // should take priority over another right now, though that might be a
    // thing I want to add.
    if (available.length > 0 && Game.EventPhases[getPhase()].type == 'single') {
      available = [Random.from(available)];
    }

    await Promise.all(available.map(async availableEvent => {
      Game.addEvent(availableEvent.code, availableEvent.state)
      await availableEvent.destroy();
    }));
  }

  // // Ending an event is a little tricky. If an event is chained it should happen
  // // in the event's onFinish() function. If a new event hasn't been chained we
  // // want to clear the current event.
  // Game.endEvent = async function(choices) {
  //   if (_currentEvent) {
  //     const startingCode = _currentEvent.event.code;
  //     await Event.onFinish(choices);
  //
  //     if (startingCode == _currentEvent.event.code) {
  //       Game.log(`Ending Event: ${startingCode}`);
  //       setCurrentEvent(null);
  //     }
  //   }
  // }

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
    const currentPhase = getPhase();
    const currentPhaseData = Game.EventPhases[currentPhase];

    if (ArrayUtility.contains(['single','queue'],eventPhaseData.type) == false) {
      throw `Cannot add ${event.code}. ${eventPhase} has the wrong phase type.`; }

    if (eventPhaseData.type == 'single' && _eventQueues[eventPhase].length > 0) {
      throw `Cannot add ${event.code}. An event is already set for ${phase}`; }

    if (eventPhaseData.control != currentPhaseData.control) {
      throw `Cannot add ${event.code}. The phase is in the wrong control state.`; }
  }

  return {
    log,
    getPhase,
    start,
    addEvent,
  };

})();

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
