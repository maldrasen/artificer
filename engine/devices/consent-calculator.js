global.ConsentCalculator = class ConsentCalculator {

  constructor(character) {
    this._character = character;
  }

  get aspects() { return this._aspects; }
  get character() { return this._character; }
  get player() { return this._player; }
  get baselineConsent() { return this._baselineConsent; }

  async init() {
    this._aspects = await this.character.getCharacterAspects();
    this._player = await Player.instance();
  }

  // To get the consent level for an action we need to calculate a factor
  // specific to that action. The starting factor is determined by the action
  // difficulty. It can then be increased by complementing aspects, or
  // decreased by conflicting asepects. If the character has an injury in the
  // effected area that also reduces the consent factor.
  //
  // Difficulty Chart:
  //        0 (0.5)  very easy       - cuddling, backrubs, headpats
  //        1 (0.75) easy            - cock licking, handjob, fingering
  //        2 (0.9)  pretty easy     - blowjob
  //        3 (1)    average         - sex
  //        4 (1.1)  difficult       - anal sex, face slapping
  //        5 (1.5)  very difficult  - fisting, tit punching
  //        6 (2)    impossible      - wound fucking, shit eating
  getConsentLevel(action) {
    let factor = [0.5, 0.75, 0.9, 1, 1.1, 1.5, 2][action.difficulty]||1;
    console.log("Starting Difficulty:",factor);
    return this.calculateConsent(factor);
  }

  // Consent is based on the consent graph I put together. It's basically a
  // chart with four regions for the four baseline consent states, rape,
  // reluctant, consent, and enthusiastic. These three regions are defined by
  // three lines, so when calculating baseline consent I just determine if the
  // point (fear,desire) is over the enthusiastic line, over the consent line,
  // or over the reluctant line.
  //
  // The desire is normally just the average of the character's lust and
  // loyalty. The factor is a per action multiplier that pulls the desire for
  // an action either up or down.
  //
  //    Rape Line:           y = -3/10x + 40
  //    Consent Line:        y =   2/5x + 50
  //    Enthusiastic Line:   y =  3/20x + 80
  //
  calculateConsent(factor) {
    let x = this.character.fear;
    let y = factor * (this.character.loyalty + this.character.lust) / 2;

    console.log(`Consent(${x},${y})`);

    if (y > ( 3 / 20 * x) + 80) { return 'enthusiastic'; }
    if (y > ( 2 / 5  * x) + 50) { return 'consent'; }
    if (y > (-3 / 10 * x) + 40) { return 'reluctant'; }
    return 'rape'
  }

}
