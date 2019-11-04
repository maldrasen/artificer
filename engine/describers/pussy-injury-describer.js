global.PussyInjuryDescriber = class PussyInjuryDescriber {

  constructor(character, pussy) {
    this._character = character;
    this._pussy = pussy;
    this._previousInjury = null;
  }

  get character() { return this._character; }
  get pussy() { return this._pussy; }
  get previousInjury() { return this._previousInjury; }
  set previousInjury(i) { this._previousInjury = i; }

  describeInjuries() {
    return `[TODO: Pussy Injury Descriptions]`;
  }
}
