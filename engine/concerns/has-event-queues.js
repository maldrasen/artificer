global.HasEventQueues = { addToGame: function() {

  Game.prototype.printEventQueue = async function() {
    console.log("\n=== Printing Event Queue ===");
    console.log("Game:",this.gameEventQueue);
    console.log("Location:",this.locationEventQueue);
  }

  Game.prototype.enqueueEvents = async function(events) {
    await Promise.all(events.map(async event => {
      if (event.type == 'gameEvent')     { return await this.enqueueGameEvent(event.code); }
      if (event.type == 'locationEvent') { return await this.enqueueLocationEvent(event.code); }
      throw `Unrecognized Event Type : ${event.type}`
    }));
  }

  Game.prototype.enqueueGameEvent = async function(code, state) {
    let canEnqueue = await markEventAsEnqueued(code);
    if (canEnqueue) {
      Game.logger.info(`Enqueued Game Event ${code}`,state);
      Event.lookup(code);

      let queue = this.gameEventQueue;
      queue.push({ code:code, state:(state||{}) });

      this.gameEventQueue = queue;
      await this.save();
    }
  }

  // Exactly the same as enqueue event, except the event is added to the front
  // of the queue.
  Game.prototype.setNextEvent = async function(code, state) {
    let canEnqueue = await markEventAsEnqueued(code);
    if (canEnqueue) {
      Game.logger.info(`Set Next Event ${code}`,state);
      Event.lookup(code);

      let queue = this.gameEventQueue;
          queue.unshift({ code:code, state:(state||{}) });

      this.gameEventQueue = queue;
      await this.save()
    }
  }

  Game.prototype.unqueueGameEvent = async function() {
    let queue = this.gameEventQueue;
    let event = queue.shift();
    if (event == null) { return null; }

    this.gameEventQueue = queue;
    await this.save();
    return event;
  }

  Game.prototype.enqueueLocationEvent = async function(code, state) {
    let canEnqueue = await markEventAsEnqueued(code);
    if (canEnqueue) {
      Game.logger.info(`Enqueued Location Event ${code}`,state);
      let event = Event.lookup(code);
      let location = Location.lookup(event.location);
      let queue = this.locationEventQueue;

      if (queue[location.code]==null) { queue[location.code]=[]; }
      queue[location.code].push({ code:code, state:(state||{}) });

      this.locationEventQueue = queue;
      await this.save();
    }
  }

  Game.prototype.unqueueLocationEvent = async function() {
    let queue = this.locationEventQueue;
    let event = (queue[this.location]||[]).shift();
    if (event == null) { return null; }

    this.locationEventQueue = queue;
    await this.save();
    return event;
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

}};
