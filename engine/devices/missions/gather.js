Mission.Gather = (function() {

  // TODO: This will eventually get fairly complicated, but for the time being
  //       The gathering missions will need to stay super simple. What is
  //       gathered is based on the teir, which is based on a minion's
  //       equipment and perhaps some other factors as well. Nothing like that
  //       is implemented yet though, so we're just doing a very basic
  //       implementation here. This will need redone completely.
  //
  // input:  { mission
  //           state
  //           minion }
  //
  // output: { story
  //           flavors
  //           items
  //           notifications
  //           injury }
  function resolve(data) {
    let temp = data.mission.tempResults;
    let flavors = {};
        flavors[temp.flavor] = Random.between(temp.min, temp.max);

    return {
      story: "[TODO: Gather Mission Story]",
      flavors: ItemFlavor.forReport(flavors),
      items: ItemFlavor.itemize(flavors),
    }
  }

  return { resolve };

})();
