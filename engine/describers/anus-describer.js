global.AnusDescriber = class AnusDescriber {

  constructor(options) {
    if (options.character == null) { throw `The Character must at least be set.` }
    this._character = options.character;
    this._anus = options.anus;
  }

  get character() { return this._character; }
  get anus() { return this._anus; }

  async updateDescription() {
    if (this.anus == null) { this._anus = await this.character.getAnus(); }

    this.anus.description = "[TODO: Anus description]"

    await this.anus.save();
    return this.anus;
  }

}
