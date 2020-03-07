global.ConsentCalculator = class ConsentCalculator {

  constructor(character) {
    this._character = character;
  }

  get aspects() { return this._aspects; }
  get character() { return this._character; }
  get player() { return this._player; }
  get baselineConsent() { return this._baselineConsent; }

  // Get all of the models that will be needed to determine consent in this
  // function, that way everything else can be synchronous. This could be
  // modified to use another character instead of the player if we at some
  // point need to calculate consent between two minions, but I don't think that
  // will really ever be needed.
  async init() {
    this._player = await Player.instance();
    this._aspects = {}

    each((await this.character.getCharacterAspects()), aspect => {
      this._aspects[aspect.code] = aspect.level;
    });
  }

  // To get the consent level for an action we need to calculate a factor
  // specific to that action. The starting factor is determined by the action
  // difficulty. It can then be increased by complementing aspects, or
  // decreased by conflicting asepects. If the character has an injury in the
  // effected area that also reduces the consent factor.
  //
  // Difficulty Chart:
  //        0 (2)    very easy       - cuddling, backrubs, headpats
  //        1 (1.5)  easy            - cock licking, handjob, fingering
  //        2 (1.1)  pretty easy     - blowjob
  //        3 (1)    average         - sex
  //        4 (0.9)  difficult       - anal sex, face slapping
  //        5 (0.75) very difficult  - fisting, tit punching
  //        6 (0.5)  impossible      - wound fucking, shit eating
  async getConsentDetails(action) {
    let difficultyFactor = [2, 1.5, 1.1, 1, 0.9, 0.75, 0.5][action.difficulty]||1;
    let genderFactor = this.calculateGenderFactor();
    let injuryFactor = await this.calculateInjuryFactor(action);
    let aspectFactor = this.calculateAspectFactor(action);
    let overallFactor = difficultyFactor * genderFactor * injuryFactor * aspectFactor;

    return {
      difficultyFactor: TextUtility.formatNumber(difficultyFactor),
      genderFactor: TextUtility.formatNumber(genderFactor),
      injuryFactor: TextUtility.formatNumber(injuryFactor),
      aspectFactor: TextUtility.formatNumber(aspectFactor),
      overallFactor: TextUtility.formatNumber(overallFactor),
      fear: this.character.fear,
      desire: Math.round((this.character.loyalty + this.character.lust) / 2),
      level: this.calculateConsent(overallFactor),
    };
  }

  // Using the character's four possible gender aspects determines how
  // attracted the character is to the player. If the player is a futa the
  // preferences are applied twice. This might be good or bad for the futa
  // depending on the situation. Negative aspects effect consent more strongly,
  // so if the character has either androphobic or gynephobic the overall
  // consent level will drop for everything. The flipside of this is that
  // strongly bisexual characters get their aspects applied twice which means
  // they're more likely to consent to everything.
  calculateGenderFactor() {
    let factor = 1;
    if (['male','futa'].indexOf(this.player.genderCode) >= 0) {
      if (this.aspects['androphilic'] == 2) { factor *= 1.2;  }
      if (this.aspects['androphilic'] == 3) { factor *= 1.5;  }
      if (this.aspects['androphobic'] == 1) { factor *= 0.5;  }
      if (this.aspects['androphobic'] == 2) { factor *= 0.25; }
      if (this.aspects['androphobic'] == 3) { factor *= 0.1;  }
    }
    if (['female','futa'].indexOf(this.player.genderCode) >= 0) {
      if (this.aspects['gynephilic'] == 2) { factor *= 1.2;  }
      if (this.aspects['gynephilic'] == 3) { factor *= 1.5;  }
      if (this.aspects['gynephobic'] == 1) { factor *= 0.5;  }
      if (this.aspects['gynephobic'] == 2) { factor *= 0.25; }
      if (this.aspects['gynephobic'] == 3) { factor *= 0.1;  }
    }
    return factor;
  }

  // If a character is weakly masochististic (level 1) they only get an
  // overall boost to their consent to painful actions. A masochististic
  // character (level 2) will ignore the pain from their wounds. A strongly
  // masochististic (level 3) welcomes the extra pain their wounds bring.
  //
  // Head actions use the head injuries which are tracked as critical
  // injuries, but when used for determining consent they're the same as
  // the other painful injury types. Body is the same as head, but it's
  // included as a catch-all for any action that's not using a normal part.
  async calculateInjuryFactor(action) {
    let masochism = this.aspects['masochist'];
    if (masochism == 2) { return 1; }

    let levels = 0;
    if (action.effects == 'body')  { levels = await this.character.totalCriticalLevels(); }
    if (action.effects == 'head')  { levels = await this.character.totalCriticalLevels(); }
    if (action.effects == 'anus')  { levels = await this.character.getAnusPainLevel();    }
    if (action.effects == 'cock')  { levels = await this.character.getCockPainLevel();    }
    if (action.effects == 'pussy') { levels = await this.character.getPussyPainLevel();   }
    if (action.effects == 'tits')  { levels = await this.character.getTitsPainLevel();    }

    if (masochism == 3) {
      if (levels == 0) { return 0.9; }
      if (levels == 1) { return 1;   }
      if (levels == 2) { return 1.1; }
      if (levels == 3) { return 1.2; }
      if (levels >= 4) { return 1.5; }
    }

    if (levels == 0) { return 1;   }
    if (levels == 1) { return 0.9; }
    if (levels == 2) { return 0.7; }
    if (levels == 3) { return 0.4; }
    if (levels >= 4) { return 0.1; }
  }

  // Having aspects that complement the action raises the consent level whereas
  // aspects that conflict with the action lowers it. Conflicting aspects have
  // a greater influence than complementing aspects.
  calculateAspectFactor(action) {
    let factor = 1;

    each(action.complementing, code => {
      if (this.aspects[code] == 1) { factor *= 1.1; }
      if (this.aspects[code] == 2) { factor *= 1.2; }
      if (this.aspects[code] == 3) { factor *= 1.3; }
    });

    each(action.conflicting, code => {
      if (this.aspects[code] == 1) { factor *= 0.9; }
      if (this.aspects[code] == 2) { factor *= 0.7; }
      if (this.aspects[code] == 3) { factor *= 0.5; }
    });

    return factor;
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
    if (y > ( 3 / 20 * x) + 80) { return 'enthusiastic'; }
    if (y > ( 2 / 5  * x) + 50) { return 'consent'; }
    if (y > (-3 / 10 * x) + 40) { return 'reluctant'; }
    return 'rape'
  }

}
