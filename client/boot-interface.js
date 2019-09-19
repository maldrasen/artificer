
// The interface-boot loads the javascripts needed for interface components.
// These scripts aren't tested in the unit tests, so they should have
// integration tests written for them.
console.log("> Booting Interface");

// === External ===
global.$ = global.jQuery = require('jquery');

// === Interface ===
require(`${ROOT}/client/interface/logger.js`);
require(`${ROOT}/client/interface/renderer.js`);
