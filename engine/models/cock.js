const COCK_SIZES = ['small','average','big','huge','monster'];

global.Cock = Database.instance().define('cock', {
  character_id:      { type:Sequelize.INTEGER },
  placement:         { type:Sequelize.STRING, validate:{ isIn:[['normal','nipple','tongue']] }},
  count:             { type:Sequelize.INTEGER },
  shape:             { type:Sequelize.STRING  },
  sheath:            { type:Sequelize.STRING  },
  sizeClass:         { type:Sequelize.STRING, validate:{ isIn:[COCK_SIZES] }},
  sizeScale:         { type:Sequelize.DOUBLE, validate:{ min:0, max:100 }},
  sizeFactor:        { type:Sequelize.DOUBLE  },
  widthRatio:        { type:Sequelize.INTEGER },
  minimumWidth:      { type:Sequelize.INTEGER },
  knotWidthRatio:    { type:Sequelize.INTEGER },
  knobHeightRatio:   { type:Sequelize.INTEGER },
  spineHeightRatio:  { type:Sequelize.INTEGER },
  ballsSizeFactor:   { type:Sequelize.DOUBLE  },
  internalBalls:     { type:Sequelize.BOOLEAN },
  description:       { type:Sequelize.STRING },
},{
  timestamps: false,
  getterMethods: {

    length() {
      let range = Cock.SizeRanges[this.sizeClass]
      return Math.round(this.sizeFactor * ((this.sizeScale/100)*(range.max-range.min) + range.min))
    },

    // Get each cock's diameter in mm.
    //
    // Rather than tracking cock width as a seperate attribute, we calculate the
    // cock width based on the with ratio which comes from the cock shape, that
    // way the cock length can change and the width will change by the same
    // ammount.
    //
    // The widthRatio attribute can also be changed after creation, that way we
    // can have super thick cocks! Each body size class also has a minimum
    // thickness. If a cock is too short it just get's stubby, not super thin.
    width() {
      let width = Math.round(0.1548712 * this.length * this.widthRatio);
      return width > this.minimumWidth ? width : this.minimumWidth;
    },

    // This was used to check to see if a cock fit into an orifice, though the
    // scrutinizers that did that are not back in this version yet.
    area() { return MathUtility.widthToArea(this.width + this.spineHeight + this.knobHeight); },

    knotWidth()            { return this.knotWidthRatio ? Math.round(this.width * this.knotWidthRatio) : 0; },
    spineHeight()          { return this.spineHeightRatio ? Math.round(this.width * this.spineHeightRatio) : 0; },
    knobHeight()           { return this.knobHeightRatio ? Math.round(this.width * this.knobHeightRatio) : 0; },

    convertedLength()      { return ConversionUtility.milliToInches(this.length); },
    convertedWidth()       { return ConversionUtility.milliToInches(this.width); },
    convertedKnotWidth()   { return ConversionUtility.milliToInches(this.knotWidth); },
    convertedSpineHeight() { return ConversionUtility.milliToInches(this.spineHeight); },
    convertedKnobHeight()  { return ConversionUtility.milliToInches(this.knobHeight); },

    testicleWidth()          { return this.width * this.ballsSizeFactor; },
    scrotumWidth()           { return this.testicleWidth*3; },
    convertedTesticleWidth() { return ConversionUtility.milliToInches(this.testicleWidth); },
    convertedScrotumWidth()  { return ConversionUtility.milliToInches(this.scrotumWidth); },

    inspect() {
      return `${this.sizeClass} ${this.shape} cock [${this.sizeScale}% *${this.sizeFactor}] (${this.length}mm/${this.width}mm) (${this.convertedLength}in/${this.convertedWidth}in)`
    }
  }
});

// The Cock Size Classes are based on a human sized dick. The size class and
// size scale are used to get the size of the cock, as if that cock was on a
// human sized person. We then scale the cock size based on the character's
// height, so that a minotaur can have an average cock, but it's still massivly
// larger than a monster sized pixie cock. These values are in milimeters.

Cock.SizeRanges = {
  small:   { min:127, max:178 }, // 5 - 7 inch
  average: { min:178, max:229 }, // 7 - 9 inch
  big:     { min:229, max:305 }, // 9 - 12 inch
  huge:    { min:305, max:406 }, // 12 - 16 inch
  monster: { min:406, max:610 }, // 16 - 24 inch
}

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
