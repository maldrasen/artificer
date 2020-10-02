
require(`${ROOT}/boot/browser`);
require(`${ROOT}/boot/configuration`);
require(`${ROOT}/boot/environment`);
require(`${ROOT}/boot/loader`);
require(`${ROOT}/boot/settings`);

(function() {

  console.log('=== Booting Main Process ===')

  ipcMain.on('client.ready', async () => {
    await Database.createDatabase()
    await Database.createModels();

    // This used to do a few other things as well. After the models were
    // initialized all of the data objects were loaded. It should be possible
    // to do that when the modules are loaded instead. The lookup data was also
    // sent to the client here, but I think we should pull reference data
    // instead of pushing it.
    Browser.send('engine.ready');
  });

  try {
    Configuration.load(require(`${ROOT}/package.json`));
    Environment.init();
    Settings.init();
    Loader.loadScenario();
    Loader.initializeScenario();
    Browser.init();
  } catch(e) {
    console.error("\n!!! Error Booting Main Process !!!\n");
    console.error(e);
    process.exit(1)
  }

})();
