// describe('CockBuilder', function() {
//
//   describe('build', function() {
//     it("does nothing to character's without cocks", function(done) {
//       CharacterHelper.withTestCharacter({ gender:'female' }, (character) => {
//         character.withCock((cock) => {
//           expect(cock).to.not.exist;
//           done();
//         });
//       });
//     });
//
//     it('uses the all the options if present', function(done) {
//       let options = { gender:'male', species:'elf', cock:{
//         shape: 'horse',
//         sheath: 'fur',
//         count: 2,
//         length: 1000,
//         widthRatio: 1.5,
//         knotWidthRatio: 1.2,
//         knobHeightRatio: 1.4,
//         spineHeightRatio: 1.1,
//         glow: 'purple',
//         urethraWidth: 10,
//         urethraElasticity: 5,
//       }};
//
//       CharacterHelper.withTestCharacter(options, (character) => {
//         character.withCock((cock) => {
//           expect(cock.shape).to.equal('horse');
//           expect(cock.sheath).to.equal('fur');
//           expect(cock.count).to.equal(2);
//           expect(cock.length).to.equal(1000);
//           expect(cock.widthRatio).to.equal(1.5);
//           expect(cock.knotWidthRatio).to.equal(1.2);
//           expect(cock.knobHeightRatio).to.equal(1.4);
//           expect(cock.spineHeightRatio).to.equal(1.1);
//           expect(cock.glow).to.equal('purple');
//           expect(cock.urethraWidth).to.equal(10);
//           expect(cock.urethraElasticity).to.equal(5);
//           done();
//         });
//       });
//     });
//
//     it("builds a cock of average length for that character's species (centaur)", function(done) {
//       CharacterHelper.withTestCharacter({ gender:'male', species:'centaur' }, (character) => {
//         character.withCock((cock) => {
//           expect(cock.convertedLength).to.be.within(10,35);
//           done();
//         });
//       });
//     });
//
//     it("builds a cock of average length for that character's species (rat)", function(done) {
//       CharacterHelper.withTestCharacter({ gender:'male', species:'rat' }, (character) => {
//         character.withCock((cock) => {
//           expect(cock.convertedLength).to.be.within(2,6);
//           done();
//         });
//       });
//     });
//
//     it("sets a random knot width ratio if it's missing on a dog cock", function(done) {
//       CharacterHelper.withTestCharacter({ gender:'male', species:'lupin' }, (character) => {
//         character.withCock((cock) => {
//           expect(cock.knotWidthRatio).to.be.within(1,2);
//           done();
//         });
//       });
//     });
//   });
//
//   describe('desecrate', function() {
//     it('does nothing if the no-random-features flag is set', function(done) {
//       let options = { gender:'male', species:'incubus', cock:{ 'no-random-features':true }};
//       CharacterHelper.withTestCharacter(options, (character) => {
//         character.withCock((cock) => {
//           expect(cock.shape).to.equal('normal');
//           done();
//         });
//       });
//     });
//
//     it('at least changes the shape.', function(done) {
//       CharacterHelper.withTestCharacter({ gender:'male', species:'incubus' }, (character) => {
//         character.withCock((cock) => {
//           expect(cock.shape).to.not.equal('normal');
//           done();
//         });
//       });
//     });
//   });
//
// });
// describe('BallsFactory', function() {
//
//   it('builds balls using all options', function(done) {
//     let options = { gender:'futa', balls:{
//       width: 50,
//       internal: true,
//       productionMultiplier: 10
//     }};
//
//     CharacterHelper.withTestCharacter(options, (character) => {
//       character.withBalls((balls) => {
//         expect(balls.width).to.equal(50);
//         expect(balls.internal).to.equal(true);
//         expect(balls.productionMultiplier).to.equal(10);
//         done();
//       });
//     });
//   });
//
//   it('generates a width based on average cock width (smaller)', function(done) {
//     let options = { species:'elf', gender:'futa', givenName:'F', postName:'L',
//                     cock:{ length:200 }};
//
//     CharacterHelper.withTestCharacter(options, (character) => {
//       character.withBalls((balls) => {
//         expect(balls.width).to.equal(31);
//         done();
//       });
//     });
//   });
//
//   it('generates a width based on average cock width (bigger)', function(done) {
//     let options = { species:'elf', gender:'futa', givenName:'F', postName:'L',
//                     cock:{ length:400 }};
//
//     CharacterHelper.withTestCharacter(options, (character) => {
//       character.withBalls((balls) => {
//         expect(balls.width).to.equal(62);
//         done();
//       });
//     });
//   });
//
//   it('generates a random production multiplier (elf)', function(done) {
//     CharacterHelper.withTestCharacter({ species:'elf', gender:'futa'}, (character) => {
//       character.withBalls((balls) => {
//         expect(balls.productionMultiplier).to.be.within(1,2);
//         done();
//       });
//     });
//   });
//
//   it('generates a random production multiplier (minotaur)', function(done) {
//     CharacterHelper.withTestCharacter({ species:'minotaur', gender:'futa'}, (character) => {
//       character.withBalls((balls) => {
//         expect(balls.productionMultiplier).to.be.within(2,4);
//         done();
//       });
//     });
//   });
//
//   it('generates a random production multiplier (rat)', function(done) {
//     CharacterHelper.withTestCharacter({ species:'rat', gender:'futa'}, (character) => {
//       character.withBalls((balls) => {
//         expect(balls.productionMultiplier).to.be.within(4,5);
//         done();
//       });
//     });
//   });
//
//   it('gives naga internal balls', function(done) {
//     CharacterHelper.withTestCharacter({ species:'naga', gender:'futa'}, (character) => {
//       character.withBalls((balls) => {
//         expect(balls.internal).to.equal(true);
//         done();
//       });
//     });
//   });
//
// });
