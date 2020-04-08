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

  async function removeEvent(code) {
    const event = await QueuedEvent.findOne({ where:{ code }});
    if (event != null) {
      await event.destroy();
    }
  }

  // Enqueue an event in the form { code:'make-god-cry', state:{ hail:'Satan' }}
  //   code: (required) The event code.
  //   state: (optional) The event state object.
  //
  // An event can have a priority value set in the state. If priority is 'next' that event should always come before
  // any event without a priority set. If the priority is 'last' all events without last being set will come first.
  async function enqueueEvent(code, state) {
    if (state == null) { state = {}; }

    let canEnqueue = await markEventAsEnqueued(code);
    if (canEnqueue) {
      return await QueuedEvent.create({
        code: code,
        priority: state.priority || 'normal',
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

    let firstNext;
    let firstNormal;
    let firstLast;

    for (let i=0; i<events.length; i++) {
      if (firstNext == null &&   events[i].priority == 'next')   { firstNext = events[i];   }
      if (firstNormal == null && events[i].priority == 'normal') { firstNormal = events[i]; }
      if (firstLast == null &&   events[i].priority == 'last')   { firstLast = events[i];   }
    }

    if (firstNext) { return firstNext; }
    if (firstNormal) { return firstNormal; }
    if (firstLast) { return firstLast; }

    return null;
  }

  async function nextLocationEvent(location) {
    const events = await getQueuedLocationEvents(location);
    return events[0]
  }

  async function unqueueEvent() {
    const event = await nextEvent();
    if (event) {
      const raw = { code:event.code, state:event.state };
      await event.destroy();
      return raw;
    }
  }

  async function unqueueLocationEvent(location) {
    const event = await nextLocationEvent(location);
    if (event) {
      const raw = { code:event.code, location:event.location, state:event.state };
      await event.destroy();
      return raw;
    }
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
    const countCode = `enqueued.${code}`;
    const count = Flag.lookup(countCode);

    if (count == null) {
      Flag.set(countCode,1);
      return true;
    }

    let event = Event.lookup(code);
    if (event.repeatable) {
      Flag.set(countCode, count+1);
      return true;
    }

    return false;
  }

  return {
    enqueueEvents,
    enqueueEvent,
    removeEvent,
    getQueuedEvents,
    getQueuedLocationEvents,
    nextEvent,
    nextLocationEvent,
    unqueueEvent,
    unqueueLocationEvent,
    printEventQueue,
  }

})();
