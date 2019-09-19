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

// Require Helpers if needed.
// require(`${appPath}/main/spec/helpers/character-helper`);
// require(`${appPath}/main/spec/helpers/spec-helper`);

before(function() {
  // Gots to make a database
  // return new Promise((resolve) => {
    // Main.init(null); // What was this for?
    // Database.createDatabase(resolve);
  // });
});

beforeEach(function() {
  // Config maybe?
  // global.Configuration = {
  //   metric: false,
  // };
});
