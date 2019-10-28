describe.only('Describer: Cock', function() {

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


});
