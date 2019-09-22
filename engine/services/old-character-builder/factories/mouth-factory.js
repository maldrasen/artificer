global.MouthFactory = (function(){
  "use strict";

  function build(character, options) {
    return new Promise((resolve, reject) => {
      if (character.id == null) { reject('Character must be persisted.'); }

      let mouth = new Mouth({ character_id:character.id });

      FactorySupport.baseline(mouth, character.race, options, 'mouth', {
        shape: 'normal',
        width: null,
        elasticity: 1,
        throatWidth: null,
        throatElasticity: 1,
        tongueShape: 'normal',
        tongueLength: null,
      });

      if (mouth.width == null) { setWidth(mouth, character.race); }
      if (mouth.throatWidth == null) { setThroatWidth(mouth, character.race); }
      if (mouth.tongueLength == null) { setTongueLength(mouth, character.race); }

      mouth.save((id) => {
        resolve(character);
      });
    });
  }

  // Should be about 60 I think. 80 is record for human. 60+-10?
  function setWidth(mouth, race) {
    let average = ObjectUtility.fetch(race, 'bodyOptions', 'mouth', 'averageSize') || 60;
    let width = Random.tightlyBound(average, Math.round(average/6));
    mouth.setWidth(Math.round(width));
  }

  // Should be about 30 I think? Really just a random guess.
  function setThroatWidth(mouth, race) {
    let average = ObjectUtility.fetch(race, 'bodyOptions', 'mouth', 'averageThroatWidth') || 30;
    let width = Random.tightlyBound(average, 10);
    mouth.setThroatWidth(Math.round(width));
  }

  // Curiously, tongue length about the same as mouth size, with higher
  // variability though.
  function setTongueLength(mouth, race) {
    let average = ObjectUtility.fetch(race, 'bodyOptions', 'mouth', 'averageTongueLength') || 60;
    let width = Random.tightlyBound(average, Math.round(average/4));
    mouth.setTongueLength(Math.round(width));
  }

  return { build:build }

})();
