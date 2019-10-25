describe('Describer: Tits', function() {

  function printTits(type, tits) {
    console.log(`   ${type}(${tits.size}/${tits.shape}) > ${tits.description}`)
  }

  it('describes rat tits', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'rat' }).then(jada => {
        new TitsDescriber({ character:jada }).updateDescription().then(tits => {
          printTits('rat',tits)
          resolve();
        });
      });
    });
  });

  it('describes smashed tits', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada().then(jada => {
        jada.addInjury(Hazard.lookup('hunt-tit-smash-001')).then(tits => {
          printTits('smashed',tits)
          resolve();
        });
      });
    });
  });

});
