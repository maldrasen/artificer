global.PussyInjuryDescriber = class PussyInjuryDescriber {

  constructor(context) {
    this._context = context;
  }

  get context() { return this._context; }
  get character() { return this.context.get('C').character; }
  get pussy() { return this.context.get('C').pussy; }

  async describeInjuries() {
    return `[TODO: Pussy Injury Descriptions]`;
  }
}
