Resolver.Events = (function() {

  // Enqueue valid events for this phase. After fetching the valid events from
  // the database we apply a filter to randomly filter out events that only
  // have a chance of occuring or not.
  async function enqueueAvailable() {
    const available = (await AvailableEvent.validEvents()).filter(availableEvent => {
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

  return { enqueueAvailable };

})();
