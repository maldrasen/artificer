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

// The width ratio is set when the cock is built. It can be increased or
// otherwise adjusted later. If the cock shape changes though the width ratio
// should be reset.
Cock.getWidthRatio = function(shape) {
  return {
    snake:  0.75,
    horse:  0.9,
    normal: 1,
    demon:  1.2,
    dog:    1.4,
    dragon: 1.6,
  }[shape]
}


// Centaur 500 ~20
