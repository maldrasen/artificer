global.CockDescriber = class CockDescriber {

  constructor(options) {
    if (options.character == null) { throw `The Character must at least be set.` }
    this._character = options.character;
    this._cock = options.cock;
    this._previousInjury = null;
    this._included = [];
  }

  get character() { return this._character; }
  get cock() { return this._cock; }
  get previousInjury() { return this._previousInjury; }
  set previousInjury(i) { this._previousInjury = i; }

  addIncluded(key) { this._included.push(key); }
  isIncluded(key) { return this._included.indexOf(key) >= 0; }

  async updateDescription() {
    if (this.cock == null) { this._cock = await this.character.getCock(); }
    if (this.cock == null) { return ""; }

    let description = `
      ${this.cockDescription()}
      ${this.sheathDescription()}
      ${this.knotDescription()}
      ${this.ridgesDescription()}
      ${this.knobsDescription()}
      ${this.spinesDescription()}
      ${this.ballsDescription()}
      ${this.injuryDescriptions()}
    `.replace(/\n/g,'').replace(/\s+/g,' ');

    this.cock.description = await Weaver.weaveWithCharacter(description,'C',this.character);

    await this.cock.save();
    return this.cock;
  }

  cockDescription() {
    let description = Random.from(Description.validFor('cock',{
      character: this.character,
      cock: this.cock,
    }));

    if (description == null) {
      return Weaver.error(`Unable to find a cock description`);
    }

    if (description.includes) {
      each(description.includes, inclusion => {
        this.addIncluded(inclusion);
      });
    }

    return description.d;
  }

  knotDescription() {
    if (! this.cock.hasKnot) { return ''; }
    if (this.isIncluded('knot')) { return ''; }

    if (this.cock.count > 1) {
      return Random.from([
        `{{C::gender.His}} {{C::cock.cocks}} all swell to {{C::cock.huge(knot)}} {{C::cock.twoInch(knot)}} {{wide}}
         knots at their bases.`,
        `Each of {{C::gender.his}} {{C::cock.count}} {{C::cock.cocks}} swell to {{C::cock.aHuge(knot)}}
         {{C::cock.twoInch(knot)}} {{wide}} knot near the base.`,
        `At the base of each of {{C::gender.his}} {{C::cock.cocks}} is a {{C::cock.twoInch(knot)}} {{wide}} knot the
         size of {{C::cock.anApple(knot)}}.`,
      ]);
    }

    return Random.from([
      `{{C::gender.His}} {{C::cock.cock}} swells to {{C::cock.aHuge(knot)}} {{C::cock.twoInch(knot)}} {{wide}} knot
       near its base.`,
      `The base of {{C::gender.his}} {{C::cock.cock}} swells to {{C::cock.aHuge(knot)}} {{C::cock.twoInch(knot)}}
       {{wide}} knot.`,
      `At the base of {{C::gender.his}} {{C::cock.cock}} is a {{C::cock.aHuge(knot)}} knot the size of
       {{C::cock.anApple(knot)}}.`,
      `The knot at the base of {{C::gender.his}} {{C::cock.cock}} is the size of {{C::cock.anApple(knot)}} at around
       {{C::cock.twoInches(knot)}} {{wide}}.`,
    ]);
  }

  sheathDescription() {
    if (this.cock.sheath == null) { return '' }
    if (this.isIncluded('sheath')) { return ''; }

    if (this.cock.count == 2) {
      return Random.from([
        `Both of {{C::gender.his}} {{C::cock.cocks}} emerge from a tightly stretched {{C::cock.furrySheath}} between
         {{C::gender.his}} legs.`,
        `{{C::gender.His}} twin {{C::cock.cocks}} extend out from an oversized {{C::cock.furrySheath}}.`,
        `The two {{C::cock.big}} shafts emerge from a {{wide}} {{C::cock.furrySheath}}, situated between
         {{C::gender.his}} legs.`,
      ]);
    }

    if (this.cock.count > 2) {
      return Random.from([
        `{{C::gender.His}} {{C::cock.count}} {{C::cock.cocks}} emerge from a hugely stretched {{C::cock.furrySheath}}
         between {{C::gender.his}} legs.`,
        `{{C::gender.His}} {{C::cock.count}} {{C::cock.cocks}} extend out from a hugely oversized
         {{C::cock.furrySheath}}.`,
        `The {{C::cock.count}} {{C::cock.big}} shafts emerge from an increadibly wide {{C::cock.furrySheath}} tucked
         between {{C::gender.his}} legs.`,
      ]);
    }

    return Random.from([
      `{{C::gender.His}} {{C::cock.cock}} emerges from {{C::cock.aBig}} {{C::cock.furrySheath}} between {{C::gender.his}} legs.`,
      `{{C::gender.His}} {{C::cock.cock}} lies tucked within {{C::cock.aBig}} {{C::cock.furrySheath}}.`,
      `The {{C::cock.big}} shaft emerges from a {{C::cock.furrySheath}} tucked between {{C::gender.his}} legs.`,
    ]);
  }

  ridgesDescription() {
    if (this.cock.shape != 'dragon') { return ''; }
    if (this.isIncluded('ridges')) { return ''; }

    return Random.from([
      `A series of thick bony ridges run down the entire length of {{C::gender.his}} {{C::cock.cock}}.`,
      `{{C::gender.His}} {{C::cock.cock}} has a series of thick bony ridges that extend {{C::cock.twoInches(ridge)}}
       from {{C::gender.his}} cock's scaley skin.`,
      `Thick bony ridges protrude {{C::cock.twoInches(ridge)}} from the surface of {{C::gender.his}} shaft.`,
      `The entire shaft of dragon meat is ringed with thick bony ridges.`,
    ]);
  }

  knobsDescription() {
    if (! this.cock.hasKnobs) { return ''; }
    if (this.isIncluded('knobs')) { return ''; }

    let knobHeight = this.cock.knobHeight;
    let choices = [];

    if (this.cock.count == 1) {
      ArrayUtility.addAll(choices,[
        `The entire length of {{C::gender.his}} cock is textured with gnarled {{C::cock.acorn(knob)}} sized bumps.`,
        `{{C::gender.His}} {{C::cock.cock}} is studded, seemingly at random, with hard nubs the size of
         {{C::cock.acorns(knob)}}.`,
        `Gnarled, {{C::cock.acorn(knob)}} sized bulges adorn every inch of {{C::gender.his}} shaft.`
      ]);

      if (knobHeight > 12) { ArrayUtility.addAll(choices,[
        `The entire length of {{C::gender.his}} cock is textured with gnarled {{C::cock.twoInches(knob)}} high bumps,
         each the size of {{C::cock.anAcorn(knob)}}`,
        `{{C::gender.His}} {{C::cock.cock}} is studded, seemingly at random, with hard {{C::cock.twoInches(knob)}} wide
         knobs, each the size of {{C::cock.anAcorn(knob)}}.`,
      ]); }

      return Random.from(choices);
    }

    ArrayUtility.addAll(choices,[
      `{{C::gender.His}} {{C::cock.count}} {{C::cock.cocks}} are {{C::cock.both}} textured with gnarled
       {{C::cock.acorn(knob)}} sized bumps.`,
      `{{C::gender.His}} {{C::cock.cocks}} are studded, seemingly at random, with hard nubs the size of
       {{C::cock.acorns(knob)}}.`,
      `Gnarled, {{C::cock.acorn(knob)}} sized bulges, adorn every inch of {{C::gender.his}} shafts.`,
    ]);

    if (knobHeight > 12) { ArrayUtility.addAll(choices,[
      `The {{C::cock.count}} {{C::cock.cocks}} are {{C::cock.both}} textured with gnarled {{C::cock.twoInches(knob)}}
       bumps, each the size of {{C::cock.anAcorn(knob)}}.`,
      `{{C::gender.His}} {{C::cock.cocks}} are studded, seemingly at random, with hard {{C::cock.twoInches(knob)}} wide
       knobs, each the size of {{C::cock.anAcorn(knob)}}.`,
      `Thick, {{C::cock.acorn(knob)}} sized bulges, adorn every inch of {{C::gender.his}} shafts.`,
    ]); }

    return Random.from(choices);
  }

  spinesDescription() {
    if (! this.cock.hasSpines) { return ''; }
    if (this.isIncluded('spines')) { return ''; }

    let spineHeight = this.cock.spineHeight;

    if (this.cock.count == 1) {
      if (spineHeight < 6) { return Random.from([
        `The entire length of {{C::gender.his}} cock is covered in sharp little, backward facing spines.`,
        `Like a cat, {{C::gender.his}} cock is covered in sharp little, backward facing spines.`,
        `Small sharp spikes adorn the length of {{C::gender.his}} cock, giving it a rough feline texture.`,
      ]); }

      if (spineHeight < 25) { return Random.from([
        `The entire length of {{C::gender.his}} cock is covered in hard, backward facing spines. The spines are
         {{C::cock.twoInch(spine)}} long around the crown of {{C::gender.his}} cockhead, but grow shorter near the
         base.`,

        `Firm {{C::cock.twoInches(spine)}} long spines adorn the length of {{C::gender.his}} cock, facing backwards so
         that they rub painfully at whatever {{C::gender.his}} cock is thrust into.`,

        `Wicked {{C::cock.twoInches(spine)}} long, backward facing spines completely cover {{C::gender.his}}
         {{C::cock.cock}}. The wide, dull spikes are thickest around the crown of {{C::gender.his}} cockhead and
         flatten out near the base.`,
      ]); }

      return Random.from([
        `Thick {{C::cock.twoInch(spine)}} long spines cover the length of {{C::gender.his}} cock. The bony spurs are
         thick and dull, but stiff like short fingers protruding backwards from the surface of {{C::gender.his}} cock.`,

        `{{C::gender.His}} {{C::cock.cock}} is a true cunt destroyer; it's entire surface is covered in thick
         {{C::cock.twoInch(spine)}} long spikes. The spines are firm and dull, like thick fingers made to rake
         painfully against whatever they're thrust into. The spines are thickest around {{C::gender.his}} cockhead,
         but grow shorter near the base.`
      ]);
    }

    if (spineHeight < 6) { return Random.from([
      `{{C::gender.His}} cocks are {{C::cock.both}} covered in sharp little, backward facing spines like a cat's.`,
      `Like a cat, {{C::gender.his}} {{C::cock.cocks}} are covered in sharp little, backward facing spines.`,
      `Small sharp spikes adorn {{C::cock.both}} of {{C::gender.his}} cocks, giving them a rough feline texture.`,
    ]); }

    if (spineHeight < 25) { return Random.from([
      `{{C::gender.his}} {{C::cock.count}} {{C::cock.cocks}} are covered in hard, backward facing spines. The spines
       are {{C::cock.twoInches(spine)}} long around the heads of {{C::gender.his}} {{C::cock.cocks}}, but grow shorter
       near their bases.`,

      `Firm {{C::cock.twoInch(spine)}} long spines adorn the length of {{C::gender.his}} {{C::cock.cocks}}, facing
       backwards so that they rub painfully at whatever they're thrust into.`,

      `Wicked {{C::cock.twoInch(spine)}} long, backward facing spines completely cover {{C::cock.both}} of
       {{C::gender.his}} {{C::cock.cocks}}. The thick, dull spikes are thickest around the crowns of {{C::gender.his}}
       cockheads and thin out near their base where they lie flat.`
    ]); }

    return Random.from([
      `Thick {{C::cock.twoInch(spine)}} long spines cover the length {{C::gender.his}} {{C::cock.cocks}}. The bony
       spurs are thick and dull, but stiff like short fingers protruding backwards from the surface of
       {{C::gender.his}} {{C::cock.cocks}}.`,

      `{{C::gender.His}} {{C::cock.count}} {{C::cock.cocks}} are true cunt destroyers, their surfaces are covered in
       thick {{C::cock.twoInch(spine)}} long spurs. They're firm and dull, like thick fingers made to rake painfully
       against whatever they're thrust into. The spines are thickest around {{C::gender.his}} cockheads, but grow
       shorter near their base.`
    ]);
  }

  ballsDescription() {
    if (this.cock.internalBalls) { return ''; }

    if (this.cock.sheath) { return Random.from([
      `{{C::gender.His}} {{C::balls.big}} {{C::balls.furryBallsack}} is the size of {{C::balls.anApple}}.`,
      `{{C::gender.His}} {{C::balls.big}} {{C::balls.furryBallsack}} hangs tightly up against {{C::gender.his}}
       cocksheath and measures {{C::balls.fourInches}} across.`,
      `{{C::gender.He}} has {{C::balls.aBig}} {{C::balls.apple}} sized {{ballsack}} hanging under {{C::gender.his}}
       {{C::cock.furrySheath}}.`,
      `{{C::gender.His}} {{C::balls.big}} {{testicles}} each measure {{C::balls.twoInches}} across, tucked in a tight
       {{C::balls.apple}} sized {{ballsack}} hanging under {{C::gender.his}} {{C::cock.furrySheath}}.`
    ]); }

    return Random.from([
      `{{C::gender.He}} has {{C::balls.aBig}} {{C::balls.apple}} sized {{ballsack}}.`,
      `{{C::gender.His}} {{C::balls.big}} {{ballsack}} is the size of {{C::balls.anApple}}.`,
      `{{C::gender.He}} has {{C::balls.big}} {{C::balls.egg}} sized {{testicles}} tucked in a tight wrinkled
       {{ballsack}} measuring {{C::balls.fourInches}} across.`,
      `{{C::gender.His}} {{C::balls.big}} {{testicles}} each measure {{C::balls.twoInches}} across, tucked in a tight
       crinkled {{C::balls.apple}} sized {{ballsack}}.`
    ]);
  }

  // === Injuries ===

  injuryDescriptions() {
    return `
      ${this.describeBlight()}
      ${this.describeBurn()}
      ${this.describeSmash()}
    `;
  }

  describeBlight() {
    if (this.cock.blightLevel == 0) { return ''; }
    let hisCockHasBeen = this.injuryStart(this.cock.smashPlace);

    this.previousInjury = {
      type: 'blight',
      place: this.cock.blightPlace,
    }

    let description = Random.from(Description.validForInjury('cock','blight',{
      character: this.character,
      cock: this.cock,
    }));

    if (description == null) {
      return Weaver.error(`Unable to find a blighted cock description`)
    }

    return `${hisCockHasBeen} ${description.d}`
  }

  describeBurn() {
    if (this.cock.burnLevel == 0) { return ''; }
    let hisCockHasBeen = this.injuryStart(this.cock.smashPlace);

    this.previousInjury = {
      type: 'burn',
      place: this.cock.burnPlace,
    }

    let description = Random.from(Description.validForInjury('cock','burn',{
      character: this.character,
      cock: this.cock,
    }));

    if (description == null) {
      return Weaver.error(`Unable to find a burnt cock description`)
    }

    return `${hisCockHasBeen} ${description.d}`
  }

  describeSmash() {
    if (this.cock.smashLevel == 0) { return ''; }

    let hisCockHasBeen = this.injuryStart('balls');

    this.previousInjury = {
      type: 'smash',
      place: 'balls',
    }

    let description = Random.from(Description.validForInjury('cock','smash',{
      character: this.character,
      cock: this.cock,
    }));

    if (description == null) {
      return Weaver.error(`Unable to find a smashed cock description`)
    }

    return `${hisCockHasBeen} ${description.d}`;
  }

  // === Segments ===

  // The injury start segment considers the previous injury described, really
  // we just need to distinguish between cock and balls.
  injuryStart(place) {
    if (this.previousInjury == null) {
      if (place == 'balls') { return Random.from([
        '{{C::gender.His}} {{ballsack}} has been',
        '{{C::gender.His}} {{testicles}} have been',
        'It looks like {{C::gender.his}} {{ballsack}} has been',
        'It looks like {{C::gender.his}} {{testicles}} have been',
      ]); }

      return Random.from([
        `{{C::gender.His}} {{C::cock.cock}} has been`,
        'It looks like {{C::gender.his}} {{C::cock.cock}} has been',
      ]);
    }

    if (place == 'balls' && this.previousInjury.place == 'balls') { return Random.from([
      `They've also been`,
      `Then, {{C::gender.his}} {{ballsack}} has also been`,
      `Then, {{C::gender.his}} {{testicles}} have also been`,
    ]); }

    if (place == 'balls' && this.previousInjury.place != 'balls') { return Random.from([
      `Then, {{C::gender.his}} {{ballsack}} has been`,
      `Then, {{C::gender.his}} {{testicles}} have been`,
    ]); }

    if (place != 'balls' && this.previousInjury.place == 'balls') {
      return `Then, {{C::gender.his}} {{C::cock.cock}} has been`;
    }

    return Random.from([
      `Then {{C::gender.his}} {{C::cock.cock}} was`,
      `Then it was`,
    ]);
  }

}
