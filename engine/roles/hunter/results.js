Role.Hunter.Results = (function() {

  // Calculate the results of the hunt.
  //
  // options: { character, skill, injured }
  //
  // TODO: This function will also consider the hunting location at some point
  //       so that minions hunting in the Caverns, Greenwood, or Mephidross
  //       will bring back different shit.
  //

  async function hunt(options) {
    const huntMap = buildFrequencyMap(options)
    return []
  }

  // The hunting frequency map determines what kind of animals you're likely to
  // bring back when hunting. This is based on a lot of different factors. What
  // are you equipped with? If you're hunting bare handed you'll have a harder
  // time than someone who's armed with a sling, or even with teeth and claws.
  // Skill level is also used to determine what's even possible for you to
  // catch, with some animals being restricted to higher tiers.
  async function buildFrequencyMap(options) {
    console.log("Build Frequency Map")

    const weapon = await character.getEquipment('weapon');
    if (weapon == null) { return 0; }
    if (weapon.code == 'sling') { return 1; }


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

  // // This function returns a map of item flavors randomly selected from the
  // // foraging location's frequency map.
  // async function getItems(total) {
  //   const frequencyMap = await buildFrequencyMap('Hinterlands');
  //
  //   let items = {};
  //
  //   for (let i=0; i<total; i++) {
  //     let code = Random.fromFrequencyMap(frequencyMap);
  //     if (items[code] == null) { items[code] = 0; }
  //     items[code]++;
  //   }
  //
  //   return items;
  // }
  //
  // // Get the total number of items that should be brought back based on the
  // // character's health, equipment, and skill.
  // async function getTotalItems(character,trips) {
  //   const capacity = await getCapacity(character);
  //   const skill = await Role.skillLevel(character,'foraging');
  //   return Math.ceil((capacity+skill) * trips * (Random.upTo(50)+75)/100);
  // }
  //
  // // To build a frequency map, we take the default map for that location and
  // // select only the items that have been unlocked from it. We also want to
  // // only include the items that we haven't maxed out our stock of, so that is
  // // determined here as well.
  // async function buildFrequencyMap(location) {
  //   const unlocked = await getUnlockedItems();
  //   const maxed = await getMaxedItems(unlocked);
  //   const locationMap = Role.Forager.FrequencyMaps[location];
  //   const map = {};
  //
  //   each(unlocked, flavor => {
  //     if (locationMap[flavor.code] && maxed.indexOf(flavor.code) < 0) {
  //       map[flavor.code] = locationMap[flavor.code];
  //     }
  //   });
  //
  //   return map;
  // }
  //
  // // Every foraged item flavor must be unlocked befor it can be found. The
  // // first scheduled event unlocks the first four items.
  // async function getUnlockedItems() {
  //   return ItemFlavor.where(flavor => {
  //     if (['foraged-item','foraged-food','foraged-herb','foraged-insect'].indexOf(flavor.type) >= 0) {
  //       if (Flag.lookup(`item.${flavor.code}`) == 'Y') { return flavor; }
  //     }
  //   });
  // }
  //
  // async function getMaxedItems(unlocked) {
  //   const resources = await Resource.findAll();
  //   const maxed = [];
  //
  //   each(unlocked, flavor => {
  //     if (flavor.becomes != null) {
  //       let resource = findResource(flavor.becomes, resources);
  //       if (resource) {
  //         let max = Item.lookup(resource.code).maxStock;
  //         if (max && resource.count >= max) {
  //           maxed.push(flavor.code);
  //         }
  //       }
  //     }
  //   });
  //
  //   return maxed;
  // }
  //
  // function findResource(code, resources) {
  //   for (let i=0; i<resources.length; i++) {
  //     if (code == resources[i].code) {
  //       return resources[i];
  //     }
  //   }
  // }
  //
  // // Determine how much this character can carry each trip. Some equipment like
  // // baskets can be used to increase the character's carry capacity. For a
  // // piece of equipment to provide a capacity bonus it's associated Equipment
  // // form needs to have a capacityBonus attribute set. The character's health
  // // level also effects their capacity. Eventually species may as well.
  // async function getCapacity(character) {
  //   let health = await character.getHealthClass();
  //   let capacity = 2;
  //
  //   each((await character.getAllEquipment()), item => {
  //     capacity += item.form.capacityBonus || 0;
  //   });
  //
  //   if (health == 'bad')      { return Math.ceil(capacity * 0.80); }
  //   if (health == 'horrible') { return Math.ceil(capacity * 0.5); }
  //   if (health == 'critical') { return 1; }
  //
  //   return capacity;
  // }
  //
  // return { getItems, getTotalItems, getUnlockedItems, getCapacity };

  return { hunt };

})();
