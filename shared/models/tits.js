global.Tits = class Tits extends Model {

  constructor(data) {
    super();
    this._id = data.id;
    this._character_id = data.character_id;
    this._size = data.size;
    this._shape = data.shape;
    this._count = data.count;
    this._productionMultiplier = data.productionMultiplier;
  }

  get attributes() {
    return {
      id: this._id,
      character_id: this._character_id,
      size: this._size,
      shape: this._shape,
      count: this._count,
      productionMultiplier: this._productionMultiplier
    };
  }

  // === Instance Functions ===

  get size() { return this._size; }
  setSize(value) { this._size = value; }

  get sizeClass() {
    if (this.size <= 50)                     { return 'flat';    }
    if (50 < this.size && this.size <= 240)  { return 'small';   }
    if (240 < this.size && this.size <= 600) { return 'average'; }
    if (600 < this.size)                     { return 'huge';    }
  }

  get shape() { return this._shape; }
  setShape(shape) {
    // Baselining will try to set the tits shape to null. That should be a
    // no-op because while it's valid in the factory, that shouldn't happen any
    // place else.
    if (shape != null) {
      this.validateValueIn('shape', shape, Tits.SHAPES);
      this._shape = shape;
    }
  }

  get count() { return this._count; }
  setCount(value) { this._count = value; }

  get productionMultiplier() { return this._productionMultiplier; }
  setProductionMultiplier(mult) { this._productionMultiplier = mult; }

  // Lactation volume in milliliters per hour. It's is based on breast size
  // and production multiplier which will be 0 if the character isn't
  // lactating. I don't think this will be used regularly in the sex
  // descriptions. If a character is lactating they should always at least give
  // a bit of a squirt. I don't think we'll have actions though where gallons
  // of milk are gushing out, but this would be good to know if someone's
  // hooked up to a milking machine for hours.
  getLactationVolume() {
    return this._size * this._productionMultiplier;
  }
}

Tits.SHAPES = ['flat','bell','conical','dangling','perky','round'];
