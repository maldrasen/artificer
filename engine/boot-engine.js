
console.log('> Booting Engine')

global.extend = require('extend');
global.each = require('iterate-object');

require(`${ROOT}/engine/forms/form`);
require(`${ROOT}/engine/forms/gender`);
require(`${ROOT}/engine/forms/location`);
require(`${ROOT}/engine/forms/species`);

require(`${ROOT}/engine/services/composer`);

// === Builders ===
require(`${ROOT}/engine/services/character-builder/anus-builder`);
require(`${ROOT}/engine/services/character-builder/body-builder`);
require(`${ROOT}/engine/services/character-builder/character-builder`);
require(`${ROOT}/engine/services/character-builder/cock-builder`);
require(`${ROOT}/engine/services/character-builder/mouth-builder`);
require(`${ROOT}/engine/services/character-builder/pussy-builder`);
require(`${ROOT}/engine/services/character-builder/tits-builder`);

// === Utilities ===
require(`${ROOT}/engine/utilities/array-utility.js`);
require(`${ROOT}/engine/utilities/conversion-utility.js`);
require(`${ROOT}/engine/utilities/english-utility.js`);
require(`${ROOT}/engine/utilities/math-utility.js`);
require(`${ROOT}/engine/utilities/object-utility.js`);
require(`${ROOT}/engine/utilities/random.js`);
require(`${ROOT}/engine/utilities/text-utility.js`);
