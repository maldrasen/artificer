global.Anus = Database.instance().define('anus', {
  character_id:    { type:Sequelize.INTEGER },
  shape:           { type:Sequelize.STRING, validate:{ isIn:[['normal','horse','mouth']] }},
  elasticity:      { type:Sequelize.INTEGER },
  width:           { type:Sequelize.INTEGER },
  prolapseLength:  { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {
    area()                    { return MathUtility.widthToArea(this.getDataValue('width')); },
    convertedProlapseLength() { return ConversionUtility.milliToInches(this.getDataValue('prolapseLength')); },
    convertedWidth()          { return ConversionUtility.milliToInches(this.getDataValue('width')); },
  }
});
