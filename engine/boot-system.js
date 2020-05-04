
// The boot-system.js loads anything Electron specific. The tests will have to
// stub these when they are used by the engine.
console.log('> Booting System')

require(`${ROOT}/engine/controllers/controllers.js`);
require(`${ROOT}/engine/controllers/character-controller.js`);
require(`${ROOT}/engine/controllers/debug-controller.js`);
require(`${ROOT}/engine/controllers/equipment-controller.js`);
require(`${ROOT}/engine/controllers/game-controller.js`);
require(`${ROOT}/engine/controllers/image-controller.js`);
require(`${ROOT}/engine/controllers/location-controller.js`);
require(`${ROOT}/engine/controllers/manage-controller.js`);
require(`${ROOT}/engine/controllers/plan-controller.js`);
require(`${ROOT}/engine/controllers/resolver-controller.js`);

require(`${ROOT}/engine/services/browser.js`);
require(`${ROOT}/engine/services/settings.js`);
