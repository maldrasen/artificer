// Moving this from the cock builder to the adjuster....
// I think this would be a good place to inflate the goatmen's balls too.

// Setting options:{cock:{'no-random-features':true}} is really the only
// way to prevent these features from being randomly applied when a demon
// cock is being built, in case there are specs where we don't want to
// see surprise cock spines showing up in.
// if (character.race.isDemon && options['no-random-features'] == null) {
//   desecrateCock(cock, options);
// }

// This function is really only used for the Incubus and Succubus races. If a
// cock shape isn't specified in the options, then they should get a random
// cock shape. Cock count, average length, and other features are all then
// adjusted depending on the cock shape.
//
// TODO: This should really be part of the adjuster instead.
// function desecrateCock(cock, options) {
//   if (options.shape == null) {
//     cock.setShape(Random.fromFrequencyMap({
//       dog: 20,
//       snake: 20,
//       dragon: 20,
//       horse: 30,
//       demon: 100,
//     }));
//     if (cock.shape == 'horse')  { cock.setLength(cock.length + 200); }
//     if (cock.shape == 'snake')  { cock.setLength(cock.length + 200); }
//     if (cock.shape == 'dragon') { cock.setLength(cock.length + 100); }
//     if (cock.shape == 'demon')  { cock.setLength(cock.length + 50); }
//   }
//
//   if (options.count == null) {
//     if (Random.upTo(5) == 0)  { cock.setCount(2); }
//     if (Random.upTo(10) == 0) { cock.setCount(3); }
//   }
//
//   if (Random.upTo(4) == 0) {
//     cock.setKnotWidthRatio((Random.upTo(5)+10) / 10);
//   }
//   if (Random.upTo(4) == 0) {
//     cock.setKnobHeightRatio((Random.upTo(4)+1) / 20);
//   }
//   if (cock.knobHeightRatio == null && Random.upTo(4) == 0) {
//     cock.setSpineHeightRatio((Random.upTo(4)+1) / 20);
//   }
//   if (Random.upTo(6) == 0) {
//     cock.setGlow(Random.from(['red','purple']));
//   }
// }



// describe('desecrate', function() {
//   it('does nothing if the no-random-features flag is set', function(done) {
//     let options = { gender:'male', species:'incubus', cock:{ 'no-random-features':true }};
//     CharacterBuilder.build(options, character => {
//       character.getCock(cock => {
//         expect(cock.shape).to.equal('normal');
//         done();
//       });
//     });
//   });
//
//   it('at least changes the shape.', function(done) {
//     CharacterBuilder.build({ gender:'male', species:'incubus' }, character => {
//       character.getCock(cock => {
//         expect(cock.shape).to.not.equal('normal');
//         done();
//       });
//     });
//   });
// });
