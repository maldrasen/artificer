
console.log('> Booting Engine')

global.extend = require('extend');
global.fs = require('fs');
global.each = require('iterate-object');
global.hash = require('object-hash');
global.log = (message) => { if (Environment.Debug) { console.log(message); } }

// === Concerns ===
require(`${ROOT}/engine/concerns/has-aspects`);
require(`${ROOT}/engine/concerns/has-attributes`);
require(`${ROOT}/engine/concerns/has-body`);
require(`${ROOT}/engine/concerns/has-equipment`);
require(`${ROOT}/engine/concerns/has-injuries`);
require(`${ROOT}/engine/concerns/has-personality`);
require(`${ROOT}/engine/concerns/has-sex-skills`);

// === Forms ===
require(`${ROOT}/engine/forms/form`);
require(`${ROOT}/engine/forms/adjustment`);
require(`${ROOT}/engine/forms/aspect`);
require(`${ROOT}/engine/forms/area`);
require(`${ROOT}/engine/forms/description`);
require(`${ROOT}/engine/forms/equipment`);
require(`${ROOT}/engine/forms/event`);
require(`${ROOT}/engine/forms/flag-info`);
require(`${ROOT}/engine/forms/game-stage`);
require(`${ROOT}/engine/forms/gender`);
require(`${ROOT}/engine/forms/hazard`);
require(`${ROOT}/engine/forms/image-resource`);
require(`${ROOT}/engine/forms/item`);
require(`${ROOT}/engine/forms/item-flavor`);
require(`${ROOT}/engine/forms/location`);
require(`${ROOT}/engine/forms/mission`);
require(`${ROOT}/engine/forms/order`);
require(`${ROOT}/engine/forms/personality`);
require(`${ROOT}/engine/forms/project`);
require(`${ROOT}/engine/forms/recipe`);
require(`${ROOT}/engine/forms/species`);
require(`${ROOT}/engine/forms/summon-action`);
require(`${ROOT}/engine/forms/task`);
require(`${ROOT}/engine/forms/task-story`);

// === Classes ===
require(`${ROOT}/engine/classes/consent-calculator`);
require(`${ROOT}/engine/classes/context`);

// === Describers ===
require(`${ROOT}/engine/describers/character-describer`);
require(`${ROOT}/engine/describers/body-describer`);
require(`${ROOT}/engine/describers/anus-describer`);
require(`${ROOT}/engine/describers/cock-describer`);
require(`${ROOT}/engine/describers/pussy-describer`);
require(`${ROOT}/engine/describers/tits-describer`);
require(`${ROOT}/engine/describers/body-injury-describer`);
require(`${ROOT}/engine/describers/anus-injury-describer`);
require(`${ROOT}/engine/describers/cock-injury-describer`);
require(`${ROOT}/engine/describers/pussy-injury-describer`);
require(`${ROOT}/engine/describers/tits-injury-describer`);

// === Devices ===
require(`${ROOT}/engine/devices/aspect-adjuster`);
require(`${ROOT}/engine/devices/composer`);
require(`${ROOT}/engine/devices/weaver`);

require(`${ROOT}/engine/devices/abuser`);
require(`${ROOT}/engine/devices/abusers/anus-abuser`);
require(`${ROOT}/engine/devices/abusers/body-abuser`);
require(`${ROOT}/engine/devices/abusers/cock-abuser`);
require(`${ROOT}/engine/devices/abusers/head-abuser`);
require(`${ROOT}/engine/devices/abusers/pussy-abuser`);
require(`${ROOT}/engine/devices/abusers/tits-abuser`);

require(`${ROOT}/engine/devices/missions/catch`);
require(`${ROOT}/engine/devices/missions/event`);
require(`${ROOT}/engine/devices/missions/explore`);
require(`${ROOT}/engine/devices/missions/gather`);
require(`${ROOT}/engine/devices/missions/steal`);

require(`${ROOT}/engine/devices/resolver`);
require(`${ROOT}/engine/devices/resolver/healing`);
require(`${ROOT}/engine/devices/resolver/incidentals`);
require(`${ROOT}/engine/devices/resolver/items`);
require(`${ROOT}/engine/devices/resolver/lust`);
require(`${ROOT}/engine/devices/resolver/minions`);
require(`${ROOT}/engine/devices/resolver/missions`);
require(`${ROOT}/engine/devices/resolver/projects`);
require(`${ROOT}/engine/devices/resolver/report`);
require(`${ROOT}/engine/devices/resolver/roles`);
require(`${ROOT}/engine/devices/resolver/tasks`);

require(`${ROOT}/engine/devices/summoner`);
require(`${ROOT}/engine/devices/summoner/experience`);

