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
