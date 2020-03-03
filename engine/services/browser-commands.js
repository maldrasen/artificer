global.BrowserCommands = (function() {

  function init() {

    ipcMain.on('game.start', () => {
      Browser.send('game.prepare');
      Game.start(false);
    });

    ipcMain.on('game.debug-start', () => {
      Browser.send('game.prepare');
      Game.start(true);
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
      Browser.send('game.prepare');
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

    ipcMain.on('game.start-action-event', (event, data) => {
      EventQueue.enqueueEvent(data.code, data.state).then(() => {
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

    ipcMain.on('location.show-minions', async () => {
      Browser.send('render.minions', (await Character.allForClient()));
    });

    ipcMain.on('location.show-player', async () => {
      Browser.send('render.player', (await Player.forClient()));
    });

    ipcMain.on('location.show-minion', async (event, id) => {
      const minion = await Character.lookup(id);
      const details = await minion.detailForClient();
      const flags = await Flag.getAll();

      Browser.send('render.minion', {
        minion: details,
        flags: flags,
      });
    });

    ipcMain.on('location.show-inventory', async () => {
      const game = await Game.instance();
      const resources = await Resource.allForClient();
      const equipment = await CharacterEquipment.forInventory();
      Browser.send('render.inventory',{ resources, equipment, food:game.food });
    });

    // === Character ===

    ipcMain.on('character.get-equipment', async (event, data) => {
      const character = await Character.lookup(data.id);
      const equipment = await character.getAllEquipmentForView();
      Browser.send('character.show-equipment',equipment);
    });

    ipcMain.on('character.equip', async (event, data) => {
      const character = await Character.lookup(data.character_id);
      const equipment = await CharacterEquipment.lookup(data.equipment_id);

      equipment == null ?
        (await character.unequipSlot(data.slot)):
        (await character.equip(equipment, data.slot));

      setTimeout(async () => {
        Browser.send('character.show-equipment',(await character.getAllEquipmentForView()));
      },10);
    });

    ipcMain.on('character.rename', async (event, data) => {
      const character = await Character.lookup(data.id);
            character.rename(data.name);
    });

    ipcMain.on('character.make-aspect-adjustment', async (event, data) => {
      AspectAdjuster.adjust(data);
    });

    // === Equipment ===

    ipcMain.on('equipment.get-available', async (event, data) => {
      Browser.send('equipment.show-available',(await CharacterEquipment.getAvailable(data.slot)));
    });

    // === Image Resources ===

    ipcMain.on('image.lookup', async (event, data) => {
      ImageResource.where(data).then(resource => {
        if (resource) { Browser.send('image.found',{ selector:data.selector, on:data.on, url:resource.url }); }
      });
    });

    // === Plan View ===

    ipcMain.on('plan.crafting.getRecipeList', async (event, data) => {
      const list = await Recipe.getRecipeListForPlan(data);
      Browser.send('plan.crafting.showRecipeList',list);
    })

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
