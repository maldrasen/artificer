// describe('Body', function() {
//
//   it('can be persisted in the database', function(done) {
//     body = new Body({
//       height: 1800,
//       weight: 90000,
//       furColor: "red",
//       furShade: 1,
//       hairColor: "black",
//       scaleColor: "gold",
//       skinColor: "human",
//       skinShade: 2,
//       tailShape: "demon" });
//
//     body.save((id) => {
//       Body.load(id, (body) => {
//         expect(body.height).to.equal(1800);
//         expect(body.weight).to.equal(90000);
//         expect(body.furColor).to.equal("red");
//         expect(body.furShade).to.equal(1);
//         expect(body.hairColor).to.equal("black");
//         expect(body.scaleColor).to.equal("gold");
//         expect(body.skinColor).to.equal("human");
//         expect(body.skinShade).to.equal(2);
//         expect(body.tailShape).to.equal("demon");
//         expect(body.convertedHeight).to.equal(70.75);
//         expect(body.convertedWeight).to.equal(198);
//         expect(body.fistWidth).to.equal(88);
//         expect(body.fingerWidth).to.equal(19);
//         expect(body.fistArea).to.equal(6082);
//         expect(body.fingerArea).to.equal(284);
//         done();
//       });
//     });
//   });
//
//   describe('Basic Attributes', function() {
//     let body;
//
//     beforeEach(function() {
//       body = new Body({ });
//     });
//
//     it('has weight', function() {
//       body.setWeight(62000);
//       expect(body.weight).to.equal(62000);
//       expect(body.convertedWeight).to.equal(137);
//     });
//
//     it('has height', function() {
//       body.setHeight(2000);
//       expect(body.height).to.equal(2000);
//       expect(body.convertedHeight).to.equal(78.75);
//     });
//
//     it('sets skin and fur colors ans shades', function() {
//       body.setSkinColor('human')
//       body.setSkinShade(2);
//       body.setFurColor('red');
//       body.setFurShade(4);
//       body.setHairColor('blue');
//       body.setScaleColor('gold')
//       body.setTailShape('demon')
//
//       expect(body.skinColor).to.equal('human');
//       expect(body.skinShade).to.equal(2);
//       expect(body.furColor).to.equal('red');
//       expect(body.furShade).to.equal(4);
//       expect(body.hairColor).to.equal('blue');
//       expect(body.scaleColor).to.equal('gold');
//       expect(body.tailShape).to.equal('demon');
//     })
//
//     it('gets BMI', function() {
//       body.setWeight(90000);
//       body.setHeight(1800);
//       expect(body.bmi).to.equal(28);
//     });
//
//     it('sets BMI', function() {
//       body.setHeight(1800);
//       body.setBMI(20);
//       expect(body.bmi).to.be.within(18,22);
//       expect(body.weight).to.be.within(58000,71000);
//     });
//
//     it('gets weight class',function() {
//       body.setHeight(1800);
//       body.setWeight(34000);  expect(body.weightClass).to.equal('emaciated');
//       body.setWeight(49000);  expect(body.weightClass).to.equal('very-thin');
//       body.setWeight(68000);  expect(body.weightClass).to.equal('thin');
//       body.setWeight(72000);  expect(body.weightClass).to.equal('average');
//       body.setWeight(88000);  expect(body.weightClass).to.equal('thick');
//       body.setWeight(110000); expect(body.weightClass).to.equal('heavy');
//       body.setWeight(125000); expect(body.weightClass).to.equal('massive');
//     });
//   });
//
// });
