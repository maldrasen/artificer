global.Anus = Database.instance().define('anus', {
  character_id:    { type:Sequelize.INTEGER },
  shape:           { type:Sequelize.STRING, validate:{ isIn:[['normal','horse','mouth']] }},
  elasticity:      { type:Sequelize.INTEGER },
  width:           { type:Sequelize.INTEGER },
  prolapseLength:  { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {
    area()                    { return MathUtility.widthToArea(this.width); },
    convertedProlapseLength() { return ConversionUtility.milliToInches(this.prolapseLength); },
    convertedWidth()          { return ConversionUtility.milliToInches(this.width); },
  }
});

// TODO: I think this had depth measurements at some point. May want to include
//       something like that again.
