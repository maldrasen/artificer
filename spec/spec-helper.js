global.SpecHelper = (function() {

  function print(message) {
    if (VERBOSE) { console.log(`      ${message}`); }
  }

  async function buildJada(options, adjustments=[]) {
    const jada = await CharacterBuilder.build(extend({
      firstName: 'Jada',
      lastName: 'Fire',
      species: 'elf',
      gender: 'futa'
    },options));

    await CharacterAdjuster.applyAll(jada,adjustments);

    return jada;
  }

  async function buildRando(options={}, adjustments=[]) {
    const rando = await CharacterBuilder.build(extend({
      firstName: 'Rando',
      lastName: 'Random',
      species: options.species||Random.from(Species.all()).code,
      gender: options.gender||Random.from(['male','female','futa']),
      physical: options.physical,
      personal: options.personal,
    },options));

    await CharacterAdjuster.applyAll(rando,adjustments);

    return rando;
  }

  async function buildPlayer(options) {
    return await Player.forge(extend({
      title: 'Master',
      firstName: 'Gary',
      lastName: 'Gangbang',
      gender: 'male',
      species: 'equian',
      goal: 'conquest',
    },options));
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

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // You can't actually specify an exact cock size in the normal CockBuilder,
  // so including this in order to build cocks to exacting specifications.
  async function adjustCock(character, options) {
    let cock = await character.getCock();

    if (options.sizeClass) { cock.sizeClass = options.sizeClass; }
    if (options.sizeScale) { cock.sizeScale = options.sizeScale; }
    if (options.knotWidthRatio) { cock.knotWidthRatio = options.knotWidthRatio; }

    await cock.save();
    await SpecHelper.sleep(10);

    return cock;
  }


  return { print, buildJada, buildRando, buildPlayer, tenTimes, sleep, adjustCock };

})();
