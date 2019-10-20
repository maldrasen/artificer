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
    let desc = `{{C::gender.He}} is {{C::body.five-foot-ten-inches}} tall, and weighs {{C::body.fifty-pounds}}, `
    desc += ` which is about average for a ${character.species.name}.`
    return desc;
  }

  return { fullDescription };

})();
