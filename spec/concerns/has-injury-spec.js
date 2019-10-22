describe.only('HasInjury', function() {

  it('can add an injury to a character', function(done) {
    SpecHelper.buildJada().then(jada => {
      jada.addInjury(Hazard.lookup('hunt-tit-smash-001')).then(tits => {
        expect(tits.smashLevel).to.equal(3);
        expect(tits.smashCount).to.equal(1);
        expect(tits.smashHealing).to.equal(0);
        expect(tits.smashShape).to.equal('hoof');
        expect(tits.smashLocation).to.be.oneOf(['left','right']);
        expect(tits.description).to.exist;
        done();
      });
    });
  });

//   it('if a character is alreay injured it increases the injury level', function(done) {
//     buildJada().then(jada => {
//       Promise.all([
//         jada.addInjury({ severity:'critical', location:'head', type:'burn', level:2 }),
//         jada.addInjury({ severity:'critical', location:'head', type:'burn', level:3 })
//       ]).then(() => {
//         jada.getHealth().then(health => {
//           jada.getHealthWord().then(word => {
//             jada.getHealthLevels().then(levels => {
//               expect(health).to.equal(22);
//               expect(word).to.equal('Critically Injured');
//               expect(levels.critical).to.equal(5);
//               expect(levels.painful).to.equal(0);
//               done();
//             });
//           });
//         });
//       });
//     });
//   });
//
//   it('can add a mix of painful and critical injuries', function(done) {
//     buildJada().then(jada => {
//       Promise.all([
//         jada.addInjury({ severity:'critical', location:'head', type:'burn',   level:1 }),
//         jada.addInjury({ severity:'painful',  location:'tits', type:'pierce', level:3 }),
//         jada.addInjury({ severity:'painful',  location:'anus', type:'rip',    level:5 }),
//         jada.addInjury({ severity:'painful',  location:'tits', type:'smash',  level:4 }),
//       ]).then(() => {
//         jada.getHealth().then(health => {
//           jada.getHealthWord().then(word => {
//             jada.getHealthLevels().then(levels => {
//               expect(levels.critical).to.equal(1);
//               expect(levels.painful).to.equal(12);
//               expect(health).to.equal(53);
//               expect(word).to.equal('Badly Injured');
//               done();
//             });
//           });
//         });
//       });
//     });
//   });
//
//   it('can just add painful injuries', function(done) {
//     buildJada().then(jada => {
//       Promise.all([
//         jada.addInjury({ severity:'painful', location:'tits',  type:'smash', level:5 }),
//         jada.addInjury({ severity:'painful', location:'tits',  type:'smash', level:5 }),
//         jada.addInjury({ severity:'painful', location:'tits',  type:'burn',  level:5 }),
//         jada.addInjury({ severity:'painful', location:'tits',  type:'burn',  level:5 }),
//         jada.addInjury({ severity:'painful', location:'anus',  type:'rip',   level:5 }),
//         jada.addInjury({ severity:'painful', location:'anus',  type:'rip',   level:5 }),
//         jada.addInjury({ severity:'painful', location:'pussy', type:'rip',   level:5 }),
//         jada.addInjury({ severity:'painful', location:'pussy', type:'rip',   level:5 }),
//       ]).then(() => {
//         jada.getHealth().then(health => {
//           jada.getHealthWord().then(word => {
//             jada.getHealthLevels().then(levels => {
//               expect(levels.critical).to.equal(0);
//               expect(levels.painful).to.equal(40);
//               expect(health).to.equal(33);
//               expect(word).to.equal('Horribly Injured');
//               done();
//             });
//           });
//         });
//       });
//     });
//   });
//
});
