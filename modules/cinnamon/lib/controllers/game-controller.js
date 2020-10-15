(function() {

  // Only scenario specific game events should be implemented in this
  // controller. General game event handling is done in the core module.

  ipcMain.on('game.start', () => {
    Browser.send('game.prepare');
    Game.start({
      event: 'game-start',
      phase: 'early',
      location: 'basement',
    });

    AvailableEvent.add('summon-first-demon');
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

})();
