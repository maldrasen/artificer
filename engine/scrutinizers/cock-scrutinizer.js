global.CockScrutinizer = (function() {

  // Inspect specific cock attributes.
  function check(operation, data) {
    if (data.cock == null) { return false; }
    if (operation == 'cock.external-balls')   { return data.cock.internalBalls == false;        }
    if (operation == 'cock.internal-balls')   { return data.cock.internalBalls;                 }
    if (operation == 'cock.sheath')           { return data.cock.hasSheath;                     }
    if (operation == 'cock.no-sheath')        { return data.cock.hasSheath == false;            }
    if (operation == 'cock.knobs')            { return data.cock.hasKnobs;                      }
    if (operation == 'cock.knot')             { return data.cock.hasKnot;                       }
    if (operation == 'cock.spines')           { return data.cock.hasSpines;                     }
    if (operation == 'cock.dragon')           { return data.cock.shape == 'dragon';             }
    if (operation == 'cock.horse')            { return data.cock.shape == 'horse';              }
    if (operation == 'cock.snake')            { return data.cock.shape == 'snake';              }
    if (operation == 'cock.small')            { return data.cock.currentSizeClass == 'small';   }
    if (operation == 'cock.average')          { return data.cock.currentSizeClass == 'average'; }
    if (operation == 'cock.big')              { return data.cock.currentSizeClass == 'big';     }
    if (operation == 'cock.huge')             { return data.cock.currentSizeClass == 'huge';    }
    if (operation == 'cock.monster')          { return data.cock.currentSizeClass == 'monster'; }
    if (operation == 'cock.gigantic')         { return data.cock.isGigantic;                    }
    if (operation == 'cock.titanic')          { return data.cock.isTitanic;                     }
    if (operation == 'cock.bigger-than-big')  { return ArrayUtility.contains(['huge','monster'], data.cock.currentSizeClass); }

    if (operation.match(/^cock.count/)) { return checkCockCount(operation, data.cock.count); }

    throw `Unknown Cock Operation - ${operation}`
  }

  async function checkCockCount(operation, count) {
    let match = operation.match(/count(<|<=|=|>=|>)([^<>=]+)/);
    return CentralScrutinizer.checkComparisonOperation(count,match[1],match[2]);
  }

  return { check };

})();
