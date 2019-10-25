global.EnglishUtility = {

  // Prepends an a/an to the beginning of the string if it starts with a vowel.
  a_an(string) {
    return string.match(/^[aeiou]/i) ? `an ${string}` : `a ${string}`;
  },

  possessive(name) {
    return (name.match(/(.)$/)[1] == 's') ? `${name}'` : `${name}'s`;
  },

  // Prepends an A/An to the beginning of the string if it starts with a vowel.
  A_An(string) {
    return string.match(/^[aeiou]/i) ? `An ${string}` : `A ${string}`;
  },

  // For phrases where there you might be acting on 'both things', or on 'all things'
  all_both(number) {
    if (number <= 1) { return Weaver.error(`English.all_both(${number}) must be greater than 1`); }
    return (number > 2) ? 'both' : 'all';
  },

  // Returns a number from one to twenty one in English. If an or option is
  // specified then that is returned for "one" in cases where "a" or "an" would
  // sound better in a phrase.
  numberInEnglish(number, options)  {
    if (number == 1 && options && options.or) { return options.or; }
    if (number == 0 ) { return "zero" }
    if (number == 1 ) { return "one" }
    if (number == 2 ) { return "two" }
    if (number == 3 ) { return "three" }
    if (number == 4 ) { return "four" }
    if (number == 5 ) { return "five" }
    if (number == 6 ) { return "six" }
    if (number == 7 ) { return "seven" }
    if (number == 8 ) { return "eight" }
    if (number == 9 ) { return "nine" }
    if (number == 10) { return "ten" }
    if (number == 11) { return "eleven" }
    if (number == 12) { return "twelve" }
    if (number == 13) { return "thirteen" }
    if (number == 14) { return "fourteen" }
    if (number == 15) { return "fifteen" }
    if (number == 16) { return "sixteen" }
    if (number == 17) { return "seventeen" }
    if (number == 18) { return "eighteen" }
    if (number == 19) { return "nineteen" }
    if (number == 20) { return "twenty" }
    if (number == 21) { return "twenty one" }
    return Weaver.error(`English.numberInEnglish(${number}) needs more numbers!`)
  },

  // Same as numberInEnglish(), but upper case.
  NumberInEnglish(number, options) {
    return TextUtility.titlecase(EnglishUtility.numberInEnglish(number, options));
  },

  // This is a rather ugly and complex function that takes a measurement and
  // returns a phrase describing that measurement in inches or feet.
  //
  //   Number: The number in inches
  //   Plural: Use feet and inches, or foot and inch.
  //
  // This is used mostly by the CockDescriber, but I could see it being used
  // elsewhere too. The measurements are good up until about three feet in
  // length. At that point the function only returns the number of inches
  // it's given.

  inchesInEnglish(value, plural) {
    let number = Math.floor(value);
    let part = Math.floor((value-number)*10)

    let inch = (plural && number != 1) ? 'inches' : 'inch'
    let foot = (plural && number != 12) ? 'feet' : 'foot'

    // Oh shit, why is this here?
    if(part > 6 && inch == 'inch' && plural) { inch = 'inches'; }

    if (number == 0) {
      if (part > 6) { return 'three quarters of an inch'; }
      if (part > 4) { return 'a half an inch'; }
      if (part > 1) { return 'a quarter of an inch'; }
      return "a fraction of an inch";
    }
    if (number < 6) {
      if (part > 6) { return `${EnglishUtility.numberInEnglish(number)} and three quarter ${inch}`; }
      if (part > 4) { return `${EnglishUtility.numberInEnglish(number)} and a half ${inch}`; }
      if (part > 1) { return `${EnglishUtility.numberInEnglish(number)} and a quarter ${inch}`; }
      return `${EnglishUtility.numberInEnglish(number)} ${inch}`;
    }
    if (number < 12) {
      if (part > 4) { return `${EnglishUtility.numberInEnglish(number)} and a half ${inch}`; }
      return `${EnglishUtility.numberInEnglish(number)} ${inch}`;
    }
    if (number == 12 && Random.upTo(2)==0) {
      return "one foot";
    }
    if (number < 18) {
      if (part > 4) { return `${EnglishUtility.numberInEnglish(number)} and a half ${inch}`; }
      return `${EnglishUtility.numberInEnglish(number)} ${inch}`;
    }
    if (number == 18) {
      return Random.from([`eighteen ${inch}`,'a foot and a half']);
    }
    if (21 <= number && number < 24) {
      return `${number} ${inch}`;
    }
    if (number == 24) {
      return Random.from([`${number} ${inch}`, `two ${foot}`]);
    }
    if (29 <= number && number <= 31) {
      return Random.from([`${number} ${inch}`, `two and a half ${foot}`]);
    }
    if (34 <= number && number <= 38) {
      return Random.from([`${number} ${inch}`, `three ${foot}`]);
    }
    return `${number} ${inch}`;
  },

  // Because you sometimes need to compare the size of round things to other
  // things that are round.
  roundWidthComparator(width) {
    if (width < 0.2) { return Random.from(['pea', 'peanut', 'pearl', 'bean']); }
    if (width < 0.5) { return Random.from(['olive', 'acorn', 'cherry', 'grape', 'marble', 'cranberry', 'hazelnut']); }
    if (width < 1)   { return Random.from(['walnut', 'cherry tomato', 'brazil nut']); }
    if (width < 1.5) { return Random.from(['strawberry', 'chicken egg']); }
    if (width < 2)   { return Random.from(['avacado','lemon', 'lime', 'tomato']); }
    if (width < 2.5) { return Random.from(['plum','tomato','peach']); }
    if (width < 3)   { return Random.from(['baseball', 'fist', 'tomato']); }
    if (width < 3.5) { return Random.from(['peach', 'lemon', 'fist', 'doorknob']); }
    if (width < 4)   { return Random.from(['softball','apple','fist', 'potato']); }
    if (width < 5)   { return Random.from(['orange', 'apple', 'onion']); }
    if (width < 6)   { return Random.from(['onion', 'apple', 'bell pepper']); }
    if (width < 7)   { return Random.from(['mango', 'onion', 'grapefruit', 'sweet potato','ostrich egg']); }
    if (width < 8)   { return Random.from(['grapefruit', 'football', 'sweet potato']); }
    if (width < 9)   { return Random.from(['volleyball', 'bowling ball', 'soccer ball']); }
    if (width < 10)  { return Random.from(['basketball', 'cabbage', 'melon', 'eggplant']); }
    if (width < 12)  { return Random.from(['cantaloupe', 'melon', 'coconut', 'squash', 'milk jug']); }
    if (width < 15)  { return Random.from(['head of lettuce', 'coconut', 'decorative gourd']); }
    if (width < 18)  { return Random.from(['pineapple', 'coconut', 'honeydew melon']); }
    if (width < 22)  { return Random.from(['watermelon','pumpkin']); }
    if (width < 30)  { return Random.from(['pumpkin','jackfruit']); }
    return Random.from(['beach ball']);
  },

  // Because you sometimes need to compare the size of round things... in plural!
  // I wish I could think of a better way to do this rather than just copying and
  // editing the list, but plurals like "heads of lettuce" make it tricky.
  pluralRoundWidthComparator(width) {
    if (width < 0.2) { return Random.from(['peas', 'peanuts', 'pearls', 'beans']); }
    if (width < 0.5) { return Random.from(['olives', 'acorns', 'cherries', 'grapes', 'marbles', 'cranberries', 'hazelnuts']); }
    if (width < 1)   { return Random.from(['walnuts', 'cherry tomatoes', 'brazil nuts']); }
    if (width < 1.5) { return Random.from(['strawberries', 'chicken eggs']); }
    if (width < 2)   { return Random.from(['avacados', 'lemons', 'limes', 'tomatoes']); }
    if (width < 2.5) { return Random.from(['plums', 'tomatoes','peaches']); }
    if (width < 3)   { return Random.from(['baseballs', 'fists', 'tomatos']); }
    if (width < 3.5) { return Random.from(['peaches', 'lemons', 'fists', 'doorknobs']); }
    if (width < 4)   { return Random.from(['softballs','apples','fists', 'potatos']); }
    if (width < 5)   { return Random.from(['oranges', 'apples', 'onions']); }
    if (width < 6)   { return Random.from(['onions', 'apples', 'bell peppers']); }
    if (width < 7)   { return Random.from(['mangos', 'onions', 'grapefruits', 'sweet potatoes','ostrich eggs']); }
    if (width < 8)   { return Random.from(['grapefruits', 'footballs', 'sweet potatos']); }
    if (width < 9)   { return Random.from(['volleyballs', 'bowling balls', 'soccer balls']); }
    if (width < 10)  { return Random.from(['basketballs', 'cabbages', 'melons', 'eggplants']); }
    if (width < 12)  { return Random.from(['cantaloupes', 'melons', 'coconuts', 'squashs', 'milk jugs']); }
    if (width < 15)  { return Random.from(['heads of lettuce', 'coconuts', 'decorative gourds']); }
    if (width < 18)  { return Random.from(['pineapples', 'coconuts', 'honeydew melons']); }
    if (width < 22)  { return Random.from(['watermelons','pumpkins']); }
    if (width < 30)  { return Random.from(['pumpkins','jackfruits']); }
    return Random.from(['beach balls']);
  },

}
