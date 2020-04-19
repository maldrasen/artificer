global.CurrentEvent = (function() {

  let _currentEvents;

  function clear() {
    _currentEvents = {};
  }

  function set(code, state={}) {
    const event = Event.lookup(code);
    const phase = event.setting.phase;

    if (isValid(event,phase)) {
      push(phase,{ event, state });
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

  function remove() {
    return (_currentEvents[Game.instance().phase]||[]).shift();
  }

  function isValid(event, phase) {
    const phaseData = CurrentEvent.EventPhases[phase];

    if (phaseData == null) {
      throw `Cannot set ${code} as a current event. The phase isn't correct.` }

    if (phaseData.limit == 1 && (_currentEvents[phase]||[]).length > 0) {
      throw `A current event is already set for ${phase}`; }

    // Check repeatable or not? Need to check everything to make sure it wasn't
    // nessessary.
    return true;
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
    remove,
  }

})();

CurrentEvent.clear();
CurrentEvent.EventPhases = {
  'wake':        { limit:1 },
  'early':       { limit:1 },
  'before-work': { },
  'after-work':  { },
  'planning':    { },
  'night':       { limit:1 },
  'late-night':  { limit:1 },
};
