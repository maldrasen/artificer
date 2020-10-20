// describe('HasInjury', function() {
//
//   it('can add an injury to a character', function(done) {
//     SpecHelper.buildJada().then(jada => {
//       jada.addInjury(Hazard.lookup('forage-tit-smash-001')).then(() => {
//         jada.getTits().then(tits => {
//           expect(tits.smashLevel).to.equal(1);
//           expect(tits.smashCount).to.equal(1);
//           expect(tits.smashHealing).to.equal(0);
//           expect(tits.description).to.exist;
//           jada.getHealth().then(health => {
//             jada.getHealthWord().then(word => {
//               jada.getHealthLevels().then(levels => {
//                 jada.getHealthClass().then(classname => {
//                   expect(health).to.equal(87);
//                   expect(word).to.equal('Injured');
//                   expect(classname).to.equal('injured');
//                   expect(levels.critical).to.equal(0);
//                   expect(levels.painful).to.equal(1);
//                   done();
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
//
// });
