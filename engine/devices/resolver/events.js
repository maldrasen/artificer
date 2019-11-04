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

    await EventQueue.enqueueEvent(event.code, availableEvent.state);
    await availableEvent.destroy();
  }

  return {
    enqueueAvailable: enqueueAvailable,
  }

})();
