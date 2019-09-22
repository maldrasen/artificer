// describe('Mouth', function() {
//   let mouth, character;
//
//   it('can be persisted in the database', function(done) {
//     mouth = new Mouth({
//       elasticity: 1,
//       shape: 'horse',
//       throatElasticity: 2,
//       throatWidth: 10,
//       tongueLength: 100,
//       tongueShape: 'forked',
//       width: 50
//     });
//
//     mouth.save((id) => {
//       Mouth.load(id, (mouth) => {
//         expect(mouth.elasticity).to.equal(1);
//         expect(mouth.shape).to.equal('horse');
//         expect(mouth.throatElasticity).to.equal(2);
//         expect(mouth.throatWidth).to.equal(10);
//         expect(mouth.convertedThroatWidth).to.equal(0.5);
//         expect(mouth.throatArea).to.equal(79);
//         expect(mouth.tongueLength).to.equal(100);
//         expect(mouth.convertedTongueLength).to.equal(4);
//         expect(mouth.tongueShape).to.equal('forked');
//         expect(mouth.width).to.equal(50);
//         expect(mouth.convertedWidth).to.equal(2);
//         expect(mouth.area).to.equal(1963);
//         done();
//       });
//     });
//   });
//
// });
