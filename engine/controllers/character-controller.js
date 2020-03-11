global.CharacterController = (function() {

  function init() {

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
      await character.rename(data.name);

      Browser.send('render.minions', (await Character.allForClient()));
    });

    ipcMain.on('character.get-summonable', async (event, data) => {
      Browser.send('character.show-summonable',{ characters:(await Character.getSummonable()) });
    });

    ipcMain.on('character.get-summon-actions', async (event, data) => {
      const character = await Character.lookup(data.id);
      const actions = await SummonAction.categorizedForCharacter(character);

      Browser.send('character.show-summon-actions',{ actions, id:data.id });
    });

    ipcMain.on('character.start-summon-action', async (event, data) => {
      const summoner = new Summoner(data.id,data.code);
      await summoner.init();
      await summoner.execute();

      Browser.send('character.show-summon-result',summoner.getResult());
    });

    ipcMain.on('character.make-aspect-adjustment', async (event, data) => {
      AspectAdjuster.adjust(data);
    });
  }

  return { init };

})();
