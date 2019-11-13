global.SpecHelper = (function() {

  function print(message) {
    if (VERBOSE) { console.log(`      ${message}`); }
  }

  async function buildJada(options) {
    return await CharacterBuilder.build(
      extend({ firstName:'Jada', lastName:'Fire', species:'elf', gender:'futa' },options)
    )
  }

  async function buildRando() {
    return await CharacterBuilder.build({ species:Random.from(Species.all()).code });
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

  return { print, buildJada, buildRando, tenTimes };

})();
