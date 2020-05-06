describe.only('Describer: Anus', function() {

  function printAnus(title, ops, done) {
    SpecHelper.tenTimes(done, async resolve => {
      let options = { species:ops.species, anus: Object.assign({
        size: Random.from(['small','average','big','huge','monster']),
        condition: Random.from(['tight','average','loose','gaping']),
      }, ops.anus||{})};

      const jada = await SpecHelper.buildJada(options);
      await CharacterDescriber.updateAll(jada);
      const anus = await jada.getAnus();

      SpecHelper.print(`${title}(${anus.sizeClass}/${anus.condition}) > ${anus.description}`);

      resolve();
    });
  }

  it.only('describes normal assholes', function(done) {
    printAnus('Normal', { anus:{ shape:'normal' }}, done);
  });

  it.only('describes puffy assholes', function(done) {
    printAnus('Puffy', { anus:{ shape:'puffy' }}, done);
  });

  it.only('describes puffy assholes', function(done) {
    printAnus('Horse', { species:'centaur' }, done);
  });

});
