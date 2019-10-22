describe('HasInjury', function() {

  it('can add an injury to a character', function(done) {
    SpecHelper.buildJada().then(jada => {
      jada.addInjury(Hazard.lookup('hunt-tit-smash-001')).then(tits => {
        expect(tits.smashLevel).to.equal(3);
        expect(tits.smashCount).to.equal(1);
        expect(tits.smashHealing).to.equal(0);
        expect(tits.smashShape).to.equal('hoof');
        expect(tits.smashLocation).to.be.oneOf(['left','right']);
        expect(tits.description).to.exist;
        jada.getHealth().then(health => {
          jada.getHealthWord().then(word => {
            jada.getHealthLevels().then(levels => {
              jada.getHealthClass().then(classname => {
                expect(health).to.equal(75);
                expect(word).to.equal('Badly Injured');
                expect(classname).to.equal('bad');
                expect(levels.critical).to.equal(0);
                expect(levels.painful).to.equal(3);
                done();
              });
            });
          });
        });
      });
    });
  });

});
