global.PussyDescriber = class PussyDescriber {

  constructor(options) {
    this._character = options.character;
    this._pussy = options.pussy;
  }

  get character() { return this._character; }
  get pussy() { return this._pussy; }

  async updateDescription() {
    if (this.pussy == null) { this._pussy = await this.character.getPussy(); }
    if (this.pussy == null) { return ""; }

    let desc = await this.getDescription();
    if (desc) {
      this.pussy.description = desc;
      await this.pussy.save();
      return this.pussy;
    }
  }

  async getDescription() {
    let injuries = new PussyInjuryDescriber(this.character, this.pussy).describeInjuries();

    let description = `
      [TODO: Pussy Description] ${injuries}
    `.replace(/\n/g,'').replace(/\s+/g,' ');

    return await Weaver.weaveWithCharacter(description,'C',this.character);
  }

}
