global.SexAction = class SexAction {

  // SexActions are used by the ConsentCalculator when determining a minion's
  // consent levels.
  //
  // SexActions can include styles that change how the consent for the action
  // is calculated. They shouldn't be used to completely change an action. The
  // intent is that they just add an aspect or two or adjust the action
  // difficulty in one way or another. All actions should have a default,
  // unstyled mode as well.
  //
  //    styles:[
  //      { code:'rough',   difficulty:4, complementing:['submissive'], conflicting:['dominant']},
  //      { code:'abusive', difficulty:5, complementing:['masochist'],  conflicting:['dominant']},
  //    ]
  //
  // Remember, the SexActions are classes, but they are properties of forms.
  // They should not have mutible state. They are immutable classes that
  // include a few functions.
  constructor(properties) {
    this._difficulty = properties.difficulty;
    this._effects = properties.effects || 'body';
    this._complementing = properties.complementing || [];
    this._conflicting = properties.conflicting || [];
    this._styles = properties.styles || [];
  }

  get effects() { return this._effects; }

  // SexAction Difficulty Chart:
  //   0 (2)    very easy       - cuddling, backrubs, headpats
  //   1 (1.5)  easy            - cock licking, handjob, fingering
  //   2 (1.1)  pretty easy     - blowjob
  //   3 (1)    average         - sex
  //   4 (0.9)  difficult       - anal sex, face slapping
  //   5 (0.75) very difficult  - fisting, tit punching
  //   6 (0.5)  impossible      - wound fucking, shit eating
  getDifficultyFactor(code) {
    return [2, 1.5, 1.1, 1, 0.9, 0.75, 0.5][this.getDifficulty(code)]||1;
  }

  getDifficulty(code) {
    return this._styles[code] ? this._styles[code].difficulty : this._difficulty;
  }

  // The complementing and conflicting properties on the action and on the
  // action's styles can be null, an array, or a function. Sometimes the list
  // of aspects change depending on the genders of those involved.
  async getComplementingAspects(style, player, character) {
    return [
      ...(await aspectsFrom(this._complementing, player, character)),
      ...(await aspectsFrom((this._styles[style]||{}).complementing, player, character))
    ];
  }

  async getConflictingAspects(style, player, character) {
    return [
      ...(await aspectsFrom(this._conflicting, player, character)),
      ...(await aspectsFrom((this._styles[style]||{}).conflicting, player, character))
    ];
  }
}

async function aspectsFrom(property, player, character) {
  if (property == null) { return []; }
  if (typeof property == 'function') { return property(player,character); }
  return property;
}
