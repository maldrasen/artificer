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
