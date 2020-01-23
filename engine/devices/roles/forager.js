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

    let story = await completeStory(character, results.story);

    return await buildReport({ story, notifications, flavors:results.flavors });
  }

  async function completeStory(character, story) {
    const context = new WeaverContext();
    await context.addCharacter('F',character)
    return Weaver.weave(story, context);
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
