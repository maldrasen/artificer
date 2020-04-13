global.PussyDescriber = class PussyDescriber {

  constructor(context) {
    this._context = context;
  }

  get context() { return this._context; }
  get character() { return this.context.get('C').character; }
  get pussy() { return this.context.get('C').pussy; }

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
    let injuryDescriber = new PussyInjuryDescriber(this.context);

    let description = `
      [TODO: Pussy Description] ${await injuryDescriber.describeInjuries()}
    `.replace(/\n/g,'').replace(/\s+/g,' ');

    return await Weaver.weaveWithCharacter(description,'C',this.character);
  }

}
