Role.Forager = (function() {
  const code = 'forager';
  const name = 'Forager';
  const description = 'A forager will go out into the wilds and forrage for food and crafting materials.';

  async function canWork(character) {
    return Flag.lookup('plan-view.roles.forager') == 'Y'
  }

  async function work(character) {
    const context = new Context();
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
    const equipmentStory = await updateEquipment(character,trips);
    const notifications = await getNotifications(character, flavors);

    return {
      story: Weaver.weave(`${story} ${equipmentStory}`,context),
      injury: injuryStory,
      notifications: notifications,
      flavors: flavors,
    };
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

  async function getNotifications(character, flavors) {
    return [await Role.Skills.addExperience({ character:character, skill:'foraging', flavors:flavors })];
  }

  async function updateEquipment(character, trips) {
    if (trips == 0) { return ''; }

    let stories = await Promise.all((await character.getAllEquipment()).map(async equipment => {
      if (equipment.degrades) {
        await equipment.update({ condition: equipment.condition - degradeTimes(equipment.code, trips) })
        if (equipment.condition < 1) {
          return await equipment.break();
        }
      }
      return ""
    }))

    return stories.join(' ');
  }

  function degradeTimes(code,trips) {
    let form = Equipment.lookup(code);
    let damage = 0;

    for (let i=0; i<trips; i++) {
      damage += form.degrade();
    }

    return damage;
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
