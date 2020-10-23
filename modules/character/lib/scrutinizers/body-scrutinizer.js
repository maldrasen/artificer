global.BodyScrutinizer = (function() {

  // The body scrutinizer handles the body, face, and head properties as they're
  // actually all stored on the body model.
  async function check(operation, data) {

    // Body Properties
    if (operation == 'body.height-short')                  { return data.body.heightIsShort; }
    if (operation == 'body.height-average')                { return data.body.heightIsAverage; }
    if (operation == 'body.height-tall')                   { return data.body.heightIsTall; }
    if (operation == 'body.height-not-short')              { return ! data.body.heightIsShort; }
    if (operation == 'body.height-not-tall')               { return ! data.body.heightIsTall; }
    if (operation === 'body.height-short-for-species')     { return (await data.character.heightForSpecies()) == 'short'; }
    if (operation === 'body.height-average-for-species')   { return (await data.character.heightForSpecies()) == 'average'; }
    if (operation === 'body.height-tall-for-species')      { return (await data.character.heightForSpecies()) == 'tall'; }
    if (operation.match(/^body.pierce-count/))             { return checkCount(operation, data.body.pierceCount); }

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
    if (operation == 'face.at-least-average')         { return data.character.personal >= 5; } // not hideous or ugly
    if (operation == 'face.below-average')            { return data.character.personal < 5;  } // hideous or ugly
    if (operation == 'face.breathtaking-or-mythic')   { return data.character.personal >= 60; }

    // Physique
    if (operation == 'body.physique.feeble')             { return data.character.getPhysicalWord() == 'feeble';     }
    if (operation == 'body.physique.weak')               { return data.character.getPhysicalWord() == 'weak';       }
    if (operation == 'body.physique.average')            { return data.character.getPhysicalWord() == 'average';    }
    if (operation == 'body.physique.strong')             { return data.character.getPhysicalWord() == 'strong';     }
    if (operation == 'body.physique.mighty')             { return data.character.getPhysicalWord() == 'mighty';     }
    if (operation == 'body.physique.tremendous')         { return data.character.getPhysicalWord() == 'tremendous'; }
    if (operation == 'body.physique.legendary')          { return data.character.getPhysicalWord() == 'legendary';  }
    if (operation == 'body.physique.below-average')      { return ArrayUtility.contains(['feeble','weak'],           data.character.getPhysicalWord()); }
    if (operation == 'body.physique.above-average')      { return ArrayUtility.contains(['strong','mighty'],         data.character.getPhysicalWord()); }
    if (operation == 'body.physique.far-above-average')  { return ArrayUtility.contains(['incredible','legendary'],  data.character.getPhysicalWord()); }

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
