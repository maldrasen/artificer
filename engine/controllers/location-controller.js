global.LocationController = (function() {

  function init() {
    ipcMain.on('location.change', (event, data) => {
      Game.setLocation(data.code);
      Composer.render();
    });

    ipcMain.on('location.show-minions', async () => {
      const minions = await Character.allForClient();
      const summonAvailable = await Location.summonAvailable();
      Browser.send('render.minions', { minions, summonAvailable });
    });

    ipcMain.on('location.show-player', async () => {
      Browser.send('render.player', (await Player.forClient()));
    });

    ipcMain.on('location.show-minion', async (event, id) => {
      const minion = await Character.lookup(id);
      const details = await minion.detailForClient();

      Browser.send('render.minion', {
        minion: details,
        flags: Flag.getAll(),
      });
    });

    ipcMain.on('location.show-inventory', async () => {
      const resources = await Resource.allForClient();
      const equipment = await CharacterEquipment.forInventory();
      Browser.send('render.inventory',{ resources, equipment, food:Game.food() });
    });
  }

  return { init };

})();
