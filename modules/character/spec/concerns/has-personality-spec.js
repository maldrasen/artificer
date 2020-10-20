// describe('Has Personality', function() {
//
//   describe('reactToCock()', function() {
//     it('is more desireable when character is a cock lover', function(done) {
//       SpecHelper.buildJada({}).then(jada => {
//         jada.addAspect('cock-lover',{ level:2 }).then(aspect => {
//           jada.getCock().then(cock => {
//             jada.reactToCock(cock).then(reaction => {
//               expect(reaction.cockDesirability).to.equal(4);
//               done();
//             });
//           });
//         });
//       });
//     });
//
//     it('is more desireable when character is androphilic', function(done) {
//       SpecHelper.buildJada({}).then(jada => {
//         jada.addAspect('androphilic',{ level:1 }).then(aspect => {
//           jada.getCock().then(cock => {
//             jada.reactToCock(cock).then(reaction => {
//               expect(reaction.cockDesirability).to.equal(2);
//               done();
//             });
//           });
//         });
//       });
//     });
//
//     it('is less desireable when character is androphobic', function(done) {
//       SpecHelper.buildJada({}).then(jada => {
//         jada.addAspect('androphobic',{ level:2 }).then(aspect => {
//           jada.getCock().then(cock => {
//             jada.reactToCock(cock).then(reaction => {
//               expect(reaction.cockDesirability).to.equal(-4);
//               done();
//             });
//           });
//         });
//       });
//     });
//
//     it('is less desireable when dick is small character is a size queen', function(done) {
//       SpecHelper.buildJada({ cock:{ sizeClass:'small' }}).then(jada => {
//         jada.addAspect('size-queen',{ level:3 }).then(aspect => {
//           jada.getCock().then(cock => {
//             jada.reactToCock(cock).then(reaction => {
//               expect(reaction.cockDesirability).to.equal(-3);
//               done();
//             });
//           });
//         });
//       });
//     });
//
//     it('is more desireable when dick is big character is a size queen', function(done) {
//       SpecHelper.buildJada({ cock:{ sizeClass:'big' }}).then(jada => {
//         jada.addAspect('size-queen',{ level:3 }).then(aspect => {
//           jada.getCock().then(cock => {
//             jada.reactToCock(cock).then(reaction => {
//               expect(reaction.cockDesirability).to.equal(3);
//               done();
//             });
//           });
//         });
//       });
//     });
//
//     it('is much more desireable when dick is huge character is a size queen', function(done) {
//       SpecHelper.buildJada({ cock:{ sizeClass:'monster' }}).then(jada => {
//         jada.addAspect('size-queen',{ level:3 }).then(aspect => {
//           jada.getCock().then(cock => {
//             jada.reactToCock(cock).then(reaction => {
//               expect(reaction.cockDesirability).to.equal(6);
//               done();
//             });
//           });
//         });
//       });
//     });
//
//     it('is more desireable when dick is animal shaped and character is beast lover', function(done) {
//       SpecHelper.buildJada({ cock:{ shape:'horse' }}).then(jada => {
//         jada.addAspect('beast-lover',{ level:1 }).then(aspect => {
//           jada.getCock().then(cock => {
//             jada.reactToCock(cock).then(reaction => {
//               expect(reaction.cockDesirability).to.equal(1);
//               done();
//             });
//           });
//         });
//       });
//     })
//   });
//
// });
