describe.only('Describer: Body', function() {

  async function buildCharacter(options) {
    const tweeked = Object.assign({}, options, {
      physical: options.physical || Random.between(1,100),
      personal: options.personal || Random.between(1,80),
    });

    if (options.species == 'elven') { tweeked.species = Random.from(['dark-elf','elf','gnome','neko','nymph','sylph','viera','wood-elf']); }
    if (options.species == 'furry') { tweeked.species = Random.from(['equian','lupin','minotaur']); }

    const rando = await SpecHelper.buildRando(tweeked);

    if (options._injury == 'head.1') { await Abuser.addHeadInjury(rando, { type:'smash', level:1 }); }
    if (options._injury == 'body.1') { await Abuser.addBodyInjury(rando, { type:'pierce', level:3 }); }

    await CharacterDescriber.updateAll(rando);
    const body = await rando.getBody();
    return { rando, body };
  }

  function printBody(title, options, done) {
    Settings.Metric = Random.from([true,false,false]);
    SpecHelper.tenTimes(done, async resolve => {
      const c = await buildCharacter(options);
      SpecHelper.print(`${title} (${c.rando.genderCode}/${c.rando.physical}) > ${c.body.bodyDescription}`);
      resolve();
    });
  }

  function printFace(title, options, done) {
    Settings.Metric = Random.from([true,false,false]);
    SpecHelper.tenTimes(done, async resolve => {
      const c = await buildCharacter(options);
      SpecHelper.print(`${title} (${c.rando.genderCode}/${c.rando.personal}/${c.body.faceType}) > ${c.body.faceDescription}`);
      resolve();
    });
  }

  it('describes caprien faces', function(done) {
    printFace('Caprien', { species:'caprien' }, done);
  });

  it('describes dryad faces', function(done) {
    printFace('Dryad', { species:'dryad' }, done);
  });

  it('describes elf faces', function(done) {
    printFace('Elf', { species:'elf' }, done);
  });

  it('describes equian faces', function(done) {
    printFace('Equian', { species:'equian' }, done);
  });

  it('describes kobold faces', function(done) {
    printFace('Kobold', { species:'kobold' }, done);
  });

  it('describes lupin faces', function(done) {
    printFace('Lupin', { species:'lupin' }, done);
  });

  it('describes minotaur faces', function(done) {
    printFace('Minotaur', { species:'minotaur' }, done);
  });

  it('describes naga faces', function(done) {
    printFace('Naga', { species:'naga' }, done);
  });

  it('describes neko faces', function(done) {
    printFace('Neko', { species:'neko' }, done);
  });

  it('describes nymph faces', function(done) {
    printFace('Nymph', { species:'nymph' }, done);
  });

  it('describes scaven faces', function(done) {
    printFace('Scaven', { species:'scaven' }, done);
  });

  it('describes selkie faces', function(done) {
    printFace('Selkie', { species:'selkie' }, done);
  });

  it('describes vieran faces', function(done) {
    printFace('Viera', { species:'viera' }, done);
  });

  it('describes mythic faces (~95 personal)', function(done) {
    printFace('Mythic', { species:'dragon', personal:Random.between(90,100) }, done);
  });

  it('describes injured faces', function(done) {
    printFace('Injured', { species:'scaven', _injury:'head.1' }, done);
  });

  // === Bodies ===

  it('describes elven bodies', function(done) {
    printBody('Elven', { species:'elven' }, done);
  });

  it('describes furry bodies', function(done) {
    printBody('Furry', { species:'furry' }, done);
  });

  it('describes caprien', function(done) {
    printBody('Caprien', { species:'caprien' }, done);
  });

  it('describes centaur', function(done) {
    printBody('Centaur', { species:'centaur' }, done);
  });

  it('describes scaven', function(done) {
    printBody('Scaven', { species:'scaven' }, done);
  });

  it('describes injured bodies', function(done) {
    printBody('Injured', { species:'elf', _injury:'body.1' }, done);
  });

});
