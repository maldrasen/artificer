global.CharacterEquipment = Database.instance().define('character_equipment', {
  character_id: { type:Sequelize.INTEGER },
  code:         { type:Sequelize.STRING },
  slot:         { type:Sequelize.STRING },
  condition:    { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {},
});

// Equipment details should describe the condition of an item, or in the case
// of something like a butt plug should go into some detail about how it's
// fitting, i.e. painfully or comfortably.
CharacterEquipment.prototype.buildDetails = async function() {
  let equipment = Equipment.lookup(this.code);
  return "TODO: Equipment Details."
}
