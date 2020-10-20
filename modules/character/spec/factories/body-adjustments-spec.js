// describe('Adjustments - Body', function() {
//
//   it ('gives dark skin', function(done) {
//     SpecHelper.buildJada({},['dark-skin']).then(character => {
//       character.getBody().then(body => {
//         expect(body.skinShade).to.equal(1);
//         done();
//       });
//     });
//   });
//
//   it ('gives light skin', function(done) {
//     SpecHelper.buildJada({ species:'nymph' },['light-skin']).then(character => {
//       character.getBody().then(body => {
//         expect(body.skinShade).to.equal(5);
//         done();
//       });
//     });
//   });
//
//   it ('gives furries dark fur', function(done) {
//     SpecHelper.buildJada({ species:'lupin' },['dark-skin']).then(character => {
//       character.getBody().then(body => {
//         expect(body.furShade).to.equal(1);
//         done();
//       });
//     });
//   });
//
//   it ('gives red hair', function(done) {
//     SpecHelper.buildJada({ species:'nymph' },['red-hair']).then(character => {
//       character.getBody().then(body => {
//         expect(body.hairColor).to.equal('red');
//         done();
//       });
//     });
//   });
//
//   it ('gives purple hair', function(done) {
//     SpecHelper.buildJada({ species:'nymph' },['purple-hair']).then(character => {
//       character.getBody().then(body => {
//         expect(body.hairColor).to.equal('purple');
//         done();
//       });
//     });
//   });
//
//   it ('gives white hair', function(done) {
//     SpecHelper.buildJada({ species:'nymph' },['white-hair']).then(character => {
//       character.getBody().then(body => {
//         expect(body.hairColor).to.equal('white');
//         done();
//       });
//     });
//   });
//
//   it ('gives white fur', function(done) {
//     SpecHelper.buildJada({ species:'lupin' },['white-hair']).then(character => {
//       character.getBody().then(body => {
//         expect(body.furColor).to.equal('white');
//         done();
//       });
//     });
//   });
//
//   it ('makes short', function(done) {
//     SpecHelper.buildJada({ species:'kobold', gender:'female' },['short']).then(character => {
//       character.getBody().then(body => {
//         expect(body.height).to.equal(765);
//         done();
//       });
//     });
//   });
//
//   it ('makes tall', function(done) {
//     SpecHelper.buildJada({ species:'kobold', gender:'male' },['tall']).then(character => {
//       character.getBody().then(body => {
//         expect(body.height).to.equal(1265);
//         done();
//       });
//     });
//   });
//
// });
