global.AnusBuilder = (function() {

  function build(character, options) {
    return new Promise((resolve, reject) => {
      if (character.id == null) { reject('Character must be persisted.'); }

      let params = CharacterBuilder.baseline('anus', options, character.species, {
        character_id:   character.id,
        shape:          "normal",
        conditon:       randomCondition(character.species),
        sizeClass:      Random.fromFrequencyMap(character.species.bodyOptions.cock.size),
        sizeScale:      Random.upTo(100),
        prolapseLength: 0,
      });

      params.sizeFactor = character.species.sizeFactor();

      Anus.create(params).then(resolve);
    });
  }

  // Only a couple species have condition maps set, the default map to use is the elf map.
  function randomCondition(species) {
    return Random.fromFrequencyMap(
      ObjectUtility.fetch(species, 'bodyOptions', 'anus', 'condition') ||
      Species.lookup('elf').bodyOptions.anus.condition);
  }

  return { build:build }

})();
