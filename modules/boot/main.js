
global.ROOT = require('path').normalize(`${__dirname}/../..`).replace(/\\/g,"/");
global.fs = require('fs');
global.hash = require('object-hash');
global.each = require('iterate-object');

require(`${ROOT}/modules/boot/lib/configuration`);
require(`${ROOT}/modules/boot/lib/environment`);
require(`${ROOT}/modules/boot/lib/loader`);
require(`${ROOT}/modules/boot/lib/settings`);

(function() {
  console.log('=== Booting Main Process ===')

  try {
    Configuration.load(require(`${ROOT}/package.json`));
    Environment.init();
    Settings.init();
    // Loader.loadScenario();
    // Loader.initializeScenario();
    // Browser.init();
  } catch(e) {
    console.error("\n!!! Error Booting Main Process !!!\n");
    console.error(e);
    process.exit(1)
  }

})();
