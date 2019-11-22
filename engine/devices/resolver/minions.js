Resolver.Minions = (function() {

  async function dailyUpdate() {
    const minions = await Character.findAll({ where:{ type:'minion' } });

    await eatFood(minions);
    await applyHealing(minions);
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

    await game.save();
  }

  async function applyHealing(minions) {
    await Promise.all(minions.map(async minion => {
      await Resolver.Healing.applyHealing(minion);
    }));
  }

  return { dailyUpdate };

})();
