Role.Hunter = (function() {

  async function work(character, result) {
    const tier = await calculateTier(character);
    const skill = await Role.skillLevel(character,'hunting');
    const chance = successChance(character.physical, skill);

    (Random.roll(100) < chance) ?
      await huntingSuccess(result,tier,skill):
      await huntingFailure(result,tier,skill);
  }

  // Hunting tier is based entirely on a character's equipment, primarily on
  // the weapon used, though other tools will play into this later I think.
  // Poison tipped arrows are thing, but is ammo a tool then?
  //   Tier 0 - No equipment.
  //   Tier 1 - Sling.
  //   Tier 2 - Bow and arrows.
  //   Tier 3 - Bow and arrows with poison.
  async function calculateTier(character) {
    const weapon = await character.getEquipment('weapon');
    if (weapon == null) { return 0; }
    if (weapon.code == 'sling') { return 1; }
  }

  async function huntingSuccess(result, tier, skill) {
    console.log("Success");
  //   const flavors = resolveResults(huntingResults(tier, skill))
  //   const items = ItemFlavor.itemize(flavors);
  //   const injury = await Role.Hunter.Injuries.resolve({ character:character, skill:skill, tier:tier, success:true });
  //
  //   const equipmentStory = await CharacterEquipment.degrade(character);
  //   const story = await Role.Hunter.Stories.tell(true,flavors,injury,character);
  //
  //   const notifications = [await Role.Skills.addExperience({ character, flavors, skill:'hunting' })];
  //
  //   return forReport({ flavors, items, story, injury, notifications });
  }

  async function huntingFailure(result, tier, skill) {
    console.log("Failure");
  //   const injury = await Role.Hunter.Injuries.resolve({ character:character, skill:skill, tier:tier, success:false });
  //   const story = await Role.Hunter.Stories.tell(false,{},injury,character);
  //   const notifications = [await Role.Skills.addExperience({ character, skill:'hunting'})];
  //
  //   return forReport({ story, injury, notifications })
  }

  // function forReport(raw) {
  //   let result = { story:raw.story }
  //
  //   if (raw.items)         { result.items = raw.items; }
  //   if (raw.notifications) { result.notifications = raw.notifications; }
  //   if (raw.injury)        { result.injury = raw.injury.story; }
  //   if (raw.flavors)       { result.flavors = raw.flavors; }
  //
  //   return result;
  // }
  //
  // // Get an ItemFlavor of the item type. The flavors we get from hunting are
  // // converted into items when they go into the inventory. rat-meat becomes a
  // // food and a rabbit-pelt becomes a hide.
  // function resolveResults(results) {
  //   let flavors = {};
  //
  //   each(results, result => {
  //     let count = Random.between(result.min, result.max);
  //     for (let i=0; i<count; i++) {
  //       let flavorCode = Random.from(ItemFlavor.where(flavor => flavor.type == result.type)).code;
  //       if (flavors[flavorCode] == null)  { flavors[flavorCode] = 0; }
  //       flavors[flavorCode] += 1;
  //     }
  //   });
  //
  //   return flavors;
  // }
  //
  // // TODO: This function will also consider the hunting location at some point
  // //       so that minions hunting in the caverns, Greenwood, or Mephidross
  // //       will bring back different shit.
  // function huntingResults(tier, skill) {
  //   if (tier == 0) {
  //     return {
  //       skill_0:[{ type:'small-game', min:0, max:1 },{ type:'small-game-pelt', min:0, max:1 }],
  //       skill_1:[{ type:'small-game', min:1, max:2 },{ type:'small-game-pelt', min:0, max:1 }],
  //       skill_2:[{ type:'small-game', min:2, max:4 },{ type:'small-game-pelt', min:1, max:2 }],
  //       skill_3:[{ type:'small-game', min:3, max:6 },{ type:'small-game-pelt', min:1, max:2 }],
  //     }[`skill_${skill}`];
  //   }
  //
  //   if (tier == 1) {
  //     return {
  //       skill_0:[{ type:'small-game', min:3, max:6  },{ type:'small-game-pelt', min:0, max:2 }],
  //       skill_1:[{ type:'small-game', min:4, max:8  },{ type:'small-game-pelt', min:0, max:3 }],
  //       skill_2:[{ type:'small-game', min:5, max:10 },{ type:'small-game-pelt', min:1, max:4 }],
  //       skill_3:[{ type:'small-game', min:6, max:12 },{ type:'small-game-pelt', min:3, max:5 }],
  //     }[`skill_${skill}`];
  //   }
  //
  //   throw `Need to implement results for hunting tier ${tier}`;
  // }

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

  //   // === Hunter specific or for specs ===
  //   successChance,
  //   huntingResults,
  //   resolveResults,
  // };

  return { work };

})();
