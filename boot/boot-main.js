
require(`${ROOT}/boot/browser`);
require(`${ROOT}/boot/configuration`);
require(`${ROOT}/boot/environment`);
require(`${ROOT}/boot/loader`);
require(`${ROOT}/boot/settings`);

(function() {

  console.log('=== Booting Main Process ===')

  ipcMain.on('client.ready', () => {
    console.log("Client Ready !")
    // Database.createDatabase(() => {
    //   Loader.loadAllData(() => {
    //     console.log("\n=== Ready ===\n")
    //     Controllers.init();
    //     Settings.init();
    //     Browser.send('engine.ready');
    //     Browser.sendDataToClient();
    //   });
    // });
  });

  try {
    Configuration.load(require(`${ROOT}/package.json`));
    Environment.init();
    Settings.init();
    Loader.loadScenario();
    Browser.init();
  } catch(e) {
    console.error("\n!!! Error Booting Main Process !!!\n");
    console.error(e);
    process.exit(1)
  }

})();
