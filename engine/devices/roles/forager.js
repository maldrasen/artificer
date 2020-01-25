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

    const health = await character.getHealthClass();
    const injured = await wasCharacterInjured()
    const scheduled = await Role.Forager.Schedule.getScheduled(injured);

    if (scheduled) {
      return await Role.Forager.Schedule.executeScheduled(character, scheduled);
    }

    const trips = await getTrips(character, injured);
    const total = await Role.Forager.Results.getTotalItems(character,trips);
    const flavors = await Role.Forager.Results.getItems(total);
    const story = Role.Forager.Stories.tell(health, injured, trips);
    const injuryStory = injured ? await Role.Injuries.applyInjury(character, context, Hazard.hinterlandsForaging) : null;

    return {
      story: Weaver.weave(story,context),
      injury: injuryStory,
      notifications: await getNotifications(character, flavors),
      flavors: flavors,
    };
  }

  // Normally there's a 5% chance of getting injured when out foraging. If this
  // is the character's first time foraging then it should always be a success.
  async function wasCharacterInjured() {
    return ((await Flag.lookupValue('role.forage.successCount')) == 0) ? false : Random.upTo(100) > 95;
  }

  // TODO: The number of trips that a character can make is based entirely on
  //       their health right now, though in the future some equipment items
  //       should make trips faster. Like shoes or cocaine or something.
  async function getTrips(character, injured) {
    let health = await character.getHealthClass();
    let maxTrips = { critical:1, horrible:2, bad:3 }[health] || 4;
    return injured ? Random.upTo(maxTrips-1) : maxTrips;
  }

  async function getNotifications(character, flavors) {
    return [await Role.Skills.addExperience({ character:character, skill:'foraging', flavors:flavors })];
  }

  return {
    code,
    name,
    description,
    canWork,
    work,

    getTrips,
    getNotifications,
  };

})();
