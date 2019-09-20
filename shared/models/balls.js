global.Balls = class Balls extends Model {

  constructor(data) {
    super();
    this._id = data.id;
    this._character_id = data.character_id;
    this._width = data.width;
    this._internal = data.internal;
    this._productionMultiplier = data.productionMultiplier;
  }

  get attributes() {
    return {
      id: this._id,
      character_id: this._character_id,
      width: this._width,
      internal: this._internal,
      productionMultiplier: this._productionMultiplier,
    }
  }

  // === Instance Functions ===

  // Width of a single testicle, in mm. Human average is about 2-4cm with length
  // about twice as wide.
  get width() { return this._width; }
  get convertedWidth() { return ConversionUtility.milliToInches(this._width); }
  setWidth(width) { this._width = width; }

  // Scrotum width is about 3 times that of a testicle.
  get scrotumWidth() { return this._width*3; }
  get convertedScrotumWidth() { return ConversionUtility.milliToInches(this.scrotumWidth); }

  get internal() { return this._internal; }
  setInternal(internal) { this._internal = internal; }

  get productionMultiplier() { return this._productionMultiplier; }
  setProductionMultiplier(mult) { this._productionMultiplier = mult; }

  // Cum in milliliters. This is supposedly 3.7ml for an average human in real
  // life, so the default width*(1-2) formula is about 10 times more than what
  // you'd see in reality. But I want to see cum hoses in the game, so that's
  // what we're doing.
  get ejaculationVolume() {
    return Math.round(this._width * this._productionMultiplier);
  }
}
