Resolver.Minions = (function() {

  // These daily updates happen in the middle of the day. I was toying around
  // with having them done in Game.nextDay() when the game day officially rolls
  // over, but I do want some of what happens added to a report, and the report
  // that always exists (at least when there are minions) is the planning
  // report. Things that change daily that don't involve minions can be done in
  // the Game though.
  async function dailyUpdate() {
    const minions = await Character.getNormalMinions();

    await eatFood(minions);
    await applyHealing(minions);
    await applyLust(minions);
    await checkLoyalty(minions);
  }

  async function eatFood(minions) {
    const player = await Player.instance();

    let foodEaten = player.species.foodPerDay + minions.reduce((total, minion) => {
      return total + minion.species.foodPerDay;
    },0);

    Game.removeFood(foodEaten)
    Resolver.Report.ateFood(foodEaten);
  }

  async function applyHealing(minions) {
    await Promise.all(minions.map(async minion => {
      await Resolver.Healing.applyHealing(minion);
    }));
  }

  async function applyLust(minions) {
    await Promise.all(minions.map(async minion => {
      await Resolver.Lust.applyLust(minion);
    }))
  }

  // The checkLoyalty() function is called each day to determine if any of your
  // minions decide to betray you, or if the majority of your minions decide to
  // rise up in mutiny against you. Though the player can check each minion to
  // determine how loyal they are, this check should mostly be kept secret
  // until it triggers something.
  async function checkLoyalty(minions) {
    let loyal = [];
    let afraid = [];
    let rebellious = [];
    let traitorous = [];

    each(minions, minion => {
      if (minion.isTraitorous) { traitorous.push(minion.id); }

      // The rebellious, loyal, and afraid lists are mutually exclusive. A
      // traitorous minion is also a rebellious one, which is why they can be
      // added to both lists, while these others cannot.
      if (minion.isRebellious)  { rebellious.push(minion.id); }
      else if (minion.isLoyal)  { loyal.push(minion.id); }
      else if (minion.isAfraid) { afraid.push(minion.id); }
    });

    Flag.setAll({
      'minions.count':            minions.length,
      'minions.loyal-count':      loyal.length,
      'minions.afraid-count':     afraid.length,
      'minions.rebellious-count': rebellious.length,
      'minions.traitorous-count': traitorous.length,
      'minions.loyal-ids':        loyal.join(','),
      'minions.afraid-ids':       afraid.join(','),
      'minions.rebellious-ids':   rebellious.join(','),
      'minions.traitorous-ids':   traitorous.join(','),
    });
  }

  return { dailyUpdate, checkLoyalty };

})();
