global.CockInjuryDescriber = class CockInjuryDescriber {

  constructor(context) {
    this._context = context;
    this._previousInjury = null;
  }

  get context() { return this._context; }
  get character() { return this.context.get('C').character; }
  get cock() { return this.context.get('C').cock; }

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
    if (this.cock.blightLevel == 0) { return ''; }
    let hisCockHasBeen = this.injuryStart(this.cock.blightPlace);

    this.previousInjury = {
      type: 'blight',
      place: this.cock.blightPlace,
    }

    let description = Random.from((await Description.validForInjury('cock','blight',{
      character: this.character,
      cock: this.cock,
    })));

    if (description == null) {
      return Weaver.error(`Unable to find a blighted cock description`)
    }

    return `${hisCockHasBeen} ${description.d}`
  }

  async describeBurn() {
    if (this.cock.burnLevel == 0) { return ''; }
    let hisCockHasBeen = this.injuryStart(this.cock.burnPlace);

    this.previousInjury = {
      type: 'burn',
      place: this.cock.burnPlace,
    }

    let description = Random.from((await Description.validForInjury('cock','burn',{
      character: this.character,
      cock: this.cock,
    })));

    if (description == null) {
      return Weaver.error(`Unable to find a burnt cock description`)
    }

    return `${hisCockHasBeen} ${description.d}`
  }

  async describeSmash() {
    if (this.cock.smashLevel == 0) { return ''; }

    let hisCockHasBeen = this.injuryStart('balls');

    this.previousInjury = {
      type: 'smash',
      place: 'balls',
    }

    let description = Random.from((await Description.validForInjury('cock','smash',{
      character: this.character,
      cock: this.cock,
    })));

    if (description == null) {
      return Weaver.error(`Unable to find a smashed cock description`)
    }

    return `${hisCockHasBeen} ${description.d}`;
  }

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
