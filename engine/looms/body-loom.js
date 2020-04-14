Weaver.BodyLoom = (function() {

  // Replaces token placeholders in the form of:
  //   {{actor::body.token}}
  //
  function findValue(subject, token, context) {
    if (context.get(subject) == null) { return Weaver.error(`Subject(${subject}) not in context`); }

    let body = context.get(subject).body;

    if (token == "body.5'10")              { return heightMeasurement(body.height); }
    if (token == "body.fiveFootTenInches") { return englishHeightMeasurement(body.height, false); }
    if (token == "body.fiveFeetTenInches") { return englishHeightMeasurement(body.height, true); }
    if (token == "body.furColor")          { return furColorWord(body); }
    if (token == "body.skinColor")         { return skinColorWord(body); }
    if (token == "body.scaleColor")        { return scaleColorWord(body); }
    if (token == "body.eyeColor")          { return eyeColorWord(body); }
    if (token == "body.hairColor")         { return hairColorWord(body); }
    if (token == "body.fiftyPound")        { return weightMeasurement(body, false); }
    if (token == "body.fiftyPounds")       { return weightMeasurement(body, true); }

    return Weaver.error(`Bad body token(${token})`);
  }

  function heightMeasurement(height) {
    if (Settings.Metric) { return `${Math.round(height/10)} cm` }

    let inches = Math.round(ConversionUtility.milliToInches(height));
    let high = Math.floor(inches / 12);
    let low = Math.floor(inches % 12);
    return `${high}'${low}"`
  }

  // Body normally doesn't have a weight attribute. This weight property is
  // added when we build the context to avoid the asynchronous getWeight()
  // function. Also nested ternaries: ( •_•)>⌐□-□ (⌐□_□)
  function weightMeasurement(body, plural) {
    return (Settings.Metric) ?
      `${Math.round(body.weight/1000)} ${plural ? 'kilograms' : 'kilogram'}`:
      `${ConversionUtility.gramToPound(body.weight)} ${plural ? 'pounds' : 'pound'}`;
  }

  // These height measurement functions only kind of work for metric
  // measurements. The whole sentence structure really should change when
  // giving a metric measurement. Giving a height should be done in it's own
  // function per sentence rather than a replacement token, and these tokens
  // should be used sparingly if at all.
  function englishHeightMeasurement(height, plural) {
    if (Settings.Metric) { return `${Math.round(height/10)} centimeters` }

    let foot = plural ? "feet" : "foot";
    let inches = Math.round(ConversionUtility.milliToInches(height));
    let high = EnglishUtility.numberInEnglish(Math.floor(inches / 12));
    let low = EnglishUtility.numberInEnglish(Math.floor(inches % 12));

    return (low == "zero") ? `${high} feet` : `${high} ${foot} ${low} inches`;
  }

  function furColorWord(body) {
    let color = body.furColor
    let shade = body.furShade

    if (color == 'brown') { return brownFurWord(shade); }
    if (color == 'red')   { return redFurWord(shade);   }
    if (color == 'white') { return whiteFurWord();      }
    if (color == 'gray')  { return grayFurWord(shade);  }
    if (color == 'black') { return blackFurWord();      }

    return Weaver.error(`Need to describe ${color} as a fur color.`);
  }

  function brownFurWord(shade) {
    if (shade == 1) { return Random.from(["dark umber","dark bronze","coffee","chocolate"]); }
    if (shade == 2) { return Random.from(["deep amber","russet brown","bronze","walnut"]); }
    if (shade == 3) { return Random.from(["amber","golden brown","chestnut"]); }
    if (shade == 4) { return Random.from(["light amber","tawny","light golden","pale honey"]); }
    if (shade == 5) { return Random.from(["blond","platinum blond","flaxen"]); }
  }

  function redFurWord(shade) {
    if (shade == 1) { return Random.from(["mahogany","dark red"]); }
    if (shade == 2) { return Random.from(["burgundy","maroon"]); }
    if (shade == 3) { return Random.from(["red","auburn"]); }
    if (shade == 4) { return Random.from(["copper","light ginger"]); }
    if (shade == 5) { return Random.from(["strawberry blond"]); }
  }

  function grayFurWord(shade) {
    if (shade == 1) { return blackFurWord(); }
    if (shade == 2) { return Random.from(["iron gray","smoke","lead gray"]); }
    if (shade == 3) { return Random.from(["gray","stone gray","salt and pepper"]); }
    if (shade == 4) { return Random.from(["ash gray","light gray"]); }
    if (shade == 5) { return whiteFurWord(); }
  }

  function whiteFurWord() {
    return Random.from(["white","bright white","silver"])
  }

  function blackFurWord() {
    return Random.from(["black","jet black","sable"])
  }

  function skinColorWord(body) {
    let color = body.skinColor
    let shade = body.skinShade

    if (color == 'human') { return humanSkinWord(shade); }
    if (color == 'red')   { return redSkinWord(shade);   }
    if (color == 'black') { return blackSkinWord();      }

    return Weaver.error(`Need to describe ${color} as a skin color.`);
  }

  function humanSkinWord(shade) {
    if (shade == 1) { return Random.from(["ebony","deep mahogany","dark umber","dark bronze","coffee"]); }
    if (shade == 2) { return Random.from(["golden brown","russet brown","bronze","deep amber","copper"]); }
    if (shade == 3) { return Random.from(["golden","copper","amber","light brown","honey"]); }
    if (shade == 4) { return Random.from(["light amber","pale","tawny","light golden","pale honey"]); }
    if (shade == 5) { return Random.from(["very pale","alabaster","ivory","porcelain"]); }
  }

  function redSkinWord(shade) {
    if (shade == 1) { return Random.from(["deep crimson","dark red"]); }
    if (shade == 2) { return Random.from(["garnet","maroon","blood red"]); }
    if (shade == 3) { return Random.from(["red","bright red","ruby red"]); }
    if (shade == 4) { return Random.from(["pink","dusty pink"]); }
    if (shade == 5) { return Random.from(["light pink","bright pink"]); }
  }

  function blackSkinWord() {
    return Random.from(["black","jet black","blue black","midnight black"])
  }

  function scaleColorWord(body) {
    if (body.scaleColor == 'red')    { return Random.from(["blood red","crimson","garnet","ruby"]) }
    if (body.scaleColor == 'gold')   { return Random.from(["golden"]) }
    if (body.scaleColor == 'green')  { return Random.from(["emerald","jade"]) }
    if (body.scaleColor == 'blue')   { return Random.from(["sapphire"]) }
    if (body.scaleColor == 'purple') { return Random.from(["amethyst","violet"]) }
    if (body.scaleColor == 'black')  { return Random.from(["obsidian","onyx"]) }
    if (body.scaleColor == 'gray')   { return Random.from(["ashen","slate","stone"]) }
    if (body.scaleColor == 'white')  { return Random.from(["alabaster"]) }
    return Weaver.error(`Need to describe ${body.scaleColor} as a scale color.`);
  }

  function eyeColorWord(body) {
    if (body.eyeColor == 'pink')   { return Random.from(['pink','bright pink']); }
    if (body.eyeColor == 'red')    { return Random.from(['red','garnet','ruby']); }
    if (body.eyeColor == 'amber')  { return Random.from(['amber','bronze']); }
    if (body.eyeColor == 'gold')   { return Random.from(['golden','bright gold']); }
    if (body.eyeColor == 'brown')  { return Random.from(['brown','dark brown','deep brown']); }
    if (body.eyeColor == 'green')  { return Random.from(['green','emerald','jade']); }
    if (body.eyeColor == 'hazel')  { return Random.from(['hazel']); }
    if (body.eyeColor == 'blue')   { return Random.from(['blue','sapphire blue']); }
    if (body.eyeColor == 'purple') { return Random.from(['purple','deep purple','amethyst']); }
    if (body.eyeColor == 'gray')   { return Random.from(['gray','cool gray','ashen']); }
    if (body.eyeColor == 'black')  { return Random.from(['black','onyx']); }
    return Weaver.error(`Need to describe ${body.eyeColor} as an eye color.`);
  }

  // There are a lot of hair colors, just use the code as the hair color word.
  // Some hair colors like dark-blond are hyphenated, so replace dashes with
  // spaces.
  function hairColorWord(body) {
    return (body.hairColor && body.hairColor != "") ? body.hairColor.replace(/-/,' ') : Weaver.error(`Body.hairColor is blank.`);
  }

  return { findValue };

})();
