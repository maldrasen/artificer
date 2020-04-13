global.AnusInjuryDescriber = class AnusInjuryDescriber {

  constructor(context) {
    this._context = context;
  }

  get context() { return this._context; }
  get character() { return this.context.get('C').character; }
  get anus() { return this.context.get('C').anus; }

  async describeInjuries() {
    return `${await this.describeSmash()}`;
  }

  // In this case a smash injury is specifically referring to the ass and not
  // the anus. A smash injury is usually the result of a hard spaking or
  // whipping event.
  async describeSmash() {
    if (this.anus.smashLevel == 0) { return ''; }

    let description = Random.from((await Description.validForInjury('anus','smash',{
      character: this.character,
      anus: this.anus,
    })));

    if (description == null) {
      return Weaver.error(`Unable to find a smashed ass description`)
    }

    return `${description.d}`;
  }
}
