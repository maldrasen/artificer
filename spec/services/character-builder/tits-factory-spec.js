// describe('TitsFactory', function() {
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
