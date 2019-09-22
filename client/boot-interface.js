
// The interface-boot loads the javascripts needed for interface components.
// These scripts aren't tested in the unit tests, so they should have
// integration tests written for them.
console.log("> Booting Interface");

// === External ===
global.$ = global.jQuery = require('jquery');
global.each = require('iterate-object');
global.extend = require('extend');

// === Interface ===
require(`${ROOT}/client/interface/logger`);
require(`${ROOT}/client/interface/renderer`);

// === Elements ===
require(`${ROOT}/client/interface/elements/elements`);
require(`${ROOT}/client/interface/elements/chooser`);
require(`${ROOT}/client/interface/elements/paged-content`);
require(`${ROOT}/client/interface/elements/radio-buttons`);
require(`${ROOT}/client/interface/elements/scrolling-panel`);
