
// Replaces template tokens in the form: {{actor::body.token}}
Weaver.registerLoom('actor', /^body/, (subject, token, context) => {
  if (context.get(subject) == null) { return Weaver.error(`Subject(${subject}) not in context`); }

  let body = context.get(subject).body;

  if (token == "body.5'10")              { return heightMeasurement(body.height); }
  if (token == "body.fiveFootTenInch")   { return englishHeightMeasurement(body.height, false, false); }
  if (token == "body.fiveFootTenInches") { return englishHeightMeasurement(body.height, false, true);  }
  if (token == "body.fiveFeetTenInches") { return englishHeightMeasurement(body.height, true,  true);  }
  if (token == "body.furColor")          { return furColorWord(body); }
  if (token == "body.skinColor")         { return skinColorWord(body); }
  if (token == "body.scaleColor")        { return scaleColorWord(body); }
  if (token == "body.eyeColor")          { return eyeColorWord(body); }
  if (token == "body.hairColor")         { return hairColorWord(body); }
  if (token == "body.fiftyPound")        { return weightMeasurement(body, false); }
  if (token == "body.fiftyPounds")       { return weightMeasurement(body, true); }
  if (token == "body.ramHorns")          { return hornShape(body,true); }
  if (token == "body.nagaFeet")          { return englishHeightMeasurementNoInches(body.height*3, true); }

  return Weaver.error(`Bad body token(${token})`);
});

function heightMeasurement(height) {
  if (Settings.metric()) { return `${Math.round(height/10)} cm` }

  let inches = Math.round(ConversionUtility.milliToInches(height));
  let high = Math.floor(inches / 12);
  let low = Math.floor(inches % 12);
  return `${high}'${low}"`
}

// Body normally doesn't have a weight attribute. This weight property is
// added when we build the context to avoid the asynchronous getWeight()
// function. Also nested ternaries: ( •_•)>⌐□-□ (⌐□_□)
function weightMeasurement(body, plural) {
  return (Settings.metric()) ?
    `${EnglishUtility.numberInEnglish(Math.round(body.weight/1000))} ${plural ? 'kilograms' : 'kilogram'}`:
    `${EnglishUtility.numberInEnglish(ConversionUtility.gramToPound(body.weight))} ${plural ? 'pounds' : 'pound'}`;
}

// When in metric mode inchPlural controls the plural of centimeters.
function englishHeightMeasurement(height, footPlural, inchPlural) {
  if (Settings.metric()) { return `${EnglishUtility.numberInEnglish(Math.round(height/10))} ${inchPlural ? 'centimeters' : 'centimeter'}` }

  let foot = footPlural ? "feet" : "foot";
  let inches = Math.round(ConversionUtility.milliToInches(height));
  let high = EnglishUtility.numberInEnglish(Math.floor(inches / 12));
  let low = EnglishUtility.numberInEnglish(Math.floor(inches % 12));

  return (low == "zero") ? `${high} feet` : `${high} ${foot} ${low} ${inchPlural ? 'inches' : 'inch'}`;
}

// Use meters rather than centimeters because this is for much longer
// measurements than the standard feet/inches.
function englishHeightMeasurementNoInches(height, plural) {
  if (Settings.metric()) { return `${EnglishUtility.numberInEnglish(Math.round(height/1000))} ${plural ? 'meters' : 'meter'}` }

  let inches = Math.round(ConversionUtility.milliToInches(height));
  let feet = EnglishUtility.numberInEnglish(Math.floor(inches / 12));
  return `${feet} ${plural ? "feet" : "foot"}`;
}

function furColorWord(body) {
  let color = body.furColor
  let shade = body.furShade

  if (color == null)    { throw `Body has no fur.`;   }
  if (color == 'brown') { return brownFurWord(shade); }
  if (color == 'red')   { return redFurWord(shade);   }
  if (color == 'white') { return whiteFurWord();      }
  if (color == 'gray')  { return grayFurWord(shade);  }
  if (color == 'black') { return blackFurWord();      }

  // If fur color is not one of the above assume that it's one of the hair
  // colors like blond or light-purple.
  return color.replace(/-/,' ')
}

function brownFurWord(shade) {
  if (shade == 1) { return Random.from(["dark umber","dark bronze","coffee colored","chocolate colored"]); }
  if (shade == 2) { return Random.from(["deep amber","russet brown","bronze","walnut"]); }
  if (shade == 3) { return Random.from(["amber","golden brown","chestnut"]); }
  if (shade == 4) { return Random.from(["light amber","tawny","light golden","pale honey"]); }
  if (shade == 5) { return Random.from(["blond","platinum blond","flaxen"]); }
}

