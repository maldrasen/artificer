Role.Hunter.Injuries = (function() {

  async function resolve(character, skill, tier, success) {
    const chance = injuryChance(character.physical, skill, tier, success);
    Role.Hunter.logger().info(`=== Resolving Hunting Injury - ${character.name} - ${chance}% chance`)

    if (Random.roll(100) > chance) { return null; } else {
      return await generateInjury(character);
    }
  }

  async function generateInjury(character) {
    Role.Hunter.logger().info(`${character.name} was injured`);

    return { injury:'Something' }
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

  return { resolve, injuryChance };

})();
