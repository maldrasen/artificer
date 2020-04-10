global.BodyInjuryDescriber = class BodyInjuryDescriber {

  constructor(character, body, mouth) {
    this._character = character;
    this._body = body;
    this._mouth = mouth;
    this._previousInjury = null;
  }

  get character() { return this._character; }
  get body() { return this._body; }
  get mouth() { return this._mouth; }
  get previousInjury() { return this._previousInjury; }
  set previousInjury(i) { this._previousInjury = i; }

  headInjuries() {
    return `
      ${this.describeMouthSmash()}
    `;
  }

  bodyInjuries() {
    return ''
  }

  describeMouthSmash() {
    if (this.mouth.smashLevel == 0) { return ''; }

    this.previousInjury = {
      type: 'smash',
    }

    let description = Random.from(Description.validForInjury('head','smash',{
      character: this.character,
      mouth: this.mouth,
    }));

    if (description == null) {
      return Weaver.error(`Unable to find a smashed head description`);
    }

    return `${description.d} ${this.describeMissingTeeth()}`;
  }

  describeMissingTeeth() {
    let teethMissing = this.mouth.smashTeethMissing;
    if (teethMissing == 0) {
      return '';
    }

    if (teethMissing == 1) { return Random.from([
      `It looks like {{he}}'s missing a tooth as well.`,
      `{{He}}'s missing a tooth as well.`
    ]); }

    if (teethMissing == 2) { return Random.from([
      `It looks like {{he}} may be missing a couple of teeth as well.`,
      `{{He}}'s missing a pair of teeth, no doubt from the beating {{he}} must have endured.`
    ]); }

    if (teethMissing == 3) { return Random.from([
      `It looks like {{he}} may be missing a few teeth as well.`,
      `{{He}}'s missing at least three teeth in the front of {{his}} mouth.`
    ]); }

    if (teethMissing > 3 && teethMissing <= 6) { return Random.from([
      `It looks like {{he}} may be missing some teeth too, at least ${EnglishUtility.numberInEnglish(teethMissing)} from the looks of it.`,
      `{{He}}'s missing some teeth as well, at least ${EnglishUtility.numberInEnglish(teethMissing)} or so.`
    ]); }

    return Random.from([
      `It looks like a significant number of teeth have been knocked out of {{his}} head too.`,
      `{{He}}'s missing quite a few teeth as well.`
    ]);
  }

}
