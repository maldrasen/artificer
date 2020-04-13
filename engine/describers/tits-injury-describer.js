global.TitsInjuryDescriber = class TitsInjuryDescriber {

  constructor(character, tits, nipples) {
    this._character = character;
    this._tits = tits;
    this._nipples = nipples;
    this._previousInjury = null;
  }

  get character() { return this._character; }
  get nipples() { return this._nipples; }
  get tits() { return this._tits; }
  get previousInjury() { return this._previousInjury; }
  set previousInjury(i) { this._previousInjury = i; }

  async describeInjuries() {
    return `
      ${await this.describeBlight()}
      ${await this.describeBurn()}
      ${await this.describeSmash()}
    `;
  }

  async describeBlight() {
    if (this.tits.blightLevel == 0) { return ''; }
    let herTitsHaveBeen = this.injuryStart(this.tits.blightPlace);

    this.previousInjury = {
      type: 'blight',
      place: this.tits.blightPlace,
    }

    let description = Random.from((await Description.validForInjury('tits','blight',{
      character: this.character,
      tits: this.tits,
      nipples: this.nipples
    })));

    if (description == null) {
      return Weaver.error(`Unable to find a blighted tit description`)
    }

    return `${herTitsHaveBeen} ${description.d}`
  }

  async describeBurn() {
    if (this.tits.burnLevel == 0) { return ''; }
    let herTitsHaveBeen = this.injuryStart(this.tits.burnPlace);

    this.previousInjury = {
      type: 'burn',
      place: this.tits.burnPlace,
    }

    let description = Random.from((await Description.validForInjury('tits','burn',{
      character: this.character,
      tits: this.tits,
      nipples: this.nipples
    })));

    if (description == null) {
      return Weaver.error(`Unable to find a burnt tit description`)
    }

    return `${herTitsHaveBeen} ${description.d}`
  }

  // In an attempt to avoid a whole other layer of permutations The smashed
  // tits descriptions also include a furryAddendum property in order to
  // explain why you can see bruises on a furry character. (It's Because chest
  // fur is generally thinner) I think this is really only used for bruises
  // on chests. Everything else should be pretty obvious, although body smash
  // descriptions may need something similar.
  async describeSmash() {
    if (this.tits.smashLevel == 0) { return ''; }

    let herTitsHaveBeen = this.injuryStart(this.tits.smashPlace);

    this.previousInjury = {
      type: 'smash',
      place: this.tits.smashPlace,
    }

    let description = Random.from((await Description.validForInjury('tits','smash',{
      character: this.character,
      tits: this.tits,
      nipples: this.nipples
    })));

    if (description == null) {
      return Weaver.error(`Unable to find a smashed tit description`)
    }

    if (this.character.species.isFurry && description.furryAddendum) {
      let bruisesAre = {
        'red-color':     `The bright red color is`,
        'bruise':        `The purple bruise is`,
        'bruises':       `The bruises are`,
        'deep-bruising': `The deep bruising is`,
      }[description.furryAddendum];

      return `${herTitsHaveBeen} ${description.d} ${bruisesAre} visible even
              under {{C::gender.his}} thin {{C::body.furColor}} chest fur.`;
    }

    return `${herTitsHaveBeen} ${description.d}`;
  }

  // The injury start segment considers the previous injury described, and
  // notes if this injury was on the same breast as the last.
  injuryStart(place) {
    if (this.previousInjury == null) {
      if (place == 'all') { return Random.from([
        '{{C::gender.His}} {{tits}} have been',
        'It looks like {{C::gender.his}} {{tits}} have been',
      ]); }

      return Random.from([
        `{{C::gender.His}} ${place} {{tit}} has been`,
        `One of {{C::gender.his}} {{tits}} has been`,
        `It looks like one of {{C::gender.his}} {{tits}} has been`,
      ]);
    }

    if (place == 'all' && this.previousInjury.place == 'all') { return Random.from([
      `They've also been`,
      `Then, {{C::gender.his}} {{tits}} have also been`
    ]); }

    if (place != 'all' && this.previousInjury.place == 'all') { return Random.from([
      `Then, {{C::gender.his}} ${place} {{tit}} has also been`,
      `One of {{C::gender.his}} {{tits}} has also been`,
    ]); }

    if (place == this.previousInjury.place) { return Random.from([
      `Then, the same {{tit}} has also been`,
      `The same {{tit}} has also been`,
    ]); }

    if (place != this.previousInjury.place) { return Random.from([
      `Then, {{C::gender.his}} other {{tit}} has also been`,
      `{{C::gender.His}} other {{tit}} has also been`,
    ]); }
  }

}
