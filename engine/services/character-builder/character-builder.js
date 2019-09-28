global.CharacterBuilder = (function() {

  // So the process for the full build is build the body, pick a name, make adjectments to body based on name.
  // preName:            { type:Sequelize.STRING },
  // firstName:          { type:Sequelize.STRING },
  // lastName:           { type:Sequelize.STRING },
  // A complete character function needs to set the current health to the character's max health

  function build(options, callback) {
    if (options.species == null) { throw 'Species is required' }

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

    Character.create(params).then(character => {
      addBody(character, options, () => {
        callback(character);
      });
    });
  }

  function addBody(character, options, callback) {
    BodyBuilder.build(character, options, body => {
      character.update({ body_id:body.id }).then(() => {
        Promise.all([
          AnusBuilder.build(character, options),
          CockBuilder.build(character, options),
          MouthBuilder.build(character, options),
          PussyBuilder.build(character, options),
          NipplesBuilder.build(character, options),
          TitsBuilder.build(character, options),
          NameBuilder.build(character, options),
        ]).then(()=>{
          callback(character);
        })
      });
    });
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



// TODO: This needs to attach an aspect instead after a character is built

// randomizedViolenceProclivity(gender) {
//   let base = Random.roll(this.violenceRange, this.violenceAverage);
//
//   // Unless you're a drow, men are slightly more violent and female are
//   // slightly more passive, with futa being unchanged.
//   if (this.code == 'dark-elf') {
//     if (gender == 'male')   { base -= 10; }
//     if (gender == 'female') { base += 10; }
//   } else {
//     if (gender == 'male')   { base += 10; }
//     if (gender == 'female') { base -= 10; }
//   }
//
//   if (base > 100)  { base = 100;  }
//   if (base < -100) { base = -100; }
//
//   return base;
// }
