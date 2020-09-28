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

  // When executed the scheduled happening can unlock new items and add events,
  // or in the case of a special happening this function will call the special
  // function to do whatever it likes to the result.
  async function executeScheduled(character, result, scheduled) {
    if (scheduled.special) { return await scheduled.special(character, result); }
    if (scheduled.event)   { await Game.addEvent(scheduled.event,{ actors:{ C:character.id }}); }
    if (scheduled.unlock)  { Flag.set(`item.${scheduled.unlock}`,'Y'); }
    return await buildScheduledReport(character, result, scheduled);
  }

  // Acutally get all the items and build the report for the scheduled foraging.
  async function buildScheduledReport(character, result, scheduled) {
    let trips = await Role.Forager.getTrips(character, scheduled.injured);
    let total = await Role.Forager.Results.getTotalItems(character,trips);
    let bringBack = scheduled.unlock && scheduled.bringBack != false;

    if (bringBack) { total--; }
    let flavors = await Role.Forager.Results.getItems(total);
    if (bringBack) { flavors[scheduled.unlock] = 1 }

    const health = await character.getHealthClass();
    result.story = Role.Forager.Stories.tell(health,scheduled.injured,trips);
    result.injury = scheduled.injured ? await Role.Injuries.applyInjury(character, Hazard.hinterlandsForaging) : null;
    result.flavors = flavors;
  }

  return { getScheduled, executeScheduled };

})();