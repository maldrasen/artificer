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
          expect(health).to.equal(22)
          done();
        })
      });
    });
  });

});
