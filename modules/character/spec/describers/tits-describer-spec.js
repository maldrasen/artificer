describe('Describer: Tits', function() {

  function printTits(title, options, done) {
    Settings.set({ metric:Random.from([true,false,false]) });
    SpecHelper.tenTimes(done, async resolve => {

      let titsOptions = Object.assign({
        sizeClass: Random.from(['zero','tiny','small','average','big','huge','monster'])
      },options.tits);

      const rando = await SpecHelper.buildRando({
        gender: 'futa',
        species: options.species,
        tits: titsOptions,
      });

      await CharacterDescriber.updateAll(rando);
      const tits = await rando.getTits();

      SpecHelper.print(`${title}(${tits.size},${tits.shape}) > ${tits.description}`);

      resolve();
    });
  }

  it('describes scaven tits', function(done) {
    printTits('Scaven', { species:'scaven' }, done);
  });

});
