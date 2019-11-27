global.RendererCommands = (function() {

  function init() {
    ipcRenderer.on('alert', Alerts.showEngineAlert);

    ipcRenderer.on('engine.ready', Renderer.ready);
    ipcRenderer.on('game.file-list', Components.SavedGames.showSaves);
    ipcRenderer.on('render.file', Renderer.renderFile);
    ipcRenderer.on('render.main-menu', Renderer.showMainMenu);

    ipcRenderer.on('render.event', Components.EventView.build);
    ipcRenderer.on('render.location', Components.LocationView.build);
    ipcRenderer.on('render.minions', Components.MinionListView.build);
    ipcRenderer.on('render.minion', Components.MinionDetailView.open);
    ipcRenderer.on('render.player', Components.PlayerView.open);
    ipcRenderer.on('render.inventory', Components.InventoryView.open);
    ipcRenderer.on('render.plan', Components.PlanView.build);
    ipcRenderer.on('render.report', Components.ReportView.build);

    ipcRenderer.on('image.found', Elements.ImageResource.set);
  }

  return { init };

})();
