global.PussyDescriber = class PussyDescriber {

  constructor(context) {
    this._context = context;
  }

  get context() { return this._context; }
  get character() { return this.context.get('C').character; }
  get pussy() { return this.context.get('C').pussy; }

  async updateDescription() {
    if (this.pussy != null) {
      await this.pussy.update({ description:(await this.getDescription()) });
    }
  }

  async getDescription() {
    // const injuryDescriber = new PussyInjuryDescriber(this.context);
    // const injuries = await injuryDescriber.describeInjuries()
    const injuries = '';

    let description = `
      [TODO: Pussy Description] ${injuries}
    `.replace(/\n/g,'').replace(/\s+/g,' ');

    return await Weaver.weave(description, this.context);
  }

}
