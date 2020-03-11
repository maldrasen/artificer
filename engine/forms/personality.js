global.Personality = class Personality extends Form {

  // For the time being there's only a single personality. This function will
  // eventually need to pick a personality based on the character's aspects and
  // attributes. I'm building the framework out now though so that I know what
  // the personality instances will eventually need to implement.
  static async forCharacter(character) {
    if (character.speciesCode == 'scaven') {
      return Personality.lookup('scaven-default');
    }

    throw `Cannot find an appropriate personality for ${character.name} (${character.id})`
  }

}
