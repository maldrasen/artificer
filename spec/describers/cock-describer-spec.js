describe('Describer: Cock', function() {

  function printCock(type, cock) {
    console.log(`   ${type}(${cock.convertedLength}) > ${cock.description}`)
  }

  it('describes basic cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ }).then(jada => {
        new CockDescriber({ character:jada }).updateDescription().then(cock => {
          printCock('normal',cock)
          resolve();
        });
      });
    });
  });

  it('describes knotted cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'vulpine' }).then(jada => {
        new CockDescriber({ character:jada }).updateDescription().then(cock => {
          printCock('normal',cock)
          resolve();
        });
      });
    });
  });

  it('describes horse cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'centaur' }).then(jada => {
        new CockDescriber({ character:jada }).updateDescription().then(cock => {
          printCock('normal',cock)
          resolve();
        });
      });
    });
  });

  it('describes snake cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'naga' }).then(jada => {
        new CockDescriber({ character:jada }).updateDescription().then(cock => {
          printCock('normal',cock)
          resolve();
        });
      });
    });
  });

  it.only('describes kobold cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'kobold' }).then(jada => {
        new CockDescriber({ character:jada }).updateDescription().then(cock => {
          printCock('normal',cock)
          resolve();
        });
      });
    });
  });

  it.only('describes dragon cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'dragon' }).then(jada => {
        new CockDescriber({ character:jada }).updateDescription().then(cock => {
          printCock('normal',cock)
          resolve();
        });
      });
    });
  });

});
