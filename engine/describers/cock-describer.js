global.CockDescriber = class CockDescriber {

  constructor(options) {
    if (options.character == null) { throw `The Character must at least be set.` }
    this._character = options.character;
    this._cock = options.cock;
    this._included = [];
  }

  get character() { return this._character; }
  get cock() { return this._cock; }

  addIncluded(key) { this._included.push(key); }
  isIncluded(key) { return this._included.indexOf(key) >= 0; }

  async updateDescription() {
    if (this.cock == null) { this._cock = await this.character.getCock(); }
    if (this.cock == null) { return ""; }

    let description = `
      ${this.cockDescription()}
      ${this.sheathDescription()}
      ${this.knotDescription()}
    `.replace(/\n/g,'').replace(/\s+/g,' ');

    this.cock.description = await Weaver.weaveWithCharacter(description,'C',this.character);

    await this.cock.save();
    return this.cock;
  }

  cockDescription() {
    let description = Random.from(Description.validForCock({
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
        `{{C::gender.His}} {{C::cock.cocks}} all swell to {{C::cock.huge(knot)}} {{C::cock.twoInch(knot)}} {{wide}} knots at their bases.`,
        `Each of {{C::gender.his}} {{C::cock.count}} {{C::cock.cocks}} swell to {{C::cock.aHuge(knot)}} {{C::cock.twoInch(knot)}} {{wide}} knot near the base.`,
        `At the base of each of {{C::gender.his}} {{C::cock.cocks}} is a {{C::cock.twoInch(knot)}} {{wide}} knot the size of {{C::cock.anApple(knot)}}.`,
      ]);
    }

    return Random.from([
      `{{C::gender.His}} {{C::cock.cock}} swells to {{C::cock.aHuge(knot)}} {{C::cock.twoInch(knot)}} {{wide}} knot near its base.`,
      `The base of {{C::gender.his}} {{C::cock.cock}} swells to {{C::cock.aHuge(knot)}} {{C::cock.twoInch(knot)}} {{wide}} knot.`,
      `At the base of {{C::gender.his}} {{C::cock.cock}} is a {{C::cock.aHuge(knot)}} knot the size of {{C::cock.anApple(knot)}}.`,
      `The knot at the base of {{C::gender.his}} {{C::cock.cock}} is the size of {{C::cock.anApple(knot)}} at around {{C::cock.twoInches(knot)}} {{wide}}.`,
    ]);
  }

  sheathDescription() {
    if (this.cock.sheath == null) { return '' }
    if (this.isIncluded('sheath')) { return ''; }

    if (this.cock.count == 2) {
      return Random.from([
        "Both of {{C::gender.his}} {{C::cock.cocks}} emerge from a tightly stretched {{C::cock.furrySheath}} between {{C::gender.his}} legs.",
        "{{C::gender.His}} twin {{C::cock.cocks}} extend out from an oversized {{C::cock.furrySheath}} .",
        "The two {{C::cock.big}} shafts emerge from a {{wide}} {{C::cock.furrySheath}}, situated between {{C::gender.his}} legs.",
      ]);
    }

    if (this.cock.count > 2) {
      return Random.from([
        "{{C::gender.His}} {{C::cock.count}} {{C::cock.cocks}} emerge from a hugely stretched {{C::cock.furrySheath}} between {{C::gender.his}} legs.",
        "{{C::gender.His}} {{C::cock.count}} {{C::cock.cocks}} extend out from a hugely oversized {{C::cock.furrySheath}}.",
        "The {{C::cock.count}} {{C::cock.big}} shafts emerge from an increadibly wide {{C::cock.furrySheath}} tucked between {{C::gender.his}} legs.",
      ]);
    }

    return Random.from([
      "{{C::gender.His}} {{C::cock.cock}} emerges from {{C::cock.aBig}} {{C::cock.furrySheath}} between {{C::gender.his}} legs.",
      "{{C::gender.His}} {{C::cock.cock}} lies tucked within {{C::cock.aBig}} {{C::cock.furrySheath}}.",
      "The {{C::cock.big}} shaft emerges from a {{C::cock.furrySheath}} tucked between {{C::gender.his}} legs.",
    ]);
  }

}
