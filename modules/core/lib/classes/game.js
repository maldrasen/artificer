global.Game = class Game {

  static start(options) {
    Game.clearEventQueues();
    Game.setPhase(options.phase);
    Game.setLocation(options.location);
    Game.setDayNumber(options.dayNumber || 1);
    Game.setFood(options.food || 100);
    Game.addEvent(options.event);
  }

  static getCurrentEvent() { return this._currentEvent; }
  static getDayNumber() { return Flag.lookup('game.dayNumber'); }
  static getFood() { return Flag.lookup('game.food'); }
  static getLocation() { return Flag.lookup('game.location'); }
  static getPhase() { return Flag.lookup('game.phase'); }

  static setCurrentEvent(event) { this._currentEvent = event; }
  static setDayNumber(day) { Flag.set('game.dayNumber',day); }
  static setLocation(code) { Flag.set('game.location',code); }
  static setFood(food) { Flag.set('game.food',food); }

  // Clear the entire game from memory. This needs to be done when the main
  // menu is opened so that when another game is loaded the state is clear.
  static async clear() {
    Game.clearEventQueues();
    Flag.clear();

    // await Promise.all(Database.getPersistedModels().map(model => {
    //   return model.destroy({ where:{}, truncate:true })
    // }));
  }

  // Set an event to occur as soon as the game reaches the appropriate phase. If
  // an event cannot be added this will throw an exception. That shouldn't be a
  // problem though. Classes that add events should know when it's safe to set an
  // event, but we'll see. It may be nessessary to add an isValid() function that
  // does the same checks and returns true or false.
  static addEvent(code, state={}) {
    // const event = Event.lookup(code);
    // const phase = event.setting.phase;
    //
    // ensureValidEvent(event);
    //
    // Game.log(`Event Added [${phase}]  - ${event.code}`);
    // _eventQueues[phase].push({ event, state });
  }

  // Still on the fence about the event queues and game phases and such. It
  // would be nice if the phases were configurable. That seems like overkill
  // though, when they can also be easily worked around. I'll leave them as is
  // for now I think, but it's something to consider.
  static clearEventQueues() {
    this._currentEvent = null;
    this._eventQueues = {
      'wake':        [],
      'early':       [],
      'before-work': [],
      'after-work':  [],
      'planning':    [],
      'night':       [],
      'late-night':  [],
    };
  }

  // === Phase Changes ===

  // When the game phase changes we need to add any valid available events that
  // may be ready to enqueue.
  static async setPhase(phase) {
    // Game.log(`[phase change] ${phase}`);
    Flag.set('game.phase',phase);

    // let available = (await AvailableEvent.validEvents()).filter(availableEvent => {
    //   return Random.upTo(100) < availableEvent.chance
    // });

    // If multiple events are available for this single event phase, then just
    // choose one at random. I don't really have any way of knowing which event
    // should take priority over another right now, though that might be a
    // thing I want to add.
    // if (available.length > 0 && Game.EventPhases[getPhase()].type == 'single') {
    //   available = [Random.from(available)];
    // }

    // await Promise.all(available.map(async availableEvent => {
    //   Game.addEvent(availableEvent.code, availableEvent.state)
    //   await availableEvent.destroy();
    // }));
  }

}
