global.Race = class Race extends Form {
  constructor(data) {
    super();
    this.build(data);
  }

  get code() { return this._code; }
  get name() { return this._name; }
  get description() { return this._description; }
  get flags() { return this._flags; }
  get personalities() { return this._personalities; }
  get aspects() { return this._aspects; }
  get physical() { return this._physical; }
  get personal() { return this._personal; }
  get mental() { return this._mental; }
  get magical() { return this._magical; }
  get genderRatio() {return this._genderRatio || { male:45, futa:10, female:45 }; }
  get bodyOptions() { return this._bodyOptions; }
  get nameFamily() { return this._nameFamily; }

  get isFurry() { return this.flags.indexOf('furry') >= 0; }
  get isDemon() { return this.flags.indexOf('demon') >= 0; }
  get isGoblin() { return this.flags.indexOf('goblin') >= 0; }

  // Used during character generation.
  randomHeight(gender) {
    let base =   this.bodyOptions.baseHeight || 1500;
    let range =  this.bodyOptions.heightRange || 300;
    let adjust = this.bodyOptions.maleHeightAdjust || 100;

    let height = base + Random.upTo(range);
    if (gender == 'male') { height += adjust; }
    if (gender == 'futa') { height += adjust/2; }

    return height;
  }
}
