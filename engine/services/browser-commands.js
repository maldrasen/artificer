global.BrowserCommands = (function() {

  function init() {
    initGameMessages();
  }

  // The game messages are primarily concerned with starting, stopping,
  // saving, and loading.
  function initGameMessages() {

    ipcMain.on('game.start', () => {
      Game.start().then(game => {
        Browser.send('render.file',{ path:Configuration.gameStartView });
      });
    });

    ipcMain.on('game.quit', () => {
      Game.clear().then(() => {
        Browser.send('render.main-menu');
      });
    })

    ipcMain.on('game.create-player', (event, options) => {
      Game.instance().then(game => {
        game.createPlayer(options)
      });
    });

    ipcMain.on('game.quick-save', () => {
      Records.saveToFile("Quick Save").then(()=>{
        Browser.send('alert',{ messsage:'Quick Save Successful.' })
      });
    });

    ipcMain.on('game.load', (event, filename) => {
      Records.loadFromFile(filename).then(()=>{
        Composer.render();
      });
    });

    ipcMain.on('game.quick-load', (event) => {
      Records.quickLoad().then(() => {
        console.log("Quick Loaded...")
        Composer.render();
      })
    });

    ipcMain.on('game.list-save-files',() => {
      Records.listSaveFiles().then(fileList => {
        Browser.send('game.file-list', fileList);
      });
    });

    ipcMain.on('game.delete-save', (event, filename) => {
      Records.deleteSaveFile(filename);
    });
  }

  return { init:init }

})();
