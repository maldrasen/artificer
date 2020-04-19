global.CurrentEvent = (function() {

  let _currentEvents;

  // Clear the event queue. This must be done between specs though it really
  // shouldn't be nessessary because the current event should be clear when all
  // of the events in it are completed.
  function clear() {
    _currentEvents = {};
  }

  // Set the current event for an upcoming phase if the event is valid. If an
  // event cannot be added this will throw an exception. That shouldn't be a
  // problem though. The resolver should know when it's safe to set an event,
  // but we'll see. It may be nessessary to add an isValid() function that does
  // the same checks and returns true or false.
  function set(code, state={}) {
    const event = Event.lookup(code);

    ensureValid(event);
    push(event.setting.phase,{ event, state });
  }

  // Ensure that the event can be added to the current events. In order for an
  // event to be set as a current event it must not be a location event. There
  // cannot already be an event in the phase if it's one of the limited phases.
  //
  // Also you cannot set an event outside of the control gate where the event
  // happens, meaning you cannot set an evening event when the game is in the
  // morning phases. This is because the current events are not saved and will
  // be cleared when the game is quit and loaded.
  function ensureValid(event) {
    const eventPhase = event.setting.phase;
    const eventPhaseData = CurrentEvent.EventPhases[eventPhase];
    const currentPhase = Game.instance().phase;
    const currentPhaseData = CurrentEvent.EventPhases[currentPhase];

    if (eventPhaseData == null) {
      throw `Cannot set ${code} as a current event. The phase isn't correct.` }

    if (eventPhaseData.limit == 1 && (_currentEvents[eventPhase]||[]).length > 0) {
      throw `A current event is already set for ${phase}`; }

    if (eventPhaseData.control != currentPhaseData.control) {
      throw `Cannot set ${code}. The phase is in the wrong control state.`
    }
  }

  // EventQueue.chain() continues an event. The state carries over from the
  // previous event, but if changes are nessessary can be added to the new
  // state argument and merged into the current state.
  //
  // When chaining events the chain() function always replaces the event at the
  // head of the array.
  function chain(code, state={}) {
    const phase = Game.instance().phase;
    _currentEvents[phase][0].event = Event.lookup(code);
    _currentEvents[phase][0].state = extend(_currentEvents[phase][0].state, state);
  }

  // If an event or events have been set for the current game phase then fetch
  // the first event in the queue.
  function fetch() {
    let data = _currentEvents[Game.instance().phase];
    return data ? data[0] : null;
  }

  // The check() function is here for the specs mostly, and just returns
  // whatever happens to be set in the given phase.
  function check(phase) {
    return _currentEvents[phase];
  }

  function remove() {
    return (_currentEvents[Game.instance().phase]||[]).shift();
  }


  function push(phase,data) {
    if (_currentEvents[phase] == null) _currentEvents[phase] = [];
    _currentEvents[phase].push(data);
  }

  return {
    clear,
    set,
    chain,
    fetch,
    check,
    remove,
  }

})();

CurrentEvent.clear();
CurrentEvent.EventPhases = {
  'wake':        { control:'trainPlan', limit:1 },
  'early':       { control:'trainPlan', limit:1 },
  'before-work': { control:'workPlan'   },
  'after-work':  { control:'workPlan'   },
  'planning':    { control:'trainPlan'  },
  'night':       { control:'trainPlan', limit:1 },
  'late-night':  { control:'trainPlan', limit:1 },
};
