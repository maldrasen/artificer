Resolver.Minions = (function() {

  async function dailyUpdate() {
    const minions = await Character.findAll({ where:{ type:'minion' } });

    await eatFood(minions);
    await applyHealing(minions);
    await checkLoyalty(minions);
  }

  async function eatFood(minions) {
    const player = await Player.instance();
    const game = await Game.instance();

    let foodEaten = player.species.foodPerDay + minions.reduce((total, minion) => {
      return total + minion.species.foodPerDay;
    },0);

    game.food = game.food - foodEaten;

    if (game.food < 0) {
      game.food = 0;
      // TODO: Enqueue an unhappiness event of some sort when there isn't
      //       enough food to feed all the minions and the player.
    }

    Resolver.Report.completeFood(foodEaten,game.food);

    await game.save();
  }

  async function applyHealing(minions) {
    await Promise.all(minions.map(async minion => {
      await Resolver.Healing.applyHealing(minion);
    }));
  }

  // The checkLoyalty() function is called at the end of each day to determine if any of your minions decide to betray
  // you, or if the majority of your minions decide to rice up in mutiny against you. Though the player can check each
  // minion to determine how loyal they are, this check should mostly be kept secret until it triggers something.
  async function checkLoyalty(minions) {
    let loyal = [];
    let afraid = [];
    let rebellious = [];
    let traitorous = [];

    each(minions, minion => {
      if (minion.isTraitorous)      { Random.roll(4) == 0 ? traitorous.push(minion.id) : rebellious.push(minion.id); }
      else if (minion.isRebellious) { rebellious.push(minion.id); }
      else if (minion.isAfraid)     { afraid.push(minion.id); }
      else if (minion.isLoyal)      { loyal.push(minion.id); }
    });

    await Flag.setAll({
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
