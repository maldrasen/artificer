describe.only('Describer: Body', function() {

  function printFace(title, options, done) {
    Settings.Metric = Random.from([true,false,false]);
    SpecHelper.tenTimes(done, async resolve => {
      const rando = await SpecHelper.buildRando(options);
      await CharacterDescriber.updateAll(rando);
      const body = await rando.getBody();

      SpecHelper.print(`${title} (${rando.personal}/${body.faceType}) > ${body.faceDescription}`);
      resolve();
    });
  }

  it('describes scaven faces', function(done) {
    printFace('Scaven', { species:'scaven' }, done);
  });

  it('describes elf faces', function(done) {
    printFace('Elf', { species:'elf' }, done);
  });

  it('describes vieran faces', function(done) {
    printFace('Viera', { species:'viera' }, done);
  });

  it('describes nymph faces', function(done) {
    printFace('Nymph', { species:'nymph' }, done);
  });

});
