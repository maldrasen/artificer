describe.only('Describer: Tits', function() {

  it('describes rat tits', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'rat' }).then(jada => {
        new TitsDescriber({ character:jada }).updateDescription().then(tits => {
          console.log(`   (rat) > ${tits.description}`)
          resolve();
        });
      });
    });
  });

  it('describes smashed tits', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada().then(jada => {
        jada.addInjury(Hazard.lookup('hunt-tit-smash-001')).then(tits => {
          console.log(`   (smashed) > ${tits.description}`)
          resolve();
        });
      });
    });
  });

});
