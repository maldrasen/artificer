global.CharacterDescriber = (function() {

  async function fullDescription(character) {
    const parts = await character.getCompleteBody();

    let description = `
      <div class='full-description'>
        ${generalDescription(character,parts)}
        ${bodyDescription(character,parts)}
      </div>`;

    if (character.genderCode == 'female') { description += `
      <div class='sex-description'>
        ${TitsDescriber.syncFullDescription(character,parts)}
        ${PussyDescriber.syncFullDescription(character,parts)}
        ${AnusDescriber.syncFullDescription(character,parts)}
      </div>
    `; }

    if (character.genderCode == 'futa') { description += `
      <div class='sex-description'>
        ${TitsDescriber.syncFullDescription(character,parts)}
        ${CockDescriber.syncFullDescription(character,parts)}
        ${PussyDescriber.syncFullDescription(character,parts)}
        ${AnusDescriber.syncFullDescription(character,parts)}
      </div>
    `; }

    if (character.genderCode == 'male') { description += `
      <div class='sex-description'>
        ${TitsDescriber.syncFullDescription(character,parts)}
        ${CockDescriber.syncFullDescription(character,parts)}
        ${AnusDescriber.syncFullDescription(character,parts)}
      </div>
    `; }

    return await Weaver.weaveWithCharacter(description,'C',character);
  }

  // TODO: The general description should also include things like the
  //       character's loyality and general attitude towards the player.
  function generalDescription(character,parts) {
    let desc;

    if (character.speciesCode == 'rat') { desc = `${character.name} is a Rhysh Rat.` }

    return desc;
  }

  function bodyDescription(character,parts) {
    return `${heightAndWeight()}, ${comparativeHeight(character,parts)}.
            ${objectiveBeauty(character)} ${comparativeBeauty(character)}`
  }

  function heightAndWeight() {
    return `{{C::gender.He}} is {{C::body.fiveFootTenInches}} tall, and weighs {{C::body.fiftyPounds}}`;
  }

  function comparativeHeight(character,parts) {
    let average = character.species.averageHeight();
    let height = parts.body.height;

    if (height < average * 0.8) { return `which is short for a ${character.species.name}`; }
    if (height < average * 0.9) { return `which is a little short for a ${character.species.name}`; }
    if (height > average * 1.1) { return `which makes {{C::gender.him}} a bit large for a ${character.species.name}`; }
    if (height > average * 1.2) { return `which makes {{C::gender.him}} larger then most ${character.species.pluralName}`; }
    return` which is about average for a ${character.species.name}`;
  }

  function objectiveBeauty(character) {
    let species = character.species.name.toLowerCase();
    let sentences = [];

    if (character.personal == 0) { ArrayUtility.addAll(sentences,[
      `{{C::character.firstName}} is flat out ugly. Just disgusting to look at, like dog shit given a face if you could call it that. Seriously. Uglier than a bag of smashed horse assholes, with all the pretty ones taken out.`,
    ]); }

    if (character.personal > 0 && character.personal < 10) { ArrayUtility.addAll(sentences,[
      `{{C::character.firstName}} is not at all attractive with weirdly asymmetrical facial features.`,
      `{{C::character.firstName}} is hopelessly unattractive with a face that looks like it was put together in the dark.`,
      `{{C::character.firstName}} has a face that was made for a gimp mask, or for doggy style, or really any activity that has {{C::gender.him}} facing away from me.`,
    ]); }

    if (character.personal >= 10 && character.personal < 20) { ArrayUtility.addAll(sentences,[
      `{{C::character.firstName}} is rather plain looking, nondescript an inoffensive.`,
      `{{C::character.firstName}} is rather average looking. {{C::gender.He}}'s not the sort of person who would stand out in a crowd.`,
      `{{C::character.firstName}} could be called homely, not unattractive per se, but certainly not beautiful.`,
    ]); }

    if (character.personal >= 20 && character.personal < 30) { ArrayUtility.addAll(sentences,[
      `{{C::character.firstName}} is a good looking ${species} with a symmetrical, traditionally attractive sort of face.`,
    ]); }

    if (character.genderCode == 'male') {
      if (character.personal > 0 && character.personal < 10) { ArrayUtility.addAll(sentences,[
        `{{C::character.firstName}} has a face that looks like it's been through a few fights, moreover that {{C::gender.he}}'s lost every single one of them.`,
        `{{C::character.firstName}} has a very punchable looking face. I'm not sure what it is. Every time I see {{C::gender.him}} I feel like knocking a few of {{C::gender.his}} teeth out.`,
      ]); }

      if (character.personal >= 10 && character.personal < 20) { ArrayUtility.addAll(sentences,[
        `{{C::character.firstName}} has a face that looks as though it was ravaged by disease at some point. It's pockmarked and misshapen.`,
      ]); }

      if (character.personal >= 20 && character.personal < 30) { ArrayUtility.addAll(sentences,[
        `I would call {{C::character.firstName}} handsome. {{C::gender.His}} face has a certain charming quality to it.`,
        `{{C::character.firstName}} is a handsome ${species}. While not overly attractive, {{C::gender.he}}'s pleasant to look upon at least.`,
      ]); }
    }

    if (character.genderCode != 'male') {
      if (character.personal > 0 && character.personal < 10) { ArrayUtility.addAll(sentences,[
        `{{C::character.firstName}} is not an attractive ${species}. {{C::gender.He}} has the sort of face that could only be improved by repeatedly slapping it.`,
      ]); }

      if (character.personal >= 10 && character.personal < 20) { ArrayUtility.addAll(sentences,[
        `{{C::character.firstName}} is not unattractive, but not what anyone would consider beautiful either.`,
      ]); }

      if (character.personal >= 20 && character.personal < 30) { ArrayUtility.addAll(sentences,[
        `I would call {{C::character.firstName}} pretty. {{C::gender.His}} face has a certain charming quality to it.`,
        `{{C::character.firstName}} is a pretty ${species}. While not beautiful, {{C::gender.he}}'s pleasant to look upon at least.`,
      ]); }
    }

    return Random.from(sentences);
  }

  function comparativeBeauty(character) {
    if (character.speciesCode == 'rat') {
      if (character.personal < 3)  { return Random.from([
        `Even for a Rhysh Rat {{C::gender.he}}'s ugly; just chewed up looking to be honest.`,
        `{{C::gender.He}}'s even uglier than most Rhysh Rats, which really is saying a lot.`,
      ]); }

      if (character.personal < 10) { return Random.from([
        `Which can of course be expected of a Rhysh Rat; they're not the most attractive creatures after all.`,
        `Which is expected of course, given that {{C::gender.he}}'s a Rhysh Rat.`,
        `For a Rhysh Rat though, {{C::gender.he}}'s about average looking.`,
      ]); }

      return Random.from([
        `{{C::gender.he}}'s unusually attractive for a Rhysh Rat, who tend to be rather rough looking.`,
        `For a Rhysh Rat though, {{C::gender.he}}'s far better looking than most of {{C::gender.his}} species.`,
      ]);
    }

    return Weaver.error(`TODO: comparativeBeauty() doesn't have the species ${character.speciesCode}`);
  }

  // TODO: Also should include hornShape
  function headDescription(character) {
    if (character.speciesCode == 'rat') {
      return `{{C::gender.His}} face is unsurprisingly rat-like with {{C::body.eyeColor}} eyes, a short muzzle, long whiskers and a twitchy pink nose.`
    }

    return Random.from([
      `{{C::gender.He}} has an elven face with {{C::body.eyeColor}} eyes and {{C::body.hairColor}} hair.`,
    ]);
  }

  // The skin description also includes a general body description so it also
  // includes body injury descriptions. Should also include tailShape?
  function skinDescription(character) {
    // TODO: caprien, dryad, and nekos to name a few will need custom fur descriptions

    // Other Furries
    if (character.species.isFurry) { return Random.from([
      `{{C::gender.His}} body is covered in {{C::body.furColor}} fur.`,
      `{{C::gender.He}} has {{C::body.furColor}} fur covering {{C::gender.his}} entire body.`,
    ]); }

    // Scalies
    if (character.species.isScalie) {
      return Weaver.error(`TODO: skinDescription() needs to describe scales.`);
    }

    // Everyone else.
    return Weaver.error(`TODO: skinDescription() needs to describe skin.`);
  }

  // Nope
  // function injuryDescriptions(injuries,location) {
  //   return injuries.filter(injury => {
  //     return injury.location == location
  //   }).map(injury => {
  //     return ` ${injury.description}`;
  //   });
  // }

  return { fullDescription };

})();
