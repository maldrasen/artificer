Role.Forager.Results = (function() {

  // This function returns a map of item flavors, either randomly selected from
  // the list of possible items, or a map that's been tweeked a bit by one of
  // the foraging schedules.
  async function getItems(total) {
    const frequencyMap = await buildFrequencyMap('Hinterlands');

    let items = {};

    for (let i=0; i<total; i++) {
      let code = Random.fromFrequencyMap(frequencyMap);
      if (items[code] == null) { items[code] = 0; }
      items[code]++;
    }

    return items;
  }

  // Get the total number of items that should be brought back based on the
  // character's health, equipment, and skill.
  async function getTotalItems(character,trips) {
    const capacity = await getCapacity(character);
    const skill = await Role.Skills.skillLevel(character,'foraging');
    return Math.ceil((capacity+skill) * trips * (Random.upTo(50)+75)/100);
  }

  // To build a frequency map, we take the default map for that location and
  // select only the items that have been unlocked from it. We also want to
  // only include the items that we haven't maxed out our stock of, so that is
  // determined here as well.
  async function buildFrequencyMap(location) {
    const unlocked = await getUnlockedItems();
    const maxed = await getMaxedItems(unlocked);
    const locationMap = Role.Forager.FrequencyMaps[location];
    const map = {};

    each(unlocked, flavor => {
      if (locationMap[flavor.code] && maxed.indexOf(flavor.code) < 0) {
        map[flavor.code] = locationMap[flavor.code];
      }
    });

    return map;
  }

  // Every foraged item flavor must be unlocked befor it can be found. The
  // first scheduled event unlocks the first four items.
  async function getUnlockedItems() {
    return ItemFlavor.where(flavor => {
      if (['foraged-item','foraged-food','foraged-herb','foraged-insect'].indexOf(flavor.type) >= 0) {
        if (Flag.lookup(`item.${flavor.code}`) == 'Y') { return flavor; }
      }
    });
  }

  async function getMaxedItems(unlocked) {
    const resources = await Resource.findAll();
    const maxed = [];

    each(unlocked, flavor => {
      if (flavor.becomes != null) {
        let resource = findResource(flavor.becomes, resources);
        if (resource) {
          let max = Item.lookup(resource.code).maxStock;
          if (max && resource.count >= max) {
            maxed.push(flavor.code);
          }
        }
      }
    });

    return maxed;
  }

  function findResource(code, resources) {
    for (let i=0; i<resources.length; i++) {
      if (code == resources[i].code) {
        return resources[i];
      }
    }
  }

  // Determine how much this character can carry each trip. Some equipment like
  // baskets can be used to increase the character's carry capacity. For a
  // piece of equipment to provide a capacity bonus it's associated Equipment
  // form needs to have a capacityBonus attribute set. The character's health
  // level also effects their capacity. Eventually species may as well.
  async function getCapacity(character) {
    let health = await character.getHealthClass();
    let capacity = 2;

    each((await character.getAllEquipment()), item => {
      capacity += item.form.capacityBonus || 0;
    });

    if (health == 'bad')      { return Math.ceil(capacity * 0.80); }
    if (health == 'horrible') { return Math.ceil(capacity * 0.5); }
    if (health == 'critical') { return 1; }

    return capacity;
  }

  return { getItems, getTotalItems, getUnlockedItems, getCapacity };

})();
