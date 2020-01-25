Role.Forager.Schedule = (function() {

  const FailureSchedule = {
    'F.1': { unlock:'blight-spider', event:'found-blight-spider', bringBack:false },
  };

  const SuccessSchedule = {
    'S.1': { special:firstResult },
    'S.2': { unlock:'blood-berries', event:'found-blood-berries' },
  };

  // When checking to see if there's something that should happen then next
  // time a character forages, either the success or failure flag is
  // incremented. If something happens it's returned as the scheduled.
  async function getScheduled(injured) {
    let success = parseInt(await Flag.lookupValue('role.forage.successCount'));
    let failure = parseInt(await Flag.lookupValue('role.forage.failureCount'));

    if (injured) {
      failure += 1;
      await Flag.set('role.forage.failureCount',failure);
    } else {
      success += 1;
      await Flag.set('role.forage.successCount',success);
    }

    let scheduled = injured ? FailureSchedule[`F.${failure}`]: SuccessSchedule[`S.${success}`];
    if (scheduled) {
      scheduled.injured = injured;
    }

    return scheduled;
  }

  // A scheduled foraging happening needs to prepare the foraging report on its
  // own. When executed the happening will also unlock new items and add events,
  // or in the case of a special happening() will farm that work out to it.
  async function executeScheduled(character, scheduled) {
    if (scheduled.special) { return await scheduled.special(character); }
    if (scheduled.event)   { await EventQueue.enqueueEvent(scheduled.event,{ actors:{ C:character.id }}); }
    if (scheduled.unlock)  { await Flag.set(`item.${scheduled.unlock}`,'unlocked'); }
    return await buildScheduledReport(character, scheduled);
  }

  // Acutally get all the items and build the report for the scheduled foraging.
  async function buildScheduledReport(character, scheduled) {
    const context = new WeaverContext();
    await context.addCharacter('C',character);

    let trips = await Role.Forager.getTrips(character, scheduled.injured);
    let total = await Role.Forager.Results.getTotalItems(character,trips);
    let bringBack = scheduled.unlock && scheduled.bringBack != false;

    if (bringBack) { total--; }
    let flavors = await Role.Forager.Results.getItems(character, total);
    if (bringBack) { flavors[scheduled.unlock] = 1 }

    const health = await character.getHealthClass();
    const story = Role.Forager.Stories.tell(health,scheduled.injured,trips);

    // Injury story may also need to be specified by the schedule. Only do this if it is not.
    const injuryStory = scheduled.injured ? await Role.Injuries.applyInjury(character, context, Hazard.hinterlandsForaging) : null;

    return {
      story: Weaver.weave(story,context),
      injury: injuryStory,
      notifications: await Role.Forager.getNotifications(character, flavors),
      flavors: flavors,
    };
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

    const flavors = {
      'bitter-fruits': 2,
      'goat-nuts': 3,
      'juice-berries': 2,
      'sweet-fruits': 1,
    };

    return {
      story: await Weaver.weaveWithCharacter(Role.Forager.Stories.tell('healthy',false,4), 'C', character),
      notifications: await Role.Forager.getNotifications(character, flavors),
      flavors: flavors,
    };
  }

  return { getScheduled, executeScheduled };

})();
