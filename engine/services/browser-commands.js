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

    ipcMain.on('game.load', (filename) => {
      Records.loadFromFile(filename).then(()=>{
        Game.instance().then(game => {
          Composer.renderLocation(game.location)
        })
      });
    });

    ipcMain.on('game.list-save-files',() => {
      Records.listSaveFiles().then(fileList => {
        Browser.send('game.file-list', fileList);
      });
    });
  }

  return { init:init }

})();
