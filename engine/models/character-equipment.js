global.CharacterEquipment = Database.instance().define('character_equipment', {
  character_id: { type:Sequelize.INTEGER },
  code:         { type:Sequelize.STRING },
  slot:         { type:Sequelize.STRING },
  condition:    { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {
    form() { return Equipment.lookup(this.code); },
    name() { return this.form.name },
  },
});

CharacterEquipment.lookup = async function(id) {
  return await CharacterEquipment.findByPk(id);
}

CharacterEquipment.getAvailable = async function(slot) {
  if (slot.startsWith('tool')) { slot = 'tool'; }

  return ArrayUtility.compact((await CharacterEquipment.notEquipped()).map(item => {
    return (Equipment.lookup(item.code).slot != slot) ? null : item.formattedForView();
  }));
}

CharacterEquipment.forInventory = async function() {
  return (await CharacterEquipment.notEquipped()).map(item => {
    return item.formattedForView();
  });
}

CharacterEquipment.notEquipped = async function(code) {
  let query = { where:{ character_id:null }};
  if (code) { query.where.code = code; }
  return await CharacterEquipment.findAll(query);
}

// This isn't the most efficient way to check for a free item of one type or
// another, but beause this return a plain map of code and counts it can be
// easily used in a loop without worying about all the async crap.
CharacterEquipment.availableCounts = async function() {
  const equipment = await CharacterEquipment.notEquipped();
  const counts = {}

  each(equipment, item => {
    counts[item.code] = (counts[item.code] == null) ? 1 : counts[item.code]+1;
  });

  return counts;
}


// Both the inventory panels and the equipment panels use this format.
CharacterEquipment.prototype.formattedForView = function() {
  return {
    id: this.id,
    code: this.code,
    name: this.name,
    condition: this.condition,
  };
}

// Equipment degrades over time when used. This function loops through all of
// the character's equipment and degrades the equipment that matches the role
// that the character is working. Some equipment is degraded when used in any
// role, and some never degrades. If equipment breaks during use this function
// returns a sentence that should be displayed in the report, to let the player
// know that some equipment has broken. The way equipment degrades is governed
// by the equipment form, which has the following options:
//
//    minDamage         Minimum damage to degrade by.
//    maxDamage         Maximum damage to degrade by.
//    when              Minion must have this assigned duty to degrade. (forager, hunter, all)
//    whenBroken        What to do when the item breaks. (destroy) There may be other options here someday, for now
//                      though the character  equipment is always just destroyed. Perhaps one day we'll add some
//                      destroyed version of the item into the inventory.
//    whenBrokenStory   Text to print when an equipped item is destroyed.
//    breaksInto        An object of resource keys to quantities of resources to add when the item breaks.
//                      { 'leather-scraps':1 }
//
CharacterEquipment.degrade = async function(character, times=1) {
  if (times == 0) { return ''; }

  const stories = await Promise.all((await character.getAllEquipment()).map(async equipment => {
    let degrades = Equipment.lookup(equipment.code).degrades;

    if  (degrades && (degrades.when == 'all' || degrades.when == character.dutyCode)) {
      let min = degrades.minDamage || 0;
      let max = degrades.maxDamage;
      await equipment.update({ condition: equipment.condition - Random.between(min*times,max*times) })
      if (equipment.condition < 1) { return await equipment.break(); }
    }
    return ''
  }));

  return `<span class='broken-equipment'>${stories.join(' ')}</span>`.replace(/\s+/g,' ');
}

// The whenBroken attribute on the form determines what happens to the item
// when broken. Right now just destroy is implemented, so this only destroys
// the equipment right now. It may need to branch in the future.
CharacterEquipment.prototype.break = async function() {
  let degrades = this.form.degrades;
  let story = degrades.whenBrokenStory;

  if (degrades.breaksInto) {
    await Resource.addAll(degrades.breaksInto||{});
    story += ` I was able to recover ${Item.listify(degrades.breaksInto)} from the broken ${this.form.name}.`
  }

  await this.destroy();
  return story;
}
