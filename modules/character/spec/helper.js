
SpecHelper.buildJada = async function(options, adjustments=[]) {
  const jada = await MinionBuilder.buildMinion(Object.assign({
    firstName: 'Jada',
    lastName: 'Fire',
    species: 'elf',
    gender: 'futa'
  }, options));

  await CharacterAdjuster.applyAll(jada,adjustments);

  return jada;
}

SpecHelper.buildRando = async function (options={}, adjustments=[]) {
  const rando = await MinionBuilder.buildMinion(Object.assign({
    firstName: 'Rando',
    lastName:  'Random',
    species:   options.species || Random.from(Species.all()).code,
    gender:    options.gender  || Random.from(['male','female','futa']),
  },options));

  await CharacterAdjuster.applyAll(rando,adjustments);

  return rando;
}

SpecHelper.buildPlayer = async function(options) {
  await Player.build({
    title: 'Master',
    firstName: 'Gary',
    lastName: 'Gangbang',
    gender: 'male',
    species: 'equian',
    ...options,
  });

  return await Player.instance();
}

// You can't actually specify an exact cock size in the normal CockBuilder,
// so including this in order to build cocks to exacting specifications.
SpecHelper.adjustCock = async function(character, options) {
  let cock = await character.getCock();

  if (options.sizeClass) { cock.sizeClass = options.sizeClass; }
  if (options.sizeScale) { cock.sizeScale = options.sizeScale; }
  if (options.knotWidthRatio) { cock.knotWidthRatio = options.knotWidthRatio; }

  await cock.save();
  await SpecHelper.sleep(10);

  return cock;
}
