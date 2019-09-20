
console.log('=== Booting Main Process ===');

require(`${ROOT}/shared/boot-shared.js`);
require(`${ROOT}/engine/boot-system.js`);
require(`${ROOT}/engine/boot-engine.js`);
require(`${ROOT}/engine/boot-database.js`);

Database.createDatabase(() => {
  setTimeout(()=>{ // This timeout can die later, the seeds will take a long time to load.
    Browser.send('engine.ready');
  },1000)
});
