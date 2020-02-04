global.CharacterEquipment = Database.instance().define('character_equipment', {
  character_id: { type:Sequelize.INTEGER },
  condition:    { type:Sequelize.INTEGER },
  code:         { type:Sequelize.STRING },
},{
  timestamps: false,
  getterMethods: {},
});
