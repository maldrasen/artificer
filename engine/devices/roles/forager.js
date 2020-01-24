Role.Forager = (function() {
  const code = 'forager';
  const name = 'Forager';
  const description = 'A forager will go out into the wilds and forrage for food and crafting materials.';

  async function canWork(character) {
    return (await Flag.lookupValue('plan-view.roles.forager')) == 'unlocked'
  }

  async function work(character) {
    const context = new WeaverContext();
    await context.addCharacter('C',character);

    const results = await Role.Forager.Results.getResults(character);
    const notifications = [await Role.Skills.addExperience({ character:character, skill:'foraging', flavors:results.flavors })];
    const injury = results.injured ? (await Role.Injuries.getInjury(context)) : null;

    let report = {
      story: Weaver.weave(results.story, context),
      notifications: notifications,
      flavors: ItemFlavor.forReport(results.flavors),
    };

    if (injury) {
      await character.addInjury(injury);
      report.injury = Weaver.weave(injury.story, context);
    }

    return report;
  }

  return {
    code,
    name,
    description,
    canWork,
    work,
  };

})();
