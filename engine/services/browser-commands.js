global.BrowserCommands = (function() {

  function init() {

    ipcMain.on('game.start', () => {
      Game.start();
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

    ipcMain.on('game.start-location-event', () => {
      Composer.renderLocationEvent();
    });

    ipcMain.on('game.open-plan-view', () => {
      Composer.renderPlanView();
    });

    ipcMain.on('game.cancel', () => {
      Composer.render();
    });

    // === Resolver ===

    ipcMain.on('resolver.start-work', (event, plan) => {
      Resolver.startWork(plan);
    });

    ipcMain.on('resolver.start-day', () => {
      Resolver.startDay();
    });

    // === Location ===

    ipcMain.on('location.change', (event, data) => {
      Game.updateLocation(data.code).then(()=>{
        Composer.render();
      });
    });

    ipcMain.on('location.showMinions', async () => {
      Browser.send('render.minions', (await Character.allForClient()));
    });

    ipcMain.on('location.showPlayer', async () => {
      Browser.send('render.player', (await Player.forClient()));
    });

    ipcMain.on('location.showMinion', async (event, id) => {
      const minion = await Character.findByPk(id);
      const details = await minion.detailForClient();
      const flags = await Flag.getAll();

      Browser.send('render.minion', {
        minion: details,
        flags: flags,
      });
    });

    ipcMain.on('location.showInventory', async () => {
      const game = await Game.instance();
      const resources = await Resource.allForClient();
      const possessions = [];
      Browser.send('render.inventory',{ resources, possessions, food:game.food });
    });

    // === Character ===

    ipcMain.on('character.make-aspect-adjustment', async (event, data) => {
      AspectAdjuster.adjust(data);
    });

    // === Debug ===

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

  return { init:init }

})();
