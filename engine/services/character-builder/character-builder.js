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
      physical:    options.physical  || species.randomizedAttribute('physical'),
      personal:    options.personal  || species.randomizedAttribute('personal'),
      mental:      options.mental    || species.randomizedAttribute('mental'),
      magical:     options.magical   || species.randomizedAttribute('magical'),
      violent:     options.violent   || species.randomizedViolenceProclivity(gender.code),
      fear:        options.fear      || Random.roll(20,40),  // I can't really guess how this character came to be a
      love:        options.love      || Random.roll(10,0),   // minion, so unless fear, love, and happiness are set,
      happiness:   options.happiness || Random.roll(20,0),   // assume they're afraid of you and unhappy.
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
          TitsBuilder.build(character, options),
        ]).then(()=>{
          callback(character);
        });
      });
    });
  }

  return {
    build: build,
    addBody: addBody,
  }

})();
