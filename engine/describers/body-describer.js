global.BodyDescriber = class BodyDescriber {

  constructor(context) {
    this._context = context;
  }

  get context() { return this._context; }
  get character() { return this.context.get('C').character; }
  get body() { return this.context.get('C').body; }
  get mouth() { return this.context.get('C').mouth; }

  async updateDescription() {
    await this.body.update({ description:(await this.getDescription()) });
  }

  async getDescription() {
    let injuries = new BodyInjuryDescriber(this.context);

    let description = `
      ${this.objectiveBeauty()} ${this.comparativeBeauty()}
      ${this.headDescription()} ${await injuries.headInjuries()}
      ${this.skinDescription()} ${await injuries.bodyInjuries()}
      ${this.heightAndWeight()}${this.comparativeHeight()}
    `.replace(/\n/g,'').replace(/\s+/g,' ');

    return await Weaver.weave(description, this.context);
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
  objectiveBeauty() {
    const personal = this.character.personal;
    const faceType = this.body.faceType;
    const options = [];

    if (personal == 0) { ArrayUtility.addAll(options,[
      `{{C::character.firstName}} is flat out ugly. Just disgusting to look at, like dog shit given a face.`,
      `{{C::character.firstName}} is terrifyingly ugly, with a face like a melted turd.`,
      `{{C::character.firstName}} is horrendously ugly. Uglier than a bag of smashed horse assholes, with all the
         pretty ones taken out.`,
    ]); }

    if (personal > 0 && personal < 5) { ArrayUtility.addAll(options,[
      `{{C::character.firstName}} is not at all attractive with weirdly asymmetrical facial features.`,
      `{{C::character.firstName}} is hopelessly unattractive with a face that looks like it was put together in the dark.`,
      `{{C::character.firstName}} has a face that was made for a gimp mask, or for doggy style, or really any activity
         that has {{him}} facing away from me.`,
    ]); }

    if (personal >= 5 && personal < 20) {
      if (faceType == 'plain') { ArrayUtility.addAll(options,[
        `{{C::character.firstName}} is somewhat attractive though a little plain looking.`,
        `{{C::character.firstName's}} face is rather nondescript but inoffensive enough.`,
        `{{C::character.firstName}} is rather plain looking, nondescript and inoffensive.`,
        `{{C::character.firstName}} could be called homely, not unattractive per se, but certainly not beautiful.`,
        `{{C::character.firstName}} is rather average looking. {{He}}'s not the sort of {{C::species.elf}}
           who wouldn't stand out in a crowd.`,
      ]); }
      if (faceType == 'hard') { ArrayUtility.addAll(options,[
        `{{C::character.firstName}} has a hard looking face, the kind of face that is the result of years of difficult living.`,
        `Years of difficult living have left {{C::character.firstName's}} face looking hard and scared.`,
        `{{C::character.firstName's}} face is badle battle scared. {{He}} may have been attractive once, but years of
           fighting have left their mark.`,
      ]); }
      if (faceType == 'soft') { ArrayUtility.addAll(options,[
        `{{C::character.firstName}} has as face that's youthful and innocent looking, although {{he}}'s not very attractive.`,
        `{{C::character.firstName}} isn't attractive, but {{his}} large eyes give {{him}} a eager and friendly sort of face.`,
        `{{C::character.firstName}} isn't attractive, but has a friendly and youthful looking face.`,
      ]); }
      if (faceType == 'exotic') { ArrayUtility.addAll(options,[
        `{{C::character.firstName}} isn't ugly but {{his}} face is strangely shaped making it instantly recognizable.`,
        `{{C::character.firstName's}} face is rather striking looking. {{He}} isn't exactly ugly but also doesn't look
           like most other {{C::species.elves}}.`,
        `{{C::character.firstName}} has a bizarrely constructed face that while {{he}} isn't ugly exactly, doesn't look
           like most other {{C::species.elves}}.`,
      ]); }
    }

    if (personal >= 20 && personal < 30) {
      if (faceType == 'plain') { ArrayUtility.addAll(options,[
        `{{C::character.firstName}} is a good looking {{C::species.elf}} with a symmetrical, traditionally attractive sort of face.`,
        `{{C::character.firstName}} has a fairly attractive if rather plain sort of face.`,
      ]); }
      if (faceType == 'hard') { ArrayUtility.addAll(options,[
        `{{C::character.firstName}} has an naturally attractive and honest looking face.`,
      ]); }
      if (faceType == 'soft') { ArrayUtility.addAll(options,[
        `{{C::character.firstName}} has an attractively youthful and sweet looking face.`,
      ]); }
      if (faceType == 'exotic') { ArrayUtility.addAll(options,[
        `{{C::character.firstName}} has an attractively exotic face with interesting and rather striking facial features.`,
      ]); }
    }

    // === Masculine faces ===
    if (this.character.genderCode == 'male') {
      if (personal > 0 && personal < 5) { ArrayUtility.addAll(options,[
        `{{C::character.firstName}} has a face that looks like it's been through a few fights, and {{he}}'s lost every
           single one of them.`,
        `{{C::character.firstName}} has a face that looks as though it was ravaged by disease at some point. It's
           pockmarked and misshapen.`,
        `{{C::character.firstName}} has a very punchable looking face. I'm not sure what it is. Every time I see
           {{him}} I feel like knocking a few of {{his}} teeth out.`,
      ]); }

      if (personal >= 5 && personal < 20) {
        ArrayUtility.addAll(options,[
          `{{C::character.firstName}} isn't handsome, but {{he}}'s not offensive to look at either.`,
          `{{C::character.firstName}} doesn't have a face anyone could call handsome, but {{he}}'s not really bad looking either.`,
        ]);

        if (faceType == 'plain') { ArrayUtility.addAll(options,[
          `{{C::character.firstName}} is somewhat handsome though a little plain looking.`,
        ]); }

        if (faceType == 'hard') { ArrayUtility.addAll(options,[
          `{{C::character.firstName}} couldn't be called handsome, but {{his}} face is chisled and manly looking.`,
          `{{C::character.firstName}} isn't incredibly handsome, but there's a rugged charm to {{his}} face.`,
        ]); }

        if (faceType == 'soft') { ArrayUtility.addAll(options,[
          `{{C::character.firstName}} isn't handome, but at least has a friendly and boyishly innocent looking face.`,
          `{{C::character.firstName}} couldn't be called handsome, but has a certain roguish charm about {{him}}.`,
        ]); }

        if (faceType == 'exotic') { ArrayUtility.addAll(options,[
          `{{C::character.firstName}} has an interesting face. {{He}}'s neither ugly nor handsome, but has unusually
             striking features that make {{his}} face an easy one to remember.`,
          `{{C::character.firstName}} is an interesting looking {{C::species.elf}}. While {{he}} couldn't really be
             called handsome, there's something about {{his}} face that's interesting and compelling.`,
        ]); }
      }

      if (personal >= 20 && personal < 30) {
        ArrayUtility.addAll(options,[
          `I would call {{C::character.firstName}} handsome. {{His}} face has a certain charming quality to it.`,
          `{{C::character.firstName}} is a handsome {{C::species.elf}}. While not overly attractive, {{he}}'s
             pleasant to look upon at least.`,
        ]);

        if (faceType == 'plain') { ArrayUtility.addAll(options,[
          `{{C::character.firstName}} is handsome though a little plain looking.`,
          `{{C::character.firstName}} has a fairly handsome face, even if it is rather nondescript.`,
        ]); }

        if (faceType == 'hard') { ArrayUtility.addAll(options,[
          `{{C::character.firstName}} has a handsome, chisled and manly looking face.`,
          `{{C::character.firstName}} has a handsome, ruggedly charming sort of face.`,
        ]); }

        if (faceType == 'soft') { ArrayUtility.addAll(options,[
          `{{C::character.firstName}} has a handsome, friendly, and boyishly innocent looking face.`,
          `{{C::character.firstName}} has a handsome face with a certain roguish charm.`,
        ]); }

        if (faceType == 'exotic') { ArrayUtility.addAll(options,[
          `{{C::character.firstName}} has a handsome and interesting looking face with striking features that make
             {{his}} face an easy one to remember.`,
          `{{C::character.firstName}} is a handome and interesting looking {{C::species.elf}} with striking and
             strangely compelling facial features.`,
        ]); }
      }
    }

    // === Feminine Faces ===
    if (this.character.genderCode != 'male') {
      if (personal > 0 && personal < 5) {
        ArrayUtility.addAll(options,[
          `{{C::character.firstName}} is a pretty enough {{C::species.elf}}. While not exactly beautiful, {{he}}'s
             pleasant to look at.`,
          `{{C::character.firstName}} is just flat out ugly with a weirdly misshaped head like {{he}} spent the last
             several years getting slapped in the face with a bag full of goat dicks.`
          `It would be difficult to describe {{C::character.firstName}} as anything but ugly. {{He}} has the sort of
             face that could only be improved by repeatedly slapping it.`,
        ]);
      }

      if (personal >= 5 && personal < 20) {
        ArrayUtility.addAll(options,[
          `{{C::character.firstName}} is not unattractive, but not what anyone would consider beautiful either.`,
          `{{C::character.firstName}} isn't beautiful, but {{he}}'s not offensive to look at either.`,
          `I wouldn't call {{C::character.firstName}} pretty, but there's a certain charming quality to {{his}} face.`,
          `{{C::character.firstName}} doesn't have a face anyone could call beautiful, but {{he}}'s not really bad looking either.`,
        ]);

        if (faceType == 'hard') { ArrayUtility.addAll(options,[
          `{{C::character.firstName}} isn't unattractive but has a savage and wild look about {{him}}.`,
          `{{C::character.firstName}} isn't unattractive, but years of hard living have left {{him}} with a hard and angry looking face.`,
        ]); }

        if (faceType == 'soft') { ArrayUtility.addAll(options,[
          `{{C::character.firstName}} isn't beautiful, but has a friendly and innocent looking face.`,
          `{{C::character.firstName}} couldn't be called beautiful, but {{he}} has a certain girlish charm about {{him}}.`,
        ]); }

        if (faceType == 'exotic') { ArrayUtility.addAll(options,[
          `{{C::character.firstName}} has an interesting face. {{He}}'s neither ugly nor beautiful, but has unusually
             striking features that make {{his}} face an easy one to remember.`,
          `{{C::character.firstName}} is an interesting looking {{C::species.elf}}. While {{he}} couldn't really be
             called beautiful, there's something about {{his}} face that's interesting and compelling.`,
        ]); }
      }

      if (personal >= 20 && personal < 30) {
        ArrayUtility.addAll(options,[
          `While not exactly beautiful, {{C::character.firstName}} is certinally a pretty {{C::gender.girl}}.`,
          `{{C::character.firstName}} is a pretty {{C::species.elf}}. While not exactly beautiful, {{he}}'s
             pleasant to look upon at least.`,
        ]);

        if (faceType == 'plain') { ArrayUtility.addAll(options,[
          `{{C::character.firstName}} is pretty though a little plain looking.`,
          `{{C::character.firstName}} is pretty, even if {{he}} is a little plain looking.`,
        ]); }

        if (faceType == 'hard') { ArrayUtility.addAll(options,[
          `{{C::character.firstName}} is pretty in a savage and wild of way.`,
          `{{C::character.firstName}} would be beautiful, but years of hard living have left {{him}} with a hard and angry looking face.`,
        ]); }

        if (faceType == 'soft') { ArrayUtility.addAll(options,[
          `{{C::character.firstName}} has a pretty, friendly, and girlishly innocent looking face.`,
          `{{C::character.firstName}} has a pretty, young looking, and impish sort of face.`,
        ]); }

        if (faceType == 'exotic') { ArrayUtility.addAll(options,[
          `{{C::character.firstName}} has a beautiful and interesting looking face with striking features that make
             {{his}} face an easy one to remember.`,
          `{{C::character.firstName}} is a beautiful and interesting looking {{C::species.elf}} with striking and
             strangely compelling facial features.`,
        ]); }
      }
    }

    // TODO: If a character's personal attribute is over 50 we should select a
    //       beautiful description, then add some extra details about how
    //       unworldly their beauty has become.

    if (options.length == 0) {
      return Weaver.error('Body Describer objectiveBeauty() seeds descriptions above 30 personal.');
    }

    return Random.from(options);
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
