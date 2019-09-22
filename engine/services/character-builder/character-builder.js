global.CharacterBuilder = (function() {
  "use strict";

  function build(options, callback) {
    if (options.race == null)    { throw 'Race at least must be specified.'; }
    if (options.anus == null)    { options.anus={};    }
    if (options.balls == null)   { options.balls={};   }
    if (options.body == null)    { options.body={};    }
    if (options.cock == null)    { options.cock={};    }
    if (options.mouth == null)   { options.mouth={};   }
    if (options.nipples == null) { options.nipples={}; }
    if (options.pussy == null)   { options.pussy={};   }
    if (options.tits == null)    { options.tits={};    }

    let race = Race.lookup(options.race);

    let character = new Character({
      race: options.race,
      stamina: 1000,
      preName: options.preName,
      givenName: options.givenName,
      postName: options.postName,
      profession: options.profession,
      district: options.district,
    });

    character.save((id) => {
      new Promise((resolve, reject) => {
        Character.load(id, resolve)
      }).
      then((character) => {
        character.setRole(options.role || 'temp');
        character.setGender(selectGender(character, options, race));
        character.setPhysical(randomizeAttribute(race, 'physical'));
        character.setPersonal(randomizeAttribute(race, 'personal'));
        character.setMental(randomizeAttribute(race, 'mental'));
        character.setMagical(randomizeAttribute(race, 'magical'));
        return character;
      }).then((character) => {
        return BodyFactory.build(character, options.body);
      }).then((character) => {
        return MouthFactory.build(character, options.mouth);
      }).then((character) => {
        return AnusFactory.build(character, options.anus);
      }).then((character) => {
        return NipplesFactory.build(character, options.nipples);
      }).then((character) => {
        return (character.gender.cock) ? CockFactory.build(character, options.cock) : character;
      }).then((character) => {
        return (character.gender.balls) ? BallsFactory.build(character, options.balls) : character;
      }).then((character) => {
        return (character.gender.pussy) ? PussyFactory.build(character, options.pussy) : character;
      }).then((character) => {
        return (character.gender.tits) ? TitsFactory.build(character, options.tits) : character;
      }).then((character) => {
        callback(character);
      }).catch((error) => {
        console.log("ERROR:",error)
      });
    });
  }

  function randomizeAttribute(race, attribute) {
    let value = race[attribute] + Random.upTo(18) - 9;
    if (value<0) { value=0; }
    return value;
  }

  // Character Gender
  //   gender: gender code
  //   race: race used to randomly choose otherwise.
  function selectGender(character, options, race) {
    if (options.gender) { return options.gender; }
    return Random.fromFrequencyMap(race.genderRatio);
  }

  return {
    build: build,
  };

})();
