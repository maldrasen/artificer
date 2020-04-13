global.Mouth = Database.instance().define('mouth', {
  character_id:      { type:Sequelize.INTEGER },
  throatWidth:       { type:Sequelize.INTEGER },
  tongueLength:      { type:Sequelize.INTEGER },
  tongueShape:       { type:Sequelize.STRING, validate:{ isIn:[['normal','forked','cock']] }},
  width:             { type:Sequelize.INTEGER },
  smashLevel:        { type:Sequelize.INTEGER, validate:{ min:0, max:5 }},
  smashCount:        { type:Sequelize.INTEGER },
  smashHealing:      { type:Sequelize.INTEGER },
  smashTeethMissing: { type:Sequelize.INTEGER },
  cutLevel:          { type:Sequelize.INTEGER, validate:{ min:0, max:5 }},
  cutCount:          { type:Sequelize.INTEGER },
  cutHealing:        { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {
    convertedTongueLength() { return ConversionUtility.milliToInches(this.tongueLength); },
    comfortableThroatWidth() { return Math.ceil(this.throatWidth * 0.8); },
    comfortableWidth() { return Math.ceil(this.width * 0.8); },
  }
});
