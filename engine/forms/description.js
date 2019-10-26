global.Description = class Description extends Form {

  static buildCock(data)    { return super.build(null,extend(data,{ type:'cock' })); }
  static buildNipples(data) { return super.build(null,extend(data,{ type:'nipples' })); }
  static buildTits(data)    { return super.build(null,extend(data,{ type:'tits' })); }

  static matchRequirement(req, context) {
    if (req == 'species-rat')              { return context.character.speciesCode == 'rat'  }
    if (req == 'species-furry')            { return context.character.species.furry         }
    if (req == 'nipples-size-big')         { return context.nipples.length >= 20            }
    if (req == 'nipples-size-huge')        { return context.nipples.length >= 30            }
    if (req == 'nipples-shape-puffy')      { return context.nipples.shape == 'puffy'        }
    if (req == 'tits-size-zero')           { return context.tits.currentSizeClass == 'zero' }
    if (req == 'tits-size-tiny')           { return context.tits.currentSizeClass == 'tiny' }
    if (req == 'tits-size-below-average')  { return context.tits.size < 300                 }
    if (req == 'tits-shape-conical')       { return context.tits.shape == 'conical'         }
    if (req == 'tits-shape-perky')         { return context.tits.shape == 'perky'           }
    throw `Unknown Description Requirement - ${req}`
  }

  static validForCock(context) {
    return Description.where(description => {
      if (description.type != 'cock') { return false; };

      let reqs = description.requirements
      for (let i=0; i<reqs.length; i++) {
        if (Description.matchRequirement(reqs[i], context) == false) { return false; }
      }

      return true;
    });
  }


  static validForNipples(context) {
    return Description.where(description => {
      if (description.type != 'nipples') { return false; };

      let reqs = description.requirements
      for (let i=0; i<reqs.length; i++) {
        if (Description.matchRequirement(reqs[i], context) == false) { return false; }
      }

      return true;
    });
  }

  static validForTits(context) {
    return Description.where(description => {
      if (description.type != 'tits') { return false; };

      let reqs = description.requirements;

      // Some conditions require a flag to be present, rather than rejecting flags that are not valid.
      if (context.tits.currentSizeClass == 'zero' && reqs.indexOf('tits-size-zero') < 0) { return false; }
      if (context.character.speciesCode == 'rat'  && reqs.indexOf('species-rat') < 0)    { return false; }

      for (let i=0; i<reqs.length; i++) {
        if (Description.matchRequirement(reqs[i], context) == false) { return false; }
      }

      return true;
    });
  }

}
