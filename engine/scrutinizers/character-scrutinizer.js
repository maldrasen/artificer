global.CharacterScrutinizer = (function() {

  // These operations are shared between the Player and Minion scrutinizers.
  function check(operation, data) {
    if (operation == 'furry')                         { return data.character.species.isFurry; }
    if (operation == 'not-furry')                     { return !data.character.species.isFurry; }
    if (operation == 'cock-sheath')                   { return data.character.species.hasCockSheath; }
    if (operation == 'no-cock-sheath')                { return !data.character.species.hasCockSheath; }
    if (operation == 'has-cock')                      { return data.cock != null; }
    if (operation == 'no-cock')                       { return data.cock == null; }
    if (operation == 'has-pussy')                     { return data.pussy != null; }
    if (operation == 'no-pussy')                      { return data.pussy == null; }
    if (operation == 'has-tits')                      { return data.tits != null; }
    if (operation == 'no-tits')                       { return data.tits == null; }
    if (operation == 'has-zero-tits')                 { return data.tits && data.tits.currentSizeClass == 'zero'; }
    if (operation == 'has-average-tits')              { return data.tits && data.tits.currentSizeClass == 'average'; }
    if (operation == 'has-bigger-than-zero-tits')     { return data.tits && data.tits.currentSizeClass != 'zero'; }
    if (operation == 'has-bigger-than-average-tits')  { return data.tits && ['big','huge','monster'].indexOf(data.tits.currentSizeClass) >= 0; }
    if (operation == 'has-smaller-than-average-tits') { return data.tits && ['zero','tiny','small'].indexOf(data.tits.currentSizeClass) >= 0; }

    throw `Unknown Character Operation - ${operation}`
  }

  return { check };

})();
