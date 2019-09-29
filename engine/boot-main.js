
console.log('=== Booting Main Process ===');

require(`${ROOT}/engine/boot-system.js`);
require(`${ROOT}/engine/boot-engine.js`);
require(`${ROOT}/engine/boot-database.js`);

ipcMain.on('client.ready', () => {
  Database.createDatabase(() => {
    ModLoader.loadAllData(() => {
      console.log("\n=== Ready ===\n")
      BrowserCommands.init();
      Browser.send('engine.ready');
    });
  });
});
