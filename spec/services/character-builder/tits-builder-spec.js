// describe('TitsBuilder', function() {
//
//   describe('build', function() {
//     it('builds tits using all options', function(done) {
//       let options = { gender:'futa', tits:{
//         count: 3,
//         size: 1000,
//         shape: 'bell',
//       }};
//
//       CharacterHelper.withTestCharacter(options, (character) => {
//         character.withTits((tits) => {
//           expect(tits.count).to.equal(3);
//           expect(tits.size).to.equal(1000);
//           expect(tits.shape).to.equal('bell');
//           done();
//         });
//       });
//     });
//
//     it('randomizes options otherwise', function(done) {
//       CharacterHelper.withTestCharacter({ gender:'futa', species:'nymph' }, (character) => {
//         character.withTits((tits) => {
//           expect(tits.count).to.equal(2);
//           expect(tits.size).to.be.within(400,1100);
//           expect(tits.shape).to.exist;
//           done();
//         });
//       });
//     });
//   });
//
// });
// describe('NippleFactory', function() {
//
//   describe('build', function() {
//     it('builds nipples using all options', function(done) {
//       let options = { gender:'futa', nipples:{
//         count: 3,
//         length: 10,
//         width: 20,
//         shade: 5,
//         shape: 'star',
//         orificeWidth: 80,
//         orificeElasticity: 3,
//       }};
//
//       CharacterHelper.withTestCharacter(options, (character) => {
//         character.withNipples((nipples) => {
//           expect(nipples.count).to.equal(3);
//           expect(nipples.length).to.equal(10);
//           expect(nipples.width).to.equal(20);
//           expect(nipples.shade).to.equal(5);
//           expect(nipples.shape).to.equal('star');
//           expect(nipples.orificeWidth).to.equal(80);
//           expect(nipples.orificeElasticity).to.equal(3);
//           done();
//         });
//       });
//     });
//
//     it('randomizes male nipples', function(done) {
//       CharacterHelper.withTestCharacter({ species:'elf', gender:'male' }, (character) => {
//         character.withNipples((nipples) => {
//           expect(nipples.count).to.equal(1);
//           expect(nipples.length).to.be.within(1,5);
//           expect(nipples.width).to.be.within(10,36);
//           expect(nipples.shade).to.be.within(1,5);
//           expect(nipples.shape).to.exist;
//           expect(nipples.orificeWidth).to.equal(0);
//           expect(nipples.orificeElasticity).to.equal(0);
//           done();
//         });
//       });
//     });
//
//     it('randomizes female nipples', function(done) {
//       CharacterHelper.withTestCharacter({ species:'elf', gender:'female' }, (character) => {
//         character.withNipples((nipples) => {
//           expect(nipples.count).to.equal(1);
//           expect(nipples.length).to.be.within(1,5);
//           expect(nipples.width).to.be.within(18,55);
//           expect(nipples.shade).to.be.within(1,5);
//           expect(nipples.shape).to.exist;
//           done();
//         });
//       });
//     });
//
//     it('builds puffy nipples', function(done) {
//       CharacterHelper.withTestCharacter({ species:'elf', gender:'female', nipples:{ shape:'puffy' }}, (character) => {
//         character.withNipples((nipples) => {
//           expect(nipples.width).to.be.within(18,55);
//           expect(nipples.length).to.equal(nipples.width);
//           expect(nipples.shape).to.equal('puffy');
//           done();
//         });
//       });
//     });
//
//     it('builds inverted nipples', function(done) {
//       CharacterHelper.withTestCharacter({ species:'elf', gender:'female', nipples:{ shape:'inverted' }}, (character) => {
//         character.withNipples((nipples) => {
//           expect(nipples.width).to.be.within(18,55);
//           expect(nipples.length).to.equal(1);
//           expect(nipples.shape).to.equal('inverted');
//           done();
//         });
//       });
//     });
//
//     it('builds star shaped nipples', function(done) {
//       CharacterHelper.withTestCharacter({ species:'elf', gender:'female', nipples:{ shape:'star' }}, (character) => {
//         character.withNipples((nipples) => {
//           expect(nipples.width).to.be.within(38,105);
//           expect(nipples.shape).to.equal('star');
//           done();
//         });
//       });
//     });
//
//     it('builds star heart nipples', function(done) {
//       CharacterHelper.withTestCharacter({ species:'elf', gender:'female', nipples:{ shape:'heart' }}, (character) => {
//         character.withNipples((nipples) => {
//           expect(nipples.width).to.be.within(38,105);
//           expect(nipples.shape).to.equal('heart');
//           done();
//         });
//       });
//     });
//
//     it('builds teats', function(done) {
//       CharacterHelper.withTestCharacter({ species:'minotaur', gender:'female' }, (character) => {
//         character.withNipples((nipples) => {
//           expect(nipples.width).to.be.within(20,70);
//           expect(nipples.length).to.be.within(40,330);
//           expect(nipples.shape).to.equal('teat');
//           expect(nipples.count).to.equal(4);
//           done();
//         });
//       });
//     });
//   });
//
// });
