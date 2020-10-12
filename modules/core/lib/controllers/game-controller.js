postal.subscribe({ channel:"server", topic:"ready", callback:() => {

  // The game.start and game.debug-start events should be implemented in a
  // controller in the scenario because they enqueue the initial events and
  // perform all the nessessary game setup.

  ipcMain.on('game.end-event', async (event, choices) => {
    await Game.endEvent(choices);
    Composer.render();
  });

}});
