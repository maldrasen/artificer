global.SpecHelper = (function() {

  function print(message) {
    if (VERBOSE) { console.log(`      ${message}`); }
  }

  function buildJada(options) {
    return new Promise(resolve => {
      CharacterBuilder.build(
        extend({ firstName:'Jada', lastName:'Fire', species:'elf', gender:'futa' },options)
      ).then(resolve);
    });
  }

  function tenTimes(done, testFunction) {
    let tests = [];
    for (let i=0; i<10; i++) {
      tests.push(new Promise(resolve => {
        testFunction(resolve);
      }));
    };

    Promise.all(tests).then(()=>{ done(); });
  }

  return { print, buildJada, tenTimes };

})();
