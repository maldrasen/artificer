"use strict";

global.VERSION = 0;
global.ROOT = require('path').normalize(`${__dirname}/..`);
global.expect = require('chai').expect;

global.Configuration = {
  metric: false
};

console.log('=== Booting Spec Process ===');
require(`${ROOT}/shared/boot-shared.js`);
require(`${ROOT}/engine/boot-engine.js`);
require(`${ROOT}/engine/boot-database.js`);

// Require Helpers if needed.
// require(`${appPath}/main/spec/helpers/character-helper`);
// require(`${appPath}/main/spec/helpers/spec-helper`);

before(function() {

});

beforeEach(function() {
  // Config maybe?
  // global.Configuration = {
  //   metric: false,
  // };
});
