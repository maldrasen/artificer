Role.Forager.Stories = (function() {

  // The start of the foraging story specifies how many trips your minion was
  // able to make and if they were injured or not. This is too random and text
  // heavy to spec out. It should be simple enough not to break though.
  function tell(health, injured, trips) {
    let first = Random.from([
      `{{C::character.firstName}} spent the day foraging.`,
      `{{C::character.firstName}} went out foraging.`,
      `{{C::character.firstName}} spent the day foraging out in the Hinterlands.`,
      `{{C::character.firstName}} went foraging out in the Hinterlands.`,
    ]);

    let second = `{{He}} was in good health and spirits and was able to make four trips into the wilds.`;

    if (injured) {
      if (trips == 0) { second = `{{He}} was injured almost as soon as {{he}} left though, and wasn't able to bring back anything.`; }
      if (trips == 1) { second = `{{He}} got hurt on {{his}} second trip into the wilds, so {{he}} was only able to bring back one load of foraged goods.`; }
      if (trips == 2) { second = `{{He}} got hurt while on {{his}} third trip into the wilds, but still managed to at least make two successful trips.`; }
      if (trips == 3) { second = `{{He}} was injured at some point on {{his}} last trip into the wilds, but was at least able to make three successful runs.`; }
    }

    if (!injured) {
      if (health == 'bad')      { second = `Because of {{his}} injuries, {{he}} was only able to make three trips into the wilds.`; }
      if (health == 'horrible') { second = `Because of the severity {{his}} injuries, {{he}} was only able to make two trips into the wilds, and was only able to carry half as much.`; }
      if (health == 'critical') { second = `{{He}}'s critically injured and barely able to move, but somehow managed to crawl out into the wilds and back.`; }
    }

    return `${first} ${second}`
  }

  return { tell };

})();
