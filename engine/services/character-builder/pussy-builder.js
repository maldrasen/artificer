global.PussyBuilder = (function() {

  function build(character, options) {
    return new Promise((resolve, reject) => {
      if (character.id == null) { reject('Character must be persisted.'); }

      resolve(null);
    });
  }

  return { build:build }

})();

// global.PussyFactory = (function(){
//   "use strict";
//
//   function build(character, options) {
//     return new Promise((resolve, reject) => {
//       if (character.id == null) { reject('Character must be persisted.'); }
//
//       let pussy = new Pussy({ character_id:character.id });
//
//       FactorySupport.baseline(pussy, character.race, options, 'pussy', {
//         shape: 'normal',
//         placement: 'normal',
//         width: null,
//         outerLabiaSize: Random.upTo(5)+1,
//         innerLabiaLength: Random.geometric(30)+10,
//         clitLength: Random.geometric(15),
//         clitWidth: Random.upTo(10)+5,
//         prolapseLength: 0,
//         cervixWidth: 0,
//         cervixElasticity: 1,
//         elasticity: 4,
//         urethraWidth: 2,
//         urethraElasticity: 1,
//       });
//
//       if (pussy.width == null) { setWidth(pussy, character.race); }
//
//       pussy.save((id) => {
//         resolve(character);
//       });
//     });
//   }
//
//   function setWidth(pussy, race) {
//     let average = ObjectUtility.fetch(race, 'bodyOptions', 'pussy', 'averageSize') || 40;
//     let width = Random.tightlyBound(average, Math.round(average/4));
//     pussy.setWidth(Math.round(width));
//   }
//
//   return { build:build }
//
// })();
