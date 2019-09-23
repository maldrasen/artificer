global.Mouth = Database.instance().define('mouth', {
  character_id:     { type:Sequelize.INTEGER },
  elasticity:       { type:Sequelize.INTEGER },
  throatElasticity: { type:Sequelize.INTEGER },
  throatWidth:      { type:Sequelize.INTEGER },
  tongueLength:     { type:Sequelize.INTEGER },
  tongueShape:      { type:Sequelize.STRING, validate:{ isIn:[['normal','forked','cock']] }},
  width:            { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {
    area()                  { return MathUtility.widthToArea(this.width);                },
    throatArea()            { return MathUtility.widthToArea(this.throatWidth);          },
    convertedWidth()        { return ConversionUtility.milliToInches(this.width);        },
    convertedThroatWidth()  { return ConversionUtility.milliToInches(this.throatWidth);  },
    convertedTongueLength() { return ConversionUtility.milliToInches(this.tongueLength); },
  }
});

// TODO: The Tongue might need width and area values as well. Not needed until
//       we have actions that call for it though.

// TODO Include depth measurements. Should be same as anus, but in reverse.
//      At least need to know depth to throat, probably stomach, and all the
//      way through as well (though could just use anus for that too.)
//      Fun fact, horse esophagus is (4 to 5 ft) in length
