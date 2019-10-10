
console.log('> Booting Engine')

global.extend = require('extend');
global.each = require('iterate-object');

// === Concerns ===
require(`${ROOT}/engine/concerns/has-aspects`);
require(`${ROOT}/engine/concerns/has-body`);

// === Devices ===
require(`${ROOT}/engine/devices/composer`);
require(`${ROOT}/engine/devices/resolver`);
require(`${ROOT}/engine/devices/resolver-events`);
require(`${ROOT}/engine/devices/resolver-game`);
require(`${ROOT}/engine/devices/resolver-missions`);
require(`${ROOT}/engine/devices/resolver-projects`);
require(`${ROOT}/engine/devices/resolver-report`);
require(`${ROOT}/engine/devices/resolver-roles`);

// === Forms ===
require(`${ROOT}/engine/forms/form`);
require(`${ROOT}/engine/forms/adjustment`);
require(`${ROOT}/engine/forms/aspect`);
require(`${ROOT}/engine/forms/area`);
require(`${ROOT}/engine/forms/event`);
require(`${ROOT}/engine/forms/gender`);
require(`${ROOT}/engine/forms/item`);
require(`${ROOT}/engine/forms/location`);
require(`${ROOT}/engine/forms/mission`);
require(`${ROOT}/engine/forms/project`);
require(`${ROOT}/engine/forms/role`);
require(`${ROOT}/engine/forms/species`);

// === Helpers ===
require(`${ROOT}/engine/helpers/character-agent`);

// === Scrutinizers ===
require(`${ROOT}/engine/scrutinizers/central-scrutinizer`);
require(`${ROOT}/engine/scrutinizers/synchronized-scrutinizer`);

// === Services ===
require(`${ROOT}/engine/services/logger`);

// === Factories ===
require(`${ROOT}/engine/factories/character-builder/character-builder`);
require(`${ROOT}/engine/factories/character-builder/character-adjuster`);
require(`${ROOT}/engine/factories/character-builder/anus-builder`);
require(`${ROOT}/engine/factories/character-builder/body-builder`);
require(`${ROOT}/engine/factories/character-builder/cock-builder`);
require(`${ROOT}/engine/factories/character-builder/mouth-builder`);
require(`${ROOT}/engine/factories/character-builder/name-builder`);
require(`${ROOT}/engine/factories/character-builder/nipples-builder`);
require(`${ROOT}/engine/factories/character-builder/pussy-builder`);
require(`${ROOT}/engine/factories/character-builder/tits-builder`);

require(`${ROOT}/engine/factories/name-generators/demon-name-generator`);
require(`${ROOT}/engine/factories/name-generators/elf-name-generator`);
require(`${ROOT}/engine/factories/name-generators/goblin-name-generator`);
require(`${ROOT}/engine/factories/name-generators/kobold-name-generator`);
require(`${ROOT}/engine/factories/name-generators/rat-name-generator`);

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
