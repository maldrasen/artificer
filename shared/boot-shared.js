
console.log("> Booting Shared")

// === Superclasses ===
require(`${ROOT}/shared/models/model.js`);
require(`${ROOT}/shared/forms/form.js`);

// === Forms ===
require(`${ROOT}/shared/forms/action.js`);
require(`${ROOT}/shared/forms/area.js`);
require(`${ROOT}/shared/forms/event.js`);
require(`${ROOT}/shared/forms/form.js`);
require(`${ROOT}/shared/forms/item.js`);
require(`${ROOT}/shared/forms/location.js`);
require(`${ROOT}/shared/forms/mission.js`);
require(`${ROOT}/shared/forms/project.js`);
require(`${ROOT}/shared/forms/race.js`);
require(`${ROOT}/shared/forms/report.js`);
require(`${ROOT}/shared/forms/role.js`);

// === Models ===
require(`${ROOT}/shared/models/animal.js`);
require(`${ROOT}/shared/models/anus.js`);
require(`${ROOT}/shared/models/assignment.js`);
require(`${ROOT}/shared/models/balls.js`);
require(`${ROOT}/shared/models/body.js`);
require(`${ROOT}/shared/models/character.js`);
require(`${ROOT}/shared/models/cock.js`);
require(`${ROOT}/shared/models/game.js`);
require(`${ROOT}/shared/models/gender.js`);
require(`${ROOT}/shared/models/mouth.js`);
require(`${ROOT}/shared/models/nipples.js`);
require(`${ROOT}/shared/models/orders.js`);
require(`${ROOT}/shared/models/player.js`);
require(`${ROOT}/shared/models/possession.js`);
require(`${ROOT}/shared/models/pussy.js`);
require(`${ROOT}/shared/models/tits.js`);

// === Utilities ===
require(`${ROOT}/shared/utilities/conversion-utility.js`);
require(`${ROOT}/shared/utilities/english-utility.js`);
require(`${ROOT}/shared/utilities/math-utility.js`);
require(`${ROOT}/shared/utilities/text-utility.js`);
