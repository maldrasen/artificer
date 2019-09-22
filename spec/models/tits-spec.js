// describe('Tits', function() {
//
//   it('can be persisted in the database', function(done) {
//     tits = new Tits({
//       size: 400,
//       shape: 'dangling',
//       count: 4,
//       productionMultiplier: 30,
//     });
//
//     tits.save((id) => {
//       Tits.load(id, (tits) => {
//         expect(tits.size).to.equal(400);
//         expect(tits.shape).to.equal('dangling');
//         expect(tits.count).to.equal(4);
//         expect(tits.productionMultiplier).to.equal(30);
//         expect(tits.getLactationVolume()).to.equal(12000);
//         done();
//       });
//     });
//   });
//
//   describe('Basic Attributes', function() {
//     let tits;
//
//     beforeEach(function() {
//       tits = new Tits({ });
//     });
//
//     it("defines size classes", function() {
//       tits.setSize(25);  expect(tits.sizeClass).to.equal('flat');
//       tits.setSize(100); expect(tits.sizeClass).to.equal('small');
//       tits.setSize(300); expect(tits.sizeClass).to.equal('average');
//       tits.setSize(700); expect(tits.sizeClass).to.equal('huge');
//     });
//   });
//
// });
