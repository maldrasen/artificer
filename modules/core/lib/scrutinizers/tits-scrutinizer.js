// global.TitsScrutinizer = (function() {
//
//   // Inspect specific tits attributes.
//   async function check(operation, data) {
//     if (data.tits == null) { return false; }
//
//     if (operation == 'tits.conical')              { return data.tits.shape == 'conical'             }
//     if (operation == 'tits.perky')                { return data.tits.shape == 'perky'               }
//     if (operation == 'tits.smash-shape')          { return data.tits.smashShape != null             }
//     if (operation == 'tits.zero')                 { return data.tits.currentSizeClass == 'zero'     }
//     if (operation == 'tits.tiny')                 { return data.tits.currentSizeClass == 'tiny'     }
//     if (operation == 'tits.small')                { return data.tits.currentSizeClass == 'small'    }
//     if (operation == 'tits.average')              { return data.tits.currentSizeClass == 'average'; }
//     if (operation == 'tits.big')                  { return data.tits.currentSizeClass == 'big';     }
//     if (operation == 'tits.huge')                 { return data.tits.currentSizeClass == 'huge';    }
//     if (operation == 'tits.monster')              { return data.tits.currentSizeClass == 'monster'; }
//     if (operation == 'tits.bigger-than-zero')     { return data.tits.currentSizeClass != 'zero'; }
//     if (operation == 'tits.bigger-than-average')  { return ArrayUtility.contains(['big','huge','monster'],data.tits.currentSizeClass); }
//     if (operation == 'tits.smaller-than-average') { return ArrayUtility.contains(['zero','tiny','small'],data.tits.currentSizeClass);  }
//
//     if (operation.match(/^tits.smash-count/)) { return checkTitSmashCount(operation, data.tits.smashCount); }
//
//     throw `Unknown Tits Operation - ${operation}`;
//   }
//
//   async function checkTitSmashCount(operation, count) {
//     let match = operation.match(/count(<|<=|=|>=|>)([^<>=]+)/);
//     return CentralScrutinizer.checkComparisonOperation(count,match[1],match[2]);
//   }
//
//   return { check };
//
// })();
