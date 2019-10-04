global.TextUtility = {

  titlecase(word) {
    return `${word.charAt(0).toUpperCase()}${word.substring(1)}`;
  },

  titlecaseAll(phrase) {
    return phrase.split(/\s/).map(word => { return titlecase(word) }).join(' ');
  },

  startsWith(string, part) {
    return (string == null) ? false : string.slice(0, part.length) == part;
  },

}
