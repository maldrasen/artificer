global.CharacterAttributes = (function() {

  function physicalWord(level) {
    if (level < 7)  { return 'feeble'; }
    if (level < 15) { return 'weak'; }
    if (level < 25) { return 'average'; }
    if (level < 50) { return 'strong'; }
    if (level < 75) { return 'mighty'; }
    if (level < 100) { return 'tremendous'; }
    return 'legendary';
  }

  function mentalWord(level) {
    if (level < 7)  { return 'idiot'; }
    if (level < 15) { return 'stupid'; }
    if (level < 25) { return 'astute'; }
    if (level < 50) { return 'erudite'; }
    if (level < 75) { return 'brilliant'; }
    if (level < 100) { return 'genius'; }
    return 'savant';
  }

  function personalWord(level) {
    if (level < 7)  { return 'hideous'; }
    if (level < 15) { return 'ugly'; }
    if (level < 25) { return 'attractive'; }
    if (level < 50) { return 'beautiful'; }
    if (level < 75) { return 'breathtaking'; }
    if (level < 100) { return 'gorgeous'; }
    return 'mythic';
  }

  function magicalWord(level) {
    if (level < 7)  { return 'impotent'; }
    if (level < 15) { return 'powerless'; }
    if (level < 25) { return 'talented'; }
    if (level < 50) { return 'powerful'; }
    if (level < 75) { return 'formidable'; }
    if (level < 100) { return 'epic'; }
    return 'omnipotent';
  }

  function loyaltyWord(level) {
    if (level < 7)  { return 'traitorous'; }
    if (level < 15) { return 'fickle'; }
    if (level < 25) { return 'faithful'; }
    if (level < 50) { return 'loyal'; }
    if (level < 75) { return 'reliable'; }
    if (level < 100) { return 'unwavering'; }
    return 'absolute';
  }

  function fearWord(level) {
    if (level < 7)  { return 'fearless'; }
    if (level < 15) { return 'cautious'; }
    if (level < 25) { return 'wary'; }
    if (level < 50) { return 'fearful'; }
    if (level < 75) { return 'afraid'; }
    if (level < 100) { return 'terrified'; }
    return 'aghast';
  }

  return {
    physicalWord,
    mentalWord,
    personalWord,
    magicalWord,
    loyaltyWord,
    fearWord,
  }

})();
