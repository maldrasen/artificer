global.BodyDescriber = class BodyDescriber {

  constructor(options) {
    this._character = options.character;
    this._body = options.body;
  }

  get character() { return this._character; }
  get body() { return this._body; }

  async updateDescription() {
    if (this.body == null) { this._body = await this.character.getBody(); }

    let desc = await this.getDescription();
    if (desc) {
      this.body.description = desc;
      await this.body.save();
      return this.body;
    }
  }

  async getDescription() {
    let injuries = new BodyInjuryDescriber(this.character, this.body);

    let description = `
      ${this.heightAndWeight()}, ${this.comparativeHeight()}.
      ${this.objectiveBeauty()} ${this.comparativeBeauty()}
      ${this.headDescription()} ${injuries.headInjuries()}
      ${this.skinDescription()} ${injuries.bodyInjuries()}
    `.replace(/\n/g,'').replace(/\s+/g,' ');

    return await Weaver.weaveWithCharacter(description,'C',this.character);
  }

  heightAndWeight() {
    return `{{C::gender.He}} is {{C::body.fiveFootTenInches}} tall, and weighs {{C::body.fiftyPounds}}`;
  }

  comparativeHeight() {
    let species = this.character.species;
    let height = this.body.height;
    let average = species.averageHeight();

    if (height < average * 0.8) { return `which is short for {{C::species.aGnome}}`; }
    if (height < average * 0.9) { return `which is a little short for {{C::species.aGnome}}`; }
    if (height > average * 1.1) { return `which makes {{C::gender.him}} a bit large for {{C::species.aGnome}}`; }
    if (height > average * 1.2) { return `which makes {{C::gender.him}} larger then most {{C::species.gnomes}}`; }
    return` which is about average for {{C::species.aGnome}}`;
  }

  objectiveBeauty() {
    let sentences = [];
    let personal = this.character.personal;

    if (personal == 0) { ArrayUtility.addAll(sentences,[
      `{{C::character.firstName}} is flat out ugly. Just disgusting to look at, like dog shit given a face if you could call it that. Seriously. Uglier than a bag of smashed horse assholes, with all the pretty ones taken out.`,
    ]); }

    if (personal > 0 && personal < 10) { ArrayUtility.addAll(sentences,[
      `{{C::character.firstName}} is not at all attractive with weirdly asymmetrical facial features.`,
      `{{C::character.firstName}} is hopelessly unattractive with a face that looks like it was put together in the dark.`,
      `{{C::character.firstName}} has a face that was made for a gimp mask, or for doggy style, or really any activity that has {{C::gender.him}} facing away from me.`,
    ]); }

    if (personal >= 10 && personal < 20) { ArrayUtility.addAll(sentences,[
      `{{C::character.firstName}} is rather plain looking, nondescript an inoffensive.`,
      `{{C::character.firstName}} is rather average looking. {{C::gender.He}}'s not the sort of person who would stand out in a crowd.`,
      `{{C::character.firstName}} could be called homely, not unattractive per se, but certainly not beautiful.`,
    ]); }

    if (personal >= 20 && personal < 30) { ArrayUtility.addAll(sentences,[
      `{{C::character.firstName}} is a good looking {{C::species.gnome}} with a symmetrical, traditionally attractive sort of face.`,
    ]); }

    if (this.character.genderCode == 'male') {
      if (personal > 0 && personal < 10) { ArrayUtility.addAll(sentences,[
        `{{C::character.firstName}} has a face that looks like it's been through a few fights, moreover that {{C::gender.he}}'s lost every single one of them.`,
        `{{C::character.firstName}} has a very punchable looking face. I'm not sure what it is. Every time I see {{C::gender.him}} I feel like knocking a few of {{C::gender.his}} teeth out.`,
      ]); }

      if (personal >= 10 && personal < 20) { ArrayUtility.addAll(sentences,[
        `{{C::character.firstName}} has a face that looks as though it was ravaged by disease at some point. It's pockmarked and misshapen.`,
      ]); }

      if (personal >= 20 && personal < 30) { ArrayUtility.addAll(sentences,[
        `I would call {{C::character.firstName}} handsome. {{C::gender.His}} face has a certain charming quality to it.`,
        `{{C::character.firstName}} is a handsome {{C::species.gnome}}. While not overly attractive, {{C::gender.he}}'s pleasant to look upon at least.`,
      ]); }
    }

    if (this.character.genderCode != 'male') {
      if (personal > 0 && personal < 10) { ArrayUtility.addAll(sentences,[
        `{{C::character.firstName}} is not an attractive {{C::species.gnome}}. {{C::gender.He}} has the sort of face that could only be improved by repeatedly slapping it.`,
      ]); }

      if (personal >= 10 && personal < 20) { ArrayUtility.addAll(sentences,[
        `{{C::character.firstName}} is not unattractive, but not what anyone would consider beautiful either.`,
      ]); }

      if (personal >= 20 && personal < 30) { ArrayUtility.addAll(sentences,[
        `I would call {{C::character.firstName}} pretty. {{C::gender.His}} face has a certain charming quality to it.`,
        `{{C::character.firstName}} is a pretty {{C::species.gnome}}. While not beautiful, {{C::gender.he}}'s pleasant to look upon at least.`,
      ]); }
    }

    if (sentences.length == 0) {
      return Weaver.error('Body Describer objectiveBeauty() seeds descriptions above 30 personal.');
    }

    return Random.from(sentences);
  }

  // TODO: Could use a lot more variety and we might want to consider splitting
  //       the male descriptions from the females and futas. Might consider
  //       making this it's own class even.
  comparativeBeauty() {
    let averagePersonal = Math.floor(this.character.species.personal * 1.333);
    let lowPersonal =     Math.ceil(this.character.species.personal  * 0.666);

    if (this.character.speciesCode == 'scaven') {
      if (this.character.personal <= lowPersonal)  { return Random.from([
        `Even for a scaven {{C::gender.he}}'s ugly; just chewed up looking to be honest.`,
        `{{C::gender.He}}'s even uglier than most scaven, which really is saying a lot.`,
      ]); }

      if (this.character.personal <= averagePersonal) { return Random.from([
        `Which can of course be expected of a scaven; they're not the most attractive creatures after all.`,
        `Which is expected of course, given that {{C::gender.he}}'s a scaven.`,
        `For a scaven though, {{C::gender.he}}'s about average looking.`,
      ]); }

      return Random.from([
        `{{C::gender.He}}'s unusually attractive though for a scaven, who tend to be rather rough looking.`,
        `For a scaven though, {{C::gender.he}}'s far better looking than most of {{C::gender.his}} species.`,
      ]);
    }

    if (this.character.personal <= lowPersonal)  { return Random.from([
      `I've seen far better looking {{C::species.gnomes}} in my time though.`,
      `{{C::gender.He}} certinally wouldn't be considered attractive among other {{C::species.elves}}.`
    ]); }

    if (this.character.personal > averagePersonal)  { return Random.from([
      `{{C::gender.He}} is quite good looking though for {{C::species.aGnome}}.`
    ]); }

    // No need to comment further on average looking characters.
    return ''
  }

  headDescription() {
    if (typeof this.character.species.headDescription == 'function') {
      return this.character.species.headDescription(this.character, this.body);
    }
    if (typeof this.character.species.headDescription == 'string') {
      return this.character.species.headDescription;
    }
    return Random.from([
      `{{C::gender.He}} has an elven face with {{C::body.eyeColor}} eyes and {{C::body.hairColor}} hair.`,
    ]);
  }

  skinDescription() {
    if (typeof this.character.species.skinDescription == 'function') {
      return this.character.species.skinDescription(this.character, this.body);
    }
    if (typeof this.character.species.skinDescription == 'string') {
      return this.character.species.skinDescription;
    }
    if (this.character.species.isFurry) { return Random.from([
      `{{C::gender.His}} body is covered in {{C::body.furColor}} fur.`,
      `{{C::gender.He}} has {{C::body.furColor}} fur covering {{C::gender.his}} entire body.`,
    ]); }
    if (this.character.species.isScalie) {
      return Weaver.error(`TODO: skinDescription() needs to describe scales.`);
    }
    return Weaver.error(`TODO: skinDescription() needs to describe skin.`);
  }


}
