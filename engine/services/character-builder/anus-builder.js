global.AnusBuilder = (function() {

  function build(character, options) {
    return new Promise((resolve, reject) => {
      if (character.id == null) { reject('Character must be persisted.'); }

      let params = CharacterBuilder.baseline('anus', options, character.species, {
        character_id: character.id,
        shape: "normal",
        width: null,
        prolapseLength: 0,
        elasticity: 3,
      });

      if (params.width == null) {
        params.width = getWidth(character.species);
      }

      Anus.create(params).then(resolve);
    });
  }

  // When getting the random width for the anus, use 85% of the race's random
  // pussy size.
  function getWidth(species) {
    let average = Math.round((ObjectUtility.fetch(species, 'bodyOptions', 'pussy', 'averageSize') || 40) * 0.85);
    let width = Random.tightlyBound(average, Math.round(average/4));
    return Math.round(width);
  }

  return { build:build }

})();
