global.AnusFactory = (function(){
  "use strict";

  function build(character, options) {
    return new Promise((resolve, reject) => {
      if (character.id == null) { reject('Character must be persisted.'); }

      let anus = new Anus({ character_id:character.id });

      FactorySupport.baseline(anus, character.race, options, 'anus', {
        shape: "normal",
        width: null,
        prolapseLength: 0,
        elasticity: 3,
      });

      if (anus.width == null) { setWidth(anus, character.race); }

      anus.save((id) => {
        resolve(character);
      });
    });
  }

  // When setting the random width for the anus, use 80% of the race's random
  // pussy size.
  function setWidth(anus, race) {
    let average = Math.round((ObjectUtility.fetch(race, 'bodyOptions', 'pussy', 'averageSize') || 40) * 0.9);
    let width = Random.tightlyBound(average, Math.round(average/4));
    anus.setWidth(Math.round(width));
  }

  return { build:build }

})();
