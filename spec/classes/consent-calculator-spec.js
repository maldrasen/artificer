// This needs to be rewritten to use the courses rather than the summon actions

// describe('ConsentCalculator', function() {
//
//   async function buildCalculatorWith(buildOptions, otherOptions) {
//     const jada = await SpecHelper.buildJada(buildOptions);
//
//     await Player.forge({
//       title: "Master",
//       firstName: "Gary",
//       lastName: "Gangbang",
//       gender: (otherOptions.playerGender || 'male'),
//       species: "elf",
//     });
//
//     await Promise.all(Object.keys(otherOptions.aspects||[]).map(async code => {
//       return jada.addAspect(code, { level:otherOptions.aspects[code] });
//     }));
//
//     if (otherOptions.injure == 'head.2')  { await Abuser.addHeadInjury(jada, { type:'smash', level:2 }); }
//     if (otherOptions.injure == 'pussy.1') { await Abuser.addPussyInjury(jada, { type:'burn', level:1 }); }
//     if (otherOptions.injure == 'pussy.3') { await Abuser.addPussyInjury(jada, { type:'burn', level:3 }); }
//
//     let calc = new ConsentCalculator(jada);
//     await calc.init();
//     return calc;
//   }
//
//   it('calculates the baseline consent for an average action', function(done) {
//     buildCalculatorWith({ fear:10, loyalty:30, lust:50 },{}).then(calc => {
//       calc.getConsentDetails(SummonAction.lookup('face-sitting')).then(detail => {
//         expect(detail.level).to.equal('reluctant');
//         done();
//       });
//     });
//   });
//
//   it('combines everything into one consent detail object', function(done) {
//     buildCalculatorWith({ fear:10, loyalty:40, lust:40 },{ injure:'head.2', aspects:{ androphilic:2, masochist:3, submissive:2 }}).then(calc => {
//       calc.getConsentDetails(SummonAction.lookup('dick-slapping')).then(detail => {
//         expect(detail.genderFactor).to.equal(1.2);
//         expect(detail.injuryFactor).to.equal(1.1);
//         expect(detail.aspectFactor).to.equal(1.56);
//         expect(detail.overallFactor).to.equal(2.27);
//         expect(detail.level).to.equal('enthusiastic');
//         done();
//       });
//     });
//   });
//
//   describe('calculateGenderFactor()', function() {
//     it('takes positive gender preferences into account', function(done) {
//       buildCalculatorWith({},{ playerGender:'male', aspects:{ 'androphilic':2 }}).then(calc => {
//         expect(calc.calculateGenderFactor()).to.equal(1.2);
//         done();
//       });
//     });
//
//     it('takes negative gender preferences into account', function(done) {
//       buildCalculatorWith({},{ playerGender:'male', aspects:{'androphobic':1}}).then(calc => {
//         expect(calc.calculateGenderFactor()).to.equal(0.5);
//         done();
//       });
//     });
//
//     it('takes all preferences into account for futa characters', function(done) {
//       buildCalculatorWith({},{ playerGender:'futa', aspects:{'gynephobic':1,'androphilic':2}}).then(calc => {
//         expect(calc.calculateGenderFactor()).to.equal(0.6);
//         done();
//       });
//     });
//
//     it('takes all preferences into account for futa characters', function(done) {
//       buildCalculatorWith({},{ playerGender:'futa', aspects:{'gynephilic':2,'androphilic':2}}).then(calc => {
//         expect(calc.calculateGenderFactor()).to.equal(1.44);
//         done();
//       });
//     });
//   });
//
//   describe('calculateInjuryFactor()', function() {
//     it('reduces consent when injured', function(done) {
//       buildCalculatorWith({},{ injure:'pussy.1' }).then(calc => {
//         calc.calculateInjuryFactor(SummonAction.lookup('eat-pussy')).then(factor => {
//           expect(factor).to.equal(0.9);
//           done();
//         });
//       });
//     });
//
//     it('ignores injury when a masochist', function(done) {
//       buildCalculatorWith({},{ injure:'pussy.3', aspects:{ masochist:2 }}).then(calc => {
//         calc.calculateInjuryFactor(SummonAction.lookup('eat-pussy')).then(factor => {
//           expect(factor).to.equal(1);
//           done();
//         });
//       });
//     });
//
//     it('increases consent when character is a huge masochist', function(done) {
//       buildCalculatorWith({},{ injure:'pussy.3', aspects:{ masochist:3 }}).then(calc => {
//         calc.calculateInjuryFactor(SummonAction.lookup('eat-pussy')).then(factor => {
//           expect(factor).to.equal(1.2);
//           done();
//         });
//       });
//     });
//   });
//
//   describe('calculateAspectFactor()', function(done) {
//     it('increases consent with complementing aspects', function(done) {
//       buildCalculatorWith({},{ aspects:{ 'pussy-slut':2 }}).then(calc => {
//         expect(calc.calculateAspectFactor(SummonAction.lookup('eat-pussy'))).to.equal(1.2);
//         done();
//       });
//     });
//
//     it('greatly increases consent with multiple complementing aspects', function(done) {
//       buildCalculatorWith({},{ aspects:{ 'oral-lover':1, 'pussy-slut':2 }}).then(calc => {
//         expect(calc.calculateAspectFactor(SummonAction.lookup('eat-pussy'))).to.equal(1.32);
//         done();
//       });
//     });
//
//     it('reduces consent with conflicting aspects', function(done) {
//       buildCalculatorWith({},{ aspects:{ 'dominant':1 }}).then(calc => {
//         expect(calc.calculateAspectFactor(SummonAction.lookup('face-slapping'))).to.equal(0.9);
//         done();
//       });
//     });
//   });
//
// });
