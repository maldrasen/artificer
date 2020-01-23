Role.Forager.Results = (function() {

  const FailureSchedule = {
    'F.1': { unlock:'blight-spider', event:'found-blight-spider', bringBack:false },
  };

  const SuccessSchedule = {
    'S.1': { special:firstResult },
    'S.2': { unlock:'blood-berries', event:'found-blood-berries' },
  };

  async function getResults(character) {
    const health = await character.getHealthClass();
    const injured = await wasCharacterInjured()
    const forageCounts = await updateFlag(injured);
    const scheduled = getScheduled(injured,forageCounts);
    const trips = getTrips(health, injured);
    const flavors = await getItems(character, health, trips, scheduled);
    const story = startStory(health, injured, trips);

    return { injured, flavors, story };
  }

  // Normally there's a 5% chance of getting injured when out foraging. If this
  // is the character's first time foraging then it should always be a success.
  async function wasCharacterInjured() {
    return ((await Flag.lookupValue('role.forage.successCount')) == 0) ? false : Random.upTo(100) > 95;
  }

  // This function returns a map of item flavors, either randomly selected from
  // the list of possible items, or a map that's been tweeked a bit by one of
  // the foraging schedules.
  async function getItems(character, health, trips, scheduled) {
    const skill = await Role.Skills.skillLevel(character,'foraging');
    const possible = await getPossibleItems();
    const capacity = getCapacity(character, health);

    let total = Math.ceil((capacity+skill) * trips * (Random.upTo(50)+75)/100);
    let items = {};

    if (scheduled) {
      let product = executeScheduled(character, scheduled, total, items);
      total = product.total;
      items = product.items;
    }

    for (let i=0; i<total; i++) {
      let code = Random.from(possible).code;
      if (items[code] == null) { items[code] = 0; }
      items[code]++;
    }

    return items;
  }

  // If something was found in the foraging schedule for this job, then this
  // function manipulates the total number of items that should be randomized
  // and the starting item list. The function also sets item unlock flags and
  // adds events.
  async function executeScheduled(character, scheduled, total, items) {

    // Unlock a new foragable item.
    if (scheduled.unlock) {
      await Flag.set(`item.${scheduled.unlock}`,'unlocked');
    }

    // Return with the newly discovered item.
    if (scheduled.unlock && scheduled.bringBack != false) {
      total--;
      items[scheduled.unlock] = 1;
    }

    // Add a follow on event.
    if (scheduled.event) {
      await EventQueue.enqueueEvent(scheduled.event,{ actors:{ C:character.id }});
    }

    // This is a total hack, but the first time that a character goes
    // foraging needs to be completely different from all other times. It's
    // possible that some other days might need to do weird shit too though,
    // so we pass a function through that returns the total number of items
    // and the set items for this day.
    if (scheduled.special) {
      let product = await scheduled.special(character);
      total = product.total;
      items = product.items;
    }

    return { total, items };
  }

  // The first time a character goes foraging they need to bring back at least
  // one of each available item, because they'll be mentioned in the event.
  async function firstResult(character) {
    await EventQueue.enqueueEvent('found-fruits-and-nuts',{ actors:{ C:character.id }});

    await Flag.setAll({
      'item.bitter-fruits':'unlocked',
      'item.goat-nuts':'unlocked',
      'item.juice-berries':'unlocked',
      'item.sweet-fruits':'unlocked',
    });

    return { total:0, items:{
      'bitter-fruits': 2,
      'goat-nuts': 3,
      'juice-berries': 2,
      'sweet-fruits': 1,
    }};
  }

  // TODO: Eventually this list will need to depend on the location that the
  //       character goes foraging in. There should be different foragable
  //       items down in the depths or in the Mephidross then what can be found
  //       in the hinterlands.
  //
  // TODO: Also, this list is completely random now. It would probably work
  //       better as a frequency map, but I'd like to wait until I have more
  //       items to work with before I go figuring out the frequency. Plus,
  //       I think the frequencies will be adjustable by giving minions orders
  //       somehow. You should be able to tell your minions to focus on
  //       gathering food, or insects and give them equipment that give
  //       gathering bonuses to different item types. Order and equipment need
  //       to be implemented first though.
  //
  // Every foraged item flavor must be unlocked befor it can be found. The
  // first scheduled event unlocks the first four items.
  async function getPossibleItems() {
    const flags = await Flag.getAll();
    return ItemFlavor.where(flavor => {
      if (['foraged-item','foraged-food','foraged-herb','foraged-insect'].indexOf(flavor.type) >= 0) {
        if (flags[`item.${flavor.code}`] == 'unlocked') { return flavor; }
      }
    });
  }

  // TODO: A character's equipment will be used to increase their capacity.
  //       Bringing baskets and sacks and things helps them to carry more. We
  //       need to be able to build and equip items before this can be done
  //       though.
  //
  // The character's health level also effects their capacity.
  function getCapacity(character, health) {
    let capacity = 2;

    if (health == 'bad')      { return Math.ceil(capacity * 0.80); }
    if (health == 'horrible') { return Math.ceil(capacity * 0.5); }
    if (health == 'critical') { return 1; }

    return capacity;
  }

  function getTrips(health, injured) {
    let maxTrips = { critical:1, horrible:2, bad:3 }[health] || 4;
    return injured ? Random.upTo(maxTrips-1) : maxTrips;
  }

  // The start of the foraging story specifies how many trips your minion was
  // able to make and if they were injured or not. This is too random and text
  // heavy to spec out. It should be simple enough not to break though.
  function startStory(health, injured, trips) {
    let first = Random.from([
      `{{F::character.firstName}} spent the day foraging.`,
      `{{F::character.firstName}} went out foraging.`,
      `{{F::character.firstName}} spent the day foraging out in the Hinterlands.`,
      `{{F::character.firstName}} went foraging out in the Hinterlands.`,
    ]);

    let second = `{{F::gender.He}} was in good health and spirits and was able to make four trips into the wilds.`;

    if (injured) {
      if (trips == 0) { second = `{{F::gender.He}} was injured almost as soon as {{F::gender.he}} left though, and wans't able to bring back anything.`; }
      if (trips == 1) { second = `{{F::gender.He}} got hurt on {{F::gender.his}} second trip into the wilds, so {{F::gender.he}} was only able to bring back one load of foraged goods.`; }
      if (trips == 2) { second = `{{F::gender.He}} got hurt while on {{F::gender.his}} third trip into the wilds, but still managed to at least make two successful trips.`; }
      if (trips == 3) { second = `{{F::gender.He}} was injured at some point on {{F::gender.his}} last trip into the wilds, but was at least able to make three successful runs.`; }
    }

    if (!injured) {
      if (health == 'bad')      { second = `Because of {{F::gender.his}} injuries, {{F::gender.he}} was only able to make three trips into the wilds.`; }
      if (health == 'horrible') { second = `Because of the severity {{F::gender.his}} injuries, {{F::gender.he}} was only able to make two trips into the wilds, and was only able to carry half as much.`; }
      if (health == 'critical') { second = `{{F::gender.He}}'s critically injured and barely able to move, but somehow managed to crawl out into the wilds and back.`; }
    }

    return `${first} ${second}`
  }

  async function updateFlag(injured) {
    let success = parseInt(await Flag.lookupValue('role.forage.successCount'));
    let failure = parseInt(await Flag.lookupValue('role.forage.failureCount'));

    if (injured) {
      failure += 1;
      await Flag.set('role.forage.failureCount',failure);
    } else {
      success += 1;
      await Flag.set('role.forage.successCount',success);
    }

    return { success, failure }
  }

  function getScheduled(injured,counts) {
    return injured ? FailureSchedule[`F.${counts.failure}`]: SuccessSchedule[`S.${counts.success}`];
  }

  return { getResults, getItems, getCapacity, getPossibleItems, updateFlag, getScheduled };

})();
