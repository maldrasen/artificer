Mission.Gather = (function() {

  // TODO: This will eventually get fairly complicated, but for the time being
  //       The gathering missions will need to stay super simple. What is
  //       gathered is based on each character's equipment tier and perhaps
  //       some other factors as well. Nothing like that is implemented yet
  //       though, so we're just doing a very basic implementation here. This
  //       will need redone completely.
  //
  // input:  { mission, state, minion }
  //
  function resolve(data) {
    each(data.minions, minion => {
      resolveMinion(data.mission, minion)
    });
  }

  // Resolve the mission for this minion. This will need redone, obviously.
  function resolveMinion(mission, minion) {
    // let results = mission.tempResults;
    //
    // let gathered = {};
    //     gathered[results.flavor] = Random.between(results.min, results.max);
    //
    // Resolver.Items.add(ItemFlavor.itemize(gathered));
    // Resolver.Report.setMinionData(minion, 'work', {
    //   story: `[TODO: ${mission.code} mission story]`,
    //   flavors: ItemFlavor.forReport(gathered),
    // });
  }

  return { resolve };

})();
