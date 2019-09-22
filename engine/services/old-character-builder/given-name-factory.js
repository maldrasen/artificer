WorldBuilder.GivenNameFactory = (function() {

  function pickGivenName(character) {
    let name = Random.from(nameList(character));

    try {
      ensureUniqueToProfession(name.name, character);
    } catch(error) {
      WorldBuilder.Controls.logConflict('Given Name Conflict',error);
      return pickGivenName(character);
    }

    if (name.adjustments) {
      try {
        WorldBuilder.Adjuster.applyAdjustments(`${name.type} Name (${name.name})`,name.adjustments, character);
      } catch(error) {
        WorldBuilder.Controls.logConflict(`There was a conflict adding the name.`,error);
        return pickGivenName(character);
      }
    }

    character.setGivenName(name.name);
    character.save();
  }

  function ensureUniqueToProfession(name, character) {
    if (Character.findBy({ givenName:name, profession:character.profession.code }).length > 0) {
      throw `There is already a character named ${name} who is a ${character.profession.name}`
    }
  }

  function nameList(character) {
    let nameGender = character.isMale ? 'male' : 'female';
    let race = character.race.code;

    if (race == 'rat')      { return  Names.RatNames; }
    if (race == 'succubus') { return  Names.GivenDemonNames['female']; }
    if (race == 'incubus')  { return  Names.GivenDemonNames['male']; }
    if (race == 'goblin')   { return  Names.GivenGoblinNames[nameGender]; }
    if (race == 'ogre')     { return  Names.GivenGoblinNames[nameGender]; }

    return Names.GivenElfNames[nameGender];
  }

  return {
    pickGivenName: pickGivenName,
  };

})();
