
global.VERSION = 0;
global.DEBUG = false;
global.ROOT = require('path').normalize(`${__dirname}/..`);
global.expect = require('chai').expect;

console.log('=== Booting Spec Process ===');
require(`${ROOT}/engine/boot-engine.js`);
require(`${ROOT}/engine/boot-database.js`);
require(`${ROOT}/spec/game-helper.js`);

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

// An after each is needed to clean up any models added to the database.
afterEach(function() {
  Game.clear();
})
