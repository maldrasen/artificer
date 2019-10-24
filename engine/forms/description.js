global.Description = class Description extends Form {

  static buildTits(data) {
    return super.build(null,extend(data,{ type:'tits' }));
  }

  static matchRequirement(req,context) {
    if (req == 'species-rat')              { return context.character.speciesCode == 'rat' }
    if (req == 'tits-size-zero')           { return context.tits.currentSizeClass == 'zero' }
    if (req == 'tits-size-tiny')           { return context.tits.currentSizeClass == 'tiny' }
    if (req == 'tits-shape-conical')       { return context.tits.shape == 'conical' }
    if (req == 'tits-shape-perky')         { return context.tits.shape == 'perky' }
    if (req == 'nipples-as-large-as-tits') { return true; }
    throw `Unknown Description Requirement - ${req}`
  }

  static validForTits(character,tits) {
    return Description.where(description => {
      if (description.type != 'tits') { return false; };

      for (let i=0; i<description.requirements.length; i++) {
        if (Description.matchRequirement(description.requirements[i], {character, tits}) == false) { return false; }
      }

      // Some conditions require a flag to be present, rather than rejecting
      // flags that are not valid.
      if (tits.currentSizeClass == 'zero') {
        if (description.requirements.indexOf('tits-size-zero') < 0) { return false; }
      }

      return true;
    });
  }



}
