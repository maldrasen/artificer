describe('Describer: Anus', function() {

  function printAnus(type, anus) {
    SpecHelper.print(`${type}(${anus.sizeClass}/${anus.conditon}) > ${anus.description}`);
  }

  it('describes normal assholes', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ }).then(jada => {
        jada.getAnus().then(anus => {
          printAnus('normal',anus)
          resolve();
        });
      });
    });
  });

});
