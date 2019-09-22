global.BallsFactory = (function(){
  "use strict";

  function build(character, options) {
    return new Promise((resolve, reject) => {
      if (character.id == null) { reject('Character must be persisted.'); }

      character.withCock((cock) => {
        let balls = new Balls({ character_id:character.id });

        FactorySupport.baseline(balls, character.race, options, 'balls', {
          width: null,
          internal: false,
          productionMultiplier: null
        });

        if (balls.width == null) { balls.setWidth(aboutCockWidth(cock)); }
        if (balls.productionMultiplier == null) { setProductionMultiplier(balls, character); }

        balls.save((id) => {
          resolve(character);
        });
      });
    });
  }

  // Each ball width is about the width of the character's cock, which we
  // estimate here because the width function is too difficult to make
  // asynchronous.
  function aboutCockWidth(cock) {
    return Math.round(0.1548712 * cock.length * cock.widthRatio);
  }

  function setProductionMultiplier(balls, character) {
    balls.setProductionMultiplier(1 + (Random.upTo(100)/100) +
      (ObjectUtility.fetch(character.race, 'bodyOptions', 'balls', 'extraProduction') || 0));
  }

  return { build:build }

})();
