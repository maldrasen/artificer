const NIPPLE_SHAPES = ['cock','heart','inverted','mouth','normal','puffy','pussy','star','teat'];

global.Nipples = Database.instance().define('nipples', {
  parent_id:         { type:Sequelize.INTEGER },
  parent_class:      { type:Sequelize.STRING },
  count:             { type:Sequelize.INTEGER },
  shade:             { type:Sequelize.INTEGER },
  shape:             { type:Sequelize.STRING, validate:{ isIn:[NIPPLE_SHAPES] }},
  width:             { type:Sequelize.INTEGER },
  length:            { type:Sequelize.INTEGER },
  orificeWidth:      { type:Sequelize.INTEGER },
  orificeElasticity: { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {
    convertedWidth()        { return ConversionUtility.milliToInches(this.width); },
    convertedLength()       { return ConversionUtility.milliToInches(this.length); },
    convertedOrificeWidth() { return ConversionUtility.milliToInches(this.orificeWidth); },
    orificeArea()           { return MathUtility.widthToArea(this.orificeWidth); },
  }
});
