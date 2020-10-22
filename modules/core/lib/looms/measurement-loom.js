// Measurement Utility Tokens:
//   These utility tokens will get a measurement in english, in metric or
//   american depending on what the user preference is currently set to.
//
// TODO: Add yard, and yards if they're needed.
Weaver.registerLoom('utility', /^(inch|foot|feet|yard|yards)/, (utility, argument, context) => {
  if (utility == 'foot')   { return feet(argument,false) }
  if (utility == 'feet')   { return feet(argument,true) }
  if (utility == 'inch')   { return inches(argument,false); }
  if (utility == 'inches') { return inches(argument,true);  }

  return Weaver.error(`Bad random token(${utility})`);
});

// Turns a token like {{inches|4}} into "four inches" or "ten centimeters" or
// common phrases like "a couple of inches" into their metric equivalents.
function inches(value, plural) {
  const cm = plural ? 'centimeters' : 'centimeter';
  const inch = plural ? 'inches' : 'inch';

  if (value == 'a-couple-of') { return Settings.metric() ? `five ${cm}` : `a couple of inches` }
  if (value == 'a-few') { return Settings.metric() ? `eight ${cm}` : `a few inches` }
  if (value == 1) { return Settings.metric() ? `two ${cm}` : 'an inch'; }

  return Settings.metric() ?
    `${EnglishUtility.numberInEnglish(Math.round(value * 2.54))} ${cm}` :
    `${EnglishUtility.numberInEnglish(value)} ${inch}`;
}

// Plural units are weird. I think the pluralness of a unit depends on if
// the unit comes before or after the thing it's describing? But with feet
// or meters the plural may change or not. And to further complicate things
// the plurality also changes if the article 'a' should be included or not.
//
//   Plural: "This dick is {{feet|3}} long" =>
//      "This dick is (a meter) long"
//      "This disk is (three feet) long"
//
//   Not Plural: "He has a {{foot|3}} long dick" =>
//      "He has a (meter) long dick"
//      "He has a (three foot) long dick."
//
function feet(value, plural) {
  const m = plural ? 'meters' : 'meter';
  const ft = plural ? 'feet' : 'foot';

  // Big dicks and nesting ternaries. Like a boss.
  if (value == 3) { return (Settings.metric()) ?
    (plural ? `a meter`    : `meter`):
    (plural ? `three feet` : `three foot`);
  }

  throw "Actually, I haven't implemented this yet for any length other than 3 feet."
}
