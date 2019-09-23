global.TitsBuilder = (function() {

  function build(character, options) {
    return new Promise((resolve, reject) => {
      if (character.id == null) { reject('Character must be persisted.'); }

      resolve(null);
    });
  }

  return { build:build }

})();

// global.NipplesFactory = (function(){
//   "use strict";
//
//   function build(character, options) {
//     return new Promise((resolve, reject) => {
//       if (character.id == null) { reject('Character must be persisted.'); }
//
//       let nipples = new Nipples({ character_id:character.id });
//
//       FactorySupport.baseline(nipples, character.race, options, 'nipples', {
//         count: 1,
//         width: null,
//         length: null,
//         shade: Random.upTo(5)+1,
//         shape: 'normal',
//         orificeWidth: 0,
//         orificeElasticity: 0,
//       });
//
//       // Like the CockFactory, the nipple factory will create random desecrated
//       // nipples on succubus characters unless the no-random-features flag is set.
//       if (character.race.code == 'succubus' && options['no-random-features'] == null) {
//         desecrateNipples(nipples, options);
//       }
//
//       // Set a default shape for the character's gender. Males by default have
//       // small boring nipples.
//       if (nipples.shape == null) {
//         nipples.setShape((character.gender.code == 'male') ? 'normal' : randomFemaleNippleShape());
//       }
//
//       // Also, ensure that even minotaur males have normal nipples.
//       if (nipples.shape == 'teat' && character.gender.code == 'male') {
//         nipples.setShape('normal');
//       }
//
//       // If width or length is null go ahead and randomize both. If the size is
//       // important then both attributes should be set.
//       if (nipples.width == null || nipples.length == null) {
//         randomNippleSize(nipples, character);
//       }
//
//       nipples.save((id) => {
//         resolve(character);
//       });
//     });
//   }
//
//   function randomNippleSize(nipples, character) {
//     // If a character is male then their base nipple size is around 2cm, but we
//     // want to scale to body size. So assume a character is 160cm tall, multiply
//     // height by 0.0125 to get nipple width. Females should be about 3cm, so
//     // ratio is a bit bigger.
//     let width = (character.gender.code == 'male') ?
//       (character.race.randomHeight(character.gender.code) * 0.0125):
//       (character.race.randomHeight(character.gender.code) * 0.01875);
//
//     // Length is about a tenth of the width for normal nipples.
//     let length = width * (0.9+Random.upTo(100)/1000)/10;
//
//     // Adjust values for nipple shapes. Cock, pussy and mouth shapes are handled
//     // by their associated classes.
//     if (nipples.shape == 'puffy') { length = width; }
//     if (nipples.shape == 'inverted') { length = 1; }
//     if (nipples.shape == 'star') { width = width*2; }
//     if (nipples.shape == 'heart') { width = width*2; }
//     if (nipples.shape == 'teat') { length = (2+Random.upTo(2))*width; }
//
//     nipples.setWidth(Math.round(width));
//     nipples.setLength(Math.round(length));
//   }
//
//   function randomFemaleNippleShape() {
//     return Random.fromFrequencyMap({
//       normal: 100,
//       puffy: 20,
//       inverted: 20,
//       star: 1,
//       heart: 1 });
//   }
//
//   function desecrateNipples(nipples, options) {
//     if (nipples.shape == null) {
//       nipples.setShape(Random.fromFrequencyMap({
//         normal: 100,
//         puffy: 30,
//         inverted: 30,
//         star: 20,
//         heart: 20,
//         teat: 10,
//         cock: 10,
//         pussy: 10,
//         mouth: 10,
//       }));
//     }
//     if (options.count == null && Random.upTo(10)== 0) {
//       nipples.setCount(Random.upTo(2)+2);
//     }
//   }
//
//   return { build:build }
//
// })();
// global.TitsFactory = (function(){
//   "use strict";
//
//   function build(character, options) {
//     return new Promise((resolve, reject) => {
//       if (character.id == null) { reject('Character must be persisted.'); }
//
//       let tits = new Tits({ character_id:character.id });
//
//       FactorySupport.baseline(tits, character.race, options, 'tits', {
//         count: 2,
//         size: null,
//         shape: null,
//         productionMultiplier: 0,
//       });
//
//       if (tits.size == null) {
//         tits.setSize(randomSize(character));
//       }
//       if (tits.shape == null) {
//         randomizeShape(tits);
//       }
//
//       // Randomly induce lactation in 2.5% of random characters and in 20% of
//       // minotaurs because cows.
//       if (options.productionMultiplier == null) {
//         if (Random.upTo(40)==0 || (character.race.code=='minotaur' && Random.upTo(5)==0)) {
//           startLactating(character, tits);
//         }
//       }
//
//       tits.save((id) => {
//         resolve(character);
//       });
//     });
//   }
//
//   // Lactation should also increase nipple size. We'll probably eventually move
//   // this out of the factory once there's a more direct way to direct a
//   // character to start lactating. This should do for now though.
//   function startLactating(character, tits) {
//     tits.setProductionMultiplier(0.5 + (Random.upTo(100)/100) +
//       (ObjectUtility.fetch(character.race, 'bodyOptions', 'tits', 'extraProduction') || 0));
//   }
//
//   function randomSize(character) {
//     let average = ObjectUtility.fetch(character.race, 'bodyOptions', 'tits', 'averageSize');
//     return Random.tightlyBound(average,average);
//   }
//
//   function randomizeShape(tits) {
//     if (tits.sizeClass == 'flat')    { tits.setShape('flat');               }
//     if (tits.sizeClass == 'small')   { tits.setShape(randomSmallShape());   }
//     if (tits.sizeClass == 'average') { tits.setShape(randomAverageShape()); }
//     if (tits.sizeClass == 'huge')    { tits.setShape(randomHugeShape());    }
//   }
//
//   function randomSmallShape() {
//     return Random.fromFrequencyMap({
//       perky: 80,
//       round: 50,
//       conical: 80,
//     });
//   }
//
//   function randomAverageShape() {
//     return Random.fromFrequencyMap({
//       perky: 60,
//       round: 120,
//       dangling: 80,
//     });
//   }
//
//   function randomHugeShape() {
//     return Random.fromFrequencyMap({
//       round: 50,
//       dangling: 100,
//       bell: 80,
//     });
//   }
//
//   return {
//     build: build,
//     randomSize: randomSize,
//     randomizeShape: randomizeShape,
//   }
//
// })();
