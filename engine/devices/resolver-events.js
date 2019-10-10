Resolver.Events = (function() {

  async function enqueueAvailable() {
    const events = await AvailableEvent.findAll({ where:{} });
    await Promise.all(events.map(async event => {
      await enqueueIfValid(event);
    }));
  }

  async function enqueueIfValid(availableEvent) {
    const event = Event.lookup(availableEvent.code);
    const game = await Game.instance();
    const valid = await CentralScrutinizer.meetsRequirements(availableEvent.requires)

    if (valid == false || (event.time && event.time != game.time)) { return false; }

    // The event is valid so enqueue it as either a location or a game event.
    if (availableEvent.eventType == 'location') {
      await game.enqueueLocationEvent(event.code, availableEvent.state);
    } else {
      await game.enqueueGameEvent(event.code, availableEvent.state);
    }

    // Because this event was queued it should no longer be available, unless
    // it's a repeatable event.
    if (availableEvent.repeat == false) {
      await AvailableEvent.destroy({ where:{ code:event.code }})
    }
  }

  return {
    enqueueAvailable: enqueueAvailable,
  }

})();
