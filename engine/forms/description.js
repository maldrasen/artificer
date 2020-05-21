global.Description = class Description extends Form {

  static buildAnus(data)        { return super.build(null,extend(data,{ type:'anus'         })); }
  static buildCock(data)        { return super.build(null,extend(data,{ type:'cock'         })); }
  static buildFace(data)        { return super.build(null,extend(data,{ type:'face'         })); }
  static buildHead(data)        { return super.build(null,extend(data,{ type:'head'         })); }
  static buildNipples(data)     { return super.build(null,extend(data,{ type:'nipples'      })); }
  static buildPussy(data)       { return super.build(null,extend(data,{ type:'pussy'        })); }
  static buildTits(data)        { return super.build(null,extend(data,{ type:'tits'         })); }
  static buildAnusInjury(data)  { return super.build(null,extend(data,{ type:'anus-injury'  })); }
  static buildBodyInjury(data)  { return super.build(null,extend(data,{ type:'body-injury'  })); }
  static buildCockInjury(data)  { return super.build(null,extend(data,{ type:'cock-injury'  })); }
  static buildHeadInjury(data)  { return super.build(null,extend(data,{ type:'head-injury'  })); }
  static buildPussyInjury(data) { return super.build(null,extend(data,{ type:'pussy-injury' })); }
  static buildTitInjury(data)   { return super.build(null,extend(data,{ type:'tit-injury'   })); }

  static async select(part, context) {
    const data = context.get('C');

    const valid = ArrayUtility.compact(await Promise.all(
      ObjectUtility.values(Description.instances).map(async description => {
        if (description.type != part) { return; }

        if (part == 'anus') {
          if (description.anusConditionsMet(data) == false) { return; }
        }
        if (part == 'cock') {
          if (description.cockInclusionsValid(data) == false) { return; }
          if (description.cockConditionsMet(data) == false) { return; }
        }
        if (part == 'head') {
          if (description.headConditionsMet(data) == false) { return; }
        }
        if (part == 'tits') {
          if (description.titsConditionsMet(data) == false) { return; }
        }

        if (await CentralScrutinizer.meetsRequirements(description.requires, context)) {
          return description;
        }
      })
    ));

    if (valid.length == 0) {
      throw `Cannot find a description for ${part}`;
    }

    return Random.from(valid);
  }

  static async selectInjury(part, damageType, context) {
    const data = context.get('C');

    const valid = ArrayUtility.compact(await Promise.all(
      ObjectUtility.values(Description.instances).map(async description => {
        if (damageType != description.damageType) { return; }

        if (part == 'anus'  && !description.validForAnusInjury(damageType, data))  { return; }
        if (part == 'body'  && !description.validForBodyInjury(damageType, data))  { return; }
        if (part == 'cock'  && !description.validForCockInjury(damageType, data))  { return; }
        if (part == 'head'  && !description.validForHeadInjury(damageType, data))  { return; }
        if (part == 'pussy' && !description.validForPussyInjury(damageType, data)) { return; }
        if (part == 'tits'  && !description.validForTitsInjury(damageType, data))  { return; }

        if (part == 'cock') {
          if (description.cockInclusionsValid(data) == false) { return; }
          if (description.cockConditionsMet(data) == false) { return; }
        }
        if (part == 'tits') {
          if (description.titsConditionsMet(data) == false) { return; }
        }

        if (await CentralScrutinizer.meetsRequirements(description.requires, context)) {
          return description;
        }
      })
    ));

    if (valid.length == 0) {
      throw `Cannot find an injury description for (${damageType},${part})`;
    }

    return Random.from(valid);
  }

  validForBodyInjury(damageType, data) {
    if (this.type != 'body-injury') { return false; }

    if (damageType == 'pierce') {
      if (this.damageType != 'pierce') { return false; }
      if (this.level != data.body.pierceLevel) { return false; }
    }

    return true;
  }

  validForHeadInjury(damageType, data) {
    if (this.type != 'head-injury') { return false; }

    if (damageType == 'cut') {
      if (this.damageType != 'cut') { return false; }
      if (this.level != data.mouth.cutLevel) { return false; }
    }

    return true;
  }

  validForAnusInjury(damageType, data) {
    if (this.type != 'anus-injury') { return false; }

    if (damageType == 'smash') {
      if (this.damageType != 'smash') { return false; }
      if (this.level != data.anus.smashLevel) { return false; }
      if (this.shape != data.anus.smashShape) { return false; }
    }

    return true;
  }

  validForCockInjury(damageType, data) {
    if (this.type != 'cock-injury') { return false; }

    if (damageType == 'blight') {
      if (this.damageType != 'blight') { return false; }
      if (this.level != data.cock.blightLevel) { return false; }
      if (this.place == 'balls' && data.cock.blightPlace != 'balls') { return false; }
      if (this.place != 'balls' && data.cock.blightPlace == 'balls') { return false; }
    }
    if (damageType == 'burn') {
      if (this.damageType != 'burn') { return false; }
      if (this.level != data.cock.burnLevel) { return false; }
      if (this.place == 'balls' && data.cock.blightPlace != 'balls') { return false; }
      if (this.place != 'balls' && data.cock.blightPlace == 'balls') { return false; }
    }
    if (damageType == 'smash') {
      if (this.damageType != 'smash') { return false; }
      if (this.level != data.cock.smashLevel) { return false; }
    }

    return true;
  }

  // Pussy injuries need to check both damage type and damage level
  validForPussyInjury(damageType, data) {
    if (this.type != 'pussy-injury') { return false; }

    if (damageType == 'blight') {
      if (this.damageType != 'blight') { return false; }
      if (this.level != data.pussy.blightLevel) { return false; }
    }
    if (damageType == 'burn') {
      if (this.damageType != 'burn') { return false; }
      if (this.level != data.pussy.burnLevel) { return false; }
    }
    if (damageType == 'smash') {
      if (this.damageType != 'smash') { return false; }
      if (this.level != data.pussy.smashLevel) { return false; }
    }

    return true;
  }

  // Tit injuries need to check damage type, damage level, and damage place.
  validForTitsInjury(damageType, data) {
    if (this.type != 'tit-injury') { return false; }

    if (damageType == 'blight') {
      if (this.damageType != 'blight') { return false; }
      if (this.level != data.tits.blightLevel) { return false; }
      if (!this.placeMatches(data.tits.blightPlace)) { return false; }
    }
    if (damageType == 'burn') {
      if (this.damageType != 'burn') { return false; }
      if (this.level != data.tits.burnLevel) { return false; }
      if (!this.placeMatches(data.tits.burnPlace)) { return false; }
    }
    if (damageType == 'smash') {
      if (this.damageType != 'smash') { return false; }
      if (this.level != data.tits.smashLevel) { return false; }
      if (!this.placeMatches(data.tits.smashPlace)) { return false; }
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
  conditionFailed(code, expression) {
    return ArrayUtility.contains(this.conditions,code) ? !expression : expression
  }

  // This once checked to ensure that a prolapsed asshole would get a prolapse
  // description, but they were moved into a seperate describeProlapse()
  // function and are no longer part of the descriptions. Still this might be
  // needed at some point so leave it in for now.
  anusConditionsMet(data) { return true; }


  // The normal cock descriptions don't really make a lot of sense when used to
  // describe horse cocks, mostly because of the size comparason stuff, so
  // horsecocks always need to use horsecock specific descriptions. Multicock
  // descriptions are also distinct.
  cockConditionsMet(data) {
    if (this.conditionFailed('minion(C).cock.horse',   data.cock.shape == 'horse')) { return false; }
    if (this.conditionFailed('minion(C).cock.count=2', data.cock.count == 2)) { return false; }
    if (this.conditionFailed('minion(C).cock.count=3', data.cock.count == 3)) { return false; }
    return true;
  }

  // Head descriptions are simplier, we only need to check to see if the
  // species matches for non-elven looking species.
  headConditionsMet(data) {
    const nonElves = ['caprien','dragon','scaven','dryad','equian','kobold','lupin','minotaur','naga','neko','selkie','viera']
    return ArrayUtility.contains(nonElves,data.character.speciesCode) ?
      (this.species == data.character.speciesCode ) :
      (this.species == null);
  }

  titsConditionsMet(data) {
    if (this.conditionFailed('minion(C).is-scaven', data.character.speciesCode == 'scaven'))  { return false; }
    if (this.conditionFailed('minion(C).tits.zero', data.tits.currentSizeClass == 'zero')) { return false; }
    return true;
  }

  // When a cock description includes a description of a cock feature we need
  // to make sure that cock feature is actually present.
  cockInclusionsValid(data) {
    for (let i=0; i<(this.includes||[]).length; i++) {
      if (this.includes[i] == 'knobs'  && data.cock.hasKnobs == false ) { return false; }
      if (this.includes[i] == 'knot'   && data.cock.hasKnot == false)   { return false; }
      if (this.includes[i] == 'spines' && data.cock.hasSpines == false) { return false; }
      if (this.includes[i] == 'sheath' && data.cock.hasSheath == false) { return false; }
    }
    return true;
  }
}
