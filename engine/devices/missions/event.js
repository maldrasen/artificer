Mission.Event = (function() {

  // Event missions are dead simple. Other than the normal mission attributes
  // needed for the plan, and event mission only needs the following two
  // attributes:
  //
  //    event: code of the event to execute.
  //    story: story text to add to the report.
  //
  // Only real limitation to keep in mind is that the mission story is the same
  // for every character on the mission. This I think should be sufficient, but
  // could always be extended to give each mission a different story depending
  // on their mission role at some later time.
  //
  // data:  { mission, minions }
  async function resolve(data) {
    await Game.addEvent(data.mission.event, { actors:Event.randomActorMap(data.minions) });
    await Promise.all(data.minions.map(async minion => {
      Resolver.Report.setMinionData(minion, 'work', {
        story: (await Weaver.weaveWithCharacter(data.mission.story,'C',minion))
      });
    }));
  }

  return { resolve };

})();
