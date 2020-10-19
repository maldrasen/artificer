describe('Character', function() {

});

// describe('Character', function() {
//
//   describe('getSummonable()', function() {
//     async function setup() {
//       await SpecHelper.buildJada({ firstName:'Nope', type:'pending' });
//       await SpecHelper.buildJada({ firstName:'Nope', status:'missing' });
//       await SpecHelper.buildJada({ firstName:'Nope', status:'dead' });
//       await SpecHelper.buildJada({ firstName:'Nope', status:'dead' });
//       await SpecHelper.buildJada({ firstName:'Nope', currentDuty:'mission' });
//       await SpecHelper.buildJada({ firstName:'Nope', energy:1 });
//       await SpecHelper.buildJada({ firstName:'Yarp', currentDuty:'role' });
//       await SpecHelper.buildJada({ firstName:'Yarp', currentDuty:'project' });
//       await SpecHelper.buildJada({ firstName:'Yarp', currentDuty:'task' });
//     }
//
//     it('gets summonable minions for the client', function(done) {
//       setup().then(()=> {
//         Character.getSummonable().then(characters => {
//           expect(characters.length).to.equal(3);
//           expect(ArrayUtility.unique(characters.map(c => c.name))).to.eql(['Yarp Fire'])
//           done();
//         });
//       });
//     });
//   });
//
//   describe('reduceAllLoyalty()', function() {
//     it('reduces loyalty on all minions', function(done) {
//       SpecHelper.buildJada({ loyalty:50 }).then(_ => {
//         Character.reduceAllLoyalty(5).then(_ => {
//           Character.getNormalMinions().then(minions => {
//             expect(minions[0].loyalty).to.be.within(44,49);
//             done();
//           });
//         });
//       });
//     });
//   });
//
//   describe('loyalty', function() {
//     it('is loyal when loyalty is 25 or over', function(done) {
//       SpecHelper.buildJada({ loyalty:25 }).then(jada => {
//         expect(jada.isLoyal).to.be.true;
//         done();
//       });
//     });
//
//     it('is not loyal when loyalty is under 25', function(done) {
//       SpecHelper.buildJada({ loyalty:24 }).then(jada => {
//         expect(jada.isLoyal).to.be.false;
//         done();
//       });
//     });
//
//     it('is fearful when fear is 25 or over', function(done) {
//       SpecHelper.buildJada({ fear:25 }).then(jada => {
//         expect(jada.isAfraid).to.be.true;
//         done();
//       });
//     });
//
//     it('is not fearful when fear is under 25', function(done) {
//       SpecHelper.buildJada({ fear:24 }).then(jada => {
//         expect(jada.isAfraid).to.be.false;
//         done();
//       });
//     });
//
//     it('is rebellious when fear is very low', function(done) {
//       SpecHelper.buildJada({ fear:6, loyalty:24 }).then(jada => {
//         expect(jada.isRebellious).to.be.true;
//         done();
//       });
//     });
//
//     it('is rebellious when fear and loyalty are low', function(done) {
//       SpecHelper.buildJada({ fear:14, loyalty:14 }).then(jada => {
//         expect(jada.isRebellious).to.be.true;
//         done();
//       });
//     });
//
//     it('is rebellious when loyalty is very low', function(done) {
//       SpecHelper.buildJada({ fear:24, loyalty:6 }).then(jada => {
//         expect(jada.isRebellious).to.be.true;
//         done();
//       });
//     });
//
//     it('is not rebellious otherwise', function(done) {
//       SpecHelper.buildJada({ fear:14, loyalty:15 }).then(jada => {
//         expect(jada.isRebellious).to.be.false;
//         done();
//       });
//     });
//
//     it('is traitorous when fear and loyalty are very low', function(done) {
//       SpecHelper.buildJada({ fear:8, loyalty:7 }).then(jada => {
//         expect(jada.isTraitorous).to.be.true;
//         done();
//       });
//     });
//
//     it('is not traitorous otherwise', function(done) {
//       SpecHelper.buildJada({ fear:8, loyalty:8 }).then(jada => {
//         expect(jada.isTraitorous).to.be.false;
//         done();
//       });
//     });
//   });
//
//   it('can be completely removed', function(done) {
//     SpecHelper.buildJada().then(jada => {
//       jada.completelyRemove().then(_ => {
//         Anus.findByPk(jada.id).then(anus => {
//           expect(anus).to.not.exist;
//           done();
//         });
//       });
//     });
//   });
//
// });
