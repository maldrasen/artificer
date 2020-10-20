const PUSSY_SHAPES = ['normal','dog','horse','snake','dragon'];
const PUSSY_SIZES = ['small','average','big','huge','monster'];
const PUSSY_CONDITIONS = ['tight','average','loose','gaping'];

global.Pussy = class Pussy extends Model {

  static async createModel() {
    await this.buildProxy('pussy',{
      parent_id:         { type:Sequelize.INTEGER },
      parent_class:      { type:Sequelize.STRING },
      placement:         { type:Sequelize.STRING, validate:{ isIn:[['normal','nipple']] }},
      shape:             { type:Sequelize.STRING, validate:{ isIn:[PUSSY_SHAPES] }},
      condition:         { type:Sequelize.STRING, validate:{ isIn:[PUSSY_CONDITIONS] }},
      sizeClass:         { type:Sequelize.STRING, validate:{ isIn:[PUSSY_SIZES] }},
      sizeScale:         { type:Sequelize.DOUBLE, validate:{ min:0, max:100 }},
      sizeFactor:        { type:Sequelize.DOUBLE  },
      clitLength:        { type:Sequelize.INTEGER },
      clitWidth:         { type:Sequelize.INTEGER },
      innerLabiaLength:  { type:Sequelize.INTEGER },
      outerLabiaSize:    { type:Sequelize.INTEGER },
      prolapseLength:    { type:Sequelize.INTEGER },
      blightLevel:       { type:Sequelize.INTEGER, validate:{ min:0, max:5 }},
      blightCount:       { type:Sequelize.INTEGER },
      blightHealing:     { type:Sequelize.INTEGER },
      burnLevel:         { type:Sequelize.INTEGER, validate:{ min:0, max:5 }},
      burnCount:         { type:Sequelize.INTEGER },
      burnHealing:       { type:Sequelize.INTEGER },
      smashLevel:        { type:Sequelize.INTEGER, validate:{ min:0, max:5 }},
      smashCount:        { type:Sequelize.INTEGER },
      smashHealing:      { type:Sequelize.INTEGER },
      description:       { type:Sequelize.STRING },
    });
  }

  // Get the range from the size class, then adjust for condition and stretch
  // damage and such.
  get width() {
    let range = Pussy.SizeRanges[this.sizeClass]
    return Math.round(this.sizeFactor * ((this.sizeScale/100)*(range.max-range.min) + range.min))
  }

  // The size class influences how a pussy grows in size, the current size
  // though is used to determine what their current class is now.
  get currentSizeClass() {
    let width = this.width;
    if (width <= 28) { return 'small';   }
    if (width <= 35) { return 'average'; }
    if (width <= 47) { return 'big';     }
    if (width <= 63) { return 'huge';    }
    return 'monster'
  }

  get convertedWidth()            { return ConversionUtility.milliToInches(this.width); }
  get convertedProlapseLength()   { return ConversionUtility.milliToInches(this.prolapseLength); }
  get convertedInnerLabiaLength() { return ConversionUtility.milliToInches(this.innerLabiaLength); }
  get area()                      { return MathUtility.widthToArea(this.width); }
}

Database.registerModel(Pussy);

// The Pussy size classes like the cocks are also based on a human sized dick.
// The size class and size scale are used to get the width in mm of the pussy.
// We then scale the pussy size based on the character's height. Because a
// pussy should be the same scale as a cock in the same range, that width is
// the median of what that pussy can comfortably hold. 50% of this width is
// unsatisfying. 150% of this width becomes uncomfortable. 200% becomes painful,
// and 300% is impossible.

Pussy.SizeRanges = {
  small:   { min:20, max:28 }, // 0.79 - 1.10 inches
  average: { min:28, max:35 }, // 1.10 - 1.38 inches
  big:     { min:35, max:47 }, // 1.38 - 1.85 inches
  huge:    { min:47, max:63 }, // 1.85 - 2.48 inches
  monster: { min:63, max:94 }, // 2.48 - 3.70 inches
}
