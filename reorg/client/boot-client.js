
// The Root is relative to the index.html file that loads this.
global.ROOT = `${__dirname}/../..`

console.log('=== Booting Client ===');

require(`${ROOT}/client/boot-interface.js`);

$(document).ready(function() {

  // === Init Elements ===
  Elements.Chooser.init();
  Elements.Confirm.init();
  Elements.Dialog.init();
  Elements.FloatingFrame.init();
  Elements.PagedContent.init();
  Elements.RadioButtons.init();
  Elements.ScrollingPanel.init();
  Elements.Tabs.init();
  Elements.Tooltip.init();

  // === Init Components ===
  Components.Backlog.init();
  Components.EquipmentFrame.init();
  Components.EventView.init();
  Components.InventoryView.init();
  Components.LocationView.init();
  Components.ManageView.init();
  Components.MinionListView.init();
  Components.MinionDetailView.init();
  Components.MinionSelectDialog.init();
  Components.PlanView.init();
  Components.PlayerView.init();
  Components.SavedGames.init();
  Components.SettingsDialog.init();
  Components.TrainingPlan.init();

  // === Init Interface ===
  Renderer.init();
  RendererCommands.init();
  Client.init();

});