global.Balls = Database.instance().define('balls', {
  character_id:         { type:Sequelize.INTEGER },
  width:                { type:Sequelize.INTEGER },
  internal:             { type:Sequelize.BOOLEAN },
  productionMultiplier: { type:Sequelize.DOUBLE  },
},{
  timestamps: false,
  getterMethods: {
    // Width of a single testicle, in mm. Human average is about 2-4cm with
    // length about twice as wide.
    convertedWidth() {
      return ConversionUtility.milliToInches(this.getDataValue('width'));
    },

    // Scrotum width is about 3 times that of a testicle.
    scrotumWidth() {
      return this.getDataValue('width')*3;
    },

    convertedScrotumWidth() {
      return ConversionUtility.milliToInches(this.scrotumWidth);
    },

    // Cum in milliliters. This is supposedly 3.7ml for an average human in real
    // life, so the default width*(1-2) formula is about 10 times more than what
    // you'd see in reality. But I want to see cum hoses in the game, so that's
    // what we're doing.
    ejaculationVolume() {
      return Math.round(this.getDataValue('width') * this.getDataValue('productionMultiplier'));
    },
  }
});
