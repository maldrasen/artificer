describe.only('Describer: Anus', function() {

  function printAnus(title, options, done) {
    SpecHelper.tenTimes(done, async resolve => {
      const size = Random.from(['small','average','big','huge','monster']);
      const condition = Random.from(['tight','average','loose','gaping']);
      const jada = await SpecHelper.buildJada(extend(options,{ anus:{ sizeClass:size, condition:condition }}));

      await CharacterDescriber.updateAll(jada);
      const anus = await jada.getAnus();

      SpecHelper.print(`${title}(${anus.sizeClass}/${anus.condition}) > ${anus.description}`);

      resolve();
    });
  }

  it.only('describes normal assholes', function(done) {
    printAnus('Normal', { anus:{ shape:'normal' }}, done);
  });

  it('describes puffy assholes', function(done) {
    printAnus('Puffy', { anus:{ shape:'puffy' }}, done);
  });

  it('describes puffy assholes', function(done) {
    printAnus('Horse', { species:'centaur' }, done);
  });

});
