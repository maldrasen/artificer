// describe('Nipples', function() {
//
//   it('can be persisted in the database', function(done) {
//     nipples = new Nipples({
//       count: 2,
//       length: 30,
//       orificeElasticity: 1,
//       orificeWidth: 5,
//       shade: 2,
//       shape: 'inverted',
//       width: 50,
//     });
//
//     nipples.save((id) => {
//       Nipples.load(id, (nipples) => {
//         expect(nipples.count).to.equal(2);
//         expect(nipples.length).to.equal(30);
//         expect(nipples.convertedLength).to.equal(1.25);
//         expect(nipples.orificeElasticity).to.equal(1);
//         expect(nipples.orificeWidth).to.equal(5);
//         expect(nipples.convertedOrificeWidth).to.equal(0.25);
//         expect(nipples.orificeArea).to.equal(20);
//         expect(nipples.shade).to.equal(2);
//         expect(nipples.shape).to.equal('inverted');
//         expect(nipples.width).to.equal(50);
//         expect(nipples.convertedWidth).to.equal(2);
//         done();
//       });
//     });
//   });
//
// });
