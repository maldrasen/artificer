
global.ROOT = require('path').normalize(`${__dirname}/../..`).replace(/\\/g,"/");
global.fs = require('fs');
global.hash = require('object-hash');
global.each = require('iterate-object');
global.expect = require('chai').expect;

require(`${ROOT}/boot/configuration`);
require(`${ROOT}/boot/environment`);
require(`${ROOT}/boot/loader`);
require(`${ROOT}/boot/settings`);

let defaultSettings;
let defaultEnvironment;
let packageName;

try {
  loadEnvironment();
  loadDependencies();
} catch(e) {
  console.error("\n!!! Error Booting Spec Process !!!\n");
  console.error(e);
  process.exit(1)
}

before(async () => {

  // Create the database and database models if the database module is present.
  if (typeof Database) {
    await Database.createDatabase()
    await Database.createModels();
  }

  // Seed all of the data objects.

});

// An after each is needed to clean up any models added to the database, and
// set the mode back to non-metric.
afterEach(function() {
  resetEnvironment();
  // Database.clear(); if database exists
  // also may need to run a cleanup functon defined in the package to get rid of stuff like Game.instance.
});

// We need to load all of the packages required by this spec. Every package
// should require the engine package and itself, so they can be ommitted from
// the spec config.
function loadDependencies() {
  Loader.loadPackage('engine');
  Loader.loadPackage(packageName);
  // Read loadDependencies out of spec-config.yaml in this package and include them.
}

function loadEnvironment() {
  Configuration.load(require(`${ROOT}/package.json`));
  Environment.init();
  Settings.init();

  if (process.argv.indexOf('--verbose') > 0) {
    Environment.verbose = true;
  }

  defaultSettings = Object.assign({}, Settings);
  defaultEnvironment = Object.assign({}, Environment);
  packageName = process.argv[process.argv.indexOf('--name')+1];
}

function resetEnvironment() {
  Settings = defaultSettings;
  Environment = defaultEnvironment;
}
