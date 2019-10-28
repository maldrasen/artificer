global.Description = class Description extends Form {

  static buildCock(data)    { return super.build(null,extend(data,{ type:'cock' })); }
  static buildNipples(data) { return super.build(null,extend(data,{ type:'nipples' })); }
  static buildTits(data)    { return super.build(null,extend(data,{ type:'tits' })); }

  static matchRequirement(req, context) {
    if (req == 'species-rat')              { return context.character.speciesCode == 'rat'     }
    if (req == 'species-furry')            { return context.character.species.isFurry          }
    if (req == 'species-demon')            { return context.character.species.isDemon          }
    if (req == 'cock-count-2')             { return context.cock.count == 2                    }
    if (req == 'cock-count-3')             { return context.cock.count == 3                    }
    if (req == 'cock-size-small')          { return context.cock.currentSizeClass == 'small'   }
    if (req == 'cock-size-average')        { return context.cock.currentSizeClass == 'average' }
    if (req == 'cock-size-big')            { return context.cock.currentSizeClass == 'big'     }
    if (req == 'cock-size-huge')           { return context.cock.currentSizeClass == 'huge'    }
    if (req == 'cock-size-monster')        { return context.cock.currentSizeClass == 'monster' }
    if (req == 'cock-size-gigantic')       { return context.cock.isGigantic                    }
    if (req == 'cock-size-titanic')        { return context.cock.isTitanic                     }
    if (req == 'cock-shape-dragon')        { return context.cock.shape == 'dragon'             }
    if (req == 'cock-shape-horse')         { return context.cock.shape == 'horse'              }
    if (req == 'cock-shape-snake')         { return context.cock.shape == 'snake'              }
    if (req == 'cock-knobbed')             { return context.cock.knobHeightRatio != null       }
    if (req == 'cock-knotted')             { return context.cock.knotWidthRatio != null        }
    if (req == 'cock-spined')              { return context.cock.spineHeightRatio != null      }
    if (req == 'cock-sheathed')            { return context.cock.sheath != null                }
    if (req == 'nipples-size-big')         { return context.nipples.length >= 20               }
    if (req == 'nipples-size-huge')        { return context.nipples.length >= 30               }
    if (req == 'nipples-shape-puffy')      { return context.nipples.shape == 'puffy'           }
    if (req == 'tits-size-zero')           { return context.tits.currentSizeClass == 'zero'    }
    if (req == 'tits-size-tiny')           { return context.tits.currentSizeClass == 'tiny'    }
    if (req == 'tits-size-below-average')  { return context.tits.size < 300                    }
    if (req == 'tits-shape-conical')       { return context.tits.shape == 'conical'            }
    if (req == 'tits-shape-perky')         { return context.tits.shape == 'perky'              }
    throw `Unknown Description Requirement - ${req}`
  }

  static validForCock(context) {
    return Description.where(description => {
      if (description.type != 'cock') { return false; };

      let requirements = description.requirements || [];
      let inclusions = description.includes || [];

      if (context.cock.count == 2 && requirements.indexOf('cock-count-2') < 0) { return false; }
      if (context.cock.count == 3 && requirements.indexOf('cock-count-3') < 0) { return false; }

      for (let i=0; i<requirements.length; i++) {
        if (Description.matchRequirement(requirements[i], context) == false) { return false; }
      }

      for (let i=0; i<inclusions.length; i++) {
        if (inclusions[i] == 'knobs'  && Description.matchRequirement('cock-knobbed',  context) == false) { return false; }
        if (inclusions[i] == 'knot'   && Description.matchRequirement('cock-knotted',  context) == false) { return false; }
        if (inclusions[i] == 'spines' && Description.matchRequirement('cock-spined',   context) == false) { return false; }
        if (inclusions[i] == 'sheath' && Description.matchRequirement('cock-sheathed', context) == false) { return false; }
      }

      return true;
    });
  }

  static validForNipples(context) {
    return Description.where(description => {
      if (description.type != 'nipples') { return false; };

      let requirements = description.requirements
      for (let i=0; i<requirements.length; i++) {
        if (Description.matchRequirement(requirements[i], context) == false) { return false; }
      }

      return true;
    });
  }

  static validForTits(context) {
    return Description.where(description => {
      if (description.type != 'tits') { return false; };

      let requirements = description.requirements;

      // Some conditions require a flag to be present, rather than rejecting flags that are not valid.
      if (context.tits.currentSizeClass == 'zero' && requirements.indexOf('tits-size-zero') < 0) { return false; }
      if (context.character.speciesCode == 'rat'  && requirements.indexOf('species-rat') < 0)    { return false; }

      for (let i=0; i<requirements.length; i++) {
        if (Description.matchRequirement(requirements[i], context) == false) { return false; }
      }

      return true;
    });
  }

}
