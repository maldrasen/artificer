Resolver.Events = (function() {

  // TODO: Yeah, this all needs redone.

  async function enqueueAvailable() {
    // const game = await Game.instance();
    // const available = await AvailableEvent.findAll();
    //
    // const valid = await Promise.all(available.map(async availableEvent => {
    //   return await checkRequirements(game, availableEvent);
    // }));
    //
    // await Promise.all(filterEvents(valid).map(async availableEvent => {
    //   await EventQueue.enqueueEvent(availableEvent.code, availableEvent.state);
    //   await availableEvent.destroy();
    // }));
  }

  async function checkRequirements(game, availableEvent) {
    // const event = Event.lookup(availableEvent.code);
    // const valid = await CentralScrutinizer.meetsRequirements(availableEvent.requires);
    // return (valid == false || event.time && event.time != game.time) ? null : availableEvent;
  }

  // Because of how the events are added by other events and such I really have
  // no control over the order that events are queued. This leads to akward
  // situations where you may have already done some stuff, then a morning
  // event comes along and says that you just woke up. I think the best way to
  // prevent that from happening is to only allow one morning event per day to
  // be queued from the AvailableEvents. Too many events happening in the
  // morning is kind of annoying as well after all. This also means though that
  // we can't really rely on having valid available events happening the next
  // day unless we add another type of morning event and enqueue those in their
  // own time slot.
  //
  // I have to do this in two passes as well. The first pass gets an array of
  // valid events. The second pass filters out the invalid nulls and only
  // allows a single morining event through. I had to do it this way because
  // I can't add an event and immeadietly check to see if it's there or not.
  function filterEvents(events) {
    // let morningEventQueued = false;
    // let afternoonEventQueued = false;
    //
    // return events.filter(availableEvent => {
    //   if (availableEvent) {
    //     let time = Event.lookup(availableEvent.code).time;
    //
    //     if (time == null) {
    //       return true;
    //     }
    //     if (time == 'morning' && morningEventQueued == false) {
    //       morningEventQueued = true;
    //       return true;
    //     }
    //     if (time == 'afternoon' && afternoonEventQueued == false) {
    //       afternoonEventQueued = true;
    //       return true;
    //     }
    //   }
    // });
  }

  return { enqueueAvailable };

})();
