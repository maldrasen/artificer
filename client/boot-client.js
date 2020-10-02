
global.ROOT = require('path').normalize(`${__dirname}/../..`);
global.$ = global.jQuery = require('jquery');
global.each = require('iterate-object');
global.electron = require('electron');
global.fs = require('fs');
global.ipcRenderer = electron.ipcRenderer;

require(`${ROOT}/boot/configuration`);
require(`${ROOT}/boot/environment`);
require(`${ROOT}/boot/loader`);
require(`${ROOT}/boot/settings`);

(function() {
  console.log('=== Booting Client ===');

  try {
    Configuration.load(require(`${ROOT}/package.json`));
    Environment.init();
    Settings.init();

    require(`${ROOT}/client/elements/elements.js`)

    Loader.loadDirectory(`${ROOT}/client/elements`);
    Loader.loadDirectory(`${ROOT}/client/interface`);
    Loader.loadDirectory(`${ROOT}/scenarios/${Configuration.scenario}/client`);
  } catch(e) {
    console.error("\n!!! Error Booting Client Process !!!\n");
    console.error(e);
  }

})();



$(document).ready(function() {

  // The Interface object should be added by the scenario.
  Interface.init();

  // === Init Elements ===
  // Elements.Chooser.init();
  // Elements.Confirm.init();
  // Elements.Dialog.init();
  // Elements.FloatingFrame.init();
  // Elements.PagedContent.init();
  // Elements.RadioButtons.init();
  // Elements.ScrollingPanel.init();
  // Elements.Tabs.init();
  // Elements.Tooltip.init();

  // === Init Components ===
  // Components.Backlog.init();
  // Components.EquipmentFrame.init();
  // Components.EventView.init();
  // Components.InventoryView.init();
  // Components.LocationView.init();
  // Components.ManageView.init();
  // Components.MinionListView.init();
  // Components.MinionDetailView.init();
  // Components.MinionSelectDialog.init();
  // Components.PlanView.init();
  // Components.PlayerView.init();
  // Components.SavedGames.init();
  // Components.SettingsDialog.init();
  // Components.TrainingPlan.init();

  // === Init Interface ===
  Renderer.init();
  Receiver.init();

  // Signal to the main process that the client is fully loaded.
  ipcRenderer.send('client.ready');
});
