
global.VERSION = 0;
global.VERBOSE = process.argv.indexOf('-v') > 0;
global.ROOT = require('path').normalize(`${__dirname}/..`).replace(/\\/g,"/");
global.expect = require('chai').expect;

require(`${ROOT}/engine/boot-environment.js`);
require(`${ROOT}/engine/boot-engine.js`);
require(`${ROOT}/engine/boot-database.js`);
require(`${ROOT}/spec/game-helper.js`);
require(`${ROOT}/spec/spec-helper.js`);

global.Settings = {
  Metric: false,
  FutaPronouns: 'shi/hir',
  DebugSwitches: {},
};

// If the before function returns a Promise, Mocha will ensure that the Promise
// will finish before any of the specs are run. Including this in the global
// spec before step ensures that all the data objects can be used in tests.
before(function() {
  return new Promise((resolve)=>{
    Database.createDatabase(() => {
      Loader.loadAllData(resolve);
    });
  });
});

// An after each is needed to clean up any models added to the database, and
// set the mode back to non-metric.
afterEach(function() {
  Environment.Throttle = false;
  Settings.Metric = false;
  Settings.FutaPronouns = 'shi/hir';
  Settings.DebugSwitches = {};
  Game.clear();
});
