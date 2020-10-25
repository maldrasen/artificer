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
    return '[TODO: Pussy Description]';
  }

}
