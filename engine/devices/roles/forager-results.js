Role.Forager.Results = (function() {

  // This function returns a map of item flavors, either randomly selected from
  // the list of possible items, or a map that's been tweeked a bit by one of
  // the foraging schedules.
  async function getItems(total) {
    const possible = await getPossibleItems();

    let items = {};

    for (let i=0; i<total; i++) {
      let code = Random.from(possible).code;
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

  // TODO: Eventually this list will need to depend on the location that the
  //       character goes foraging in. There should be different foragable
  //       items down in the depths or in the Mephidross then what can be found
  //       in the hinterlands.
  //
  // TODO: Also, this list is completely random now. It would probably work
  //       better as a frequency map, but I'd like to wait until I have more
  //       items to work with before I go figuring out the frequency. Plus,
  //       I think the frequencies will be adjustable by giving minions orders
  //       somehow. You should be able to tell your minions to focus on
  //       gathering food, or insects and give them equipment that give
  //       gathering bonuses to different item types. Order and equipment need
  //       to be implemented first though.
  //
  // Every foraged item flavor must be unlocked befor it can be found. The
  // first scheduled event unlocks the first four items.
  async function getPossibleItems() {
    const flags = await Flag.getAll();
    return ItemFlavor.where(flavor => {
      if (['foraged-item','foraged-food','foraged-herb','foraged-insect'].indexOf(flavor.type) >= 0) {
        if (flags[`item.${flavor.code}`] == 'unlocked') { return flavor; }
      }
    });
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

  return { getItems, getTotalItems, getPossibleItems, getCapacity };

})();
