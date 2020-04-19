global.GameController = (function() {

  function init() {
    ipcMain.on('game.start', () => {
      Browser.send('game.prepare');
      Game.start(false);
    });

    ipcMain.on('game.debug-start', () => {
      Browser.send('game.prepare');
      Game.start(true);
    });

    ipcMain.on('game.quit', () => {
      Game.clear().then(() => {
        Browser.send('render.main-menu');
      });
    })

    ipcMain.on('game.fetch-settings', () => {
      Browser.send('render.settings',Settings.fetch());
    });

    ipcMain.on('game.update-settings', async (event, settings) => {
      await Settings.update(settings);
    });

    // === Save & Load ===

    ipcMain.on('game.save', (event, gameName) => {
      Records.saveToFile(gameName).then(()=>{
        Browser.send('alert',{ message:'Save Successful.' });
      });
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
        Browser.send('game.file-list', fileList);
      });
    });

    ipcMain.on('game.delete-save', (event, filename) => {
      Records.deleteSaveFile(filename);
    });

    // === Game Events ===

    ipcMain.on('game.end-event', async (event, choices) => {
      await Game.endEvent(choices);
      Composer.render();
    });

    ipcMain.on('game.start-event', (event, data) => {
      CurrentEvent.set(data.code, data.state||{})
      Composer.render();
    });

    ipcMain.on('game.open-plan-view', () => {
      Composer.renderPlanView();
    });

    ipcMain.on('game.cancel', () => {
      Composer.render();
    });
  }

  return { init };

})();
