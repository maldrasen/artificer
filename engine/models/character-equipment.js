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
    degrades() { return typeof this.form.degrade == 'function' },
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

CharacterEquipment.notEquipped = async function() {
  return await CharacterEquipment.findAll({ where:{ character_id:null }});
}

// TODO: Some equipment when it breaks should break back down into some useful
//       materials. This function should get the list of materials from the
//       form, add them to the inventory, and return a sentence explaining what
//       was added.
//
// The whenBroken attribute on the form determines what happens to the item
// when broken. Right now just destroy is implemented. Recycle should be
// another option. There might be another to leave the broken equipment for
// manual recycling or repair as a task for more complex equipment.
CharacterEquipment.prototype.break = async function() {
  let form = this.form;

  if (form.whenBroken == 'destroy') {
    await this.destroy();
    return form.whenBrokenStory;
  }

  throw `Equipment ${this.code} was broken, but has no whenBroken option.`
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
