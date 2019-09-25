const PUSSY_SHAPES = ['normal','dog','horse','snake'];

global.Pussy = Database.instance().define('pussy', {
  character_id:      { type:Sequelize.INTEGER },
  cervixElasticity:  { type:Sequelize.INTEGER },
  cervixWidth:       { type:Sequelize.INTEGER },
  clitLength:        { type:Sequelize.INTEGER },
  clitWidth:         { type:Sequelize.INTEGER },
  elasticity:        { type:Sequelize.INTEGER },
  innerLabiaLength:  { type:Sequelize.INTEGER },
  outerLabiaSize:    { type:Sequelize.INTEGER },
  placement:         { type:Sequelize.STRING, validate:{ isIn:[['normal','nipple']] }},
  prolapseLength:    { type:Sequelize.INTEGER },
  shape:             { type:Sequelize.STRING, validate:{ isIn:[PUSSY_SHAPES] }},
  urethraElasticity: { type:Sequelize.INTEGER },
  urethraWidth:      { type:Sequelize.INTEGER },
  width:             { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {
    convertedWidth()            { return ConversionUtility.milliToInches(this.width); },
    convertedCervixWidth()      { return ConversionUtility.milliToInches(this.cervixWidth); },
    convertedUrethraWidth()     { return ConversionUtility.milliToInches(this.urethraWidth); },
    convertedProlapseLength()   { return ConversionUtility.milliToInches(this.prolapseLength); },
    convertedInnerLabiaLength() { return ConversionUtility.milliToInches(this.innerLabiaLength); },
    area()                      { return MathUtility.widthToArea(this.width); },
    cervixArea()                { return MathUtility.widthToArea(this.cervixWidth); },
    urethraArea()               { return MathUtility.widthToArea(this.urethraWidth); },
  }
});


// centaur / 100 / huge
