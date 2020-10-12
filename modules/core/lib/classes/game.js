// The primary purpose of the Game object is to manage the event queue. Because
// the implementation of the phased queues is rather complex I want to keep the
// Game as part of the core package. A specific scenario may not use all of the
// phases and flags and such, but it's better for a scenario to just work
// around unused phases than to make everything extremely configurable.

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
  static getTime() { return Game.EventPhases[this.getPhase()].label; }

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

  // === Event Queues ==========================================================

  // Set an event to occur as soon as the game reaches the appropriate phase. If
  // an event cannot be added this will throw an exception. That shouldn't be a
  // problem though. Classes that add events should know when it's safe to set an
  // event, but we'll see. It may be nessessary to add an isValid() function that
  // does the same checks and returns true or false.
  static addEvent(code, state={}) {
    const event = Event.lookup(code);
    const phase = event.setting.phase;

    this.ensureValidEvent(event);
    this._eventQueues[phase].push({ event, state });

    log(`Event Added [${phase}]  - ${event.code}`);
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

  // Check to see if an event exists in this plase. If an event or events have
  // been set for the current game phase then fetch the first event in the
  // queue, if a queue for this phase exists.
  static checkEvent(phase) {
    return (this._eventQueues[phase||this.getPhase()]||[])[0];
  }

  // Ensure that the event can be added to the current events. In order for an
  // event to be set as a current event it must not be a location event. There
  // cannot already be an event in the phase if it's one of the limited phases.
  //
  // Also you cannot set an event outside of the control gate where the event
  // happens, meaning you cannot set an evening event when the game is in the
  // morning phases. This is because the current events are not saved and will
  // be cleared when the game is quit and loaded.
  static ensureValidEvent(event) {
    const eventPhase = event.setting.phase;
    const eventPhaseData = Game.EventPhases[eventPhase];
    const currentPhase = this.getPhase();
    const currentPhaseData = Game.EventPhases[currentPhase];

    if (ArrayUtility.contains(['single','queue'],eventPhaseData.type) == false) {
      throw `Cannot add ${event.code}. ${eventPhase} has the wrong phase type.`; }

    if (eventPhaseData.type == 'single' && this._eventQueues[eventPhase].length > 0) {
      throw `Cannot add ${event.code}. An event is already set for ${phase}`; }

    if (eventPhaseData.control != currentPhaseData.control) {
      throw `Cannot add ${event.code}. The phase is in the wrong control state.`; }
  }

  // Ending an event is a little tricky. If an event is chained it should happen
  // in the event's onFinish() function. If a new event hasn't been chained we
  // want to clear the current event.
  static async endEvent(choices) {
    console.log("Event Ended. Choices:",choices)
    // if (Game.getCurrentEvent()) {
    //   const startingCode = Game._currentEvent.event.code;
    //   await Event.onFinish(choices);
    //
    //   if (startingCode == Game._currentEvent.event.code) {
    //     Game.log(`Ending Event: ${startingCode}`);
    //     Game._currentEvent = null;
    //   }
    // }
  }




  // === Phase Changes =========================================================

  // When the game phase changes we need to add any valid available events that
  // may be ready to enqueue.
  static async setPhase(phase) {
    log(`[phase change] ${phase}`);

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

  // The pullNextEvent() function is used to display the next event that should
  // be displayed in the client and should only be called by the Composer or a
  // spec. To determine the next event we see if there are any events in the
  // queue for the current phase. If not we advance the phase and check the next
  // queue if we advance phases until we reach a control phase we stop and return
  // null.
  static async pullNextEvent() {
    let phase = this.getPhase();

    // There is an event, wonderful. Remove it from the event queue for the
    // phase, set it to the current event and return it.
    if (this.checkEvent()) {
      this.setCurrentEvent(this._eventQueues[phase].shift());
      return this._currentEvent;
    }

    if (phase == 'wake') {
      await this.setPhase('early');
      return await this.pullNextEvent();
    }
    if (phase == 'early') {
      await this.setPhase('morning');
      return null;
    }
    if (phase == 'morning') {
      return null;
    }
    if (phase == 'before-work') {
      await this.setPhase('work-report');
      return null;
    }

    // If there are no after-work events and the training has been unlocked then
    // advance the game to the evening phase. Otherwise skip the evening and the
    // training report and advance to the night phase, then pull any night events.
    if (phase == 'after-work')  {
      if (Flag.lookup('training-view') == 'Y') {
        await this.setPhase('evening');
        return null;
      } else {
        await this.setPhase('night');
        return this.pullNextEvent();
      }
    }
    if (phase == 'evening') {
      return null;
    }
    if (phase == 'training') {
      await this.setPhase('train-report');
      return null;
    }
    if (phase == 'night') {
      await this.setPhase('late-night');
      return await this.pullNextEvent();
    }
    if (phase == 'late-night') {
      await this.nextDay();
      return await this.pullNextEvent();
    }
  }

  static async nextDay() {
    this.setDayNumber(this.getDayNumber()+1);
    log(`Starting Day ${this.getDayNumber()}`,true);
    await this.setPhase('wake');
  }
}

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