function redFurWord(shade) {
  if (shade == 1) { return Random.from(["mahogany colored","dark red"]); }
  if (shade == 2) { return Random.from(["burgundy","maroon"]); }
  if (shade == 3) { return Random.from(["red","auburn"]); }
  if (shade == 4) { return Random.from(["copper","light ginger"]); }
  if (shade == 5) { return Random.from(["strawberry blond"]); }
}

function grayFurWord(shade) {
  if (shade == 1) { return blackFurWord(); }
  if (shade == 2) { return Random.from(["iron gray","smoke colored","lead gray"]); }
  if (shade == 3) { return Random.from(["gray","stone gray","salt and pepper streaked"]); }
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

  if (color == 'human')  { return humanSkinWord(shade);  }
  if (color == 'red')    { return redSkinWord(shade);    }
  if (color == 'gold')   { return goldSkinWord(shade);   }
  if (color == 'green')  { return greenSkinWord(shade);  }
  if (color == 'blue')   { return blueSkinWord(shade); }
  if (color == 'purple') { return purpleSkinWord(shade); }
  if (color == 'black')  { return blackSkinWord();       }

  return Weaver.error(`Need to describe ${color} as a skin color.`);
}

function humanSkinWord(shade) {
  if (shade == 1) { return Random.from(["ebony","black","dark bronze","dark brown"]); }
  if (shade == 2) { return Random.from(["brown","bronze","golden brown"]); }
  if (shade == 3) { return Random.from(["tan","tanned","light brown","golden"]); }
  if (shade == 4) { return Random.from(["pale","tawny","light pink","flushed"]); }
  if (shade == 5) { return Random.from(["white","alabaster","ivory","porcelain"]); }
}

function redSkinWord(shade) {
  if (shade == 1) { return Random.from(["black","red black"]); }
  if (shade == 2) { return Random.from(["dark red","blood red"]); }
  if (shade == 3) { return Random.from(["red","bright red","ruby red"]); }
  if (shade == 4) { return Random.from(["pink","dusty pink"]); }
  if (shade == 5) { return Random.from(["light pink","bright pink"]); }
}

// Might only be used to describe dragon cocks.
function goldSkinWord(shade) {
  if (shade == 1) { return Random.from(["black bronze"]); }
  if (shade == 2) { return Random.from(["bronze","dark copper"]); }
  if (shade == 3) { return Random.from(["light bronze","copper"]); }
  if (shade == 4) { return Random.from(["gold","golden"]); }
  if (shade == 5) { return Random.from(["brass","white gold"]); }
}

function greenSkinWord(shade) {
  if (shade == 1) { return Random.from(["black","green black"]); }
  if (shade == 2) { return Random.from(["dark green","olive green"]); }
  if (shade == 3) { return Random.from(["emerald green","bright green"]); }
  if (shade == 4) { return Random.from(["tea green","sage green"]); }
  if (shade == 5) { return Random.from(["light green","pale green"]); }
}

function blueSkinWord(shade) {
  if (shade == 1) { return Random.from(["blue black","midnight blue"]); }
  if (shade == 2) { return Random.from(["indigo blue","dark blue"]); }
  if (shade == 3) { return Random.from(["sapphire","royal blue"]); }
  if (shade == 4) { return Random.from(["sky blue","steel blue"]); }
  if (shade == 5) { return Random.from(["white blue","light blue"]); }
}

function purpleSkinWord(shade) {
  if (shade == 1) { return Random.from(["black","purple black"]); }
  if (shade == 2) { return Random.from(["indigo purple"]); }
  if (shade == 3) { return Random.from(["rich violet"]); }
  if (shade == 4) { return Random.from(["amethyst"]); }
  if (shade == 5) { return Random.from(["lavender purple"]); }
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
  if (body.scaleColor == 'gray')   { return Random.from(["ashen","slate"]) }
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

// Rule of thumb for caprians and other horned species. Harder faces have
// longer horns, soft faces have short horns.
function hornShape(body, plural) {
  if (body.hornShape == 'curved-ram') {
    if (body.faceType == 'soft') { return 'small ram horns' }
    if (body.faceType == 'hard') { return 'large curved ram horns' }
    return 'curved ram horns';
  }
  if (body.hornShape == 'curved-back') {
    if (body.faceType == 'soft') { return 'short back facing horns' }
    if (body.faceType == 'hard') { return 'long backswept horns' }
    return 'sharp backswept horns';
  }
  if (body.hornShape == 'forward-cow') {
    if (body.faceType == 'soft') { return 'short forward facing steer horns' }
    if (body.faceType == 'hard') { return 'long forward facing steer horns' }
    return 'sharp forward facing steer horns';
  }
  if (body.hornShape == 'wide-buffalo') {
    if (body.faceType == 'soft') { return 'short thick buffalo horns' }
    if (body.faceType == 'hard') { return 'long and wide buffalo horns' }
    return 'thick buffalo horns';
  }

  return Weaver.error(`Unknown horn shape: ${body.hornShape}`);
}
