global.TitsFactory = (function(){
  "use strict";

  function build(character, options) {
    return new Promise((resolve, reject) => {
      if (character.id == null) { reject('Character must be persisted.'); }

      let tits = new Tits({ character_id:character.id });

      FactorySupport.baseline(tits, character.race, options, 'tits', {
        count: 2,
        size: null,
        shape: null,
        productionMultiplier: 0,
      });

      if (tits.size == null) {
        tits.setSize(randomSize(character));
      }
      if (tits.shape == null) {
        randomizeShape(tits);
      }

      // Randomly induce lactation in 2.5% of random characters and in 20% of
      // minotaurs because cows.
      if (options.productionMultiplier == null) {
        if (Random.upTo(40)==0 || (character.race.code=='minotaur' && Random.upTo(5)==0)) {
          startLactating(character, tits);
        }
      }

      tits.save((id) => {
        resolve(character);
      });
    });
  }

  // Lactation should also increase nipple size. We'll probably eventually move
  // this out of the factory once there's a more direct way to direct a
  // character to start lactating. This should do for now though.
  function startLactating(character, tits) {
    tits.setProductionMultiplier(0.5 + (Random.upTo(100)/100) +
      (ObjectUtility.fetch(character.race, 'bodyOptions', 'tits', 'extraProduction') || 0));
  }

  function randomSize(character) {
    let average = ObjectUtility.fetch(character.race, 'bodyOptions', 'tits', 'averageSize');
    return Random.tightlyBound(average,average);
  }

  function randomizeShape(tits) {
    if (tits.sizeClass == 'flat')    { tits.setShape('flat');               }
    if (tits.sizeClass == 'small')   { tits.setShape(randomSmallShape());   }
    if (tits.sizeClass == 'average') { tits.setShape(randomAverageShape()); }
    if (tits.sizeClass == 'huge')    { tits.setShape(randomHugeShape());    }
  }

  function randomSmallShape() {
    return Random.fromFrequencyMap({
      perky: 80,
      round: 50,
      conical: 80,
    });
  }

  function randomAverageShape() {
    return Random.fromFrequencyMap({
      perky: 60,
      round: 120,
      dangling: 80,
    });
  }

  function randomHugeShape() {
    return Random.fromFrequencyMap({
      round: 50,
      dangling: 100,
      bell: 80,
    });
  }

  return {
    build: build,
    randomSize: randomSize,
    randomizeShape: randomizeShape,
  }

})();
