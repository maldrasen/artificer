Role.Hunter.Injuries = (function() {
  let possibleInjuries = [];

  // Add an injury and its story to the array of possible injuries to pull
  // from. We validate a lot of these arguments because they're coming in from
  // the /data folder.
  function addPossibleInjury(data) {
    if (data.location == null) { throw "An injury location is required" }
    if (data.type == null)     { throw "An injury damage type is required" }
    if (data.level == null)    { throw "An injury level is required" }
    if (data.story == null)    { throw "An injury story is required" }

    if (Injury.LOCATIONS.indexOf(data.location) < 0) { throw `Bad location for injury: ${data.location}`; }
    if (Injury.DAMAGE_TYPES.indexOf(data.type) < 0) { throw `Bad location for injury: ${data.location}`; }
    if (data.level < 1 || data.level > 5) { throw `level should be between 1 and 5.`; }

    possibleInjuries.push(data);
  }

  async function resolve(character, skill, tier, success) {
    const chance = injuryChance(character.physical, skill, tier, success);
    Role.Hunter.logger().info(`=== Resolving Hunting Injury - ${character.name} - ${chance}% chance`)

    if (Random.roll(100) > chance) { return null; } else {
      return await generateInjury(character);
    }
  }

  async function generateInjury(character) {
    let roll = Random.upTo(100);
    if (roll < 5) { return await killMinion(character); }
    if (roll < 25) { return await generateCriticalInjury(character); }
    return await generatePainfulInjury(character);
  }

  // TODO: When injured while out hunting a minion has a 5% chance of dying, or
  //       at least getting mostly killed. Killing minsions needs to be
  //       implemented though before this can be done.
  async function killMinion(character) {
    Role.Hunter.logger().info(`${character.name} was killed`);
    return null;
  }

  async function generateCriticalInjury(character) {
    Role.Hunter.logger().info(`${character.name} was critically injured`);
    return null;
  }

  async function generatePainfulInjury(character) {
    Role.Hunter.logger().info(`${character.name} was painfully injured`);

    let pick = Random.from(possibleInjuries);

    let injury = await character.addInjury({
      location: pick.location,
      type: pick.type,
      level: pick.level,
    });

    let context = new WeaverContext();
    await context.addCharacter('H',character)
    let story = Weaver.weave(pick.story, context);

    Role.Hunter.logger().info(`Story: ${story}`,injury);

    return { injury, story }
  }


















  // Hunting is a slightly dangerous job, and there's a chance that you'll be
  // wounded. Having good equipment, physical strength, skill, and success all
  // reduce the chance of injury. This will fall somewhere beteen 0 and 30%,
  // though dropping completely to 0 requires maxed physical.
  function injuryChance(physical, skillLevel, tierLevel, success) {
    let danger  = 5 - Math.min(5, Math.floor(physical/20));
        danger += 6 - (skillLevel*2);
        danger += 9 - (tierLevel*3);
        danger += success ? 0 : 10;

    return danger;
  }

  return {
    resolve,
    injuryChance,
    addPossibleInjury,
  };

})();
