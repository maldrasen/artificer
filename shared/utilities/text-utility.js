global.TextUtility = {

  titlecase: function(word) {
    return `${word.charAt(0).toUpperCase()}${word.substring(1)}`;
  },

  titlecaseAll: function(phrase) {
    return phrase.split(/\s/).map(word => { return titlecase(word) }).join(' ');
  },

  startsWith: function(string, part) {
    return (string == null) ? false : string.slice(0, part.length) == part;
  },

}
