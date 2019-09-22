global.CockBuilder = (function() {

  function build(character, options) {
    return new Promise((resolve, reject) => {
      resolve(null);
    });
  }

  return { build:build }

})();


// global.CockFactory = (function(){
//   "use strict";
//
//   function build(character, options) {
//     return new Promise((resolve, reject) => {
//       if (character.id == null) { reject('Character must be persisted.'); }
//
//       let cock = new Cock({ character_id:character.id });
//
//       FactorySupport.baseline(cock, character.race, options, 'cocks', {
//         shape: "normal",
//         placement: 'normal',
//         sheath: null,
//         count: 1,
//         length: null,
//         widthRatio: null,
//         knotWidthRatio: null,
//         knobHeightRatio: null,
//         spineHeightRatio: null,
//         glow: null,
//         urethraWidth: 2,
//         urethraElasticity: 1,
//       });
//
//       if (cock.length == null) {
//         cock.setLength(randomCockLength(character.race));
//       }
//
//       //  Setting options:{cock:{'no-random-features':true}} is really the only
//       //  way to prevent these features from being randomly applied when a demon
//       //  cock is being built, in case there are template demons we don't want to
//       //  give surprise cock spines to.
//       if (character.race.isDemon && options['no-random-features'] == null) {
//         desecrateCock(cock, options);
//       }
//
//       // If this is supposed to be a dog cock, but the width ratio isn't set we
//       // generate a random width. Should be somewhere between 1 and 2.
//       if (cock.shape == 'dog' && cock.knotWidthRatio == null) {
//         cock.setKnotWidthRatio((Random.upTo(5)+10)/10);
//       }
//
//       cock.save((id) => {
//         resolve(character);
//       });
//     });
//   }
//
//   function randomCockLength(race) {
//     let average = ObjectUtility.fetch(race, 'bodyOptions', 'cocks', 'averageSize');
//     return Random.tightlyBound(average, Math.round(average/2));
//   }
//
//   // This function is really only used for the Incubus and Succubus races. If a
//   // cock shape isn't specified in the options, then they should get a random
//   // cock shape. Cock count, average length, and other features are all then
//   // adjusted depending on the cock shape.
//   //
//   // TODO: This should really be part of the adjuster instead.
//   function desecrateCock(cock, options) {
//     if (options.shape == null) {
//       cock.setShape(Random.fromFrequencyMap({
//         dog: 20,
//         snake: 20,
//         dragon: 20,
//         horse: 30,
//         demon: 100,
//       }));
//       if (cock.shape == 'horse')  { cock.setLength(cock.length + 200); }
//       if (cock.shape == 'snake')  { cock.setLength(cock.length + 200); }
//       if (cock.shape == 'dragon') { cock.setLength(cock.length + 100); }
//       if (cock.shape == 'demon')  { cock.setLength(cock.length + 50); }
//     }
//
//     if (options.count == null) {
//       if (Random.upTo(5) == 0)  { cock.setCount(2); }
//       if (Random.upTo(10) == 0) { cock.setCount(3); }
//     }
//
//     if (Random.upTo(4) == 0) {
//       cock.setKnotWidthRatio((Random.upTo(5)+10) / 10);
//     }
//     if (Random.upTo(4) == 0) {
//       cock.setKnobHeightRatio((Random.upTo(4)+1) / 20);
//     }
//     if (cock.knobHeightRatio == null && Random.upTo(4) == 0) {
//       cock.setSpineHeightRatio((Random.upTo(4)+1) / 20);
//     }
//     if (Random.upTo(6) == 0) {
//       cock.setGlow(Random.from(['red','purple']));
//     }
//   }
//
//   return {
//     build: build,
//     randomCockLength: randomCockLength,
//   }
//
// })();
//
// global.BallsFactory = (function(){
//   "use strict";
//
//   function build(character, options) {
//     return new Promise((resolve, reject) => {
//       if (character.id == null) { reject('Character must be persisted.'); }
//
//       character.withCock((cock) => {
//         let balls = new Balls({ character_id:character.id });
//
//         FactorySupport.baseline(balls, character.race, options, 'balls', {
//           width: null,
//           internal: false,
//           productionMultiplier: null
//         });
//
//         if (balls.width == null) { balls.setWidth(aboutCockWidth(cock)); }
//         if (balls.productionMultiplier == null) { setProductionMultiplier(balls, character); }
//
//         balls.save((id) => {
//           resolve(character);
//         });
//       });
//     });
//   }
//
//   // Each ball width is about the width of the character's cock, which we
//   // estimate here because the width function is too difficult to make
//   // asynchronous.
//   function aboutCockWidth(cock) {
//     return Math.round(0.1548712 * cock.length * cock.widthRatio);
//   }
//
//   function setProductionMultiplier(balls, character) {
//     balls.setProductionMultiplier(1 + (Random.upTo(100)/100) +
//       (ObjectUtility.fetch(character.race, 'bodyOptions', 'balls', 'extraProduction') || 0));
//   }
//
//   return { build:build }
//
// })();
