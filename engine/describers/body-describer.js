global.BodyDescriber = class BodyDescriber {

  constructor(context) {
    this._context = context;
    this._included = [];
  }

  get context() { return this._context; }
  get character() { return this.context.get('C').character; }
  get body() { return this.context.get('C').body; }
  get mouth() { return this.context.get('C').mouth; }

  addInclusions(inclusions) { each(inclusions||[], inclusion => { this.addIncluded(inclusion); }); }
  addIncluded(key) { this._included.push(key); }
  isIncluded(key) { return this._included.indexOf(key) >= 0; }
  isNotIncluded(key) { return !this.isIncluded(key); }

  async updateDescription() {
    if (this.body.faceDescription == null) {
      await this.body.update({ faceDescription: (await this.getfaceDescription()) });
    }
    if (this.body.bodyDescription == null) {
      await this.body.update({ bodyDescription: (await this.getBodyDescription()) });
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
  async getfaceDescription() {
    const descriptions = await this.selectFaceAndHead();
    this.addInclusions(descriptions.face.includes);
    this.addInclusions(descriptions.head.includes);

    const text = `${descriptions.face.d} ${this.mythicAdditions()} ${descriptions.head.d} ${this.finishHead()}`

    return await Weaver.weave(text, this.context);
  }

  // This function will randomly select a face and head description. The two
  // main descriptions here can't share any of the same inclusions. We don't
  // want a character's eyes described twice. This shouldn't loop forever if
  // there are enough descriptions without inclusions to fall back on.
  async selectFaceAndHead() {
    const faceDescription = await Description.select('face', this.context);
    const headDescription = await Description.select('head', this.context);

    for (let i=0; i<(faceDescription.includes||[]).length; i++) {
      if ((headDescription.includes||[]).indexOf(faceDescription.includes[i])>=0) {
        return await this.selectFaceAndHead();
      }
    }

    return { face:faceDescription, head:headDescription };
  }

  // === Face Additions ===

  // If a character has more than 90 personal they fall into the mythic beauty
  // category. In this case they still get a 'breathtaking' description but
  // with an additional sentence to highlight they their beauty is otherworldly.
  mythicAdditions() {
    if (this.character.personal < 90) { return ''; }

    const additions = [
      `{{His}} face is so perfect that it's almost unnatural, like some otherworldly being come to dwell with us mere mortals.`,
    ]

    if (this.isNotIncluded('eye-color')) {
      ArrayUtility.addAll(additions,[
        `{{His}} beautiful and memorizing {{C::body.eyeColor}} eyes shine with an otherworldly sheen.`,
        `{{His}} {{C::body.eyeColor}} eyes somehow always seem to catch the light in the most perfect way possible`,
      ]);

      if (this.body.faceType == 'plain') { additions.push(`{{His}} {{C::body.eyeColor}} eyes are so compelling,
        beautiful and memorizing, that there's almost a danger of getting lost within them for an eternity.`) }

      if (this.body.faceType == 'exotic') { additions.push(`{{His}} face is so strangely compelling that I could see
        getting lost in {{his}} piercing {{C::body.eyeColor}} eyes for an eternity.`); }
    }

    if (this.isNotIncluded('skin-color') && this.character.hasSkinBody) { ArrayUtility.addAll(additions,[
      `{{His}} {{C::body.skinColor}} skin is absolutely perfect and shines like polished marble.`,
      `{{His}} {{C::body.skinColor}} skin somehow always manages to catch the light in the most perfect way possible.`,
    ]); }

    if (this.isNotIncluded('scale-color') && this.character.isScalie) { ArrayUtility.addAll(additions,[
      `{{His}} {{C::body.scaleColor}} scales are absolutely perfect and shine like polished gemstones.`,
      `{{His}} {{C::body.scaleColor}} scales are absolutely perfect and shine like glittering jewels.`,
    ]); }

    if (this.body.faceType == 'soft') { additions.push(`I'm not sure how to describe it, but {{he}} has an aura about
      {{him}} that makes me want to possess {{him}} in every way.`); }

    if (this.body.faceType == 'hard') { additions.push(`I'm not sure how to describe it, but {{he}} has an aura about
      {{him}} that could make anyone want to be possessed by {{him}}.`); }

    if (this.body.faceType == 'exotic') { additions.push(`There's something about {{him}} that seems absolutely
      otherworldly.`); }

    const addition = Random.from(additions);

    if (addition.match(/eyeColor/)) { this.addIncluded('eye-color'); }
    if (addition.match(/skinColor/)) { this.addIncluded('skin-color'); }
    if (addition.match(/scaleColor/)) { this.addIncluded('scale-color'); }

    return addition;
  }

  // To finish up the head description we need to figure out what parts were
  // not described by the face and head descriptions.
  finishHead() {
    if (this.body.furColor && this.body.hairColor) {
      if (this.isNotIncluded('eye-color') && this.isNotIncluded('fur-color') && this.isNotIncluded('hair-color')) { return this.describeEyesHairAndFur(); }
      if (this.isNotIncluded('fur-color') && this.isNotIncluded('hair-color')) { return this.describeHairAndFur();  }
      if (this.isNotIncluded('eye-color') && this.isNotIncluded('hair-color')) { return this.describeEyesAndHair(); }
      if (this.isNotIncluded('eye-color') && this.isNotIncluded('fur-color'))  { return this.describeEyesAndFur();  }
      if (this.isNotIncluded('eye-color'))  { return this.describeEyes(); }
      if (this.isNotIncluded('fur-color'))  { return this.describeFur();  }
      if (this.isNotIncluded('hair-color')) { return this.describeHair(); }
    }

    if (this.body.furColor && this.isNotIncluded('fur-color')) {
      return this.isIncluded('eye-color') ? this.describeFur() : this.describeEyesAndFur();
    }

    // We don't worry about describing skin or scales if they're not included,
    // that will be taken care of in the body description. We do want to take
    // care of hair and eyes though.
    if (this.body.hairColor && this.isNotIncluded('hair-color')) {
      return this.isIncluded('eye-color') ? this.describeHair() : this.describeEyesAndHair();
    }

    if (this.isNotIncluded('eye-color')) {
      return this.describeEyes();
    }

    return '';
  }

  describeEyes() { return `[EYES]` }
  describeEyesAndFur() { return `[EYES AND FUR]` }
  describeEyesAndHair() { return `[EYES AND HAIR]` }
  describeEyesHairAndFur() { return `[EYES, HAIR, AND FUR]` }
  describeFur() { return `[FUR]` }
  describeHair() { return `[HAIR]` }
  describeHairAndFur() { return `[HAIR AND FUR]` }


  // === Body Additions ===

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

  // Moving, Caprien
  // skinDescription: (character,body) => {
  //   return (character.genderCode == 'male') ?
  //     `{{C::gender.His}} body is also covered in thick {{C::body.furColor}} fur and {{C::gender.he}} has a small goat tail resting just above {{C::gender.his}} ass.`:
  //     `{{C::gender.He}} has {{C::body.skinColor}} skin and a small goat tail resting just above {{C::gender.his}} shapely ass.`
  // },

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
