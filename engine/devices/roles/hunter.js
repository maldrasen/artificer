Role.Hunter = (function() {
  const code = 'hunter';
  const name = 'Hunter';
  const description = 'A hunter will hunt animals for meat and hides. They can also capture animals.';

  // TODO: Tier is set to 0 now, but this will be based entirely on the
  //       character's equipment. Tier 0 is the baseline though, and indicates
  //       that the character has no equipment at all.
  async function work(character) {
    let tier = 0;
    let skill = await skillLevel(character);
    let chance = successChance(character.physical, skill);
    let success = Random.roll(100) < chance

    if (success) {
      return await huntingSuccess(character,tier,skill)
    } else {
      return await huntingFailure(character,tier,skill);
    }
  }

  async function huntingSuccess(character,tier,skill) {
    const flavors = resolveResults(huntingResults(tier, skill))
    const items = ItemFlavor.itemize(flavors);
    const injury = await Role.Hunter.Injuries.resolve({ character:character, skill:skill, tier:tier, success:true });
    const story = await Role.Hunter.Stories.tell(true,flavors,injury,character);
    const notifications = [await addExperience(character, flavors)];

    return forReport({ flavors, items, story, injury, notifications });
  }

  async function huntingFailure(character,tier,skill) {
    const injury = await Role.Hunter.Injuries.resolve({ character:character, skill:skill, tier:tier, success:false });
    const story = await Role.Hunter.Stories.tell(false,{},injury,character);
    const notifications = [await addExperience(character, {})];

    return forReport({ story, injury, notifications })
  }

  // Every hunter gets a minimum of 5xp. They then get xp for each item that
  // they return with. Each item flavor has it's own XP value.
  async function addExperience(character, flavors) {
    let experience = Object.keys(flavors).reduce((total, code) => {
      return total + (flavors[code] * (ItemFlavor.lookup(code).xp || 0));
    },0) + 5;

    let aspect = await character.getCharacterAspect('hunting');
    if (aspect != null) {
      return addExperienceToAspect(character, aspect, experience);
    }

    character.addAspect('hunting', { strength:experience });

    return { skill:'Hunting', experience:experience };
  }

  function addExperienceToAspect(character, aspect, experience) {
    let currentLevel = aspect.level;
    let currentStrength = aspect.strength;

    aspect.adjustStrength(experience);

    // Rats and kobolds are capped at level 1 skill. Goblins and ogres are capped at level 2.
    if (character.speciesCode == 'rat'    && aspect.strength > 200) { aspect.strength = 200; }
    if (character.speciesCode == 'kobold' && aspect.strength > 200) { aspect.strength = 200; }
    if (character.speciesCode == 'goblin' && aspect.strength > 600) { aspect.strength = 600; }
    if (character.speciesCode == 'ogre'   && aspect.strength > 600) { aspect.strength = 600; }

    // If the character's skill aspect didn't change there's no need to say
    // they've earned any experience.
    if (currentStrength == aspect.strength) { return null; }

    aspect.save();
    return (currentLevel == aspect.level) ?
      { skill:'Hunting', experience:experience }:
      { skill:'Hunting', experience:experience, gainedLevel:aspect.level };
  }

  function forReport(raw) {
    let result = { story:raw.story }

    if (raw.items)         { result.items = raw.items; }
    if (raw.notifications) { result.notifications = raw.notifications; }
    if (raw.injury)        { result.injury = raw.injury.story }

    if (raw.flavors) {
      result.flavors = Object.keys(raw.flavors).map(code => {
        let flavor = ItemFlavor.lookup(code);
        return {
          code: code,
          count: raw.flavors[code],
          name: flavor.name,
          icon: flavor.icon };
      });
    }

    return result;
  }

  // Get an ItemFlavor of the item type. The flavors we get from hunting are
  // converted into items when they go into the inventory. rat-meat becomes a
  // food and a rabbit-pelt becomes a hide.
  function resolveResults(results) {
    let flavors = {};

    each(results, result => {
      let count = Random.between(result.min, result.max);
      for (let i=0; i<count; i++) {
        let flavorCode = Random.from(ItemFlavor.where(flavor => flavor.type == result.type)).code;
        if (flavors[flavorCode] == null)  { flavors[flavorCode] = 0; }
        flavors[flavorCode] += 1;
      }
    });

    return flavors;
  }

  // TODO: This function will also consider the hunting location at some point
  //       so that minions hunting in the caverns, Greenwood, or Mephidross
  //       will bring back different shit.
  function huntingResults(tier, skill) {
    return {
      tier_0:{
        skill_0:[{ type:'small-game', min:3, max:6  },{ type:'small-game-pelt', min:0, max:2 }],
        skill_1:[{ type:'small-game', min:4, max:8  },{ type:'small-game-pelt', min:0, max:3 }],
        skill_2:[{ type:'small-game', min:5, max:10 },{ type:'small-game-pelt', min:1, max:4 }],
        skill_3:[{ type:'small-game', min:6, max:12 },{ type:'small-game-pelt', min:3, max:5 }],
    }}[`tier_${tier}`][`skill_${skill}`];
  }

  async function skillLevel(character) {
    let aspect = await character.getCharacterAspect('hunting');
    return (aspect == null) ? 0 : aspect.level;
  }

  // Success chance is based on physical attribute and skill level alone.
  function successChance(physical, skillLevel) {
    let bonus = 0;

    if (physical >= 10 && physical < 20) { bonus = 2; }
    if (physical >= 20 && physical < 30) { bonus = 4; }
    if (physical >= 30)                  { bonus = 5; }

    if (skillLevel == 1) { bonus += 1; }
    if (skillLevel == 2) { bonus += 2; }
    if (skillLevel == 3) { bonus += 5; }

    return [30,50,60,65,70,75,80,83,86,89,90][bonus];
  }

  return {
    code,
    name,
    description,
    work,

    // === Hunter specific or for specs ===
    successChance,
    huntingResults,
    resolveResults,
  };

})();
