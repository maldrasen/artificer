(function() {

  ipcMain.on('game.start', () => {
    Browser.send('game.prepare');
    Game.start({
      event: 'game-start',
      phase: 'early',
      location: 'basement',
    });

    Composer.render();
  });

  ipcMain.on('game.debug-start', () => {
    Browser.send('game.prepare');
    Game.start({
      event: 'game-debug-start',
      phase: 'early',
      location: 'basement',
    });

    Composer.render();
  });

  ipcMain.on('game.end-event', async (event, choices) => {
    Game.endEvent(choices);
    Composer.render();
  });

})();
