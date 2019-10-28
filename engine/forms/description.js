global.Description = class Description extends Form {

  static buildAnus(data)        { return super.build(null,extend(data,{ type:'anus'         })); }
  static buildCock(data)        { return super.build(null,extend(data,{ type:'cock'         })); }
  static buildNipples(data)     { return super.build(null,extend(data,{ type:'nipples'      })); }
  static buildPussy(data)       { return super.build(null,extend(data,{ type:'pussy'        })); }
  static buildTits(data)        { return super.build(null,extend(data,{ type:'tits'         })); }
  static buildAnusInjury(data)  { return super.build(null,extend(data,{ type:'anus-injury'  })); }
  static buildBodyInjury(data)  { return super.build(null,extend(data,{ type:'body-injury'  })); }
  static buildCockInjury(data)  { return super.build(null,extend(data,{ type:'cock-injury'  })); }
  static buildHeadInjury(data)  { return super.build(null,extend(data,{ type:'head-injury'  })); }
  static buildPussyInjury(data) { return super.build(null,extend(data,{ type:'pussy-injury' })); }
  static buildTitInjury(data)   { return super.build(null,extend(data,{ type:'tit-injury'   })); }

  static validFor(part,context) {
    return Description.where(description => {
      if (description.type != part) { return false; }

      if (part == 'cock') {
        if (description.cockInclusionsValid(context) == false) { return false; }
        if (description.cockConditionsMet(context) == false) { return false; }
      }
      if (part == 'tits') {
        if (description.titsConditionsMet(context) == false) { return false; }
      }

      if (description.requirementsMet(context) == false) { return false; }

      return true;
    });
  }

  static validForInjury(location, damageType, context) {
    return Description.where(description => {
      if (damageType != description.damageType) { return false; }

      if (location == 'anus') {
        if (description.type != 'anus-injury') { return false; }
        // Also needs to look at damage types once they're added to the model.
      }

      if (location == 'body') {
        if (description.type != 'body-injury') { return false; }
        // Also needs to look at damage types once they're added to the model.
      }

      if (location == 'cock') {
        if (description.type != 'cock-injury') { return false; }
        // Also needs to look at damage types once they're added to the model.
      }

      if (location == 'head') {
        if (description.type != 'head-injury') { return false; }
        // Also needs to look at damage types once they're added to the model.
      }

      if (location == 'pussy') {
        if (description.type != 'pussy-injury') { return false; }
        if (damageType == 'blight' && context.pussy.blightLevel != description.level) { return false; }
        if (damageType == 'burn'   && context.pussy.burnLevel   != description.level) { return false; }
        if (damageType == 'smash'  && context.pussy.smashLevel  != description.level) { return false; }
      }

      if (location == 'tits') {
        if (description.type != 'tit-injury') { return false; }
        if (damageType == 'blight' && context.tits.blightLevel != description.level) { return false; }
        if (damageType == 'burn'   && context.tits.burnLevel   != description.level) { return false; }
        if (damageType == 'smash'  && context.tits.smashLevel  != description.level) { return false; }
      }

      let requirements = description.requirements || [];

      // Some conditions require a flag to be present, rather than rejecting flags that are not valid.
      if (context.tits.currentSizeClass == 'zero' && requirements.indexOf('tits-size-zero') < 0) { return false; }
      if (context.character.speciesCode == 'rat'  && requirements.indexOf('species-rat') < 0)    { return false; }

      for (let i=0; i<requirements.length; i++) {
        if (Description.matchRequirement(requirements[i], context) == false) { return false; }
      }

      return true;
    });
  }

  // Condition checking is slightly different from requirement checking. If a
  // body part has an interesting condition that would make it odd for a more
  // general description not to mention it. i.e. something like cock-count-2 or
  // tits-size-zero than matching descriptions *must* have that condition set.
  // Normal requirement checking only requires that the check not fail, but
  // doesn't require the check to be done.

  hasCondition(condition) { return (this.conditions||[]).indexOf(condition) >= 0 }

  cockConditionsMet(context) {
    if (context.cock.count == 2 && !this.hasCondition('cock-count-2')) { return false; }
    if (context.cock.count == 3 && !this.hasCondition('cock-count-3')) { return false; }
    return true;
  }

  titsConditionsMet(context) {
    if (context.character.speciesCode == 'rat'  && !this.hasCondition('species-rat'))    { return false; }
    if (context.tits.currentSizeClass == 'zero' && !this.hasCondition('tits-size-zero')) { return false; }
    return true;
  }

  // Inclusions are essentially the same as requirements except that when a
  // description with an inclusion is appended to the full description the
  // describer remembers that, so that the same feature isn't described again
  // unnecessarily.

  cockInclusionsValid(context) {
    for (let i=0; i<(this.includes||[]).length; i++) {
      if (this.includes[i] == 'knobs'  && matchRequirement('cock-knobbed',  context) == false) { return false; }
      if (this.includes[i] == 'knot'   && matchRequirement('cock-knotted',  context) == false) { return false; }
      if (this.includes[i] == 'spines' && matchRequirement('cock-spined',   context) == false) { return false; }
      if (this.includes[i] == 'sheath' && matchRequirement('cock-sheathed', context) == false) { return false; }
    }

    return true;
  }

  requirementsMet(context) {
    for (let i=0; i<(this.requirements||[]).length; i++) {
      if (matchRequirement(this.requirements[i], context) == false) { return false; }
    }
    return true;
  }
}

function matchRequirement(req, context) {
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
  if (req == 'cock-knobbed')             { return context.cock.hasKnobs                      }
  if (req == 'cock-knotted')             { return context.cock.hasKnot                       }
  if (req == 'cock-spined')              { return context.cock.hasSpines                     }
  if (req == 'cock-sheathed')            { return context.cock.hasSheath                     }
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
