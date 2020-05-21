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

  it('describes scaven faces (~10 personal)', function(done) {
    printFace('Scaven', { species:'scaven' }, done);
  });

  it('describes elf face (~20 personal)', function(done) {
    printFace('Elf', { species:'elf' }, done);
  });

  it('describes vieran faces (~30 personal)', function(done) {
    printFace('Viera', { species:'viera' }, done);
  });

  it('describes nymph faces (~40 personal)', function(done) {
    printFace('Nymph', { species:'nymph' }, done);
  });

  it.only('describes mythic faces (~95 personal)', function(done) {
    printFace('Mythic', { species:'dragon', personal:Random.between(90,100) }, done);
  });

});
