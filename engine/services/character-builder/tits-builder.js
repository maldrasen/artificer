global.TitsBuilder = (function() {

  function build(character, options) {
    return new Promise((resolve, reject) => {
      if (character.id == null) { reject('Character must be persisted.'); }
      if (character.gender.tits == false) { return resolve(); }
      if (character.species.bodyOptions.tits == false) { return resolve(); }

      let params = CharacterBuilder.baseline('tits', options, character.species, {
        character_id: character.id,
        count: 2,
        size_class: null,
        size_scale: null,
        shape: null,
      });

      // if (params.size == null) { params.size = randomSize(character.species); }
      // if (params.shape == null) { params.shape = randomizeShape(params.size); }

      Tits.create(params).then(resolve);
    });
  }

  // function randomSize(species) {
  //   let average = ObjectUtility.fetch(species, 'bodyOptions', 'tits', 'averageSize');
  //   return Random.tightlyBound(average,average);
  // }
  //
  // function randomizeShape(size) {
  //   let sizeClass = Tits.determineSizeClass(size)
  //   if (sizeClass == 'flat')    { return 'flat';               }
  //   if (sizeClass == 'small')   { return randomSmallShape();   }
  //   if (sizeClass == 'average') { return randomAverageShape(); }
  //   if (sizeClass == 'huge')    { return randomHugeShape();    }
  // }
  //
  // function randomSmallShape() {
  //   return Random.fromFrequencyMap({
  //     perky: 80,
  //     round: 50,
  //     conical: 80,
  //   });
  // }
  //
  // function randomAverageShape() {
  //   return Random.fromFrequencyMap({
  //     perky: 60,
  //     round: 120,
  //     dangling: 80,
  //   });
  // }
  //
  // function randomHugeShape() {
  //   return Random.fromFrequencyMap({
  //     round: 50,
  //     dangling: 100,
  //     bell: 80,
  //   });
  // }

  return {
    build: build,
    // randomSize: randomSize,
    // randomizeShape: randomizeShape,
  }

  return { build:build }

})();
