global.Description = class Description extends Form {

  static async select(part, context) {
    const valid = ArrayUtility.compact(await Promise.all(
      ObjectUtility.values(this.instances).map(async description => {
        let gate1 = await description.conditionsMet(context);
        let gate2 = await CentralScrutinizer.meetsRequirements(description.requires, context);
        return (gate1 && gate2) ? description : null;
      })
    ));

    if (valid.length == 0) {
      throw `Cannot find a description for ${part}`;
    }

    return Random.from(valid);
  }

  // Description subclasses can overwrite the conditionsMet() function to
  // perform their own unique conditions.
  async conditionsMet(context) { return true; }

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
}

global.AnusDescription = class AnusDescription extends Description {}
global.FaceDescription = class FaceDescription extends Description {}

// Some species have their own species specific body descriptions. The elf
// races just have average human-like bodies. The 'furry' species are similar
// enough to not need distinct body descriptions, except for the caprien and
// selkie who are different enough to need their own descriptions. All the
// other species need their own custom descriptions:
//
// Custom Descriptions Needed
//    Caprien, Centaur, Dragon, Dryad, Goblin, Incubus, Kobold,
//    Naga, Ogre, Scaven, Selkie, Succubus
//
global.BodyDescription = class BodyDescription extends Description {
  conditionsMet(context) {
    const elfBodied = ['dark-elf','elf','gnome','neko','nymph','sylph','viera','wood-elf'];
    const furryBodied = ['equian','lupin','minotaur'];
    const speciesCode = context.get('C').character.speciesCode;

    if (ArrayUtility.contains(elfBodied, speciesCode)) { return this.species == 'elf' }
    if (ArrayUtility.contains(furryBodied, speciesCode)) { return this.species == 'furry' }

    return this.species == speciesCode;
  }
}


// When a cock description includes a description of a cock feature we need
// to make sure that cock feature is actually present. Also, the normal cock
// descriptions don't really make a lot of sense when used to describe horse
// cocks, mostly because of the size comparason stuff, so horsecocks always
// need to use horsecock specific descriptions. Multicock descriptions are
// also distinct.
global.CockDescription = class CockDescription extends Description {
  conditionsMet(context) {
    const cock = context.get('C').cock;

    for (let i=0; i<(this.includes||[]).length; i++) {
      if (this.includes[i] == 'knobs'  && cock.hasKnobs == false ) { return false; }
      if (this.includes[i] == 'knot'   && cock.hasKnot == false)   { return false; }
      if (this.includes[i] == 'spines' && cock.hasSpines == false) { return false; }
      if (this.includes[i] == 'sheath' && cock.hasSheath == false) { return false; }
    }

    if (this.conditionFailed('minion(C).cock.horse',   cock.shape == 'horse')) { return false; }
    if (this.conditionFailed('minion(C).cock.count=2', cock.count == 2)) { return false; }
    if (this.conditionFailed('minion(C).cock.count=3', cock.count == 3)) { return false; }

    return true;
  }
}


// Head descriptions only need to check to see if the species matches for
// non-elven looking species.
global.HeadDescription = class HeadDescription extends Description {
  conditionsMet(context) {
    const nonElves = ['caprien','dragon','scaven','dryad','equian','kobold','lupin','minotaur','naga','neko','selkie','viera']
    const speciesCode = context.get('C').character.speciesCode;
    return ArrayUtility.contains(nonElves,speciesCode) ?
      (this.species == speciesCode ) :
      (this.species == null);
  }
}


global.TitsDescription = class TitsDescription extends Description {
  conditionsMet(context) {
    const character = context.get('C').character;
    const tits = context.get('C').tits;

    if (this.conditionFailed('minion(C).is-scaven', character.speciesCode == 'scaven'))  { return false; }
    if (this.conditionFailed('minion(C).tits.zero', tits.currentSizeClass == 'zero')) { return false; }

    return true;
  }
}



// TODO: Injury specific classes.

