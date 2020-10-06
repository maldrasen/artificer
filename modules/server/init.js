
global.electron = require('electron');
global.ipcMain = electron.ipcMain;
global.app = electron.app;

ipcMain.on('client.ready', async () => {
  // These need to be messages now...
  // await Database.createDatabase()
  // await Database.createModels();

  // This used to do a few other things as well. After the models were
  // initialized all of the data objects were loaded. It should be possible
  // to do that when the modules are loaded instead. The lookup data was also
  // sent to the client here, but I think we should pull reference data
  // instead of pushing it.
  // Browser.send('engine.ready');
});
