describe('Describer: Anus', function() {

  function printAnus(title, options, done) {
    SpecHelper.tenTimes(done, async resolve => {
      const jada = await SpecHelper.buildJada(options);
      await CharacterDescriber.updateAll(jada);
      const anus = await jada.getAnus();
      SpecHelper.print(`${title}(${anus.shape}/${anus.sizeClass}/${anus.conditon}) > ${anus.description}`);
      resolve();
    });
  }

  it('describes random assholes', function(done) {
    printAnus('Random', {}, done);
  });

});
