console.log('\n=== Booting Main Process ===\n');

require(`${ROOT}/engine/boot-environment.js`);
require(`${ROOT}/engine/boot-system.js`);
require(`${ROOT}/engine/boot-engine.js`);
require(`${ROOT}/engine/boot-database.js`);

Environment.init();
