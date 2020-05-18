describe('Describer: Body', function() {

  function printBody(title, options, done) {
    Settings.Metric = Random.from([true,false,false]);

    SpecHelper.tenTimes(done, async resolve => {

      const rando = await SpecHelper.buildRando(options);
      await CharacterDescriber.updateAll(rando);
      const body = await rando.getBody();

      SpecHelper.print(`${title} (${rando.personal}/${body.faceType}) > ${body.description}`);

      resolve();
    });
  }

  it.only('describes scaven', function(done) {
    printBody('Scaven', { species:'scaven' }, done);
  });

});
