global.RendererCommands = (function() {

  function init() {
    ipcRenderer.on('alert', Alerts.showAlert);

    ipcRenderer.on('engine.ready', Renderer.ready);
    ipcRenderer.on('render.file', Renderer.renderFile);
    ipcRenderer.on('render.main-menu', Renderer.showMainMenu);
    ipcRenderer.on('render.location', Renderer.renderLocation);
  }

  return {
    init: init,
  };

})();
