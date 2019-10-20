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

    // TODO: Figure out how to add weight back in.
    if (token == "body.fifty-pounds")         { return `fifty pounds`; }

    return Weaver.error(`Bad body token(${token})`);
  }

  function heightMeasurement(height) {
    if (Configuration.metric) { return `${Math.round(height/10)} cm` }

    let inches = Math.round(ConversionUtility.milliToInches(height));
    let high = Math.floor(inches / 12);
    let low = Math.floor(inches % 12);
    return `${high}'${low}"`
  }

  function englishHeightMeasurement(height, plural) {
    if (Configuration.metric) { return `${Math.round(height/10)} centimeters` }

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
    if (body.scaleColor == 'red') { return Random.from(["blood red","crimson","garnet","ruby"]) }
    if (body.scaleColor == 'gold') { return Random.from(["golden"]) }
    if (body.scaleColor == 'green') { return Random.from(["emerald","jade"]) }
    if (body.scaleColor == 'blue') { return Random.from(["sapphire"]) }
    if (body.scaleColor == 'purple') { return Random.from(["amethyst","violet"]) }
    if (body.scaleColor == 'black') { return Random.from(["obsidian","onyx"]) }
    if (body.scaleColor == 'gray') { return Random.from(["ashen","slate","stone"]) }
    if (body.scaleColor == 'white') { return Random.from(["alabaster"]) }

    return Weaver.error(`Need to describe ${color} as a scale color.`);
  }

  return { findValue };

})();