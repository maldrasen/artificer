global.BodyDescriber = class BodyDescriber {

  constructor(context) {
    this._context = context;
  }

  get context() { return this._context; }
  get character() { return this.context.get('C').character; }
  get body() { return this.context.get('C').body; }
  get mouth() { return this.context.get('C').mouth; }

  async updateDescription() {
    if (this.body.bodyDescription == null) {
      await this.body.update({ bodyDescription: (await this.getBodyDescription()) });
    }
    if (this.body.faceDescription == null) {
      await this.body.update({ faceDescription: (await this.getfaceDescription()) });
    }
  }

  async getBodyDescription() {
    return await Weaver.weave('(Body: work in progress)', this.context);

    // let injuries = new BodyInjuryDescriber(this.context);
    //
    // let description = `
    //   Work in progress
    // `.replace(/\n/g,'').replace(/\s+/g,' ');
    //
    //
  }

  // TODO: Right now the body's face type is only used in this function to build
  //       up the character's description. Once the personality system is more
  //       fleshed out though we should use the the face type to influence the
  //       personality or visa versa.
  //
  //         - Violent minions should have hard faces.
  //         - Passive minions should have soft faces.
  //         - Plain faced minions are not influenced one way or the other.
  //         - Exotic faces should have some influence, but not sure what.
  //
  // TODO: Goblins are going to need their own descriptions because of their
  //       unusual faces. They may even need their own goblin only faceTypes.
  //
  // TODO: Maybe once this is all done I can add a copy of this function that
  //       rewrites all of these descriptions from a first person perspective.
  //       The tone is wrong for a person describing their own face.
  //
  // TODO: It should be hard to change a character's face. I think even when a
  //       character is redescribed their face description should remain. That
  //       would mean saving the face description off as a separate attribute.
  //       To regenerate a character's face description you'd first have to
  //       null out the saved off description.
  //
  // TODO: As I continue to expand this, I think it's clear that I'm going to
  //       need to move all of this into a face descriptions data object. It's
  //       getting too complex. I forgot that we also generate a separate face
  //       description that includes hair and eye color, but I think that needs
  //       to be part of all this. That means that this needs rewritten again
  //       to fold all of that into one big face description section that
  //       handles all of it. Fuck...
  //
  async getfaceDescription() {


    let description = await Description.select('face', this.context);

    // if (description.includes) {
    //   each(description.includes, inclusion => {
    //     this.addIncluded(inclusion);
    //   });
    // }


    // `.replace(/\n/g,'').replace(/\s+/g,' ');


    return await Weaver.weave(description.d, this.context);
  }

  heightAndWeight() {
    return `{{He}} is {{C::body.fiveFootTenInches}} tall, and weighs {{C::body.fiftyPounds}}`;
  }

  comparativeHeight() {
    let species = this.character.species;
    let height = this.body.height;
    let average = species.averageHeight();

    if (height < average * 0.8) { return Random.from([
      `; shorter than most {{C::species.elves}}.`,
      `, which is short for {{C::species.anElf}}.`,
      `, which makes {{him}} small for {{C::species.anElf}}.`
    ]); }

    if (height < average * 0.9) { return Random.from([
      `; a bit shorter than most {{C::species.elves}}.`,
      `, which is a little short for {{C::species.anElf}}.`,
      `, which makes {{him}} a bit small for {{C::species.anElf}}.`
    ]); }

    if (height > average * 1.1) { return Random.from([
      `; a bit taller than most {{C::species.elves}}.`,
      `, which is a bit tall for {{C::species.anElf}}.`,
      `, which makes {{him}} a bit large for {{C::species.anElf}}.`
    ]); }

    if (height > average * 1.2) { return Random.from([
      `; taller than most {{C::species.elves}}.`,
      `, which is tall for {{C::species.anElf}}.`,
      `, which makes {{him}} large for {{C::species.anElf}}.`
    ]); }

    return Random.from([
      `; an average height for {{C::species.anElf}}.`,
      `, which is about average for {{C::species.anElf}}.`,
      `, which makes {{him}} about as tall as most {{C::species.elves}}.`,
    ]);
  }

  // TODO: Could use a lot more variety and we might want to consider splitting
  //       the male descriptions from the females and futas. Might consider
  //       making this it's own class even.
  comparativeBeauty() {
    let averagePersonal = Math.floor(this.character.species.personal * 1.333);
    let lowPersonal =     Math.ceil(this.character.species.personal  * 0.666);

    if (this.character.speciesCode == 'scaven') {
      if (this.character.personal <= lowPersonal)  { return Random.from([
        `Even for a scaven {{he}}'s ugly; just chewed up looking to be honest.`,
        `{{He}}'s even uglier than most scaven, which really is saying a lot.`,
      ]); }

      if (this.character.personal <= averagePersonal) { return Random.from([
        `Which can of course be expected of a scaven; they're not the most attractive creatures after all.`,
        `Which is expected of course, given that {{he}}'s a scaven.`,
        `For a scaven though, {{he}}'s about average looking.`,
      ]); }

      return Random.from([
        `{{He}}'s unusually attractive though for a scaven, who tend to be rather rough looking.`,
        `For a scaven though, {{he}}'s far better looking than most of {{his}} species.`,
      ]);
    }

    if (this.character.personal <= lowPersonal)  { return Random.from([
      `I've seen far better looking {{C::species.elves}} in my time though.`,
      `{{He}} certinally wouldn't be considered attractive among other {{C::species.elves}}.`
    ]); }

    if (this.character.personal > averagePersonal)  { return Random.from([
      `{{He}} is quite good looking though for {{C::species.anElf}}.`
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
      `{{He}} has an elven face with {{C::body.eyeColor}} eyes and {{C::body.hairColor}} hair.`,
    ]);
  }

  skinDescription() {
    if (typeof this.character.species.skinDescription == 'function') {
      return this.character.species.skinDescription(this.character, this.body);
    }
    if (typeof this.character.species.skinDescription == 'string') {
      return this.character.species.skinDescription;
    }
    if (this.character.isFurry) { return Random.from([
      `{{His}} body is covered in {{C::body.furColor}} fur.`,
      `{{He}} has {{C::body.furColor}} fur covering {{his}} entire body.`,
    ]); }
    if (this.character.species.isScalie) {
      return Weaver.error(`TODO: skinDescription() needs to describe scales.`);
    }
    return Weaver.error(`TODO: skinDescription() needs to describe skin.`);
  }


}
