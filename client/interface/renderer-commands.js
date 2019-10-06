global.RendererCommands = (function() {

  function init() {
    ipcRenderer.on('alert', Alerts.showAlert);

    ipcRenderer.on('engine.ready', Renderer.ready);
    ipcRenderer.on('game.file-list', Components.SavedGames.showSaves);

    ipcRenderer.on('render.file', Renderer.renderFile);
    ipcRenderer.on('render.main-menu', Renderer.showMainMenu);
    ipcRenderer.on('render.event', Components.EventView.build);
    ipcRenderer.on('render.location', Components.LocationView.build);
    ipcRenderer.on('render.plan', Components.PlanView.build);
    ipcRenderer.on('render.report', Components.ReportView.build);
  }

  return {
    init: init,
  };

})();
