Role.Hunter = (function() {

  async function work(character, result) {
    const skill = await Role.skillLevel(character,'hunting');
    const injured = wasInjured(character,skill);
    const hunted = Role.Hunter.Results.hunt({ character, skill, injured });
  }

  // === Old ===
  // updateFlag('role.hunter.success-today', result.character.id);
  // updateFlag('role.hunter.failure-today', result.character.id);
  // const flavors = resolveResults(huntingResults(tier, skill))
  // const items = ItemFlavor.itemize(flavors);
  // const injury = await Role.Hunter.Injuries.resolve({ character:character, skill:skill, tier:tier, success:true });
  // const equipmentStory = await CharacterEquipment.degrade(character);
  // const story = await Role.Hunter.Stories.tell(true,flavors,injury,character);
  // const notifications = [await Role.Skills.addExperience({ character, flavors, skill:'hunting' })];
  // return forReport({ flavors, items, story, injury, notifications });

  function wasInjured(character, skill) {
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
