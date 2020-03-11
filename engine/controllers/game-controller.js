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

    ipcMain.on('game.end-event', (event, choices) => {
      Event.onFinish(choices).then(() => {
        Composer.render();
      });
    });

    ipcMain.on('game.start-action-event', (event, data) => {
      EventQueue.enqueueEvent(data.code, data.state).then(() => {
        Composer.render();
      });
    });

    ipcMain.on('game.start-location-event', () => {
      Composer.renderLocationEvent();
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
