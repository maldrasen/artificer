Weaver.CockLoom = (function() {

  // Replaces token placeholders in the form of:
  //   {{actor::cock.big}}
  //
  function findValue(subject, token, context) {
    if (context.get(subject) == null) { return Weaver.error(`Subject(${subject}) not in context`); }

    let body = context.get(subject).body;
    let cock = context.get(subject).cock;

    if (token == "cock.big") { return size(cock); }
    if (token == "cock.aBig") { return EnglishUtility.a_an(size(cock)); }
    if (token == "cock.count") { return EnglishUtility.numberInEnglish(cock.count); }
    if (token == "cock.cock") { return cockWord(cock,false); }
    if (token == "cock.cocks") { return cockWord(cock,true); }
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
    if (token == "cock.huge(knot)") { return hugeKnot(cock); }
    if (token == "cock.aHuge(knot)") { return EnglishUtility.a_an(hugeKnot(cock)); }
    if (token == "cock.apple(knot)") { return appleKnot(cock); }
    if (token == "cock.anApple(knot)") { return EnglishUtility.a_an(appleKnot(cock)); }
    if (token == "cock.furrySheath") { return furrySheath(cock); }

    return Weaver.error(`Bad tits token(${token})`);
  }

  function lengthInches(cock, plural) { return EnglishUtility.inchesInEnglish(cock.convertedLength, plural); }
  function widthInches(cock, plural) { return EnglishUtility.inchesInEnglish(cock.convertedWidth, plural); }
  function knotWidthInches(cock, plural) { return EnglishUtility.inchesInEnglish(cock.convertedKnotWidth, plural); }
  function ridgeHeightInches(cock, plural) { return EnglishUtility.inchesInEnglish(cock.convertedRidgeHeight, plural); }
  function appleKnot(cock) { return EnglishUtility.roundWidthComparator(cock.convertedKnotWidth); }

  // Generates a phrase like:
  //    twelve inches long and 2 inches wide
  //    twelve inch long and 2 inch thick
  function bothInches(cock, plural) {
    let length = lengthInches(cock,plural);
    let width = widthInches(cock,plural);
    return `${length} long and ${width} {{wide}}`;
  }

  function size(cock) {
    return Random.from({
      small:   ['small','small','small','little','cute little'],
      average: ['average sized','rather average','nice sized','well proportioned'],
      big:     ['large','fat','thick','big','larger than average','nice big','big beautiful'],
      huge:    ['huge','very large','very thick','very big','huge fat'],
      monster: ['massive','massively huge','monstrous','monstrously huge','huge fucking'],
    }[cock.currentSizeClass]);
  }

  function cockWord(cock,plural) {
    let map;
    if (cock.shape == 'normal') { map = { cock:4, dick:1 }; }
    if (cock.shape == 'horse')  { map = { cock:6, dick:2, horsecock:3, horse_dick:1, horse_shaped_cock:1, equine_cock:1, flared_cock:1, flared_dick:1 }; }
    if (cock.shape == 'dog')    { map = { cock:6, dick:2, dogcock:3, canine_shaped_cock:1, canine_cock:1, knotted_cock:1, knotted_dick:1 }; }
    if (cock.shape == 'snake')  { map = { cock:6, dick:2, snakecock:3, nagacock:2, reptilian_cock:1, tapered_cock:1, tapered_dick:1 }; }
    if (cock.shape == 'dragon') { map = { cock:6, dick:2, dragoncock:3, dragon_dick:1, draconic_cock:2, ridged_cock:1, ridged_dick:1 }; }

    let word = Random.fromFrequencyMap(map).replace(/_/,' ');

    return plural ? `${word}s` : word;
  }

  function hugeKnot(cock) {
    let width = cock.convertedKnotWidth;
    if (width < 2) { return Random.from(['sizable','fat','thick','plump','bulbous']); }
    if (width < 3) { return Random.from(['huge','very large','very thick','bulbous']); }
    if (width < 4) { return Random.from(['massive','massively huge','massively thick','incredibly thick']); }
    if (width < 5) { return Random.from(['monstrous','monstrously huge','monstrously thick','fucking huge','unbelievably thick']); }
    if (width < 6) { return Random.from(['gigantic','giant','immense','fucking gigantic','pussy destroying','cunt ripping']); }
    return Random.from(['titanic','colossal','gargantuan','tremendously thick','pelvis splitting','pelvis shattering','massively titanic']);
  }

  function furrySheath(cock) {
    let furry;
    if (cock.sheath == 'skin') {   furry = Random.from(['leathery','leathery','leathery','hot leathery']); }
    if (cock.sheath == 'scales') { furry = Random.from(['scaly','scaled']); }
    if (cock.sheath == 'fur') {    furry = Random.from(['furry','furry','fuzzy','soft furry']); }
    return `${furry} {{sheath}}`;
  }

  return { findValue };

})();
