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
    let times = VERBOSE ? 10 : 1
    let tests = [];

    for (let i=0; i<times; i++) {
      tests.push(new Promise(resolve => {
        testFunction(resolve);
      }));
    };

    Promise.all(tests).then(()=>{ done(); });
  }

  return { print, buildJada, tenTimes };

})();
