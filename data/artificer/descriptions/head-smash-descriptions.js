// async function describeSmash(injury, details)  {
//   let desc = smashPartOne(injury.level);
//
//   if (details.missingTeeth == 1) { desc += `It looks like {{C::gender.he}}'s missing a tooth as well.` }
//   if (details.missingTeeth == 2) { desc += `It looks like {{C::gender.he}} may be missing a couple of teeth as well.` }
//   if (details.missingTeeth == 3) { desc += `It looks like {{C::gender.he}} may be missing a few teeth as well.` }
//   if (details.missingTeeth > 3 || details.missingTeeth <= 6) {
//     desc += `It looks like {{C::gender.he}} may be missing some teeth too, at least ${EnglishUtility.numberInEnglish(details.missingTeeth)} from the looks of it.`
//   }
//   if (details.missingTeeth > 6) { desc += `It looks like a significant number of teeth have been knocked out of {{C::gender.his}} head too.` }
//
//   return desc;
// }
//
// function smashPartOne(level) {
//   if (level == 1) { return `{{C::gender.He}} has a black eye, badly swollen from some recent impact there.` }
//
//   if (level < 3) { return `{{C::gender.He}}'s looking pretty beat up. {{C::gender.His}} eye is swollen and
//       one of {{C::gender.his}} lips has split open.` }
//
//   if (level < 5) { return `{{C::gender.He}} looks significantly beaten up. One of {{C::gender.his}} has
//       completely swollen shut and {{C::gender.he}} has a split lip.` }
//
//   if (level < 7) { return `{{C::gender.His}} face has been badly beaten. Both of {{C::gender.his}} eyes have
//       completely swollen shut and {{C::gender.he}} has a split lip.`}
//
//   if (level < 9) { return `{{C::gender.His}} face has been severely beaten. {{C::gender.His}} nose is
//       probably broken, both of {{C::gender.his}} eyes have completely swollen shut, and {{C::gender.his}} lips have
//       split open in several places.` }
//
//   return `{{C::gender.His}} face has been savagly beaten. {{C::gender.His}} nose is clearly broken, both of
//     {{C::gender.his}} eyes have completely swollen shut, and {{C::gender.his}} lips have completely ripped apart.`;
// }
