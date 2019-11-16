global.BrowserCommands = (function() {

  function init() {
    initGameMessages();
    initResolverMessages();
    initLocationMessages();
    initDebugMessages();
  }

  // The game messages are primarily concerned with starting, stopping,
  // saving, and loading.
  function initGameMessages() {

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
        Browser.send('alert',{ messsage:'Save Successful.' });
      });
    });

    ipcMain.on('game.quick-save', () => {
      Records.saveToFile("Quick Save").then(()=>{
        Browser.send('alert',{ messsage:'Quick Save Successful.' });
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

    // === Events ===

    ipcMain.on('game.end-event', (event, choices) => {
      Event.onFinish(choices).then(() => {
        Composer.render();
      });
    });

    ipcMain.on('game.start-location-event', () => {
      Composer.renderLocationEvent();
    });

    // === Other Views ===

    ipcMain.on('game.open-plan-view', () => {
      Composer.renderPlanView();
    });

    ipcMain.on('game.cancel', () => {
      Composer.render();
    });
  }

  // Commands for the resolver commands
  function initResolverMessages() {
    ipcMain.on('resolver.start-work', (event, plan) => {
      Resolver.startWork(plan);
    });

    ipcMain.on('resolver.start-day', () => {
      Resolver.startDay();
    });
  }

  // Commands for things that can be done from locations
  function initLocationMessages() {
    ipcMain.on('location.change', (event, data) => {
      Game.updateLocation(data.code).then(()=>{
        Composer.render();
      });
    });

    ipcMain.on('location.showMinions', async () => {
      const minions = await Character.allForClient();
      Browser.send('render.minions', minions);
    });

    ipcMain.on('location.showMinion', async (event, id) => {
      const minion = await Character.findByPk(id);
      const details = await minion.detailForClient();
      Browser.send('render.minion', details);
    });

    ipcMain.on('location.showInventory', async () => {
      const game = await Game.instance();
      const resources = await Resource.allForClient();
      const possessions = [];
      Browser.send('render.inventory',{ resources, possessions, food:game.food });
    });
  }

  function initDebugMessages() {
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
