describe('Describer: Cock', function() {

  function printCock(type, cock) {
    SpecHelper.print(`${type}(${cock.convertedLength}) > ${cock.description}`);
  }

  it('describes normal cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ }).then(jada => {
        jada.getCock().then(cock => {
          printCock('normal',cock)
          resolve();
        });
      });
    });
  });

  it('describes dog cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'vulpine' }).then(jada => {
        jada.getCock().then(cock => {
          printCock('dog',cock)
          resolve();
        })
      });
    });
  });

  it('describes horse cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'centaur' }).then(jada => {
        jada.getCock().then(cock => {
          printCock('horse',cock)
          resolve();
        });
      });
    });
  });

  it('describes snake cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'naga' }).then(jada => {
        jada.getCock().then(cock => {
          printCock('snake',cock)
          resolve();
        });
      });
    });
  });

  it('describes kobold cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'kobold' }).then(jada => {
        jada.getCock().then(cock => {
          printCock('kobold',cock)
          resolve();
        });
      });
    });
  });

  it('describes dragon cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'dragon' }).then(jada => {
        jada.getCock().then(cock => {
          printCock('dragon',cock)
          resolve();
        });
      });
    });
  });

  it('describes demon cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'succubus' }).then(jada => {
        jada.getCock().then(cock => {
          printCock('demon',cock)
          resolve();
        });
      });
    });
  });

  it('describes spined cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'elf', cock:{ spineHeight:Random.upTo(37)+1 }}).then(jada => {
        jada.getCock().then(cock => {
          printCock('spined elf',cock);
          resolve();
        });
      });
    });
  });

  it('describes multiple spined cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'naga', cock:{ spineHeight:Random.upTo(37)+1 }}).then(jada => {
        jada.getCock().then(cock => {
          printCock('spined naga',cock);
          resolve();
        });
      });
    });
  });

  it('describes knobbed cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'elf', cock:{ knobHeight:Random.upTo(24)+1 }}).then(jada => {
        jada.getCock().then(cock => {
          printCock('knobbed elf',cock);
          resolve();
        });
      });
    });
  });

  it('describes multiple knobbed cocks', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'naga', cock:{ knobHeight:Random.upTo(24)+1 }}).then(jada => {
        jada.getCock().then(cock => {
          printCock('knobbed naga',cock);
          resolve();
        });
      });
    });
  });

});
