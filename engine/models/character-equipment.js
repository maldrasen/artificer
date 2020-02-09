global.CharacterEquipment = Database.instance().define('character_equipment', {
  character_id: { type:Sequelize.INTEGER },
  code:         { type:Sequelize.STRING },
  slot:         { type:Sequelize.STRING },
  condition:    { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {},
});

CharacterEquipment.getAvailable = async function(slot) {
  if (slot.startsWith('tool')) { slot = 'tool'; }

  const equipment = await CharacterEquipment.findAll({ where:{ character_id:null }});
  const formatted = equipment.map(item => {
    let form = Equipment.lookup(item.code);
    return (form.slot != slot) ? null : {
      id: item.id,
      code: item.code,
      name: form.name,
      condition: item.condition,
    };
  });

  return ArrayUtility.compact(formatted);
}

// Equipment details should describe the condition of an item, or in the case
// of something like a butt plug should go into some detail about how it's
// fitting, i.e. painfully or comfortably.
CharacterEquipment.prototype.buildDetails = async function() {
  let equipment = Equipment.lookup(this.code);
  return "TODO: Equipment Details."
}
