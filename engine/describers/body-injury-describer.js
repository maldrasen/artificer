global.BodyInjuryDescriber = class BodyInjuryDescriber {

  constructor(character, body) {
    this._character = character;
    this._body = body;
    this._previousInjury = null;
  }

  get character() { return this._character; }
  get body() { return this._body; }
  get previousInjury() { return this._previousInjury; }
  set previousInjury(i) { this._previousInjury = i; }

  headInjuries() {
    return `
      ${this.describeSmash()}
    `;
  }

  bodyInjuries() {
    return ''
  }

  describeSmash() {
    if (this.body.smashLevel == 0) { return ''; }

    let hisHeadHasBeen = `{{C::gender.His}} head has been`;

    this.previousInjury = {
      type: 'smash',
    }

    let description = Random.from(Description.validForInjury('head','smash',{
      character: this.character,
      body: this.body,
    }));

    if (description == null) {
      return Weaver.error(`Unable to find a smashed head description`)
    }

    return `${hisHeadHasBeen} ${description.d}`;
  }

  // === Segments ===


  // We'll need something like this when there is more than one damage type.
  // No idea how they will partition out at the moment though.
  // injuryStart(place) {
  //   if (this.previousInjury == null) {
  //     if (place == 'balls') { return Random.from([
  //       '{{C::gender.His}} {{ballsack}} has been',
  //       '{{C::gender.His}} {{testicles}} have been',
  //       'It looks like {{C::gender.his}} {{ballsack}} has been',
  //       'It looks like {{C::gender.his}} {{testicles}} have been',
  //     ]); }
  //
  //     return Random.from([
  //       `{{C::gender.His}} {{C::cock.cock}} has been`,
  //       'It looks like {{C::gender.his}} {{C::cock.cock}} has been',
  //     ]);
  //   }
  //
  //   if (place == 'balls' && this.previousInjury.place == 'balls') { return Random.from([
  //     `They've also been`,
  //     `Then, {{C::gender.his}} {{ballsack}} has also been`,
  //     `Then, {{C::gender.his}} {{testicles}} have also been`,
  //   ]); }
  //
  //   if (place == 'balls' && this.previousInjury.place != 'balls') { return Random.from([
  //     `Then, {{C::gender.his}} {{ballsack}} has been`,
  //     `Then, {{C::gender.his}} {{testicles}} have been`,
  //   ]); }
  //
  //   if (place != 'balls' && this.previousInjury.place == 'balls') {
  //     return `Then, {{C::gender.his}} {{C::cock.cock}} has been`;
  //   }
  //
  //   return Random.from([
  //     `Then {{C::gender.his}} {{C::cock.cock}} was`,
  //     `Then it was`,
  //   ]);
  // }


}
