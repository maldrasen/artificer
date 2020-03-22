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

    // === Debug Character ===

    ipcMain.on('debug.character.redescribe', async (event, data) => {
      const character = data.id ? await Character.lookup(data.id) : await Player.instance();
      await CharacterDescriber.updateAll(character);
      console.log(`=== Described ${character.name} ===`);
      console.log(await CharacterDescriber.fullDescription(character));
    });

    ipcMain.on('debug.character.getAttribute', async (event, data) => {
      const character = data.id ? await Character.lookup(data.id) : await Player.instance();
      console.log(`Get attribute ${character.name} : [${data.attribute} = ${character[data.attribute]}]`);
    });

    ipcMain.on('debug.character.setAttribute', async (event, data) => {
      const character = data.id ? await Character.lookup(data.id) : await Player.instance();
      await character.update({ [data.attribute]:data.value });
      console.log(`Set attribute ${character.name} : [${data.attribute} = ${data.value}]`);
    });

    // === Debug Anus ===

    ipcMain.on('debug.anus.getAttribute', async (event, data) => {
      const character = data.id ? await Character.lookup(data.id) : await Player.instance();
      const anus = await character.getAnus();
      console.log(`Get anus attribute ${character.name} : [${data.attribute} = ${anus[data.attribute]}]`);
    });

    ipcMain.on('debug.anus.setAttribute', async (event, data) => {
      const character = data.id ? await Character.lookup(data.id) : await Player.instance();
      const anus = await character.getAnus();
      await anus.update({ [data.attribute]:data.value });
      await CharacterDescriber.updateAll(character);
      console.log(`Set anus attribute ${character.name} : [${data.attribute} = ${data.value}]`);
      console.log(await CharacterDescriber.fullDescription(character));
    });

    // === Debug Body ===

    ipcMain.on('debug.body.getAttribute', async (event, data) => {
      const character = data.id ? await Character.lookup(data.id) : await Player.instance();
      const body = await character.getBody();
      console.log(`Get body attribute ${character.name} : [${data.attribute} = ${body[data.attribute]}]`);
    });

    ipcMain.on('debug.body.setAttribute', async (event, data) => {
      const character = data.id ? await Character.lookup(data.id) : await Player.instance();
      const body = await character.getBody();
      await body.update({ [data.attribute]:data.value });
      await CharacterDescriber.updateAll(character);
      console.log(`Set body attribute ${character.name} : [${data.attribute} = ${data.value}]`);
      console.log(await CharacterDescriber.fullDescription(character));
    });

    // === Debug Cock ===

    ipcMain.on('debug.cock.getAttribute', async (event, data) => {
      const character = data.id ? await Character.lookup(data.id) : await Player.instance();
      const cock = await character.getCock();
      console.log(`Get cock attribute ${character.name} : [${data.attribute} = ${cock[data.attribute]}]`);
    });

    ipcMain.on('debug.cock.setAttribute', async (event, data) => {
      const character = data.id ? await Character.lookup(data.id) : await Player.instance();
      const cock = await character.getCock();
      await cock.update({ [data.attribute]:data.value });
      await CharacterDescriber.updateAll(character);
      console.log(`Set cock attribute ${character.name} : [${data.attribute} = ${data.value}]`);
      console.log(await CharacterDescriber.fullDescription(character));
    });

    // === Debug Mouth ===

    ipcMain.on('debug.mouth.getAttribute', async (event, data) => {
      const character = data.id ? await Character.lookup(data.id) : await Player.instance();
      const mouth = await character.getMouth();
      console.log(`Get mouth attribute ${character.name} : [${data.attribute} = ${mouth[data.attribute]}]`);
    });

    ipcMain.on('debug.mouth.setAttribute', async (event, data) => {
      const character = data.id ? await Character.lookup(data.id) : await Player.instance();
      const mouth = await character.getMouth();
      await mouth.update({ [data.attribute]:data.value });
      await CharacterDescriber.updateAll(character);
      console.log(`Set mouth attribute ${character.name} : [${data.attribute} = ${data.value}]`);
      console.log(await CharacterDescriber.fullDescription(character));
    });

    // === Debug Nipples ===

    ipcMain.on('debug.nipples.getAttribute', async (event, data) => {
      const character = data.id ? await Character.lookup(data.id) : await Player.instance();
      const nipples = await character.getNipples();
      console.log(`Get nipples attribute ${character.name} : [${data.attribute} = ${nipples[data.attribute]}]`);
    });

    ipcMain.on('debug.nipples.setAttribute', async (event, data) => {
      const character = data.id ? await Character.lookup(data.id) : await Player.instance();
      const nipples = await character.getNipples();
      await nipples.update({ [data.attribute]:data.value });
      await CharacterDescriber.updateAll(character);
      console.log(`Set nipples attribute ${character.name} : [${data.attribute} = ${data.value}]`);
      console.log(await CharacterDescriber.fullDescription(character));
    });

    // === Debug Pussy ===

    ipcMain.on('debug.pussy.getAttribute', async (event, data) => {
      const character = data.id ? await Character.lookup(data.id) : await Player.instance();
      const pussy = await character.getPussy();
      console.log(`Get pussy attribute ${character.name} : [${data.attribute} = ${pussy[data.attribute]}]`);
    });

    ipcMain.on('debug.pussy.setAttribute', async (event, data) => {
      const character = data.id ? await Character.lookup(data.id) : await Player.instance();
      const pussy = await character.getPussy();
      await pussy.update({ [data.attribute]:data.value });
      await CharacterDescriber.updateAll(character);
      console.log(`Set pussy attribute ${character.name} : [${data.attribute} = ${data.value}]`);
      console.log(await CharacterDescriber.fullDescription(character));
    });

    // === Debug Tits ===

    ipcMain.on('debug.tits.getAttribute', async (event, data) => {
      const character = data.id ? await Character.lookup(data.id) : await Player.instance();
      const tits = await character.getTits();
      console.log(`Get tits attribute ${character.name} : [${data.attribute} = ${tits[data.attribute]}]`);
    });

    ipcMain.on('debug.tits.setAttribute', async (event, data) => {
      const character = data.id ? await Character.lookup(data.id) : await Player.instance();
      const tits = await character.getTits();
      await tits.update({ [data.attribute]:data.value });
      await CharacterDescriber.updateAll(character);
      console.log(`Set tits attribute ${character.name} : [${data.attribute} = ${data.value}]`);
      console.log(await CharacterDescriber.fullDescription(character));
    });
  }

  return { init };

})();
