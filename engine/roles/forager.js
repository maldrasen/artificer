Role.Forager = (function() {

  async function work(character, result) {
    const health = await character.getHealthClass();
    const injured = await wasCharacterInjured()
    const scheduled = await Role.Forager.Schedule.getScheduled(injured);

    console.log('Working')
    console.log(scheduled)

    if (scheduled) {
      // return await Role.Forager.Schedule.executeScheduled(character, scheduled);
    }

  //   const trips = await getTrips(character, injured);
  //   const total = await Role.Forager.Results.getTotalItems(character,trips);
  //   const flavors = await Role.Forager.Results.getItems(total);
  //   const story = Role.Forager.Stories.tell(health, injured, trips);
  //   const injuryStory = injured ? await Role.Injuries.applyInjury(character, context, Hazard.hinterlandsForaging) : null;
  //   const equipmentStory = await CharacterEquipment.degrade(character,trips);
  //   const notifications = await getNotifications(character, flavors);
  //
  //   return {
  //     story: Weaver.weave(`${story} ${equipmentStory}`,context),
  //     injury: injuryStory,
  //     notifications: notifications,
  //     flavors: flavors,
  //   };
  }

  // Normally there's a 5% chance of getting injured when out foraging. If this
  // is the character's first time foraging then it should always be a success.
  async function wasCharacterInjured() {
    return (Flag.lookup('role.forage.success-count') == 0) ? false : Random.upTo(100) > 95;
  }

  // TODO: The number of trips that a character can make is based entirely on
  //       their health right now, though in the future some equipment items
  //       should make trips faster. Like shoes or cocaine or something.
  async function getTrips(character, injured) {
    let health = await character.getHealthClass();
    let maxTrips = { critical:1, horrible:2, bad:3 }[health] || 4;
    return injured ? Random.upTo(maxTrips-1) : maxTrips;
  }

  // async function getNotifications(character, flavors) {
  //   return [await Role.Skills.addExperience({ character:character, skill:'foraging', flavors:flavors })];
  // }
  //
  // return {
  //   code,
  //   name,
  //   description,
  //   canWork,
  //   work,
  //
  //   getTrips,
  //   getNotifications,
  // };

  return {};

})();
