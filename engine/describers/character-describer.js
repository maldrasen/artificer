global.CharacterDescriber = (function() {

  async function fullDescription(character) {
    const parts = await character.getCompleteBody()

    let description = `
      <div class='full-description'>
        ${generalDescription(character,parts)}
        ${bodyDescription(character,parts)}
      </div>`;

    return await Weaver.weaveWithCharacter(description,'C',character);
  }

  // 'Rats are tiny, furry, barely civilized creatures.',
  // 'The Lupin are wolf spirits known for their ferocious attitudes.',
  // 'The Vulpine are fox spirits with a friendy and often sultry demeanor.',
  // 'The Selkie are small, good natured seal spirits.',
  // 'The Equian are large horse spirits renowned for their strength, but really famous for their massive cocks.',
  // 'The Minotaur are huge muscular cow spirits.',
  // 'The Centaur are half elves with the body and legs of a horse.',
  // 'The Naga are serpent spirits, known for their cunning, wisdom, and cruelity.',
  // 'The Dragons are fearsome and powerful creatures of the ancient world.',
  // 'A Succubus is a depraved and seductive demon summoned from the Abyss.',
  // 'An Incubus is a perverse and seductive demon summoned from the Abyss.',
  // 'Goblins are short barbaric fun-loving fae, responsible for countless disasters in the city.',
  // 'The Orges are gigantic, brutal and dimwitted fae related to the goblins.',
  // 'Nymphs are water and fertility spirits, renowned for both their beauty and libido.',
  // 'The dryad are playful tree spirits with the lower body of a deer.',
  // 'Sylphs are thoughtful and curious wind spirits with unbelievable flexibility',
  // 'Pixies are tiny flying spirits with mischievous natures.',
  // 'The Neko are half-elf cat spirits with cat-like ears, tails, and attitudes',
  // 'The Wood Elves are short, muscular, wolf-blooded elves from the Greenwood outside of the city.',
  // 'The common city dwelling elves.',
  // 'The Dark Elves are a race of malevolent elves from deep underground.',
  // 'The Elf Lords are ancient and immortal elves, as arrogant as they are powerful.',

  function generalDescription(character,parts) {
    let desc;

    if (character.speciesCode == 'rat') { desc = `${character.name} is a Rhysh Rat.` }

    return desc;
  }

  function bodyDescription(character,parts) {
    return `${heightAndWeight()}, ${comparativeHeight(character,parts)}.
            ${objectiveBeauty(character)} ${comparativeBeauty(character)}
            ${skinDescription(character,parts)}`;
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

  function faceDescription(character,parts) {

  }

  function objectiveBeauty(character) {
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
      `{{C::character.firstName}} could be called homely, not unattractive per se, but certinally not beautiful.`,
    ]); }

    if (character.personal >= 20 && character.personal < 30) { ArrayUtility.addAll(sentences,[
      `{{C::character.firstName}} is a lovely young ${character.species.name}.`
    ]); }

    if (character.genderCode == 'male') {
      if (character.personal > 0 && character.personal < 10) { ArrayUtility.addAll(sentences,[
        `{{C::character.firstName}} has a face that looks like it's been through a few fights, moreover that {{C::gender.he}}'s lost every single one of them.`,
        `{{C::character.firstName}} has a very punchable looking face. I'm not sure what it is. Every time I see {{C::gender.him}} I feel like knocking a few of {{C::gender.his}} teeth out.`,
      ]); }
    }

    if (character.genderCode != 'male') {
      if (character.personal > 0 && character.personal < 10) { ArrayUtility.addAll(sentences,[
        `{{C::character.firstName}} is not an attractive ${character.species.name}. {{C::gender.He}} has the sort of face that could only be improved by repeatedly slapping it.`,
      ]); }

      if (character.personal >= 10 && character.personal < 20) { ArrayUtility.addAll(sentences,[
        `{{C::character.firstName}} is not unattractive, but not what anyone would consider beautiful either.`,
      ]); }

      if (character.personal >= 20 && character.personal < 30) { ArrayUtility.addAll(sentences,[
        `I would call {{C::character.firstName}} pretty. {{C::gender.His}} face has a certain charming quality to it.`,
      ]); }
    }

    return Random.from(sentences);
  }

  function comparativeBeauty(character) {
    if (character.speciesCode == 'rat') {
      if (character.personal < 3)  { return `{{C::gender.He}}'s even uglier than most rats, which is really saying a lot.`; }
      if (character.personal < 10) { return `For a rat though, {{C::gender.he}}'s about average looking.`; }
      return `For a rat though, {{C::gender.he}}'s far better looking than most of {{C::gender.his}} species.`;
    }
  }

  function skinDescription(character,parts) {
    return "";
  }

  // eyeColor
  // scaleColor
  // hairColor
  // furColor
  // furShade
  // skinColor
  // skinShade
  // tailShape
  // hornShape
  // faceShape

  return { fullDescription };

})();
