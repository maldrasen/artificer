describe.only('Describer: Cock', function() {

  function printCock(title, options, done) {
    Settings.Metric = Random.from([true,false]);
    SpecHelper.tenTimes(done, async resolve => {
      let species = options.species || 'elf'
      let sizeClass = options.size || Random.from(['small','average','big','huge','monster']);

      const rando = await SpecHelper.buildRando({ species:species, gender:'male', cock:{ sizeClass }});
      await CharacterDescriber.updateAll(rando);
      const cock = await rando.getCock();

      SpecHelper.print(`${title}(${cock.length}) > ${cock.description}`);

      resolve();
    });
  }

  it('describes small normal cocks', function(done) {
    printCock('Small Normal', { size:'small' }, done);
  });

  it('describes average normal cocks', function(done) {
    printCock('Average Normal', { size:'average' }, done);
  });

  it('describes big normal cocks', function(done) {
    printCock('Big Normal', { size:'big' }, done);
  });

  it('describes huge normal cocks', function(done) {
    printCock('Huge Normal', { size:'huge' }, done);
  });

  it('describes monster normal cocks', function(done) {
    printCock('Monster Normal', { size:'monster' }, done);
  });

  it('describes small canine cocks', function(done) {
    printCock('Small Canine', { species:'lupin', size:'small' }, done);
  });

  it('describes average canine cocks', function(done) {
    printCock('Average Canine', { species:'lupin', size:'average' }, done);
  });

  it('describes big canine cocks', function(done) {
    printCock('Big Canine', { species:'lupin', size:'big' }, done);
  });

  it('describes huge canine cocks', function(done) {
    printCock('Huge Canine', { species:'lupin', size:'huge' }, done);
  });

  it('describes monster canine cocks', function(done) {
    printCock('Monster Canine', { species:'lupin', size:'monster' }, done);
  });




  // it('describes scaven cocks', function(done) {
  //   SpecHelper.tenTimes(done, resolve => {
  //     SpecHelper.buildJada({ species:'scaven' }).then(jada => {
  //       jada.getCock().then(cock => {
  //         printCock('normal',cock)
  //         resolve();
  //       });
  //     });
  //   });
  // });
  //
  // it('describes goat cocks', function(done) {
  //   SpecHelper.tenTimes(done, resolve => {
  //     SpecHelper.buildJada({ species:'caprien' }).then(jada => {
  //       jada.getCock().then(cock => {
  //         printCock('goat',cock)
  //         resolve();
  //       })
  //     });
  //   });
  // });
  //
  // it('describes dog cocks', function(done) {
  //   SpecHelper.tenTimes(done, resolve => {
  //     SpecHelper.buildJada({ species:'lupin' }).then(jada => {
  //       jada.getCock().then(cock => {
  //         printCock('dog',cock)
  //         resolve();
  //       })
  //     });
  //   });
  // });
  //
  // it('describes horse cocks', function(done) {
  //   SpecHelper.tenTimes(done, resolve => {
  //     SpecHelper.buildJada({ species:'centaur' }).then(jada => {
  //       jada.getCock().then(cock => {
  //         printCock('horse',cock)
  //         resolve();
  //       });
  //     });
  //   });
  // });
  //
  // it('describes snake cocks', function(done) {
  //   SpecHelper.tenTimes(done, resolve => {
  //     SpecHelper.buildJada({ species:'naga' }).then(jada => {
  //       jada.getCock().then(cock => {
  //         printCock('snake',cock)
  //         resolve();
  //       });
  //     });
  //   });
  // });
  //
  // it('describes kobold cocks', function(done) {
  //   SpecHelper.tenTimes(done, resolve => {
  //     SpecHelper.buildJada({ species:'kobold' }).then(jada => {
  //       jada.getCock().then(cock => {
  //         printCock('kobold',cock)
  //         resolve();
  //       });
  //     });
  //   });
  // });
  //
  // it('describes dragon cocks', function(done) {
  //   SpecHelper.tenTimes(done, resolve => {
  //     SpecHelper.buildJada({ species:'dragon' }).then(jada => {
  //       jada.getCock().then(cock => {
  //         printCock('dragon',cock)
  //         resolve();
  //       });
  //     });
  //   });
  // });
  //
  // it('describes demon cocks', function(done) {
  //   SpecHelper.tenTimes(done, resolve => {
  //     SpecHelper.buildJada({ species:'succubus' }).then(jada => {
  //       jada.getCock().then(cock => {
  //         printCock('demon',cock)
  //         resolve();
  //       });
  //     });
  //   });
  // });
  //
  // it('describes spined cocks', function(done) {
  //   SpecHelper.tenTimes(done, resolve => {
  //     SpecHelper.buildJada({ species:'elf', cock:{ spineHeight:Random.upTo(37)+1 }}).then(jada => {
  //       jada.getCock().then(cock => {
  //         printCock('spined elf',cock);
  //         resolve();
  //       });
  //     });
  //   });
  // });
  //
  // it('describes multiple spined cocks', function(done) {
  //   SpecHelper.tenTimes(done, resolve => {
  //     SpecHelper.buildJada({ species:'naga', cock:{ spineHeight:Random.upTo(37)+1 }}).then(jada => {
  //       jada.getCock().then(cock => {
  //         printCock('spined naga',cock);
  //         resolve();
  //       });
  //     });
  //   });
  // });
  //
  // it('describes knobbed cocks', function(done) {
  //   SpecHelper.tenTimes(done, resolve => {
  //     SpecHelper.buildJada({ species:'elf', cock:{ knobHeight:Random.upTo(24)+1 }}).then(jada => {
  //       jada.getCock().then(cock => {
  //         printCock('knobbed elf',cock);
  //         resolve();
  //       });
  //     });
  //   });
  // });
  //
  // it('describes multiple knobbed cocks', function(done) {
  //   SpecHelper.tenTimes(done, resolve => {
  //     SpecHelper.buildJada({ species:'naga', cock:{ knobHeight:Random.upTo(24)+1 }}).then(jada => {
  //       jada.getCock().then(cock => {
  //         printCock('knobbed naga',cock);
  //         resolve();
  //       });
  //     });
  //   });
  // });

});
