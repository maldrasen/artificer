Role.Forager.Schedule = (function() {

  // When checking to see if there's something that should happen then next
  // time a character forages, either the success or failure flag is
  // incremented. If something happens it's returned as the scheduled.
  async function getScheduled(injured) {
    let success = Flag.lookup('role.forage.success-count');
    let failure = Flag.lookup('role.forage.failure-count');

    if (injured) {
      failure += 1;
      Flag.set('role.forage.failure-count',failure);
    } else {
      success += 1;
      Flag.set('role.forage.success-count',success);
    }

    let scheduled = injured ? Role.Forager.FailureSchedule[`F.${failure}`]: Role.Forager.SuccessSchedule[`S.${success}`];
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
    if (scheduled.event)   { await CurrentEvent.set(scheduled.event,{ actors:{ C:character.id }}); }
    if (scheduled.unlock)  { Flag.set(`item.${scheduled.unlock}`,'Y'); }
    return await buildScheduledReport(character, scheduled);
  }

  // Acutally get all the items and build the report for the scheduled foraging.
  async function buildScheduledReport(character, scheduled) {
    const context = new Context();
    await context.addCharacter('C',character);

    let trips = await Role.Forager.getTrips(character, scheduled.injured);
    let total = await Role.Forager.Results.getTotalItems(character,trips);
    let bringBack = scheduled.unlock && scheduled.bringBack != false;

    if (bringBack) { total--; }
    let flavors = await Role.Forager.Results.getItems(total);
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

  return { getScheduled, executeScheduled };

})();
