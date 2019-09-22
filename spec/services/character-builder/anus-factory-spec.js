// describe('AnusFactory', function() {
//
//   it('uses the all the options if present', function(done) {
//     let options = { gender:'male', race:'elf', anus:{
//       shape: 'horse',
//       width: 50,
//       prolapseLength: 400,
//       elasticity: 7,
//     }};
//
//     CharacterHelper.withTestCharacter(options, (character) => {
//       character.withAnus((anus) => {
//         expect(anus.shape).to.equal('horse');
//         expect(anus.width).to.equal(50);
//         expect(anus.prolapseLength).to.equal(400);
//         expect(anus.elasticity).to.equal(7);
//         done();
//       });
//     });
//   });
//
//   it('gets the shape from the race', function(done) {
//     CharacterHelper.withTestCharacter({ gender:'male', race:'equian' }, (character) => {
//       character.withAnus((anus) => {
//         expect(anus.shape).to.equal('horse');
//         done();
//       });
//     });
//   });
//
//   it('sets the elasticity from the race (elf)', function(done) {
//     CharacterHelper.withTestCharacter({ gender:'female', race:'elf' }, (character) => {
//       character.withAnus((anus) => {
//         expect(anus.elasticity).to.equal(3);
//         done();
//       });
//     });
//   });
//
//   it('sets the elasticity from the race (pixie)', function(done) {
//     CharacterHelper.withTestCharacter({ gender:'female', race:'pixie' }, (character) => {
//       character.withAnus((anus) => {
//         expect(anus.elasticity).to.equal(10);
//         done();
//       });
//     });
//   });
//
//   describe('Anus Widths', function() {
//     function testAnalWidth(race, low, high, done) {
//       CharacterHelper.withTestCharacter({ gender:'male', race:race }, (character) => {
//         character.withAnus((anus) => {
//           expect(anus.width).to.be.within(low,high);
//           done();
//         });
//       });
//     }
//
//     it('sets the width according to race (elf)', function(done) {
//       testAnalWidth('elf',25,50,done);
//     });
//
//     it('sets the width according to race (equian)', function(done) {
//       testAnalWidth('equian',60,85,done);
//     });
//
//     it('sets the width according to race (dragon)', function(done) {
//       testAnalWidth('dragon',80,100,done);
//     });
//
//     it('sets the width according to race (ogre)', function(done) {
//       testAnalWidth('ogre',60,80,done);
//     });
//
//     it('sets the width according to race (goblin)', function(done) {
//       testAnalWidth('goblin',20,40,done);
//     });
//
//     it('sets the width according to race (pixie)', function(done) {
//       testAnalWidth('pixie',10,20,done);
//     });
//   });
//
// });
