
global.electron = require('electron');
global.ipcMain = electron.ipcMain;
global.app = electron.app;

// The client sends the client.ready signal
ipcMain.on('client.ready', async () => {

  // This used to do a few other things as well. After the models were
  // initialized all of the data objects were loaded. It should be possible
  // to do that when the modules are loaded instead. The lookup data was also
  // sent to the client here, but I think we should pull reference data
  // instead of pushing it.

  Loader.loadModule(Configuration.scenario);

  Browser.send('server.ready', Environment);

  postal.publish({ channel:"server", topic:"ready" });
});
