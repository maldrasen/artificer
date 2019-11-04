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
    return `[TODO: Anus Injury Descriptions]`;
  }
}
