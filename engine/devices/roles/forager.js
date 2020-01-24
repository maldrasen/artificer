Role.Forager = (function() {
  const code = 'forager';
  const name = 'Forager';
  const description = 'A forager will go out into the wilds and forrage for food and crafting materials.';

  async function canWork(character) {
    return (await Flag.lookupValue('plan-view.roles.forager')) == 'unlocked'
  }

  async function work(character) {
    const results = await Role.Forager.Results.getResults(character);
    const notifications = [await Role.Skills.addExperience({ character:character, skill:'foraging', flavors:results.flavors })];

    return {
      story: results.story,
      injury: results.injuryStory,
      notifications: notifications,
      flavors: ItemFlavor.forReport(results.flavors),
    };
  }

  return {
    code,
    name,
    description,
    canWork,
    work,
  };

})();
