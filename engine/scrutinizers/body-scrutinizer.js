global.BodyScrutinizer = (function() {

  // The body scrutinizer handles the body, face, and head properties as they're
  // actually all stored on the body model.
  function check(operation, data) {

    // Body Properties
    if (operation == 'body.height-short')             { return data.body.heightIsShort; }
    if (operation == 'body.height-average')           { return data.body.heightIsAverage; }
    if (operation == 'body.height-tall')              { return data.body.heightIsTall; }
    if (operation == 'body.height-not-short')         { return ! data.body.heightIsShort; }
    if (operation == 'body.height-not-tall')          { return ! data.body.heightIsTall; }
    if (operation.match(/^body.pierce-count/))        { return checkCount(operation, data.body.pierceCount); }

    // Face Properties
    if (operation == 'face.plain')                    { return data.body.faceType == 'plain';  }
    if (operation == 'face.hard')                     { return data.body.faceType == 'hard';   }
    if (operation == 'face.soft')                     { return data.body.faceType == 'soft';   }
    if (operation == 'face.exotic')                   { return data.body.faceType == 'exotic'; }
    if (operation == 'face.hideous')                  { return data.character.getPersonalWord() == 'hideous';     }
    if (operation == 'face.ugly')                     { return data.character.getPersonalWord() == 'ugly';        }
    if (operation == 'face.average')                  { return data.character.getPersonalWord() == 'average';     }
    if (operation == 'face.pretty')                   { return ArrayUtility.contains(['handsome','pretty'],       data.character.getPersonalWord()); }
    if (operation == 'face.beautiful')                { return ArrayUtility.contains(['magnificent','beautiful'], data.character.getPersonalWord()); }
    if (operation == 'face.breathtaking')             { return data.character.getPersonalWord() == 'breathtaking' }
    if (operation == 'face.mythic')                   { return data.character.getPersonalWord() == 'mythic'       }
    if (operation == 'face.breathtaking-or-mythic')   { return data.character.personal >= 60; }

    // Head Properties
    if (operation.match(/^head.has-horns/))           { return data.body.hornShape != null; }
    if (operation.match(/^head.cut-count/))           { return checkCount(operation, data.mouth.cutCount); }

    throw `Unknown Body Operation - ${operation}`
  }

  // This will actually work with any property name that ends with count.
  async function checkCount(operation, count) {
    let match = operation.match(/count(<|<=|=|>=|>)([^<>=]+)/);
    return CentralScrutinizer.checkComparisonOperation(count,match[1],match[2]);
  }

  return { check };

})();
