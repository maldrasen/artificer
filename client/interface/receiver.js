global.Receiver = (function() {

  function init() {
    ipcRenderer.on('alert', Alerts.showEngineAlert);

    // ipcRenderer.on('init.icon-library', Elements.ImageResource.initIconLibrary);
    // ipcRenderer.on('init.aspect-library', Aspects.init);

    ipcRenderer.on('game.prepare', Renderer.prepare);
    // ipcRenderer.on('game.file-list', Components.SavedGames.showSaves);

    ipcRenderer.on('render.event', Components.EventView.build);
    ipcRenderer.on('render.location', Components.LocationView.build);
    ipcRenderer.on('render.main-menu', () => { Renderer.showView('main-menu'); });
    // ipcRenderer.on('render.inventory', Components.InventoryView.open);
    // ipcRenderer.on('render.manage', Components.ManageView.open);
    // ipcRenderer.on('render.minion', Components.MinionDetailView.open);
    // ipcRenderer.on('render.minions', Components.MinionListView.build);
    // ipcRenderer.on('render.plan', Components.PlanView.build);
    // ipcRenderer.on('render.player', Components.PlayerView.open);
    // ipcRenderer.on('render.report', Components.ReportView.build);
    // ipcRenderer.on('render.settings', Components.SettingsDialog.open);
    // ipcRenderer.on('render.training-plan', Components.TrainingPlan.build);

    ipcRenderer.on('server.ready', Renderer.ready);

    // ipcRenderer.on('image.found', Elements.ImageResource.set);
    // ipcRenderer.on('character.show-equipment', Components.EquipmentFrame.showEquipment);
    // ipcRenderer.on('equipment.show-available', Components.EquipmentFrame.showAvailableEquipment);
    // ipcRenderer.on('plan.crafting.showRecipeList', Components.PlanView.Crafting.showRecipeList);
    // ipcRenderer.on('training-plan.add-minion', Components.TrainingPlan.addMinion);
  }

  return {
    init: init
  };

})();
