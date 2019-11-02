Weaver.BallsLoom = (function() {

  // Replaces token placeholders in the form of:
  //   {{actor::balls.big}}
  //
  function findValue(subject, token, context) {
    if (context.get(subject) == null) { return Weaver.error(`Subject(${subject}) not in context`); }

    let body = context.get(subject).body;
    let cock = context.get(subject).cock;

    if (token == "balls.big")           { return size(cock); }
    if (token == "balls.aBig")          { return EnglishUtility.a_an(size(cock)); }
    if (token == "balls.apple")         { return scrotumWidthComparator(cock); }
    if (token == "balls.anApple")       { return EnglishUtility.a_an(scrotumWidthComparator(cock)); }
    if (token == "balls.fourInch")      { return scrotumWidthInches(cock,false); }
    if (token == "balls.fourInches")    { return scrotumWidthInches(cock,true); }
    if (token == "balls.egg")           { return testicleWidthComparator(cock); }
    if (token == "balls.anEgg")         { return EnglishUtility.a_an(testicleWidthComparator(cock)); }
    if (token == "balls.twoInch")       { return testicleWidthInches(cock,false); }
    if (token == "balls.twoInches")     { return testicleWidthInches(cock,true); }
    if (token == "balls.furryBallsack") { return furryBallsack(cock); }

    return Weaver.error(`Bad balls token(${token})`);
  }

  function scrotumWidthComparator(cock) { return EnglishUtility.roundWidthComparator(cock.convertedScrotumWidth); }
  function testicleWidthComparator(cock) { return EnglishUtility.roundWidthComparator(cock.convertedTesticleWidth); }
  function scrotumWidthInches(cock, plural) { return EnglishUtility.inchesInEnglish(cock.convertedScrotumWidth, plural); }
  function testicleWidthInches(cock, plural) { return EnglishUtility.inchesInEnglish(cock.convertedTesticleWidth, plural); }


  function size(cock) {
    return 'big'
    // return Random.from({
    //   small:   ['small','small','small','short','stubby'],
    //   average: ['long','lengthy','nice sized','well proportioned'],
    //   big:     ['large','fat','thick','big','larger than average','nice big','big beautiful'],
    //   huge:    ['huge','very large','very thick','very big','huge fat'],
    //   monster: ['massive','massively huge','monstrous','monstrously huge','huge fucking'],
    // }[cock.currentBallsSizeClass]);
  }

  function furryBallsack(cock) {
    let furry;
    if (cock.sheath == 'skin') {   furry = Random.from(['leathery','leathery','leathery','thick','rough']); }
    if (cock.sheath == 'scales') { furry = Random.from(['scaly','scaled']); }
    if (cock.sheath == 'fur') {    furry = Random.from(['furry','furry','fuzzy','soft furry']); }
    return `${furry} {{ballsack}}`;
  }

  return { findValue };

})();
