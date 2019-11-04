global.EventQueue = (function() {

  async function printEventQueue() {
    console.log("\n=== Printing Event Queue ===");
    const events = await QueuedEvent.findAll({ order: [['id', 'ASC']] });
    each (events, event => {
      console.log(`    ${event.code} [${event.location}] - ${event.state_json}`);
    });
  }

  async function enqueueEvents(events) {
    await Promise.all(events.map(async event => {
      return await this.enqueueEvent(event.code, event.state);
    }));
  }

  // Enqueue an event in the form { code:'make-god-cry', state:{ hail:'Satan' }}
  //   code: (required) The event code.
  //   state: (optional) The event state object.
  async function enqueueEvent(code, state) {
    let canEnqueue = await markEventAsEnqueued(code);
    if (canEnqueue) {
      return await QueuedEvent.create({
        code: code,
        location: Event.lookup(code).location || 'none',
        state_json: JSON.stringify(state||{})
      });
    }
  }

  async function getQueuedEvents() {
    return await QueuedEvent.findAll({ where:{ location:'none' }, order:[['id', 'ASC']] });
  }

  async function getQueuedLocationEvents(location) {
    return await QueuedEvent.findAll({ where:{ location:location }, order:[['id', 'ASC']] });
  }

  async function nextEvent() {
    const events = await getQueuedEvents();
    return events[0]
  }

  async function nextLocationEvent(location) {
    const events = await getQueuedLocationEvents(location);
    return events[0]
  }

  async function unqueueEvent() {
    const event = await nextEvent()
    const raw = { code:event.code, state:event.state };
    await event.destroy();
    return raw;
  }

  async function unqueueLocationEvent(location) {
    const event = await nextLocationEvent(location);
    const raw = { code:event.code, location:event.location, state:event.state };
    await event.destroy();
    return raw;
  }

  // When an event is queued we set a flag letting us know that the event has
  // been enqueued before. This is just a general rule so that events are not
  // repeatable by default. If an event has been queued before, and that event
  // is not marked as repeatable, then this function returns false.
  //
  // This is separate from the event requirement checking that's done in the
  // AvailableEvent class, this is done for all events even otherise valid
  // events.
  async function markEventAsEnqueued(code) {
    const flag = await Flag.lookup(`enqueued.${code}`)
    if (flag == null) {
      await Flag.create({ code:`enqueued.${code}`, value:1 })
      return true;
    }

    let event = Event.lookup(code);
    if (event.repeatable) {
      flag.value += 1;
      await flag.save();
      return true;
    }

    return false;
  }

  return {
    enqueueEvents,
    enqueueEvent,
    getQueuedEvents,
    getQueuedLocationEvents,
    nextEvent,
    nextLocationEvent,
    unqueueEvent,
    unqueueLocationEvent,
    printEventQueue,
  }

})();
