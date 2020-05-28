Role.Forager = (function() {

  async function work(character, result) {
    const health = await character.getHealthClass();
    const injured = await wasCharacterInjured()
    const scheduled = await Role.Forager.Schedule.getScheduled(injured);

    if (scheduled) {
      await Role.Forager.Schedule.executeScheduled(character, result, scheduled);
      await complete(result);
      return;
    }
    if (injured) {
      await Role.addInjury(result, Hazard.hinterlandsForaging);
    }

    const trips = await getTrips(character, injured);
    const total = await Role.Forager.Results.getTotalItems(character,trips);

    result.flavors = await Role.Forager.Results.getItems(total);
    result.story = `${Role.Forager.Stories.tell(health, injured, trips)} ${await CharacterEquipment.degrade(character, trips)}`

    await complete(result);
  }

  // Normally there's a 5% chance of getting injured when out foraging. If this
  // is the character's first time foraging then it should always be a success.
  async function wasCharacterInjured() {
    if (Settings.DebugSwitches['always-injure']) { return true; }
    if (Settings.DebugSwitches['never-injure']) { return false; }
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

  // When completing a foraging event we add experience to the foraging skill.
  // The experience added is determined by the flavors that have been added to
  // the result object.
  async function complete(result) {
    await Role.addExperience(result,'foraging');
  }

  return { work, getTrips };

})();