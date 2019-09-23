// describe('PussyBuilder', function() {
//
//   it("does nothing to character's without a pussy", function(done) {
//     CharacterHelper.withTestCharacter({ gender:'male' }, (character) => {
//       character.withPussy((pussy) => {
//         expect(pussy).to.not.exist;
//         done();
//       });
//     });
//   });
//
//   it('uses the all the options if present', function(done) {
//     let options = { gender:'female', species:'elf', pussy:{
//       shape: 'horse',
//       width: 50,
//       cervixWidth: 30,
//       cervixElasticity: 6,
//       outerLabiaSize: 5,
//       innerLabiaLength: 500,
//       clitLength: 200,
//       clitWidth: 100,
//       prolapseLength: 400,
//       elasticity: 7,
//       urethraWidth: 10,
//       urethraElasticity: 5,
//     }};
//
//     CharacterHelper.withTestCharacter(options, (character) => {
//       character.withPussy((pussy) => {
//         expect(pussy.shape).to.equal('horse');
//         expect(pussy.width).to.equal(50);
//         expect(pussy.cervixWidth).to.equal(30);
//         expect(pussy.cervixElasticity).to.equal(6);
//         expect(pussy.outerLabiaSize).to.equal(5);
//         expect(pussy.innerLabiaLength).to.equal(500);
//         expect(pussy.clitLength).to.equal(200);
//         expect(pussy.clitWidth).to.equal(100);
//         expect(pussy.prolapseLength).to.equal(400);
//         expect(pussy.elasticity).to.equal(7);
//         expect(pussy.urethraWidth).to.equal(10);
//         expect(pussy.urethraElasticity).to.equal(5);
//         done();
//       });
//     });
//   });
//
//   it('gets the shape from the species', function(done) {
//     CharacterHelper.withTestCharacter({ gender:'female', species:'equian'}, (character) => {
//       character.withPussy((pussy) => {
//         expect(pussy.shape).to.equal('horse');
//         done();
//       });
//     });
//   });
//
//   it('sets the elasticity from the species (elf)', function(done) {
//     CharacterHelper.withTestCharacter({ gender:'female', species:'elf'}, (character) => {
//       character.withPussy((pussy) => {
//         expect(pussy.elasticity).to.equal(4);
//         expect(pussy.cervixElasticity).to.equal(1);
//         done();
//       });
//     });
//   });
//
//   it('sets the elasticity from the species (pixie)', function(done) {
//     CharacterHelper.withTestCharacter({ gender:'female', species:'pixie'}, (character) => {
//       character.withPussy((pussy) => {
//         expect(pussy.elasticity).to.equal(12);
//         expect(pussy.cervixElasticity).to.equal(6);
//         done();
//       });
//     });
//   });
//
//   describe('Pussy Widths', function() {
//     function testPussyWidth(species, low, high, done) {
//       CharacterHelper.withTestCharacter({ gender:'female', species:species }, (character) => {
//         character.withPussy((pussy) => {
//           expect(pussy.width).to.be.within(low,high);
//           done();
//         });
//       });
//     }
//
//     it('sets the width according to species (elf)', function(done) {
//       testPussyWidth('elf',35,50,done);
//     });
//
//     it('sets the width according to species (equian)', function(done) {
//       testPussyWidth('equian',70,90,done);
//     });
//
//     it('sets the width according to species (dragon)', function(done) {
//       testPussyWidth('dragon',80,120,done);
//     });
//
//     it('sets the width according to species (ogre)', function(done) {
//       testPussyWidth('ogre',70,90,done);
//     });
//
//     it('sets the width according to species (goblin)', function(done) {
//       testPussyWidth('goblin',30,40,done);
//     });
//
//     it('sets the width according to species (pixie)', function(done) {
//       testPussyWidth('pixie',10,25,done);
//     });
//   });
//
//   it('sets random labia and clit sizes', function(done) {
//     CharacterHelper.withTestCharacter({ gender:'female', species:'elf' }, (character) => {
//       character.withPussy((pussy) => {
//         expect(pussy.outerLabiaSize).to.be.within(1,5);
//         expect(pussy.innerLabiaLength).to.be.within(10,90);
//         expect(pussy.clitLength).to.be.within(1,50);
//         expect(pussy.clitWidth).to.be.within(5,15);
//         done();
//       });
//     });
//   });
//
// });
