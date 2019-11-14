Mission.Explore = (function() {

  // input:  { mission
  //           state
  //           minions }
  //
  // output: { story
  //           flavors
  //           items
  //           notifications
  //           injury }
  //
  async function resolve(data) {
    const discovery = await attemptDiscovery(data.mission);
    if (discovery == null) {
      return { story:`{{C::character.first-name}} failed to find anything new while out exploring.` };
    }

    // Interestingly, this is the first use of the event status. We need to
    // know the IDs of the minions that were on the explore mission when we
    // render the explore event. I knew I added that for a reason.
    EventQueue.enqueueEvent(discovery.code, {
      ids: data.minions.map(minion => { return minion.id })
    });

    return { story: `{{C::character.first-name}} ${discovery.brief}` };
  }


  // For a discovery to be valid, all the requirements for the associated
  // discovery event must be met. The discovery cannot have happened before,
  // and rolling 1d100, we roll under the discovery's probability. If a
  // discovery doesn't happen there's still a 50% chance of another event
  // happening.
  async function attemptDiscovery(mission) {
    const flags = Object.keys(await Flag.getAll());
    const discoveries = [];
    const events = {};
    const eventsFreq = {};

    await Promise.all(mission.discoveries.map(async possibility => {
      if (await CentralScrutinizer.meetsRequirements(Event.lookup(possibility.code).requires)) {
        if (flags.indexOf(`enqueued.${possibility.code}`) < 0) {
          if (possibility.probability > Random.upTo(100)) {
            discoveries.push(possibility);
          }
        }
      }
    }));

    if (discoveries.length > 0) { return Random.from(discoveries); }
    if (50 < Random.upTo(100))  { return null; }

    await Promise.all(mission.events.map(async possibility => {
      if (await CentralScrutinizer.meetsRequirements(Event.lookup(possibility.code).requires)) {
        events[possibility.code] = possibility;
        eventsFreq[possibility.code] = possibility.probability;
      }
    }));

    return events[Random.fromFrequencyMap(eventsFreq)];
  }

  return { resolve };

})();
