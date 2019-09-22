// describe('Pussy', function() {
//
//   it('can be persisted in the database', function(done) {
//     pussy = new Pussy({
//       cervixElasticity: 2,
//       cervixWidth: 60,
//       clitLength: 300,
//       clitWidth: 50,
//       elasticity: 5,
//       innerLabiaLength: 90,
//       outerLabiaSize: 5,
//       placement: 'normal',
//       prolapseLength: 10,
//       shape: 'horse',
//       urethraElasticity: 4,
//       urethraWidth: 30,
//       width: 900,
//     });
//
//     pussy.save((id) => {
//       Pussy.load(id, (pussy) => {
//         expect(pussy.cervixElasticity).to.equal(2);
//         expect(pussy.cervixWidth).to.equal(60);
//         expect(pussy.convertedCervixWidth).to.equal(2.25);
//         expect(pussy.cervixArea).to.equal(2827);
//         expect(pussy.clitLength).to.equal(300);
//         expect(pussy.clitWidth).to.equal(50);
//         expect(pussy.elasticity).to.equal(5);
//         expect(pussy.innerLabiaLength).to.equal(90);
//         expect(pussy.convertedInnerLabiaLength).to.equal(3.5);
//         expect(pussy.outerLabiaSize).to.equal(5);
//         expect(pussy.placement).to.equal('normal');
//         expect(pussy.prolapseLength).to.equal(10);
//         expect(pussy.convertedProlapseLength).to.equal(0.5);
//         expect(pussy.shape).to.equal('horse');
//         expect(pussy.urethraElasticity).to.equal(4);
//         expect(pussy.urethraWidth).to.equal(30);
//         expect(pussy.convertedUrethraWidth).to.equal(1.25);
//         expect(pussy.urethraArea).to.equal(707);
//         expect(pussy.width).to.equal(900);
//         expect(pussy.convertedWidth).to.equal(35.5);
//         expect(pussy.area).to.equal(636173);
//         done();
//       });
//     });
//   });
//
// });
