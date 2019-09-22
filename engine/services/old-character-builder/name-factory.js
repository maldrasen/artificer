WorldBuilder.NameFactory = (function() {

  function assignLocationName(character) {
    assignName('Location', character, function() {
      return Random.from(Names.DistrictNames[character.district.code]);
    });
  }

  // Physical Names are applied to 5% or so of characters. (10% of 50%)
  function assignPhysicalName(character) {
    assignName('Physical', character, function() {
      if (character.race.code == 'dragon') { return Random.from(Names.PhysicalNames['dragon']); }
      return Random.from(Names.PhysicalNames[character.isMale ? 'male' : 'female']);
    });
  }

  // Assign given name based on profession about 50% of the time.
  function assignProfessionName(character) {
    assignName('Professional', character, function() {
      return Random.from(character.profession.characterNames);
    });
  }

  // TODO: Add demons and rats
  function assignRacialName(character) {
    assignName('Racial', character, function() {
      if (character.race.code == 'goblin') { return Random.from(Names.GoblinNames); }
    });
  }

  function assignTribalName(character) {
    assignName('Tribal', character, function() {
      return Random.from(Names.TribalNames[character.district.code]);
    });
  }

  function assignName(type, character, randomNameFunction) {
    if (character.postName != null || character.preName != null) { return false; }

    let name = randomNameFunction();
    if (name == null) { return false; }

    try {
      validate(character, name);
    } catch(error) {
      WorldBuilder.Controls.logConflict(`${type} Name Conflict`,error);
      return assignName(type, character, randomNameFunction);
    }

    if (name.adjustments) {
      try {
        WorldBuilder.Adjuster.applyAdjustments(`${type} Name (${name.name})`,name.adjustments, character);
      } catch(error) {
        WorldBuilder.Controls.logConflict(`There was a conflict adding the name.`,error);
        return assignName(type, character, randomNameFunction);
      }
    }

    name.pre ? character.setPreName(name.name) : character.setPostName(name.name);
    character.save();
  }

  function validate(character, name) {
    ensureUniqueName(character, name);
    ensureDissimilarNames(character, name);
    checkRestrictions(character, name);
  }

  function ensureUniqueName(character, name) {
    let params = { givenName:character.givenName };
        params[(name.pre ? 'preName' : 'postName')] = name.name;

    if (Character.findBy(params)[0]) {
      throw `A character named ${character.name} already exists.`;
    }
  }

  // Mostly to prevent names like Wolf Wolfblood and Piper Piper. Might need to
  // tweek the threshold if we're throwing away interesting names though.
  function ensureDissimilarNames(character, name) {
    if (StringComparator.compare(character.givenName, name.name) > 0.6) {
      throw `The names ${character.givenName} and ${name.name} seem too similar.`;
    }
  }

  function checkRestrictions(character, name) {
    each((name.restrictions || []), function(restriction) {
      if (restriction == 'has-pussy' && character.hasPussy() == false) {
        throw `${name.name} requires the character to have a pussy.`;
      }
      if (restriction == 'has-cock' && character.hasCock() == false) {
        throw `${name.name} requires the character to have a cock.`;
      }
      if (restriction == 'male-only' && character.isMale == false) {
        throw `${name.name} requires a male character.`;
      }
      if (restriction == 'not-male' && character.isMale) {
        throw `${name.name} requires a non-male character.`;
      }
    });
  }

  return {
    assignName: assignName,
    assignLocationName: assignLocationName,
    assignPhysicalName: assignPhysicalName,
    assignProfessionName: assignProfessionName,
    assignRacialName: assignRacialName,
    assignTribalName: assignTribalName,
  };

})();
