global.MinionBuilder = (function() {

  const defaultAspectFrequencies = {
    'anal-averse':  5,
    'anal-slut':    9,
    'ass-obsessed': 10,
    'beast-lover':  3,
    'bound':        5,
    'breeder':      4,
    'cock-lover':   8,
    'cum-lover':    6,
    'deviant':      3,
    'dominant':     5,
    'golden':       2,
    'masochist':    5,
    'masterbator':  10,
    'milky':        5,
    'oral-lover':   10,
    'oral-slut':    8,
    'orgy-lover':   6,
    'perverted':    4,
    'pussy-lover':  10,
    'pussy-slut':   9,
    'revolting':    1,
    'sadist':       7,
    'size-queen':   8,
    'stretcher':    6,
    'submissive':   5,
    'tit-lover':    8,
    'tit-slut':     7,
  };

  // Builds a new standard minion given the options. This function should be
  // used over the build() function for most minions, unless it's a character
  // with specific needs for some reason. At least the species must be
  // specified in the options. Options
  //
  //   minion             Options for CharacterBuilder.build()  e.g. { species:'scaven' }
  //   adjustments        Array of adjustment codes or aspect adjustments.
  //   randomAspectCount  Number of random aspects to give this character, can be null for a random number of aspects.
  //
  async function buildStandardMinion(options) {
    const minion = await CharacterBuilder.buildMinion(options.minion);

    try {
      await addRandomAspects(minion,options.randomAspectCount);
      await CharacterAdjuster.applyAll(minion, options.adjustments);

      if (minion.firstName == null) {
        let adjustments = await CharacterNamer.execute(minion);
        await CharacterAdjuster.applyAll(minion, adjustments);
      }

      await CharacterDescriber.updateAll(minion);

      return minion;
    } catch(error) {
      return await cleanupAndRetry(error,options,minion);
    }
  }

  // Because of all the randomness in creating a standard character it's
  // possible to get some weird contradictory options. When that happens just
  // throw the character away and try to build a new one with the same options.
  // We only retry ten times though because something could actually be wrong.
  async function cleanupAndRetry(error,options,minion) {
    const aspects = await minion.getCharacterAspects();

    console.log("\nWARNING: Could not create character.",error)
    console.log(`   Name:`,minion.name);
    console.log(`   Aspects:`,aspects.map(a => a.code).join(','),'\n');

    await minion.completelyRemove();

    if (options._try == null) { options._try = 0; }
    if (options._try == 10) { throw `A character cannot be created with the options: ${JSON.stringify(options)}`; }
    options._try++;

    return CharacterBuilder.buildStandardMinion(options);
  }

  // Build a complete Minion model with all of the associated body parts.
  async function buildMinion(options) {
    if (options.species == null) { throw 'Species is required'; }

    let species = Species.lookup(options.species);
    let gender = Gender[options.gender || species.randomGender()];
    let params = {
      genderCode:       gender.code,
      speciesCode:      species.code,
      portraitCode:     options.portraitCode,
      personalityCode:  options.personalityCode,
      preName:          options.preName,
      firstName:        options.firstName,
      lastName:         options.lastName,
      forcedName:       options.forcedName,
      physical:         options.physical  || species.randomizedAttribute('physical'),
      personal:         options.personal  || species.randomizedAttribute('personal'),
      mental:           options.mental    || species.randomizedAttribute('mental'),
      magical:          options.magical   || species.randomizedAttribute('magical'),
      type:             options.type      || 'normal',
      status:           options.status    || 'normal',
      energy:           options.energy    || 2,
      loyalty:          options.loyalty   || 10 + Random.upTo(10),
      fear:             options.fear      || 10 + Random.upTo(10),
      lust:             options.lust != null ? options.lust : 20 + Random.upTo(40),
    };

    let minion = await Minion.create(params);

    await CharacterBuilder.addBody(minion, options);
    await minion.determinePersonality();
    await minion.determinePortrait();

    return minion;
  }

  // This is usually the second step when creating any minion for the game.
  // This isn't normally called in the spec though because it's not really
  // nessessary and all the randomness can have unexpected results. Androphilic
  // or gynephilic will probably also be added if they aren't already.
  //
  // Options:
  //     count   number of aspects to add or random between 1 and 4
  //
  async function addRandomAspects(character, count) {
    const speciesFrequencies = character.species.aspectFrequencies||{};
    const combinedFrequencies = {};

    const currentAspects = (await character.getCharacterAspects()).map(aspect => {
      return aspect.code
    });

    each(defaultAspectFrequencies, (value, code) => {
      combinedFrequencies[code] = (speciesFrequencies[code] != null) ?
        speciesFrequencies[code]:
        defaultAspectFrequencies[code];
    });

    // Randomly add count number of aspects. Aspects are removed from the
    // frequency map after they're added so that they're not added twice.
    // Remember 0 and null are both falsy.
    count = (count == 0) ? 0 : Random.between(1,4);

    while (count > 0) {
      let code = Random.fromFrequencyMap(combinedFrequencies);
      let possible = await character.canAddAspect(code);
      if (possible) {
        count--;
        delete combinedFrequencies[code];
        await character.addAspect(code, { strength: 200+Random.upTo(400) });
      }
    }

    // Randomly determine what genders the character is attracted to. Every
    // character should be attracted to men or women, some characters (futas
    // especially) are attracted to both. If a character is not bisexual there's
    // a 25% chance they'll be repulsed by the gender opposite to the one
    // they're attracted to.
    //
    // TODO: Some races will have different attraction maps. The viera have no
    //       men, so are almost all lesbians. May also consider adding a
    //       futaphilic, but right now they simply count as both genders.
    if (currentAspects.indexOf('androphilic') < 0 && currentAspects.indexOf('gynephilic') < 0) {
      let genderAspects;

      if (character.genderCode == 'male')   { genderAspects = Random.fromFrequencyMap({ 'm':20, 'f':50, 'mf':30 }); }
      if (character.genderCode == 'female') { genderAspects = Random.fromFrequencyMap({ 'm':45, 'f':15, 'mf':40 }); }
      if (character.genderCode == 'futa')   { genderAspects = Random.fromFrequencyMap({ 'm':10, 'f':10, 'mf':80 }); }

      if (genderAspects.indexOf('m') >= 0) { await character.addAspect('androphilic', { strength: 200+Random.upTo(400) }); }
      if (genderAspects.indexOf('f') >= 0) { await character.addAspect('gynephilic',  { strength: 200+Random.upTo(400) });  }

      if (genderAspects == 'm' && Random.upTo(4) == 0 && character.canAddAspect('gynephobic')) {
        await character.addAspect('gynephobic',  { strength: 200+Random.upTo(400) });
      }
      if (genderAspects == 'f' && Random.upTo(4) == 0 && character.canAddAspect('androphobic')) {
        await character.addAspect('androphobic', { strength: 200+Random.upTo(400) });
      }
    }
  }

  return {
    buildMinion,
    buildStandardMinion,
    addRandomAspects,
  };

})();
