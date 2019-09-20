global.Mouth = class Mouth extends Model {

  constructor(data) {
    super();
    this._id = data.id;
    this._character_id = data.character_id;
    this._elasticity = data.elasticity;
    this._shape = data.shape;
    this._throatElasticity = data.throatElasticity;
    this._throatWidth = data.throatWidth;
    this._tongueLength = data.tongueLength;
    this._tongueShape = data.tongueShape;
    this._width = data.width;
  }

  get attributes() {
    return {
      id: this._id,
      character_id: this._character_id,
      elasticity: this._elasticity,
      shape: this._shape,
      throatElasticity: this._throatElasticity,
      throatWidth: this._throatWidth,
      tongueLength: this._tongueLength,
      tongueShape: this._tongueShape,
      width: this._width,
    };
  }

  // === Instance Functions ===

  get shape() { return this._shape; }
  setShape(shape) {
    if(Mouth.SHAPES.indexOf(shape)<0) { throw `Bad mouth shape [${shape}]` }
    this._shape = shape;
  }

  get width() { return this._width; }
  get convertedWidth() { return ConversionUtility.milliToInches(this._width); }
  get area() { return MathUtility.widthToArea(this._width); }
  setWidth(width) { this._width = width; }

  get elasticity() { return this._elasticity; }
  setElasticity(value) { this._elasticity = value; }

  get throatWidth() { return this._throatWidth; }
  get convertedThroatWidth() { return ConversionUtility.milliToInches(this._throatWidth); }
  get throatArea() { return MathUtility.widthToArea(this._throatWidth); }
  setThroatWidth(width) { this._throatWidth = width; }

  get throatElasticity() { return this._throatElasticity; }
  setThroatElasticity(value) { this._throatElasticity = value; }

  get tongueLength() { return this._tongueLength; }
  get convertedTongueLength() { return ConversionUtility.milliToInches(this._tongueLength); }
  setTongueLength(length) { this._tongueLength = length; }

  // TODO: Tongue might need width and area values as well. Not needed until we
  //       have actions that call for it though.

  get tongueShape() { return this._tongueShape; }
  setTongueShape(shape) {
    if(Mouth.TONGUE_SHAPES.indexOf(shape)<0) { throw `Bad tongue shape [${shape}]` }
    this._tongueShape = shape;
  }

  // TODO Include depth measurements. Should be same as anus, but in reverse.
  //      At least need to know depth to throat, probably stomach, and all the
  //      way through as well (though could just use anus for that too.)
  //      Fun fact, horse esophagus is (4 to 5 ft) in length
}

Mouth.SHAPES = ['normal','muzzle','horse','snake','dragon'];
Mouth.TONGUE_SHAPES = ['normal','forked','cock'];
