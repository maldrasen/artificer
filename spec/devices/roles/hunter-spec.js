// describe('Role: Hunter', function() {
//
//   describe('successChance()', function() {
//     it("A weak character has a low chance of success", function() {
//       expect(Role.Hunter.successChance(0,0)).to.equal(30)
//     });
//     it("A stronger character has a slightly higher chance of success", function() {
//       expect(Role.Hunter.successChance(10,0)).to.equal(60)
//     });
//     it("A strong character has a higher chance of success", function() {
//       expect(Role.Hunter.successChance(30,0)).to.equal(75)
//     });
//     it("A skilled character has a slightly higher chance of success", function() {
//       expect(Role.Hunter.successChance(0,1)).to.equal(50)
//     });
//     it("A skilled and strong character has a high chance of success", function() {
//       expect(Role.Hunter.successChance(30,3)).to.equal(90)
//     });
//   });
//
//   describe('huntingResults()', function() {
//     it("Gets the table for the tier and skill level", function() {
//       expect(Role.Hunter.huntingResults(0,0)[1]).to.eql({ min:0, max:2, type:'small-game-pelt' });
//       expect(Role.Hunter.huntingResults(0,2)[0]).to.eql({ min:5, max:10, type:'small-game' });
//     });
//   });
//
//   // Not much I can do to test this, it's completely random what flavors will
//   // show up after all. Just make sure it doesn't blow up mostly I guess.
//   describe('resolveResults()', function() {
//     it('selects item flavors based on results', function() {
//       let flavors = Role.Hunter.resolveResults([
//         { min:4, max:4, type:'small-game' }
//       ]);
//       expect(Object.keys(flavors).length).to.be.within(1,4);
//     });
//   });
//
// });
