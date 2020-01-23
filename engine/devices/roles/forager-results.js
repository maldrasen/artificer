Role.Forager.Results = (function() {

  const FailureSchedule = {
    'F.1': { unlock:'blight-spider', event:'found-blight-spider' },
  };

  const SuccessSchedule = {
    'S.2':  { unlock:'blood-berries', event:'found-blood-berries' },
  };

  async function getResults(character) {
    const health = await character.getHealthClass();
    const injured = Random.upTo(100) > 95;
    const forageCounts = await updateFlag(injured);
    const scheduled = getScheduled(injured,forageCounts);

    const trips = getTrips(health, injured);
    const items = await getItems(character, health, trips, scheduled);

    const context = new WeaverContext();
    await context.addFlags();
    await context.addCharacter('F',character)

    let story = startStory(health, injured, trips);

    console.log("=== Calculate Resulta ===")
    console.log("Health",health)
    console.log("Story",Weaver.weave(story, context))

    return [];
  }

  async function getItems(character, health, trips, scheduled) {
    const skill = await Role.Skills.skillLevel(character,'foraging');
    const possible = await getPossibleItems();
    const capacity = getCapacity(character, health);

    let items = {};
    let total = (capacity+skill) * trips;

    if (scheduled) {
      total--;
      if (scheduled.unlock) {
        await Flag.set(`item.${scheduled.unlock}`,'unlocked');
        items[scheduled.unlock] = 1;
      }
      if (scheduled.event) {
        await EventQueue.enqueueEvent(scheduled.event,{ actors:{ C:character.id }});
      }
    }

    console.log(items)

    return items;
  }

  async function getPossibleItems() {
    const flags = await Flag.getAll();
    return ItemFlavor.where(flavor => {
      if (['foraged-food','foraged-herb','foraged-insect'].indexOf(flavor.type) >= 0) {
        if (flavor.mustBeUnlocked == null) { return flavor; }
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
      `{{F::character.firstName}} spent the day foraging out in {{flag|location.hinterlandsName}}.`,
      `{{F::character.firstName}} went foraging out in {{flag|location.hinterlandsName}}.`,
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
