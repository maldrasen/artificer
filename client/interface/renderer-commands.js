global.RendererCommands = (function() {

  function init() {
    ipcRenderer.on('alert', Alerts.showAlert);

    ipcRenderer.on('engine.ready', Renderer.ready);
    ipcRenderer.on('render.file', Renderer.renderFile);
    ipcRenderer.on('render.event', Components.EventView.build);
    ipcRenderer.on('render.main-menu', Renderer.showMainMenu);
    ipcRenderer.on('render.location', Renderer.renderLocation);

    ipcRenderer.on('game.file-list', Components.SavedGames.showSaves);
  }

  return {
    init: init,
  };

})();
