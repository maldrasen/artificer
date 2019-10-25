global.AnusDescriber = class AnusDescriber {

  constructor(options) {
    if (options.character == null) { throw `The Character must at least be set.` }
    this._character = options.character;
  }

}
