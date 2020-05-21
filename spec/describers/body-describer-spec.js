describe.only('Describer: Body', function() {

  function printFace(title, options, done) {
    Settings.Metric = Random.from([true,false,false]);
    SpecHelper.tenTimes(done, async resolve => {
      const rando = await SpecHelper.buildRando(options);
      await CharacterDescriber.updateAll(rando);
      const body = await rando.getBody();

      SpecHelper.print(`${title} (${rando.genderCode}/${rando.personal}/${body.faceType}) > ${body.faceDescription}`);
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

  it.only('describes nymph faces', function(done) {
    printFace('Nymph', { species:'nymph' }, done);
  });

  it('describes scaven faces', function(done) {
    printFace('Scaven', { species:'scaven' }, done);
  });

  it('describes vieran faces', function(done) {
    printFace('Viera', { species:'viera' }, done);
  });

  it('describes mythic faces (~95 personal)', function(done) {
    printFace('Mythic', { species:'dragon', personal:Random.between(90,100) }, done);
  });

});
