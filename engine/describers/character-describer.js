global.CharacterDescriber = (function() {

  async function fullDescription(character) {
    const parts = await character.getCompleteBody();

    let description = `
      <div class='full-description'>
        ${generalDescription(character,parts)}
        ${parts.body.description}
      </div>`;

    if (character.genderCode == 'female') { description += `
      <div class='sex-description'>
        ${parts.tits.description}
        ${parts.pussy.description}
        ${parts.anus.description}
      </div>
    `; }

    if (character.genderCode == 'futa') { description += `
      <div class='sex-description'>
        ${parts.tits.description}
        ${parts.cock.description}
        ${parts.pussy.description}
        ${parts.anus.description}
      </div>
    `; }

    if (character.genderCode == 'male') { description += `
      <div class='sex-description'>
        ${parts.cock.description}
        ${parts.anus.description}
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

  return { fullDescription };

})();
