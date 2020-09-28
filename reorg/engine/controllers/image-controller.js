global.ImageController = (function() {

  function init() {

    ipcMain.on('image.lookup', async (event, data) => {
      ImageResource.where(data).then(resource => {
        if (resource) { Browser.send('image.found',{ selector:data.selector, on:data.on, url:resource.url }); }
      });
    });
  }

  return { init };

})();
