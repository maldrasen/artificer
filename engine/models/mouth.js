global.Mouth = Database.instance().define('mouth', {
  character_id:     { type:Sequelize.INTEGER },
  tongueLength:     { type:Sequelize.INTEGER },
  tongueShape:      { type:Sequelize.STRING, validate:{ isIn:[['normal','forked','cock']] }},
},{
  timestamps: false,
  getterMethods: {
    convertedTongueLength() { return ConversionUtility.milliToInches(this.tongueLength); },
  }
});
