global.Cock = Database.instance().define('cock', {
  character_id:      { type:Sequelize.INTEGER },
  count:             { type:Sequelize.INTEGER },
  glow:              { type:Sequelize.STRING  },
  knobHeightRatio:   { type:Sequelize.INTEGER },
  knotWidthRatio:    { type:Sequelize.INTEGER },
  length:            { type:Sequelize.INTEGER },
  placement:         { type:Sequelize.STRING, validate:{ isIn:[['normal','nipple','tongue']] }},
  shape:             { type:Sequelize.STRING  },
  sheath:            { type:Sequelize.STRING  },
  spineHeightRatio:  { type:Sequelize.INTEGER },
  urethraElasticity: { type:Sequelize.INTEGER },
  urethraWidth:      { type:Sequelize.INTEGER },
  widthRatio:        { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {
    convertedLength() { return ConversionUtility.milliToInches(this.length); },
    convertedUrethraWidth() { return ConversionUtility.milliToInches(this.urethraWidth); },
    urethraArea() { return MathUtility.widthToArea(this.urethraWidth); }
  }
});
