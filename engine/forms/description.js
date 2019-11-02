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

      return description.requirementsMet(context);
    });
  }

  static validForInjury(part, damageType, context) {
    return Description.where(description => {
      if (damageType != description.damageType) { return false; }

      if (part == 'anus'  && !description.validForAnusInjury(damageType,  context)) { return false; }
      if (part == 'body'  && !description.validForBodyInjury(damageType,  context)) { return false; }
      if (part == 'cock'  && !description.validForCockInjury(damageType,  context)) { return false; }
      if (part == 'head'  && !description.validForHeadInjury(damageType,  context)) { return false; }
      if (part == 'pussy' && !description.validForPussyInjury(damageType, context)) { return false; }
      if (part == 'tits'  && !description.validForTitsInjury(damageType,  context)) { return false; }

      if (part == 'cock') {
        if (description.cockInclusionsValid(context) == false) { return false; }
        if (description.cockConditionsMet(context) == false) { return false; }
      }
      if (part == 'tits') {
        if (description.titsConditionsMet(context) == false) { return false; }
      }

      return description.requirementsMet(context);
    });
  }

  validForBodyInjury(damageType, context) {
    if (this.type != 'body-injury') { return false; }
    return true;
  }

  validForHeadInjury(damageType, context) {
    if (this.type != 'head-injury') { return false; }
    return true;
  }

  validForAnusInjury(damageType, context) {
    if (this.type != 'anus-injury') { return false; }
    return true;
  }

  validForCockInjury(damageType, context) {
    if (this.type != 'cock-injury') { return false; }

    if (damageType == 'blight') {
      if (this.damageType != 'blight') { return false; }
      if (this.level != context.cock.blightLevel) { return false; }
      if (this.place == 'balls' && context.cock.blightPlace != 'balls') { return false; }
      if (this.place != 'balls' && context.cock.blightPlace == 'balls') { return false; }
    }
    if (damageType == 'burn') {
      if (this.damageType != 'burn') { return false; }
      if (this.level != context.cock.burnLevel) { return false; }
      if (this.place == 'balls' && context.cock.blightPlace != 'balls') { return false; }
      if (this.place != 'balls' && context.cock.blightPlace == 'balls') { return false; }
    }
    if (damageType == 'smash') {
      if (this.damageType != 'smash') { return false; }
      if (this.level != context.cock.smashLevel) { return false; }
    }

    return true;
  }

  // Pussy injuries need to check both damage type and damage level
  validForPussyInjury(damageType, context) {
    if (this.type != 'pussy-injury') { return false; }

    if (damageType == 'blight') {
      if (this.damageType != 'blight') { return false; }
      if (this.level != context.pussy.blightLevel) { return false; }
    }
    if (damageType == 'burn') {
      if (this.damageType != 'burn') { return false; }
      if (this.level != context.pussy.burnLevel) { return false; }
    }
    if (damageType == 'smash') {
      if (this.damageType != 'smash') { return false; }
      if (this.level != context.pussy.smashLevel) { return false; }
    }

    return true;
  }

  // Tit injuries need to check damage type, damage level, and damage place.
  validForTitsInjury(damageType, context) {
    if (this.type != 'tit-injury') { return false; }

    if (damageType == 'blight') {
      if (this.damageType != 'blight') { return false; }
      if (this.level != context.tits.blightLevel) { return false; }
      if (!this.placeMatches(context.tits.blightPlace)) { return false; }
    }
    if (damageType == 'burn') {
      if (this.damageType != 'burn') { return false; }
      if (this.level != context.tits.burnLevel) { return false; }
      if (!this.placeMatches(context.tits.burnPlace)) { return false; }
    }
    if (damageType == 'smash') {
      if (this.damageType != 'smash') { return false; }
      if (this.level != context.tits.smashLevel) { return false; }
      if (!this.placeMatches(context.tits.smashPlace)) { return false; }
    }

    return true;
  }

  // The injury place will usually be left, right, or all. Descriptions for
  // left work for right as well, so really we only care if a description is
  // for 'all' the described injury also needs to be 'all'. If the place isn't
  // set that means it will work equally well for left, right, or all injuries.
  placeMatches(currentPlace) {
    if (this.place == null) { return true; }
    return (currentPlace == 'all') ? (this.place == 'all') : (this.place != 'all')
  }

  // Condition checking is slightly different from requirement checking. If a
  // body part has an interesting condition that would make it odd for a more
  // general description not to mention it. i.e. something like cock-count-2 or
  // tits-size-zero than matching descriptions *must* have that condition set.
  // Normal requirement checking only requires that the check not fail, but
  // doesn't require the check to be done.
  //
  // For the condition to be met, if the condition exists we ensure that the
  // expression is true, if the condition does not exist ensure that the
  // operation is false. We want to know if the check fails though, so negate
  // that result. This is essentially an XOR.
  conditionFailed(code,expression) {
    return (this.conditions||[]).indexOf(code) >= 0 ? !expression : expression
  }

  cockConditionsMet(context) {
    if (this.conditionFailed('cock-count-2', context.cock.count == 2)) { return false; }
    if (this.conditionFailed('cock-count-3', context.cock.count == 3)) { return false; }
    return true;
  }

  titsConditionsMet(context) {
    if (this.conditionFailed('species-rat',    context.character.speciesCode == 'rat'))  { return false; }
    if (this.conditionFailed('tits-size-zero', context.tits.currentSizeClass == 'zero')) { return false; }
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
  if (req == 'species-not-furry')        { return context.character.species.isFurry == false }
  if (req == 'species-demon')            { return context.character.species.isDemon          }
  if (req == 'cock-count-2')             { return context.cock.count == 2                    }
  if (req == 'cock-count-3')             { return context.cock.count == 3                    }
  if (req == 'cock-external-balls')      { return context.cock.internalBalls == false        }
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
  if (req == 'tits-smash-count-1')       { return context.tits.smashCount == 1               }
  if (req == 'tits-smash-count-2')       { return context.tits.smashCount == 2               }
  if (req == 'tits-smash-count-over-2')  { return context.tits.smashCount > 2                }
  if (req == 'tits-smash-shape')         { return context.tits.smashShape != null            }

  throw `Unknown Description Requirement - ${req}`
}
