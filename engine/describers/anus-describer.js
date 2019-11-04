global.AnusDescriber = class AnusDescriber {

  constructor(options) {
    this._character = options.character;
    this._anus = options.anus;
  }

  get character() { return this._character; }
  get anus() { return this._anus; }

  async updateDescription() {
    if (this.anus == null) { this._anus = await this.character.getAnus(); }

    let desc = await this.getDescription();
    if (desc) {
      this.anus.description = desc;
      await this.anus.save();
      return this.anus;
    }
  }

  async getDescription() {
    let description = `
      [TODO: Anus Description] ${ new AnusInjuryDescriber(this.character, this.anus).describeInjuries() }
    `.replace(/\n/g,'').replace(/\s+/g,' ');

    return await Weaver.weaveWithCharacter(description,'C',this.character);
  }

}
