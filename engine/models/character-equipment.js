global.CharacterEquipment = Database.instance().define('character_equipment', {
  character_id: { type:Sequelize.INTEGER },
  code:         { type:Sequelize.STRING },
  slot:         { type:Sequelize.STRING },
  condition:    { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {},
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

// Both the inventory panels and the equipment panels use this format.
CharacterEquipment.prototype.formattedForView = function() {
  return {
    id: this.id,
    code: this.code,
    name: Equipment.lookup(this.code).name,
    condition: this.condition,
  };
}

// Equipment details should describe the condition of an item, or in the case
// of something like a butt plug should go into some detail about how it's
// fitting, i.e. painfully or comfortably.
CharacterEquipment.prototype.buildDetails = async function() {
  let equipment = Equipment.lookup(this.code);
  return "TODO: Equipment Details."
}
