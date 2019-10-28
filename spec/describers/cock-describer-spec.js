describe('Describer: Cock', function() {

  function printCock(type, cock) {
    console.log(`   ${type}(${cock.convertedLength}) > ${cock.description}`)
  }

  it('describes normal cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ }).then(jada => {
        new CockDescriber({ character:jada }).updateDescription().then(cock => {
          printCock('normal',cock)
          resolve();
        });
      });
    });
  });

  it('describes dog cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'vulpine' }).then(jada => {
        new CockDescriber({ character:jada }).updateDescription().then(cock => {
          printCock('dog',cock)
          resolve();
        });
      });
    });
  });

  it('describes horse cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'centaur' }).then(jada => {
        new CockDescriber({ character:jada }).updateDescription().then(cock => {
          printCock('horse',cock)
          resolve();
        });
      });
    });
  });

  it('describes snake cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'naga' }).then(jada => {
        new CockDescriber({ character:jada }).updateDescription().then(cock => {
          printCock('snake',cock)
          resolve();
        });
      });
    });
  });

  it('describes kobold cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'kobold' }).then(jada => {
        new CockDescriber({ character:jada }).updateDescription().then(cock => {
          printCock('kobold',cock)
          resolve();
        });
      });
    });
  });

  it('describes dragon cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'dragon' }).then(jada => {
        new CockDescriber({ character:jada }).updateDescription().then(cock => {
          printCock('dragon',cock)
          resolve();
        });
      });
    });
  });

  it('describes demon cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'succubus' }).then(jada => {
        new CockDescriber({ character:jada }).updateDescription().then(cock => {
          printCock('demon',cock)
          resolve();
        });
      });
    });
  });

  it.only('describes spined cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'elf', cock:{ spineHeight:Random.upTo(37)+1 }}).then(jada => {
        new CockDescriber({ character:jada }).updateDescription().then(cock => {
          printCock('spined elf',cock);
          resolve();
        });
      });
    });
  });

  it.only('describes multiple spined cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'naga', cock:{ spineHeight:Random.upTo(37)+1 }}).then(jada => {
        new CockDescriber({ character:jada }).updateDescription().then(cock => {
          printCock('spined naga',cock);
          resolve();
        });
      });
    });
  });

});
