global.ManageController = (function() {

  function init() {
    ipcMain.on('manage.set-names', async (event, data) => {
      Flag.setAll({
        'location.keep-name': data.keepName,
        'player.title': data.playerTitle,
      });
      Composer.renderManageView();
    });
  }

  return { init };

})();
