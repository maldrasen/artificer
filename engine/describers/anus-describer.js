global.AnusDescriber = class AnusDescriber {

  constructor(context) {
    this._context = context;
  }

  get context() { return this._context; }
  get character() { return this.context.get('C').character; }
  get anus() { return this.context.get('C').anus; }

  async updateDescription() {
    await this.anus.update({ description:(await this.getDescription()) });
  }

  async getDescription() {
    const injuryDescriber = new AnusInjuryDescriber(this.context);

    let description = `
      [TODO: Anus Description] ${ await injuryDescriber.describeInjuries() }
    `.replace(/\n/g,'').replace(/\s+/g,' ');

    return await Weaver.weave(description, this.context);
  }

}
