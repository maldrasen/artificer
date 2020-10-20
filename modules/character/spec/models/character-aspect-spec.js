// describe('CharacterAspect', function() {
//
//   describe('adjustStrength', function() {
//     it('adjusts the aspect strength', function(done) {
//       SpecHelper.buildJada().then(jada => {
//         jada.addAspect('breeder', { strength:1000 }).then(aspect => {
//           aspect.adjustStrength(250).then(() => {
//             expect(aspect.strength).to.equal(1250);
//             done();
//           });
//         });
//       });
//     });
//
//     it('prevents negitive strength', function(done) {
//       SpecHelper.buildJada().then(jada => {
//         jada.addAspect('breeder', { strength:200 }).then(aspect => {
//           aspect.adjustStrength(-250).then(() => {
//             expect(aspect.strength).to.equal(0);
//             done();
//           });
//         });
//       });
//     });
//
//     it('has a strength max', function(done) {
//       SpecHelper.buildJada().then(jada => {
//         jada.addAspect('breeder', { strength:2500 }).then(aspect => {
//           aspect.adjustStrength(750).then(() => {
//             expect(aspect.strength).to.equal(3000);
//             done();
//           });
//         });
//       });
//     });
//
//     it('caps strength for some skills and species', function(done) {
//       SpecHelper.buildJada({ species:'scaven' }).then(jada => {
//         jada.addAspect('hunting', { strength:100 }).then(aspect => {
//           aspect.adjustStrength(300).then(() => {
//             expect(aspect.strength).to.equal(200);
//             done();
//           });
//         });
//       });
//     });
//   });
//
//   describe('level', function() {
//     it('can be level 0', function() {
//       expect(new CharacterAspect({ strength:100 }).level).to.equal(0);
//     });
//
//     it('can be level 1', function() {
//       expect(new CharacterAspect({ strength:300 }).level).to.equal(1);
//     });
//
//     it('can be level 2', function() {
//       expect(new CharacterAspect({ strength:900 }).level).to.equal(2);
//     });
//
//     it('can be level 3', function() {
//       expect(new CharacterAspect({ strength:2500 }).level).to.equal(3);
//     });
//   });
//
//   describe('setLevel', function() {
//     let aspect;
//
//     beforeEach(function() {
//       aspect = new CharacterAspect({ code:'breeder' });
//     });
//
//     it('sets level 0', function() {
//       aspect.setLevel(0);
//       expect(aspect.strength).to.equal(0);
//     });
//
//     it('sets level 1', function() {
//       aspect.setLevel(1);
//       expect(aspect.strength).to.equal(400);
//     });
//
//     it('sets level 2', function() {
//       aspect.setLevel(2);
//       expect(aspect.strength).to.equal(1000);
//     });
//
//     it('sets level 3', function() {
//       aspect.setLevel(3);
//       expect(aspect.strength).to.equal(2200);
//     });
//   });
//
// });
