global.PussyBuilder = (function() {

  function build(character, options) {
    return new Promise((resolve, reject) => {
      if (character.id == null) { reject('Character must be persisted.'); }
      if (character.gender.pussy == false) { return resolve(); }

      let params = CharacterBuilder.baseline('pussy', options, character.species, {
        character_id:     character.id,
        shape:            'normal',
        placement:        'normal',
        conditon:         randomCondition(character.species),
        sizeClass:        Random.fromFrequencyMap(character.species.bodyOptions.cock.size),
        sizeScale:        Random.upTo(100),
        outerLabiaSize:   Random.upTo(5)+1,
        innerLabiaLength: Random.geometric(30)+10,
        clitLength:       Random.geometric(15),
        clitWidth:        Random.upTo(10)+5,
        prolapseLength:   0,
      });

      params.sizeFactor = character.species.sizeFactor();

      Pussy.create(params).then(resolve);
    });
  }

  // Only a couple species have condition maps set, the default map to use is the elf map.
  function randomCondition(species) {
    return Random.fromFrequencyMap(
      ObjectUtility.fetch(species, 'bodyOptions', 'pussy', 'condition') ||
      Species.lookup('elf').bodyOptions.pussy.condition);
  }

  return { build:build }

})();
