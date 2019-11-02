Resolver.Minions = (function() {

  async function dailyUpdate() {
    const minions = await Character.findAll({ where:{ type:'minion' } });

    await eatFood(minions);
    await applyHealing(minions);
  }

  async function eatFood(minions) {
    // TODO: Minions Eat Food.
  }

  async function applyHealing(minions) {
    await Promise.all(minions.map(async minion => {
      await Resolver.Healing.applyHealing(minion);
    }));
  }

  // Currently, completing the minion in the report just sets the character's
  // portrait, though it may do something more in the future.
  async function complete() {
    await Promise.all(Object.keys(Resolver.currentReport().minions).map(async id => {
      await completeMinion(id);
    }));
  }

  async function completeMinion(id) {
    let character = await Character.findByPk(id);

    // This should come directly from the character, not the character portraits
    // The plan is to use CharacterPortraits when the character is created to
    // set an image and use that single image consistantly.
    Resolver.currentReport().minions[id].portrait = await CharacterPortraits.lookup(character);
  }

  return { dailyUpdate, complete };

})();
