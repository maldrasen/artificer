global.Body = class Body extends Model {

  constructor(data) {
    super();
    this._id = data.id;
    this._character_id = data.character_id;
    this._height = data.height;
    this._weight = data.weight;
    this._furColor = data.furColor;
    this._furShade = data.furShade;
    this._hairColor = data.hairColor;
    this._scaleColor = data.scaleColor;
    this._skinColor = data.skinColor;
    this._skinShade = data.skinShade;
    this._tailShape = data.tailShape;
  }

  get attributes() {
    return {
      id: this._id,
      character_id: this._character_id,
      height: this._height,
      weight: this._weight,
      furColor: this._furColor,
      furShade: this._furShade,
      hairColor: this._hairColor,
      scaleColor: this._scaleColor,
      skinColor: this._skinColor,
      skinShade: this._skinShade,
      tailShape: this._tailShape,
    }
  }

  // === Instance Functions ===

  // Weight is measured grams, and displayed in kg, or lbs.
  get weight() { return this._weight; }
  get convertedWeight() { return ConversionUtility.gramToPound(this._weight); }
  setWeight(weight) { this._weight = weight; }

  // Height is measured in mm, and displayed in cm, or inches.
  get height() { return this._height; }
  get convertedHeight() { return ConversionUtility.milliToInches(this._height); }
  setHeight(height) { this._height = height; }

  // Both finger and fist sizes are entirely dependent on height.
  get fistWidth() { return Math.round(this._height*(86/1750)); }
  get fingerWidth() { return Math.round(this._height*(18/1750)); }
  get fistArea() { return MathUtility.widthToArea(this.fistWidth); }
  get fingerArea() { return MathUtility.widthToArea(this.fingerWidth); }

  get skinColor()  { return this._skinColor; }
  setSkinColor(color) {
    this.validateValueIn('skinColor', color, Body.SKIN_COLORS);
    this._skinColor = color;
  }

  get furColor() { return this._furColor; }
  setFurColor(color) {
    this.validateValueIn('furColor', color, Body.FUR_COLORS);
    this._furColor = color;
  }

  get scaleColor() { return this._scaleColor; }
  setScaleColor(color) {
    this.validateValueIn('scaleColor', color, Body.SCALE_COLORS);
    this._scaleColor = color;
  }

  get tailShape() { return this._tailShape; }
  setTailShape(shape) {
    this.validateValueIn('tailShape', shape, Body.TAIL_SHAPES);
    this._tailShape = shape;
  }

  get skinShade()  { return this._skinShade; }
  setSkinShade(shade)  { this._skinShade = shade; }

  // TODO: Need a list of valid hair colors.
  get hairColor()  { return this._hairColor; }
  setHairColor(color)  { this._hairColor = color; }

  get furShade() { return this._furShade; }
  setFurShade(shade) { this._furShade = shade; }

  // === Calculated Values ===

  //   BMI = Weight / Height * Height
  get bmi() {
    let meters = this._height / 1000;
    let kilograms = this._weight / 1000;
    return Math.round(kilograms / (meters * meters));
  }

  // Randomize the character's weight (in grams), given their height
  // (in milimeters), and the BMI+-2
  //
  //   Weight = Height * Height * (BMI)
  //
  setBMI(bmi) {
    let meters = this._height / 1000;
    let fuzz = (Random.upTo(400)-200) / 100
    let kilograms = meters * meters * (bmi + fuzz);
    this._weight = Math.round(kilograms*1000);
  }

  // TODO: We'll need to look into this again once the physical attribute is
  //       being included in the bmi calculation.
  get weightClass() {
    let bmi = this.bmi;
    if (bmi <= 13)              { return 'emaciated'; }
    if (13 <= bmi && bmi <= 17) { return 'very-thin'; }
    if (18 <= bmi && bmi <= 21) { return 'thin';      }
    if (22 <= bmi && bmi <= 26) { return 'average';   }
    if (27 <= bmi && bmi <= 31) { return 'thick';     }
    if (32 <= bmi && bmi <= 36) { return 'heavy';     }
                                  return 'massive';
  }
}

Body.FUR_COLORS = [null,'brown','gray','red','purple','white'];
Body.SCALE_COLORS = [null,'red','gold','green','blue','purple','black','gray','white'];
Body.TAIL_SHAPES = [null,'rat','dog','fox','horse','seal','cow','snake','dragon','cat','demon'];
Body.SKIN_COLORS = ['human','red','black','green','pale-green','gray','blue','purple'];
