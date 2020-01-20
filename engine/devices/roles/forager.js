Role.Forager = (function() {
  const code = 'forager';
  const name = 'Forager';
  const description = 'A forager will go out into the wilds and forrage for food and crafting materials.';

  async function canWork(character) {
    return (await Flag.lookupValue('plan-view.roles.forager')) == 'unlocked'
  }

  async function work(character) {
    console.log(`TODO: ${character.name} goes foraging.`);
  }

  return {
    code,
    name,
    description,
    canWork,
    work,
  };

})();
