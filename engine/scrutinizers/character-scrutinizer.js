global.CharacterScrutinizer = (function() {

  // These operations are shared between the Player and Minion scrutinizers.
  function check(operation, data) {

    // Species Properties
    if (operation == 'demon')                         { return data.character.species.isDemon; }
    if (operation == 'not-demon')                     { return !data.character.species.isDemon; }
    if (operation == 'elf')                           { return data.character.species.isElf; }
    if (operation == 'not-elf')                       { return !data.character.species.isElf; }
    if (operation == 'fae')                           { return data.character.species.isFae; }
    if (operation == 'not-fae')                       { return !data.character.species.isFae; }
    if (operation == 'furry')                         { return data.character.species.isFurry; }
    if (operation == 'not-furry')                     { return !data.character.species.isFurry; }
    if (operation == 'scalie')                        { return data.character.species.isScalie; }
    if (operation == 'not-scalie')                    { return !data.character.species.isScalie; }
    if (operation == 'wolf-blooded')                  { return ['lupin','wood-elf'].indexOf(data.character.speciesCode) >= 0; }
    if (operation == 'not-wolf-blooded')              { return ['lupin','wood-elf'].indexOf(data.character.speciesCode) < 0; }

    // Body Properties
    if (operation == 'height-short')                  { return data.body.heightIsShort; }
    if (operation == 'height-average')                { return data.body.heightIsAverage; }
    if (operation == 'height-tall')                   { return data.body.heightIsTall; }
    if (operation == 'height-not-short')              { return ! data.body.heightIsShort; }
    if (operation == 'height-not-tall')               { return ! data.body.heightIsTall; }

    // Body Part Properties
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

    // Attributes
    if (operation.match(/^physical/)) { return checkAttribute(operation, data.character) }
    if (operation.match(/^mental/))   { return checkAttribute(operation, data.character) }
    if (operation.match(/^personal/)) { return checkAttribute(operation, data.character) }
    if (operation.match(/^magical/))  { return checkAttribute(operation, data.character) }

    throw `Unknown Character Operation - ${operation}`
  }

  function checkAttribute(operation, character) {
    let match = operation.match(/([^<>=]+)(<|<=|=|>=|>)([^<>=]+)/);
    if (match == null) {
      throw `Character attribute requirement was not in the expected format.`
    }

    let attribute;
    if (match[1] == 'physical') { attribute = character.physical; }
    if (match[1] == 'mental')   { attribute = character.mental;   }
    if (match[1] == 'personal') { attribute = character.personal; }
    if (match[1] == 'magical')  { attribute = character.magical;  }

    return CentralScrutinizer.checkComparisonOperation(attribute,match[2],match[3]);
  }

  return { check };

})();
