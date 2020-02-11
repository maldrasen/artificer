Role.Skills = (function() {

  // Get the skill level for the aspect associated with this role.
  async function skillLevel(character, skill) {
    let aspect = await character.getCharacterAspect(skill);
    return (aspect == null) ? 0 : aspect.level;
  }

  // This should be the standard way that a minion earns experience when performing their role. Every worker gets a
  // minimum of 5xp. If this is a role where the minion returns with items, such as with huntinf and foraging, they get
  // experience for each item that they return with. Each item flavor has it's own XP value. Other roles will probably
  // have their own ways of determining experience.
  //
  // Options:
  //   character   * The character
  //   skill       * The associated skill aspect
  //   flavors       A map of item flavors in the form: { code:count }
  //
  // This function return a notification object for the report if the minion levels their aspect skill.
  async function addExperience(options) {
    let character = options.character;

    let experience = Object.keys(options.flavors||{}).reduce((total, code) => {
      return total + (options.flavors[code] * (ItemFlavor.lookup(code).xp || 0));
    },0) + 5;

    let aspect = await character.getCharacterAspect(options.skill);
    if (aspect != null) {
      return await addExperienceToAspect(character, aspect, experience);
    }

    // If they didn't have the aspect before, we know to add the aspect with the experience earned.
    await character.addAspect(options.skill, { strength:experience });
    return { skill:TextUtility.titlecaseAll(options.skill), experience:experience };
  }

  async function addExperienceToAspect(character, aspect, experience) {
    let currentLevel = aspect.level;
    let currentStrength = aspect.strength;

    await aspect.adjustStrength(experience);

    // If the character's skill is capped they will not earn experience.
    if (currentStrength == aspect.strength) { return null; }

    return (currentLevel == aspect.level) ?
      { skill:aspect.name, experience:experience }:
      { skill:aspect.name, experience:experience, gainedLevel:aspect.level };
  }

  return { skillLevel, addExperience }

})();
