global.TitsDescriber = class TitsDescriber {

  constructor(context) {
    this._context = context;
    this._included = [];
  }

  get context() { return this._context; }
  get character() { return this.context.get('C').character; }
  get nipples() { return this.context.get('C').nipples; }
  get tits() { return this.context.get('C').tits; }

  addIncluded(key) { this._included.push(key); }
  isIncluded(key) { return this._included.indexOf(key) >= 0; }

  // TODO: When tits are null we will want to include a male chest description
  //       that includes the nipples, especially if he has interesting
  //       piercings and such. When piercings get implemented that is.
  async updateDescription() {
    if (this.tits != null) {
      await this.tits.update({ description:(await this.getDescription()) });
    }
  }

  // TODO: Include injuries, piercings and tatoos.
  async getDescription() {
    let description = `
      ${await this.describeTits()}
      ${await this.describeNipples()}
    `.replace(/\n/g,'').replace(/\s+/g,' ');

    return await Weaver.weave(description, this.context);
  }

  // === Descriptions ===

  async describeTits() {
    return (await TitsDescription.select(this.context)).d;
  }

  async describeNipples() {
    if (this.isIncluded('nipples')) { return ''; }
    return (await NipplesDescription.select(this.context)).d;
  }

}
