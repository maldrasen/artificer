describe.only('HasInjury', function() {

  function buildJada(options) {
    return new Promise(resolve => {
      CharacterBuilder.build(
        extend({ firstName:'Jada', lastName:'Fire', species:'elf', gender:'futa' },options)
      ).then(resolve);
    });
  }

  it('can add a critical injury to a character', function(done) {
    buildJada().then(jada => {
      jada.addCriticalInjury({ location:'head', type:'burn' }).then(() => {
        done();
      });
    });
  });

});
