global.MouthBuilder = (function() {

  function build(character, options) {
    return new Promise((resolve, reject) => {
      if (character.id == null) { reject('Character must be persisted.'); }

      let params = CharacterBuilder.baseline('mouth', options, character.species, {
        character_id: character.id,
        width: null,
        elasticity: 1,
        throatWidth: null,
        throatElasticity: 1,
        tongueShape: 'normal',
        tongueLength: null,
      });

      if (params.width == null)        { params.width = getWidth(character.species); }
      if (params.throatWidth == null)  { params.throatWidth= getThroatWidth(character.species); }
      if (params.tongueLength == null) { params.tongueLength = getTongueLength(character.species); }

      Mouth.create(params).then(resolve);
    });
  }

  // Should be about 60 I think. 80 is record for human. 60+-10?
  function getWidth(species) {
    let average = ObjectUtility.fetch(species, 'bodyOptions', 'mouth', 'averageSize') || 60;
    let width = Random.tightlyBound(average, Math.round(average/6));
    return Math.round(width);
  }

  // Should be about 30 I think? Really just a random guess.
  function getThroatWidth(species) {
    let average = ObjectUtility.fetch(species, 'bodyOptions', 'mouth', 'averageThroatWidth') || 30;
    let width = Random.tightlyBound(average, 10);
    return Math.round(width);
  }

  // Curiously, tongue length about the same as mouth size, with higher
  // variability though.
  function getTongueLength(species) {
    let average = ObjectUtility.fetch(species, 'bodyOptions', 'mouth', 'averageTongueLength') || 60;
    let width = Random.tightlyBound(average, Math.round(average/4));
    return Math.round(width);
  }

  return { build:build }

})();
