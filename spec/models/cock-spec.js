// describe('Cock', function() {
//
//   it('can be persisted in the database', function(done) {
//     cock = new Cock({
//       length: 500,
//       count: 1,
//       glow: 'blue',
//       knobHeightRatio: 20,
//       knotWidthRatio: 30,
//       placement: 'normal',
//       shape: 'horse',
//       sheath: 'fur',
//       spineHeightRatio: 40,
//       urethraElasticity: 2,
//       urethraWidth: 10,
//       widthRatio: 50,
//     });
//
//     cock.save((id) => {
//       Cock.load(id, (cock) => {
//         expect(cock.length).to.equal(500);
//         expect(cock.convertedLength).to.equal(19.75);
//         expect(cock.count).to.equal(1);
//         expect(cock.glow).to.equal('blue');
//         expect(cock.knobHeightRatio).to.equal(20);
//         expect(cock.knotWidthRatio).to.equal(30);
//         expect(cock.placement).to.equal('normal');
//         expect(cock.shape).to.equal('horse');
//         expect(cock.sheath).to.equal('fur');
//         expect(cock.spineHeightRatio).to.equal(40);
//         expect(cock.urethraElasticity).to.equal(2);
//         expect(cock.urethraWidth).to.equal(10);
//         expect(cock.convertedUrethraWidth).to.equal(0.5);
//         expect(cock.urethraArea).to.equal(79);
//         expect(cock.widthRatio).to.equal(50);
//         done();
//       });
//     });
//   });
//
// });
