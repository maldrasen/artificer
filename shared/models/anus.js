global.Anus = class Anus extends Model {

  constructor(data) {
    super();
    this._id = data.id;
    this._character_id = data.character_id;
    this._shape = data.shape;
    this._elasticity = data.elasticity;
    this._width = data.width;
    this._prolapseLength = data.prolapseLength;
  }

  get attributes() {
    return {
      id: this._id,
      character_id: this._character_id,
      shape: this._shape,
      elasticity: this._elasticity,
      width: this._width,
      prolapseLength: this._prolapseLength,
    }
  }

  // === Instance Functions ===

  get shape() { return this._shape; }
  setShape(shape) {
    if(Anus.SHAPES.indexOf(shape)<0) { throw `Bad anus shape [${shape}]` }
    this._shape = shape;
  }

  get elasticity() { return this._elasticity; }
  setElasticity(value) { this._elasticity = value; }

  get width() { return this._width; }
  get convertedWidth() { return ConversionUtility.milliToInches(this._width); }
  get area() { return MathUtility.widthToArea(this._width); }
  setWidth(width) { this._width = width; }

  get prolapseLength() { return this._prolapseLength; }
  get convertedProlapseLength() { return ConversionUtility.milliToInches(this._prolapseLength); }
  setProlapseLength(length) { this._prolapseLength = length; }
}

Anus.SHAPES = ['normal','horse','mouth'];