// === Helpers ===
require(`${ROOT}/engine/helpers/calendar.js`);
require(`${ROOT}/engine/helpers/character-agent`);
require(`${ROOT}/engine/helpers/listify.js`);
require(`${ROOT}/engine/helpers/quote-transformer.js`);
require(`${ROOT}/engine/helpers/random.js`);

// === Looms ===
require(`${ROOT}/engine/looms/balls-loom`);
require(`${ROOT}/engine/looms/body-loom`);
require(`${ROOT}/engine/looms/character-loom`);
require(`${ROOT}/engine/looms/cock-loom`);
require(`${ROOT}/engine/looms/flag-loom`);
require(`${ROOT}/engine/looms/game-loom`);
require(`${ROOT}/engine/looms/gender-loom`);
require(`${ROOT}/engine/looms/measurement-loom`);
require(`${ROOT}/engine/looms/nipples-loom`);
require(`${ROOT}/engine/looms/random-loom`);
require(`${ROOT}/engine/looms/species-loom`);
require(`${ROOT}/engine/looms/tits-loom`);

// === Roles ===
require(`${ROOT}/engine/roles/role`);
require(`${ROOT}/engine/roles/forager`);
require(`${ROOT}/engine/roles/hunter`);
require(`${ROOT}/engine/roles/rest`);
require(`${ROOT}/engine/roles/forager/results`);
require(`${ROOT}/engine/roles/forager/schedule`);
require(`${ROOT}/engine/roles/forager/stories`);
require(`${ROOT}/engine/roles/hunter/injuries`);
require(`${ROOT}/engine/roles/hunter/stories`);

// === Scrutinizers ===
require(`${ROOT}/engine/scrutinizers/anus-scrutinizer`);
require(`${ROOT}/engine/scrutinizers/body-scrutinizer`);
require(`${ROOT}/engine/scrutinizers/central-scrutinizer`);
require(`${ROOT}/engine/scrutinizers/character-scrutinizer`);
require(`${ROOT}/engine/scrutinizers/cock-scrutinizer`);
require(`${ROOT}/engine/scrutinizers/minion-scrutinizer`);
require(`${ROOT}/engine/scrutinizers/nipples-scrutinizer`);
require(`${ROOT}/engine/scrutinizers/player-scrutinizer`);
require(`${ROOT}/engine/scrutinizers/sexual-scrutinizer`);
require(`${ROOT}/engine/scrutinizers/tits-scrutinizer`);

// === Story Teller ===
require(`${ROOT}/engine/story-teller/story-teller`);
require(`${ROOT}/engine/story-teller/segments/cock-segments`);
require(`${ROOT}/engine/story-teller/segments/general-segments`);
require(`${ROOT}/engine/story-teller/segments/oral-segments`);
require(`${ROOT}/engine/story-teller/segments/oral/blowjob-segments`);
require(`${ROOT}/engine/story-teller/segments/oral/cock-positioning`);
require(`${ROOT}/engine/story-teller/segments/oral/pussy-positioning`);

// === Factories ===
require(`${ROOT}/engine/factories/character-builder/character-adjuster`);
require(`${ROOT}/engine/factories/character-builder/character-builder`);
require(`${ROOT}/engine/factories/character-builder/character-namer`);
require(`${ROOT}/engine/factories/character-builder/anus-builder`);
require(`${ROOT}/engine/factories/character-builder/body-builder`);
require(`${ROOT}/engine/factories/character-builder/cock-builder`);
require(`${ROOT}/engine/factories/character-builder/mouth-builder`);
require(`${ROOT}/engine/factories/character-builder/nipples-builder`);
require(`${ROOT}/engine/factories/character-builder/pussy-builder`);
require(`${ROOT}/engine/factories/character-builder/tits-builder`);

require(`${ROOT}/engine/factories/name-generators/demon-name-generator`);
require(`${ROOT}/engine/factories/name-generators/elf-name-generator`);
require(`${ROOT}/engine/factories/name-generators/goblin-name-generator`);
require(`${ROOT}/engine/factories/name-generators/kobold-name-generator`);
require(`${ROOT}/engine/factories/name-generators/scaven-name-generator`);

// === Utilities ===
require(`${ROOT}/engine/utilities/array-utility.js`);
require(`${ROOT}/engine/utilities/conversion-utility.js`);
require(`${ROOT}/engine/utilities/english-utility.js`);
require(`${ROOT}/engine/utilities/math-utility.js`);
require(`${ROOT}/engine/utilities/object-utility.js`);
require(`${ROOT}/engine/utilities/text-utility.js`);
