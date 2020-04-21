Mission.Explore = (function() {

  // data:  { mission, state, minions }
  async function resolve(data) {
    const discovery = await attemptDiscovery(data.mission);

    Game.addEvent((discovery == null ? Configuration.exploreFailureEvent : discovery.code), { actors:Event.randomActorMap(data.minions) });

    each(data.minions, minion => {
      Resolver.Report.setMinionData(minion, 'work', {
        story: (discovery == null) ?
          `${minion.singleName} failed to find anything new while out exploring.`:
          `${minion.singleName} ${discovery.brief}`
      });
    });
  }


  // For a discovery to be valid, all the requirements for the associated
  // discovery event must be met. The discovery cannot have happened before,
  // and rolling 1d100, we roll under the discovery's probability. If a
  // discovery doesn't happen there's still a 50% chance of another event
  // happening.
  async function attemptDiscovery(mission) {
    const discoveries = [];
    const events = {};
    const eventsFreq = {};

    await Promise.all(mission.discoveries.map(async possibility => {
      if (await CentralScrutinizer.meetsRequirements(Event.lookup(possibility.code).requires)) {
        if (Flag.lookup(`completed.${possibility.code}`) == null) {
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
