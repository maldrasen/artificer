const TITS_SHAPES = ['flat','bell','conical','dangling','perky','round'];

global.Tits = Database.instance().define('tits', {
  character_id:         { type:Sequelize.INTEGER },
  size:                 { type:Sequelize.INTEGER },
  shape:                { type:Sequelize.STRING, validate:{ isIn:[TITS_SHAPES] }},
  count:                { type:Sequelize.INTEGER },
  productionMultiplier: { type:Sequelize.DOUBLE  },
},{
  timestamps: false,
  getterMethods: {

    // Lactation volume in milliliters per hour. It's is based on breast size
    // and production multiplier which will be 0 if the character isn't
    // lactating. I don't think this will be used regularly in the sex
    // descriptions. If a character is lactating they should always at least give
    // a bit of a squirt. I don't think we'll have actions though where gallons
    // of milk are gushing out, but this would be good to know if someone's
    // hooked up to a milking machine for hours.
    lactationVolume() { return this.size * this.productionMultiplier; },

  }
});

Tits.determineSizeClass = function(size) {
  if (size <= 50)                { return 'flat';    }
  if (50 < size && size <= 240)  { return 'small';   }
  if (240 < size && size <= 600) { return 'average'; }
  if (600 < size)                { return 'huge';    }
}
