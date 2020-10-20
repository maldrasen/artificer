// describe("Character Adjuster", function() {
//
//   async function flattenAspects(jada) {
//     return (await jada.getCharacterAspects()).map(aspect => {
//       return `${aspect.code}(${aspect.level})`;
//     })
//   }
//
//   it('applies the listed adjustments', function(done) {
//     SpecHelper.buildJada({ species:'scaven', gender:'female' }).then(jada => {
//       CharacterAdjuster.applyAll(jada,['short','zero-tits']).then(_ => {
//         jada.getBody().then(body => {
//           jada.getTits().then(tits => {
//             expect(body.height).to.equal(684);
//             expect(tits.sizeClass).to.equal('zero');
//             done();
//           });
//         });
//       });
//     });
//   });
//
//   it('ignores invalid adjustments', function(done) {
//     SpecHelper.buildJada({ species:'scaven', gender:'female' }).then(jada => {
//       CharacterAdjuster.applyAll(jada,['short','monster-cock']).then(_ => {
//         jada.getBody().then(body => {
//           expect(body.height).to.equal(684);
//           done();
//         });
//       });
//     });
//   });
//
//   it('adds specified aspects at the indicated level, or at level 1', function(done) {
//     SpecHelper.buildJada().then(jada => {
//       CharacterAdjuster.applyAll(jada,['revolting','golden.2']).then(_ => {
//         flattenAspects(jada).then(aspects => {
//           expect(aspects).to.contain('golden(2)')
//           expect(aspects).to.contain('revolting(1)')
//           done();
//         });
//       });
//     });
//   });
//
//   it('raises the aspect level if existing aspects are added', function(done) {
//     SpecHelper.buildJada().then(jada => {
//       CharacterAdjuster.applyAll(jada,['milky.2','milky.3','milky.1']).then(_ => {
//         flattenAspects(jada).then(aspects => {
//           expect(aspects).to.eql(['milky(3)'])
//           done();
//         });
//       });
//     });
//   });
//
//   it('checks aspect requirements', function(done) {
//     SpecHelper.buildJada({ gender:'male' }).then(jada => {
//       CharacterAdjuster.applyAll(jada,['anal-slut','pussy-slut']).then(_ => {
//         flattenAspects(jada).then(aspects => {
//           expect(aspects).to.eql(['anal-slut(1)'])
//           done();
//         });
//       });
//     });
//   });
//
// });
