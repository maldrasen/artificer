Role.Forager = (function() {
  const code = 'forager';
  const name = 'Forager';
  const description = 'A forager will go out into the wilds and forrage for food and crafting materials.';

  async function canWork(character) {
    return (await Flag.lookupValue('plan-view.roles.forager')) == 'unlocked'
  }

  async function work(character) {
    let results = await Role.Forager.Results.getResults(character);
    let notifications =  [await Role.Skills.addExperience({ character:character, skill:'foraging' })];

    return await buildReport({
      story: `${character.name} goes a foraging. Has ${skill} skill.`,
      notifications: notifications,
    });
  }

  async function buildReport(raw) {
    let result = { story:raw.story }

    if (raw.items)         { result.items = raw.items; }
    if (raw.notifications) { result.notifications = raw.notifications; }
    if (raw.injury)        { result.injury = raw.injury.story }
    if (raw.flavors)       { result.flavors = ItemFlavor.forReport(raw.flavors); }

    return result;
  }

  return {
    code,
    name,
    description,
    canWork,
    work,
  };

})();
