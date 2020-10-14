
global.ROOT = require('path').normalize(`${__dirname}/../..`).replace(/\\/g,"/");
global.fs = require('fs');
global.hash = require('object-hash');
global.each = require('iterate-object');
global.postal = require('postal');
global.util = require('util');

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
    Loader.loadModule('core');
  } catch(e) {
    console.error("\n!!! Error Booting Main Process !!!\n");
    console.error(e);
    process.exit(1)
  }

})();

global.log = function(message) {
  if (Environment.verbose) { console.log(message) }
}
