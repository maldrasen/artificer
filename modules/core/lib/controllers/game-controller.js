postal.subscribe({ channel:"server", topic:"ready", callback:() => {

  ipcMain.on('game.quit', () => {
    Game.clear().then(() => {
      Browser.send('render.main-menu');
    });
  });

  // === Save & Load ===

  ipcMain.on('game.save', (event, gameName) => {
    console.log("Game Save")
    // Records.saveToFile(gameName).then(()=>{
    //   Browser.send('alert',{ message:'Save Successful.' });
    // });
  });

  ipcMain.on('game.quick-save', () => {
    Records.saveToFile("Quick Save").then(()=>{
      Browser.send('alert',{ message:'Quick Save Successful.' });
    });
  });

  ipcMain.on('game.load', (event, filename) => {
    Browser.send('game.prepare');
    Records.loadFromFile(filename).then(()=>{
      Composer.render();
    });
  });

  ipcMain.on('game.list-save-files',() => {
    Records.listSaveFiles().then(fileList => {
      Browser.send('game.show-save-files', fileList);
    });
  });

  ipcMain.on('game.delete-save', (event, filename) => {
    console.log("Delete Save")
    // Records.deleteSaveFile(filename);
  });

  // The game.start and game.debug-start events should be implemented in a
  // controller in the scenario because they enqueue the initial events and
  // perform all the nessessary game setup.

  ipcMain.on('game.end-event', async (event, choices) => {
    await Game.endEvent(choices);
    Composer.render();
  });

  ipcMain.on('game.start-location-event', async (event, data) => {
    await Game.startLocationEvent(data.code);
    Composer.render();
  });

}});
