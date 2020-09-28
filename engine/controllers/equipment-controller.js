global.EquipmentController = (function() {

  function init() {
    ipcMain.on('equipment.get-available', async (event, data) => {
      Browser.send('equipment.show-available',(await CharacterEquipment.getAvailable(data.slot)));
    });
  }

  return { init };

})();
