global.Weaver = (function() {

  function updateEvent(queuedEvent) {
    return new Promise(resolve => {
      let event = Event.lookup(queuedEvent.code).properties;
    });
  }

  return {
    updateEvent: updateEvent,
  };

})();
