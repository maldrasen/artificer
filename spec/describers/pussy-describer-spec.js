describe('Describer: Pussy', function() {

  function printPussy(type, pussy) {
    SpecHelper.print(`${type}(${pussy.sizeClass}/${pussy.conditon}) > ${pussy.description}`);
  }

  it('describes normal assholes', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ }).then(jada => {
        jada.getPussy().then(pussy => {
          printPussy('normal',pussy)
          resolve();
        });
      });
    });
  });

});
