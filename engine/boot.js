
// Boot is the first file that's loaded when electron is started. The boot
// process first loads all of the engine code.

(function() {
  global.Artificer = {};

  require(`${ROOT}/engine/services/environment`);
  require(`${ROOT}/engine/services/configuration`);
  require(`${ROOT}/engine/services/settings`);
  require(`${ROOT}/engine/services/browser`);

  console.log('=== Booting Main Process ===')

  try {
    Artificer.Configuration.load('cinnamon');
    Artificer.Environment.init();
    Artificer.Settings.init();
    Artificer.Browser.init();

    console.log('Settings:',Artificer.Settings.fetch());


    // ipcMain.on('client.ready', () => {
    //   Database.createDatabase(() => {
    //     Loader.loadAllData(() => {
    //       console.log("\n=== Ready ===\n")
    //       Controllers.init();
    //       Settings.init();
    //       Browser.send('engine.ready');
    //       Browser.sendDataToClient();
    //     });
    //   });
    // });


  } catch(e) {
    console.error("\n!!! Error Booting Main Process !!!\n");
    console.error(e);
    process.exit(1)
  }

})();
