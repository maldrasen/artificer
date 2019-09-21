
console.log("> Booting Shared")

global.extend = require('extend');
global.each = require('iterate-object');

// === Utilities ===
require(`${ROOT}/shared/utilities/array-utility.js`);
require(`${ROOT}/shared/utilities/conversion-utility.js`);
require(`${ROOT}/shared/utilities/english-utility.js`);
require(`${ROOT}/shared/utilities/math-utility.js`);
require(`${ROOT}/shared/utilities/object-utility.js`);
require(`${ROOT}/shared/utilities/random.js`);
require(`${ROOT}/shared/utilities/text-utility.js`);
