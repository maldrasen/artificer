global.Nipples = class Nipples extends Model {

  constructor(data) {
    super();
    this._id = data.id;
    this._character_id = data.character_id;
    this._count = data.count;
    this._length = data.length;
    this._orificeElasticity = data.orificeElasticity;
    this._orificeWidth = data.orificeWidth;
    this._shade = data.shade;
    this._shape = data.shape;
    this._width = data.width;
  }

  get attributes() {
    return {
      id: this._id,
      character_id: this._character_id,
      count: this._count,
      length: this._length,
      orificeElasticity: this._orificeElasticity,
      orificeWidth: this._orificeWidth,
      shade: this._shade,
      shape: this._shape,
      width: this._width,
    }
  }

  // === Instance Functions ===

  get count() { return this._count; }
  setCount(value) { this._count = value; }

  get shade() { return this._shade; }
  setShade(value) { this._shade = value; }

  get shape() { return this._shape; }
  setShape(shape) {
    this.validateValueIn('shape', shape, Nipples.SHAPES);
    this._shape = shape;
  }

  get width() { return this._width; }
  get convertedWidth() { return ConversionUtility.milliToInches(this._width); }
  setWidth(width) { this._width = width; }

  get length() { return this._length; }
  get convertedLength() { return ConversionUtility.milliToInches(this._length); }
  setLength(length) { this._length = length; }

  // Normally will be 0, but can be magically added.
  get orificeWidth() { return this._orificeWidth; }
  get convertedOrificeWidth() { return ConversionUtility.milliToInches(this._orificeWidth); }
  get orificeArea() { return MathUtility.widthToArea(this._orificeWidth); }
  setOrificeWidth(width) { this._orificeWidth = width; }

  get orificeElasticity() { return this._orificeElasticity; }
  setOrificeElasticity(value) { this._orificeElasticity = value; }
}

Nipples.SHAPES = ['cock','heart','inverted','mouth','normal','puffy','pussy','star','teat'];
