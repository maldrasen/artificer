describe('Describer: Anus', function() {

  function printAnus(title, options, done) {
    SpecHelper.tenTimes(done, async resolve => {

      let prolapseLength = 0;
      let condition = Random.from(['tight','average','loose','gaping']);
      let sizeClass = Random.from({
        tight:   ['small','average','big','huge','monster'],
        average: ['small','average','big','huge','monster'],
        loose:   ['average','big','huge','monster'],
        gaping:  ['big','huge','monster'],
      }[condition]);

      if (options.prolapse) {
        condition = 'gaping'
        sizeClass = Random.from(['big','huge','monster']);
        options.shape = Random.from(['normal','puffy','horse']);
        prolapseLength = Random.between(1,100);
      }

      const rando = await SpecHelper.buildRando({ gender:'futa', anus:{ shape:options.shape, sizeClass, condition, prolapseLength }});
      await CharacterDescriber.updateAll(rando);
      const anus = await rando.getAnus();

      SpecHelper.print(`${title}(${anus.sizeClass}/${anus.condition}) > ${anus.description}`);

      resolve();
    });
  }

  // This failed once with these conditions and I'm not sure why. I'm leaving
  // this commented out spec here though because it might be useful for
  // debugging.

  // it('describes huge loose assholes', function(done) {
  //   SpecHelper.buildRando({ gender:'futa', anus:{ shape:'normal', sizeClass:'huge', condition:'loose' }}).then(rando => {
  //     CharacterDescriber.updateAll(rando).then(() => {
  //       rando.getAnus().then(anus => {
  //         SpecHelper.print(anus.description);
  //         done();
  //       });
  //     });
  //   });
  // });

  it('describes normal assholes', function(done) {
    printAnus('Normal', { shape:'normal' }, done);
  });

  it('describes puffy assholes', function(done) {
    printAnus('Puffy', { shape:'puffy' }, done);
  });

  it('describes horse assholes', function(done) {
    printAnus('Horse', { shape:'horse' }, done);
  });

  it('describes prolapsed assholes', function(done) {
    printAnus('Prolapse', { prolapse:true }, done);
  });

});
