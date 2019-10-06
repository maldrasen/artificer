global.MouthBuilder = (function() {

  function build(character, options) {
    if (character.id == null) { throw 'Character must be persisted.'; }

    let params = CharacterBuilder.baseline('mouth', options, character.species, {
      character_id: character.id,
      tongueShape: 'normal',
      tongueLength: null,
    });

    if (params.tongueLength == null) { params.tongueLength = getTongueLength(character.species); }

    return Mouth.create(params);
  }

  function getTongueLength(species) {
    let average = ObjectUtility.fetch(species, 'bodyOptions', 'mouth', 'averageTongueLength') || 60;
    let width = Random.tightlyBound(average, Math.round(average/4));
    return Math.round(width);
  }

  return { build:build }

})();
