Role.Hunter.Results = (function() {

  // Calculate the results of the hunt.
  //   options: { character, skill, injured }

  async function hunt(options) {
    const huntCount = await calculateCount(options);
    const huntMap = await buildFrequencyMap(options);
    const hunted = [];

    return hunted;
  }

  // Count is determined by looking at the character's health, skill, and if
  // they were injured while hunting.
  async function calculateCount(options) {
    let health = await options.character.getHealthClass();
    let skill = `s${options.skill}`;

    // Health > 75 (healthy or injured)
    let lowerRange = { s0:0, s1:0, s2:1, s3:2 }[skill];
    let upperRange = { s0:4, s1:6, s2:8, s3:10 }[skill];

    // Health 51-75
    if (health == 'bad') {
      lowerRange = 0;
      upperRange = { s0:2, s1:4, s2:6, s3:8 }[skill];
    }

    // Health 26-50
    if (health == 'horrible') {
      lowerRange = 0;
      upperRange = { s0:1, s1:2, s2:4, s3:6 }[skill];
    }

    // Health 1-25
    if (health == 'critical') {
      lowerRange = 0;
      upperRange = { s0:1, s1:1, s2:2, s3:3 }[skill];
    }

    // Injured while hunting today. Half the possible count.
    if (options.injured) {
      upperRange = Math.ceil(upperRange/2);
    }

    return Random.between(lowerRange,upperRange);
  }

  // The hunting frequency map determines what kind of animals you're likely to
  // bring back when hunting. This is based on a lot of different factors. What
  // are you equipped with? If you're hunting bare handed you'll have a harder
  // time than someone who's armed with a sling, or even with teeth and claws.
  // Skill level is also used to determine what's even possible for you to
  // catch, with some animals being restricted to higher tiers. Where are you
  //
  // TODO: Currently, there are only two possible states. With sling, or
  //       without sling. Eventually I'll expand it to a much more in depth
  //       system, but that isn't needed yet.
  //
  // TODO: This function will also consider the hunting location at some point
  //       so that minions hunting in the Caverns, Greenwood, or Mephidross
  //       will bring back different shit.
  //
  async function buildFrequencyMap(options) {
    let weapon = await options.character.getEquipment('weapon');

    if (weapon == null) {
      return { tier:'teeth', map:{
        'rabbit-pelt':   2,
        'other-meat':    5,
        'squirrel-meat': 7,
        'rat-meat':      10,
      }};
    }

    if (weapon.code == 'sling') {
      return { tier:'sling', map:{
        'fox-pelt':      3,
        'raccoon-pelt':  5,
        'rat-meat':      7,
        'rabbit-pelt':   10,
        'squirrel-meat': 15,
      }};
    }

    throw "Minion is armed, but can they hunt with that weapon?"
  }

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

  return { hunt, calculateCount };

})();
