global.AnusInjuryDescriber = class AnusInjuryDescriber {

  constructor(character, anus) {
    this._character = character;
    this._anus = anus;
    this._previousInjury = null;
  }

  get character() { return this._character; }
  get anus() { return this._anus; }
  get previousInjury() { return this._previousInjury; }
  set previousInjury(i) { this._previousInjury = i; }

  describeInjuries() {
    return `${this.describeSmash()}`;
  }

  // In this case a smash injury is specifically referring to the ass and not
  // the anus. A smash injury is usually the result of a hard spaking or
  // whipping event.
  describeSmash() {
    if (this.anus.smashLevel == 0) { return ''; }

    let description = Random.from(Description.validForInjury('anus','smash',{
      character: this.character,
      anus: this.anus,
    }));

    if (description == null) {
      return Weaver.error(`Unable to find a smashed ass description`)
    }

    return `${description.d}`;
  }
}
