const COCK_SIZES = ['small','average','big','huge','monster'];

global.Cock = class Cock extends Model {

  static async createModel() {
    await this.buildProxy('cock',{
      parent_id:         { type:Sequelize.INTEGER },
      parent_class:      { type:Sequelize.STRING },
      placement:         { type:Sequelize.STRING, validate:{ isIn:[['normal','nipple','tongue']] }},
      count:             { type:Sequelize.INTEGER },
      shape:             { type:Sequelize.STRING, validate:{ isIn:[['normal','horse','dog','snake','dragon']] }},
      sheath:            { type:Sequelize.STRING, validate:{ isIn:[['skin','scales','fur']] }},
      sizeClass:         { type:Sequelize.STRING, validate:{ isIn:[COCK_SIZES] }},
      sizeScale:         { type:Sequelize.DOUBLE, validate:{ min:0, max:100 }},
      sizeFactor:        { type:Sequelize.DOUBLE  },
      widthRatio:        { type:Sequelize.DOUBLE  },
      minimumWidth:      { type:Sequelize.INTEGER },
      knotWidthRatio:    { type:Sequelize.DOUBLE, validate:{ min:1 }},
      knobHeight:        { type:Sequelize.INTEGER },
      spineHeight:       { type:Sequelize.INTEGER },
      ballsSizeFactor:   { type:Sequelize.DOUBLE  },
      internalBalls:     { type:Sequelize.BOOLEAN },
      description:       { type:Sequelize.STRING  },
    });
  }

  // The width ratio is set when the cock is built. It can be increased or
  // otherwise adjusted later. If the cock shape changes though the width ratio
  // should be reset.
  static getWidthRatio(shape) {
    return {
      snake:  0.75,
      horse:  0.9,
      normal: 1,
      demon:  1.2,
      dog:    1.4,
      dragon: 1.6,
    }[shape]
  }

  // TODO: Injuries used to factor into the cock size because of swelling and
  //       such. I've removed injuries for now, but when we reimplement them,
  //       we'll loop through the injuries and length depending on the type
  //       and level of the injury. This is how this used to work:
  //
  //         let blight = (this.blightLevel * 0.05)+1;
  //         let smash = (this.smashLevel * 0.01)+1;
  //         return Math.round(size * smash * blight)
  //
  get length() {
    let range = Cock.SizeRanges[this.sizeClass]
    let size = this.sizeFactor * ((this.sizeScale/100)*(range.max-range.min) + range.min)
    return Math.round(size)
  }

  // The size class influences how a cock grow in size, the current length
  // though is used to determine what their current class is now.
  get currentSizeClass() {
    let length = this.length;
    if (length < 178) { return 'small';   } // <7in
    if (length < 229) { return 'average'; } // 7in - 9in
    if (length < 305) { return 'big';     } // 9in - 12in
    if (length < 406) { return 'huge';    } // 12in - 16in
    return 'monster'                        // >16in
  }

  // I calculate the balls size class separatly from the cock size class
  // becase the balls have a width multiplier and extra injury swelling that
  // might but the balls into a different class from the cock.
  get currentBallsSizeClass() {
    let width = Math.round(this.testicleWidth);
    if (width < 25) { return 'small';   } // <1in
    if (width < 38) { return 'average'; } // 1in - 1.5in
    if (width < 51) { return 'big';     } // 1.5in - 2in
    if (width < 76) { return 'huge';    } // 2in - 3in
    return 'monster'                      // >3in
  }

  // Gigantic and Titanic cocks don't really factor into the growth formulas,
  // so they're not really separate size classes, but they're sometimes used
  // in the describers for really huge cocks.
  //  Gigantic: 20in - 30in
  //  Titanic:  > 30in
  //  Tiny:     < 5in
  get isGigantic() { return this.length >= 508 && this.length < 762 }
  get isTitanic()  { return this.length >= 762 }
  get isTiny()     { return this.length < 127 }

  // Get each cock's diameter in mm.
  //
  // Rather than tracking cock width as a seperate attribute, we calculate the
  // cock width based on the with ratio which comes from the cock shape, that
  // way the cock length can change and the width will change by the same
  // ammount.
  //
  // The widthRatio attribute can also be changed after creation, that way we
  // can have super thick cocks! Each body size class also has a minimum
  // thickness. If a cock is too short it just gets stubby, not super thin.
  get width() {
    let width = Math.round(0.1548712 * this.length * this.widthRatio);
    return width > this.minimumWidth ? width : this.minimumWidth;
  }

  // This was used to check to see if a cock fit into an orifice, though the
  // scrutinizers that did that are not back in this version yet.
  get area() { return MathUtility.widthToArea(this.width); }

  get hasSheath()            { return this.sheath != null; }
  get hasKnobs()             { return this.knobHeight > 0; }
  get hasSpines()            { return this.spineHeight > 0; }

  get hasKnot()              { return this.knotWidthRatio != null; }
  get knotWidth()            { return this.hasKnot ? Math.round(this.width * this.knotWidthRatio) : 0; }

  get convertedLength()      { return ConversionUtility.milliToInches(this.length); }
  get convertedWidth()       { return ConversionUtility.milliToInches(this.width); }
  get convertedKnobHeight()  { return ConversionUtility.milliToInches(this.knobHeight); }
  get convertedKnotWidth()   { return ConversionUtility.milliToInches(this.knotWidth); }
  get convertedSpineHeight() { return ConversionUtility.milliToInches(this.spineHeight); }
  get convertedRidgeHeight() { return ConversionUtility.milliToInches(this.width/3); }

  // The cock lengh already takes smash and blight into consideration when
  // calculating the cock width (which the testicleWidth is based on) however
  // we want the balls to swell more than cocks, so the same factors are
  // applied again, essentially doubling the swelling effects on the balls.
  //
  // ... or at least it will when the injuries are added back in.
  //    let smash = (this.smashLevel * 0.01)+1;
  //    let blight = (this.blightLevel * 0.05)+1;
  //    return this.width * this.ballsSizeFactor * smash * blight;
  //
  get testicleWidth() {
    return this.width * this.ballsSizeFactor;
  }

  get scrotumWidth()           { return this.testicleWidth*2.5; }
  get convertedTesticleWidth() { return ConversionUtility.milliToInches(this.testicleWidth); }
  get convertedScrotumWidth()  { return ConversionUtility.milliToInches(this.scrotumWidth); }

  inspect() {
    return `${this.sizeClass} ${this.shape} cock [${this.sizeScale}% *${this.sizeFactor}] (${this.length}mm/${this.width}mm) (${this.convertedLength}in/${this.convertedWidth}in)`
  }
}

Database.registerModel(Cock);

// The Cock Size Classes are based on a human sized dick. The size class and
// size scale are used to get the size of the cock, as if that cock was on a
// human sized person. We then scale the cock size based on the character's
// height, so that a minotaur can have an average cock, but it's still massivly
// larger than a monster sized scaven cock. These values are in milimeters.

Cock.SizeRanges = {
  small:   { min:127, max:178 }, // 5 - 7 inch
  average: { min:178, max:229 }, // 7 - 9 inch
  big:     { min:229, max:305 }, // 9 - 12 inch
  huge:    { min:305, max:406 }, // 12 - 16 inch
  monster: { min:406, max:610 }, // 16 - 24 inch
}
