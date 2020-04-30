global.CharacterScrutinizer = (function() {

  // These operations are shared between the Player and Minion scrutinizers.
  // The CharacterScrutinizer checks the common character attribute. More
  // specific body part checks are found in their respective part scrutinizers.
  function check(operation, data) {
    if (operation.match(/^cock/))    { return CockScrutinizer.check(operation,data);    }
    if (operation.match(/^nipples/)) { return NipplesScrutinizer.check(operation,data); }
    if (operation.match(/^tits/))    { return TitsScrutinizer.check(operation,data);    }

    // Gender Properties
    if (operation == 'is-male')                       { return data.character.genderCode == 'male'; }
    if (operation == 'is-female')                     { return data.character.genderCode == 'female'; }
    if (operation == 'is-futa')                       { return data.character.genderCode == 'futa'; }
    if (operation == 'is-not-male')                   { return data.character.genderCode != 'male'; }
    if (operation == 'is-not-female')                 { return data.character.genderCode != 'female'; }
    if (operation == 'is-not-futa')                   { return data.character.genderCode != 'futa'; }

    // Species Properties
    if (operation == 'is-scaven')                     { return data.character.speciesCode == 'scaven' }
    if (operation == 'demon')                         { return data.character.species.isDemon; }
    if (operation == 'not-demon')                     { return !data.character.species.isDemon; }
    if (operation == 'elf')                           { return data.character.species.isElf; }
    if (operation == 'not-elf')                       { return !data.character.species.isElf; }
    if (operation == 'fae')                           { return data.character.species.isFae; }
    if (operation == 'not-fae')                       { return !data.character.species.isFae; }
    if (operation == 'furry')                         { return data.character.isFurry; }
    if (operation == 'not-furry')                     { return !data.character.isFurry; }
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
    if (operation.match(/^body.pierce-count/))        { return checkCount(operation, data.body.pierceCount); }
    if (operation.match(/^head.cut-count/))           { return checkCount(operation, data.mouth.cutCount); }

    // Body Part Presence Checks
    if (operation == 'has-cock')                      { return data.cock != null; }
    if (operation == 'no-cock')                       { return data.cock == null; }
    if (operation == 'has-pussy')                     { return data.pussy != null; }
    if (operation == 'no-pussy')                      { return data.pussy == null; }
    if (operation == 'has-tits')                      { return data.tits != null; }
    if (operation == 'no-tits')                       { return data.tits == null; }

    // Attributes
    if (operation.match(/^physical/)) { return checkAttribute(operation, data.character) }
    if (operation.match(/^mental/))   { return checkAttribute(operation, data.character) }
    if (operation.match(/^personal/)) { return checkAttribute(operation, data.character) }
    if (operation.match(/^magical/))  { return checkAttribute(operation, data.character) }

    throw `Unknown Character Operation - ${operation}`
  }

  // This will actually work with any property name that ends with count.
  async function checkCount(operation, count) {
    let match = operation.match(/count(<|<=|=|>=|>)([^<>=]+)/);
    return CentralScrutinizer.checkComparisonOperation(count,match[1],match[2]);
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
