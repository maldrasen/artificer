// Replaces template tokens in the form: {{actor::cock.token}}
Weaver.registerLoom('actor', /^cock/, (subject, token, context) => {
  if (context.get(subject) == null) { return Weaver.error(`Subject(${subject}) not in context`); }

  let body = context.get(subject).body;
  let cock = context.get(subject).cock;

  if (token == "cock.count") { return EnglishUtility.numberInEnglish(cock.count); }
  if (token == "cock.both") { return (cock.count == 2) ? 'both' : 'all'; }

  if (token == "cock.sixInch") { return lengthInches(cock,false); }
  if (token == "cock.sixInches") { return lengthInches(cock,true); }
  if (token == "cock.twoInch") { return widthInches(cock,false); }
  if (token == "cock.twoInches") { return widthInches(cock,true); }
  if (token == "cock.inchLongAndWide") { return bothInches(cock,false); }
  if (token == "cock.inchesLongAndWide") { return bothInches(cock,true); }

  if (token == "cock.twoInch(knot)") { return knotWidthInches(cock,false); }
  if (token == "cock.twoInches(knot)") { return knotWidthInches(cock,true); }
  if (token == "cock.twoInch(ridge)") { return ridgeHeightInches(cock,false); }
  if (token == "cock.twoInches(ridge)") { return ridgeHeightInches(cock,true); }
  if (token == "cock.twoInch(spine)") { return spineHeightInches(cock,false); }
  if (token == "cock.twoInches(spine)") { return spineHeightInches(cock,true); }
  if (token == "cock.twoInch(knob)") { return knobHeightInches(cock,false); }
  if (token == "cock.twoInches(knob)") { return knobHeightInches(cock,true); }

  if (token == "cock.huge(knot)") { return hugeKnot(cock); }
  if (token == "cock.aHuge(knot)") { return EnglishUtility.a_an(hugeKnot(cock)); }
  if (token == "cock.apple(knot)") { return appleKnot(cock); }
  if (token == "cock.anApple(knot)") { return EnglishUtility.a_an(appleKnot(cock)); }

  if (token == "cock.acorn(knob)") { return acornKnob(cock); }
  if (token == "cock.acorns(knob)") { return acornsKnob(cock); }
  if (token == "cock.anAcorn(knob)") { return EnglishUtility.a_an(acornKnob(cock)); }

  if (token == "cock.furrySheath") { return furrySheath(cock); }
  if (token == "cock.theGlansOfHisCock") { return theGlansOfHisCock(subject,cock); }

  return Weaver.error(`Bad cock token(${token})`);
});

function lengthInches(cock, plural) { return EnglishUtility.lengthInEnglish(cock.convertedLength, plural); }
function widthInches(cock, plural) { return EnglishUtility.lengthInEnglish(cock.convertedWidth, plural); }
function knotWidthInches(cock, plural) { return EnglishUtility.lengthInEnglish(cock.convertedKnotWidth, plural); }
function ridgeHeightInches(cock, plural) { return EnglishUtility.lengthInEnglish(cock.convertedRidgeHeight, plural); }
function spineHeightInches(cock, plural) { return EnglishUtility.lengthInEnglish(cock.convertedSpineHeight, plural); }
function knobHeightInches(cock, plural) { return EnglishUtility.lengthInEnglish(cock.convertedKnobHeight, plural); }
function appleKnot(cock) { return EnglishUtility.roundWidthComparator(cock.knotWidth); }
function acornKnob(cock) { return EnglishUtility.roundWidthComparator(cock.knobHeight); }
function acornsKnob(cock) { return EnglishUtility.pluralRoundWidthComparator(cock.spineHeight); }

// Generates a phrase like:
//    twelve inches long and 2 inches wide
//    twelve inch long and 2 inch thick
function bothInches(cock, plural) {
  let length = lengthInches(cock,plural);
  let width = widthInches(cock,plural);
  return `${length} long and ${width} {{wide}}`;
}

function cockWord(cock,plural) {
  let map;
  if (cock.shape == 'normal') { map = { cock:4, dick:1 }; }
  if (cock.shape == 'horse')  { map = { cock:6, dick:2, horsecock:3, horse_dick:1, horse_shaped_cock:1, equine_cock:1, flared_cock:1, flared_dick:1 }; }
  if (cock.shape == 'dog')    { map = { cock:6, dick:2, dogcock:3, canine_shaped_cock:1, canine_cock:1, knotted_cock:1, knotted_dick:1 }; }
  if (cock.shape == 'snake')  { map = { cock:6, dick:2, snakecock:3, nagacock:2, reptilian_cock:1, tapered_cock:1, tapered_dick:1 }; }
  if (cock.shape == 'dragon') { map = { cock:6, dick:2, dragoncock:3, dragon_dick:1, draconic_cock:2, ridged_cock:1, ridged_dick:1 }; }

  let word = Random.fromFrequencyMap(map).replace(/_/g,' ');

  return plural ? `${word}s` : word;
}

function hugeKnot(cock) {
  let width = cock.knotWidth;
  if (width < 50) { return Random.from(['sizable','fat','thick','plump','bulbous']); }
  if (width < 76) { return Random.from(['huge','very large','very thick','bulbous']); }
  if (width < 102) { return Random.from(['massive','massively huge','massively thick','incredibly thick']); }
  if (width < 127) { return Random.from(['monstrous','monstrously huge','monstrously thick','fucking huge','unbelievably thick']); }
  if (width < 152) { return Random.from(['gigantic','giant','immense','fucking gigantic','pussy destroying','cunt ripping']); }
  return Random.from(['titanic','colossal','gargantuan','tremendously thick','pelvis splitting','pelvis shattering','massively titanic']);
}

function furrySheath(cock) {
  let furry;
  if (cock.sheath == 'skin') {   furry = Random.from(['leathery','leathery','leathery','thick','rough']); }
  if (cock.sheath == 'scales') { furry = Random.from(['scaly','scaled']); }
  if (cock.sheath == 'fur') {    furry = Random.from(['furry','furry','fuzzy','soft furry']); }
  return `${furry} {{sheath}}`;
}

// The gender loom doesn't work with the player because of complicated
// situations like I'm / he's. If this happens too often though I'll need to
// figure out some way to get it into a token.
function theGlansOfHisCock(subject,cock) {
  let im = (subject == 'P') ? `I'm` : `{{${subject}::gender.he}}'s`;
  let my = (subject == 'P') ? `my` : `{{${subject}::gender.his}}`;

  if (cock.shape == 'horse') {
    return Random.from([
      `the wide flair of ${my} horsecock`,
      `the sensitive rim around the flair of ${my} horsecock`,
    ]);
  }

  return Random.from([
    `the glans of ${my} cock`,
    `the glans where ${im} most sensitive`,
    `the sensitive ridge around the head of ${my} cock`,
    `the sensitive crown of ${my} cock`,
  ]);
}
