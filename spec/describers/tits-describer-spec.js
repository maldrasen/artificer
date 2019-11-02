describe('Describer: Tits', function() {

  function printTits(type, tits) {
    SpecHelper.print(`${type}(${tits.size}/${tits.shape}) > ${tits.description}`);
  }

  it('describes rat tits', function(done) {
    SpecHelper.tenTimes(done, resolve => {
      SpecHelper.buildJada({ species:'rat' }).then(jada => {
        jada.getTits().then(tits => {
          printTits('rat',tits)
          resolve();
        });
      });
    });
  });

});
