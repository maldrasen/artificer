// describe('MouthFactory', function() {
//
//   it('uses the all the options if present', function(done) {
//     let options = { gender:'male', race:'elf', mouth:{
//       shape: 'horse',
//       width: 200,
//       tongueShape: 'forked',
//       tongueLength: 500,
//       elasticity: 7,
//       throatWidth: 50,
//       throatElasticity: 5,
//     }};
//
//     CharacterHelper.withTestCharacter(options, (character) => {
//       character.withMouth((mouth) => {
//         expect(mouth.shape).to.equal('horse');
//         expect(mouth.tongueShape).to.equal('forked');
//         expect(mouth.width).to.equal(200);
//         expect(mouth.tongueLength).to.equal(500);
//         expect(mouth.elasticity).to.equal(7);
//         expect(mouth.throatWidth).to.equal(50);
//         expect(mouth.throatElasticity).to.equal(5);
//         done();
//       });
//     });
//   });
//
//   it('gets the shapes from the race', function(done) {
//     CharacterHelper.withTestCharacter({ gender:'male', race:'naga' }, (character) => {
//       character.withMouth((mouth) => {
//         expect(mouth.shape).to.equal('snake');
//         expect(mouth.tongueShape).to.equal('forked');
//         done();
//       });
//     });
//   });
//
//   it('sets the elasticity from the race (elf)', function(done) {
//     CharacterHelper.withTestCharacter({ gender:'female', race:'elf' }, (character) => {
//       character.withMouth((mouth) => {
//         expect(mouth.elasticity).to.equal(1);
//         done();
//       });
//     });
//   });
//
//   it('sets the elasticity from the race (pixie)', function(done) {
//     CharacterHelper.withTestCharacter({ gender:'female', race:'pixie' }, (character) => {
//       character.withMouth((mouth) => {
//         expect(mouth.elasticity).to.equal(6);
//         done();
//       });
//     });
//   });
//
//   it('sets the width and tongue length according to race (elf)', function(done) {
//     CharacterHelper.withTestCharacter({ gender:'female', race:'elf' }, (character) => {
//       character.withMouth((mouth) => {
//         expect(mouth.width).to.be.within(50,70);
//         expect(mouth.tongueLength).to.be.within(50,70);
//         expect(mouth.throatWidth).to.be.within(20,40);
//         done();
//       });
//     });
//   });
//
//   it('sets the width and tongue length according to race (lupin)', function(done) {
//     CharacterHelper.withTestCharacter({ gender:'female', race:'lupin' }, (character) => {
//       character.withMouth((mouth) => {
//         expect(mouth.width).to.be.within(300,390);
//         expect(mouth.tongueLength).to.be.within(100,140);
//         expect(mouth.throatWidth).to.be.within(20,40);
//         done();
//       });
//     });
//   });
//
//   it('sets the width and tongue length according to race (naga)', function(done) {
//     CharacterHelper.withTestCharacter({ gender:'female', race:'naga' }, (character) => {
//       character.withMouth((mouth) => {
//         expect(mouth.width).to.be.within(550,650);
//         expect(mouth.tongueLength).to.be.within(270,330);
//         expect(mouth.throatWidth).to.be.within(390,410);
//         done();
//       });
//     });
//   });
//
//   it('sets the width and tongue length according to race (pixie)', function(done) {
//     CharacterHelper.withTestCharacter({ gender:'female', race:'pixie' }, (character) => {
//       character.withMouth((mouth) => {
//         expect(mouth.width).to.be.within(9,11);
//         expect(mouth.tongueLength).to.be.within(9,11);
//         expect(mouth.throatWidth).to.equal(5);
//         done();
//       });
//     });
//   });
//
// });
