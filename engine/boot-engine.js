
console.log('> Booting Engine')

global.extend = require('extend');
global.each = require('iterate-object');

// === Concerns ===
require(`${ROOT}/engine/concerns/has-aspects`);
require(`${ROOT}/engine/concerns/has-body`);

// === Forms ===
require(`${ROOT}/engine/forms/form`);
require(`${ROOT}/engine/forms/adjustment`);
require(`${ROOT}/engine/forms/aspect`);
require(`${ROOT}/engine/forms/event`);
require(`${ROOT}/engine/forms/gender`);
require(`${ROOT}/engine/forms/location`);
require(`${ROOT}/engine/forms/mission`);
require(`${ROOT}/engine/forms/project`);
require(`${ROOT}/engine/forms/species`);

// === Scrutinizers ===
require(`${ROOT}/engine/scrutinizers/synchronized-scrutinizer`);

// === Services ===
require(`${ROOT}/engine/services/composer`);
require(`${ROOT}/engine/services/character-agent`);

// === Builders ===
require(`${ROOT}/engine/services/character-builder/adjustments`);
require(`${ROOT}/engine/services/character-builder/anus-builder`);
require(`${ROOT}/engine/services/character-builder/body-builder`);
require(`${ROOT}/engine/services/character-builder/character-builder`);
require(`${ROOT}/engine/services/character-builder/cock-builder`);
require(`${ROOT}/engine/services/character-builder/mouth-builder`);
require(`${ROOT}/engine/services/character-builder/name-builder`);
require(`${ROOT}/engine/services/character-builder/nipples-builder`);
require(`${ROOT}/engine/services/character-builder/pussy-builder`);
require(`${ROOT}/engine/services/character-builder/tits-builder`);
require(`${ROOT}/engine/services/character-builder/name-generators/demon-name-generator`);
require(`${ROOT}/engine/services/character-builder/name-generators/elf-name-generator`);
require(`${ROOT}/engine/services/character-builder/name-generators/goblin-name-generator`);
require(`${ROOT}/engine/services/character-builder/name-generators/kobold-name-generator`);
require(`${ROOT}/engine/services/character-builder/name-generators/rat-name-generator`);

// === Utilities ===
require(`${ROOT}/engine/utilities/array-utility.js`);
require(`${ROOT}/engine/utilities/conversion-utility.js`);
require(`${ROOT}/engine/utilities/english-utility.js`);
require(`${ROOT}/engine/utilities/math-utility.js`);
require(`${ROOT}/engine/utilities/object-utility.js`);
require(`${ROOT}/engine/utilities/random.js`);
require(`${ROOT}/engine/utilities/text-utility.js`);

// === Weavers ===
require(`${ROOT}/engine/weavers/weaver`);
require(`${ROOT}/engine/weavers/character-loom`);
require(`${ROOT}/engine/weavers/gender-loom`);
