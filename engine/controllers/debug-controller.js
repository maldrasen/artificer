global.DebugController = (function() {

  function init() {
    ipcMain.on('debug.game.printFlags', () => {
      Flag.printFlags();
    });

    ipcMain.on('debug.game.printAvailableEvents', () => {
      AvailableEvent.printAll();
    });

    ipcMain.on('debug.game.printEventQueue', async () => {
      EventQueue.printEventQueue();
    });
  }

  return { init };

})();
