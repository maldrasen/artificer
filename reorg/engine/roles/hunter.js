Role.Hunter = (function() {

  async function work(character, result) {
    const skill = await Role.skillLevel(character,'hunting');
    const injured = wasInjured(character,skill);
    const hunted = await Role.Hunter.Results.hunt({ character, skill, injured });

    if (injured) {
      await Role.addInjury(result, Hazard.hinterlandsHunting);
    }

    const huntStory = await Role.Hunter.Stories.tell({ character, hunted, injury:result.injury });
    const equipmentStory = await CharacterEquipment.degrade(character);

    result.flavors = hunted.flavors;
    result.story = `${huntStory} ${equipmentStory}`;

    updateFlag((Object.keys(hunted.flavors).length == 0 ?
      'role.hunter.failure-today':
      'role.hunter.success-today'
    ), character.id);

    await Role.addExperience(result,'hunting');
  }

  function wasInjured(character, skill) {
    if (Settings.DebugSwitches['always-injure']) { return true; }
    if (Settings.DebugSwitches['never-injure'])  { return false; }
    return Random.roll(100) < injuryChance(character, skill);
  }

  function injuryChance(character, skill) {
    let bonus = character.species.biter ? 1 : 0;
    let physical = character.physical;

    if (physical >= 10 && physical < 20) { bonus = 2; }
    if (physical >= 20 && physical < 30) { bonus = 4; }
    if (physical >= 30)                  { bonus = 5; }

    if (skill == 1) { bonus += 1; }
    if (skill == 2) { bonus += 2; }
    if (skill == 3) { bonus += 5; }

    return [20,10,8,7,6,5,4,3,2,1,1][bonus];
  }

  function updateFlag(code, id) {
    Flag.set(code,(Flag.lookup(code)=='' ? `${id}` : `${Flag.lookup(code)},${id}`));
  }

  return { work };

})();