// static async selectInjury(part, damageType, context) {
//   const data = context.get('C');
//
//   const valid = ArrayUtility.compact(await Promise.all(
//     ObjectUtility.values(Description.instances).map(async description => {
//       if (damageType != description.damageType) { return; }
//
//       if (part == 'anus'  && !description.validForAnusInjury(damageType, data))  { return; }
//       if (part == 'body'  && !description.validForBodyInjury(damageType, data))  { return; }
//       if (part == 'cock'  && !description.validForCockInjury(damageType, data))  { return; }
//       if (part == 'head'  && !description.validForHeadInjury(damageType, data))  { return; }
//       if (part == 'pussy' && !description.validForPussyInjury(damageType, data)) { return; }
//       if (part == 'tits'  && !description.validForTitsInjury(damageType, data))  { return; }
//
//       if (part == 'cock') {
//         if (description.cockInclusionsValid(data) == false) { return; }
//         if (description.cockConditionsMet(data) == false) { return; }
//       }
//       if (part == 'tits') {
//         if (description.titsConditionsMet(data) == false) { return; }
//       }
//
//       if (await CentralScrutinizer.meetsRequirements(description.requires, context)) {
//         return description;
//       }
//     })
//   ));
//
//   if (valid.length == 0) {
//     throw `Cannot find an injury description for (${damageType},${part})`;
//   }
//
//   return Random.from(valid);
// }
//
// validForBodyInjury(damageType, data) {
//   if (this.type != 'body-injury') { return false; }
//
//   if (damageType == 'pierce') {
//     if (this.damageType != 'pierce') { return false; }
//     if (this.level != data.body.pierceLevel) { return false; }
//   }
//
//   return true;
// }
//
// validForHeadInjury(damageType, data) {
//   if (this.type != 'head-injury') { return false; }
//
//   if (damageType == 'cut') {
//     if (this.damageType != 'cut') { return false; }
//     if (this.level != data.mouth.cutLevel) { return false; }
//   }
//
//   return true;
// }
//
// validForAnusInjury(damageType, data) {
//   if (this.type != 'anus-injury') { return false; }
//
//   if (damageType == 'smash') {
//     if (this.damageType != 'smash') { return false; }
//     if (this.level != data.anus.smashLevel) { return false; }
//     if (this.shape != data.anus.smashShape) { return false; }
//   }
//
//   return true;
// }
//
// validForCockInjury(damageType, data) {
//   if (this.type != 'cock-injury') { return false; }
//
//   if (damageType == 'blight') {
//     if (this.damageType != 'blight') { return false; }
//     if (this.level != data.cock.blightLevel) { return false; }
//     if (this.place == 'balls' && data.cock.blightPlace != 'balls') { return false; }
//     if (this.place != 'balls' && data.cock.blightPlace == 'balls') { return false; }
//   }
//   if (damageType == 'burn') {
//     if (this.damageType != 'burn') { return false; }
//     if (this.level != data.cock.burnLevel) { return false; }
//     if (this.place == 'balls' && data.cock.blightPlace != 'balls') { return false; }
//     if (this.place != 'balls' && data.cock.blightPlace == 'balls') { return false; }
//   }
//   if (damageType == 'smash') {
//     if (this.damageType != 'smash') { return false; }
//     if (this.level != data.cock.smashLevel) { return false; }
//   }
//
//   return true;
// }
//
// // Pussy injuries need to check both damage type and damage level
// validForPussyInjury(damageType, data) {
//   if (this.type != 'pussy-injury') { return false; }
//
//   if (damageType == 'blight') {
//     if (this.damageType != 'blight') { return false; }
//     if (this.level != data.pussy.blightLevel) { return false; }
//   }
//   if (damageType == 'burn') {
//     if (this.damageType != 'burn') { return false; }
//     if (this.level != data.pussy.burnLevel) { return false; }
//   }
//   if (damageType == 'smash') {
//     if (this.damageType != 'smash') { return false; }
//     if (this.level != data.pussy.smashLevel) { return false; }
//   }
//
//   return true;
// }
//
// // Tit injuries need to check damage type, damage level, and damage place.
// validForTitsInjury(damageType, data) {
//   if (this.type != 'tit-injury') { return false; }
//
//   if (damageType == 'blight') {
//     if (this.damageType != 'blight') { return false; }
//     if (this.level != data.tits.blightLevel) { return false; }
//     if (!this.placeMatches(data.tits.blightPlace)) { return false; }
//   }
//   if (damageType == 'burn') {
//     if (this.damageType != 'burn') { return false; }
//     if (this.level != data.tits.burnLevel) { return false; }
//     if (!this.placeMatches(data.tits.burnPlace)) { return false; }
//   }
//   if (damageType == 'smash') {
//     if (this.damageType != 'smash') { return false; }
//     if (this.level != data.tits.smashLevel) { return false; }
//     if (!this.placeMatches(data.tits.smashPlace)) { return false; }
//   }
//
//   return true;
// }
//
// // The injury place will usually be left, right, or all. Descriptions for
// // left work for right as well, so really we only care if a description is
// // for 'all' the described injury also needs to be 'all'. If the place isn't
// // set that means it will work equally well for left, right, or all injuries.
// placeMatches(currentPlace) {
//   if (this.place == null) { return true; }
//   return (currentPlace == 'all') ? (this.place == 'all') : (this.place != 'all')
// }
