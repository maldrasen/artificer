
console.log('=== Booting Main Process ===');

require(`${ROOT}/shared/boot-shared.js`);
require(`${ROOT}/engine/boot-system.js`);
require(`${ROOT}/engine/boot-engine.js`);
require(`${ROOT}/engine/boot-database.js`);

ipcMain.on('client.ready', () => {
  Database.createDatabase(() => {
    ModLoader.loadAllData(() => {
      Browser.send('engine.ready');
    });
  });
});
