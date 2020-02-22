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
      type:        options.type      || 'minion',
      dutyCode:    options.dutyCode  || (await defaultRole()),
      physical:    options.physical  || species.randomizedAttribute('physical'),
      personal:    options.personal  || species.randomizedAttribute('personal'),
      mental:      options.mental    || species.randomizedAttribute('mental'),
      magical:     options.magical   || species.randomizedAttribute('magical'),
      loyalty:     options.loyalty   || 10 + Random.upTo(10),
      fear:        options.fear      || 10 + Random.upTo(10),
      health:      100,
      status:      'normal',
      currentDuty: 'role',
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

    const bodyDescriber =  new BodyDescriber({
      character: character,
      body: body });

    const anusDescriber =  new AnusDescriber({
      character: character,
      anus: results[0] });

    const cockDescriber =  new CockDescriber({
      character: character,
      cock: results[1] });

    const pussyDescriber = new PussyDescriber({
      character: character,
      pussy: results[3] });

    const titsDescriber =  new TitsDescriber({
      character: character,
      nipples: results[4],
      tits: results[5] });

    await bodyDescriber.updateDescription();
    await anusDescriber.updateDescription();
    await cockDescriber.updateDescription();
    await pussyDescriber.updateDescription();
    await titsDescriber.updateDescription();

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

  // New minions are created with the forager role, until resting is unlocked,
  // then they are created with the rest role.
  async function defaultRole() {
    return (await Flag.lookup('plan-view.roles.rest')) == 'unlocked' ? 'rest' : 'forager'
  }

  return {
    build: build,
    addBody: addBody,
    baseline: baseline,
  }

})();
