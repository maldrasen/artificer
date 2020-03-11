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

    ipcMain.on('debug.character.redescribe', async (event, data) => {
      const character = data.id ? await Character.lookup(data.id) : await Player.instance();
      await CharacterDescriber.updateAll(character);
      console.log(`=== Described ${character.name} ===`);
      console.log(await CharacterDescriber.fullDescription(character));
    });

    ipcMain.on('debug.character.setAttribute', async (event, data) => {
      const character = data.id ? await Character.lookup(data.id) : await Player.instance();
      await character.update({ [data.attribute]:data.value });
      console.log(`Set attribute ${data.attribute} = ${data.value} for ${character.name}.`);
    });
  }

  return { init };

})();
