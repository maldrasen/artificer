describe.only('HasInjury', function() {

  function buildJada(options) {
    return new Promise(resolve => {
      CharacterBuilder.build(
        extend({ firstName:'Jada', lastName:'Fire', species:'elf', gender:'futa' },options)
      ).then(resolve);
    });
  }

  it('can add an injury to a character', function(done) {
    buildJada().then(jada => {
      jada.addInjury({ location:'head', type:'burn' }).then(injury => {
        expect(injury.location).to.equal('head');
        expect(injury.damageType).to.equal('burn');
        expect(injury.severity).to.equal('critical');
        expect(injury.level).to.be.within(1,5);
        expect(injury.description).to.exist;
        done();
      });
    });
  });

  it('if a character is alreay injured it increases the injury level', function(done) {
    buildJada().then(jada => {
      Promise.all([
        jada.addInjury({ location:'head', type:'burn', level:2 }),
        jada.addInjury({ location:'head', type:'burn', level:3 })
      ]).then(() => {
        jada.getHealth().then(health => {
          jada.getHealthWord().then(word => {
            jada.getHealthLevels().then(levels => {
              expect(health).to.equal(22);
              expect(word).to.equal('Critically Injured');
              expect(levels.critical).to.equal(5);
              expect(levels.painful).to.equal(0);
              done();
            });
          });
        });
      });
    });
  });

  it('can add a mix of painful and critical injuries', function(done) {
    buildJada().then(jada => {
      Promise.all([
        jada.addInjury({ location:'head', type:'burn', level:1 }),
        jada.addInjury({ location:'mouth', type:'pierce', level:3 }),
        jada.addInjury({ location:'anus', type:'rip', level:5 }),
        jada.addInjury({ location:'mouth', type:'smash', level:4 }),
      ]).then(() => {
        jada.getHealth().then(health => {
          jada.getHealthWord().then(word => {
            jada.getHealthLevels().then(levels => {
              expect(levels.critical).to.equal(1);
              expect(levels.painful).to.equal(12);
              expect(health).to.equal(53);
              expect(word).to.equal('Badly Injured');
              done();
            });
          });
        });
      });
    });
  });

  it('can just add painful injuries', function(done) {
    buildJada().then(jada => {
      Promise.all([
        jada.addInjury({ location:'tits', type:'smash', level:5 }),
        jada.addInjury({ location:'tits', type:'smash', level:5 }),
        jada.addInjury({ location:'tits', type:'burn', level:5 }),
        jada.addInjury({ location:'tits', type:'burn', level:5 }),
        jada.addInjury({ location:'anus', type:'rip', level:5 }),
        jada.addInjury({ location:'anus', type:'rip', level:5 }),
        jada.addInjury({ location:'pussy', type:'rip', level:5 }),
        jada.addInjury({ location:'pussy', type:'rip', level:5 }),
      ]).then(() => {
        jada.getHealth().then(health => {
          jada.getHealthWord().then(word => {
            jada.getHealthLevels().then(levels => {
              expect(levels.critical).to.equal(0);
              expect(levels.painful).to.equal(40);
              expect(health).to.equal(33);
              expect(word).to.equal('Horribly Injured');
              done();
            });
          });
        });
      });
    });
  });

});
