global.CharacterBuilder = (function() {

  // So the process for the full build is build the body, pick a name, make adjectments to body based on name.
  // preName:            { type:Sequelize.STRING },
  // firstName:          { type:Sequelize.STRING },
  // lastName:           { type:Sequelize.STRING },
  // A complete character function needs to set the current health to the character's max health

  async function build(options) {
    if (options.species == null) { throw 'Species is required'; }

    let species = Species.lookup(options.species);
    let gender = Gender[options.gender || species.randomGender()];
    let params = {
      speciesCode: species.code,
      genderCode:  gender.code,
      preName:     options.preName,
      firstName:   options.firstName,
      lastName:    options.lastName,
      physical:    options.physical  || species.randomizedAttribute('physical'),
      personal:    options.personal  || species.randomizedAttribute('personal'),
      mental:      options.mental    || species.randomizedAttribute('mental'),
      magical:     options.magical   || species.randomizedAttribute('magical'),
    };

    let character = await Character.create(params)
    await addBody(character, options)
    return character;
  }

  async function addBody(character, options) {
    let body = await BodyBuilder.build(character, options);

    await character.update({ body_id:body.id });

    let results = await Promise.all([
      AnusBuilder.build(character, options),
      CockBuilder.build(character, options),
      MouthBuilder.build(character, options),
      PussyBuilder.build(character, options),
      NipplesBuilder.build(character, options),
      TitsBuilder.build(character, options),
      NameBuilder.build(character, options),
    ]);

    await CharacterAdjuster.apply(character, options, results[6])

    return character
  }

  // This method is used to baseline options from the options passed to the
  // factory, in order to ensure that all expected options have at least a
  // default value. The function will first use the specified values in the
  // given options, if a value hasn't been specified in the options, but the
  // race has a default then that is used. If there is a default value not on
  // the race then that is used as the tertiary choice.
  function baseline(part, options, species, defaults) {
    let params = {};

    each(defaults, (defaultValue, key) => {
      params[key] = ObjectUtility.fetch(options, part, key) ||
                    ObjectUtility.fetch(species, 'bodyOptions', part, key) ||
                    defaultValue;
    });

    return params;
  }

  return {
    build: build,
    addBody: addBody,
    baseline: baseline,
  }

})();
