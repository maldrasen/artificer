global.AnusDescriber = class AnusDescriber {

  constructor(context) {
    this._context = context;
  }

  get context() { return this._context; }
  get character() { return this.context.get('C').character; }
  get anus() { return this.context.get('C').anus; }

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
    const injuryDescriber = new AnusInjuryDescriber(this.context);

    let description = `
      [TODO: Anus Description] ${ await injuryDescriber.describeInjuries() }
    `.replace(/\n/g,'').replace(/\s+/g,' ');

    return await Weaver.weaveWithCharacter(description,'C',this.character);
  }

}
