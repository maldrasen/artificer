
// The Root is relative to the index.html file that loads this.
global.ROOT = require('path').normalize(`${__dirname}/../../..`);
global.$ = global.jQuery = require('jquery');
global.electron = require('electron');
global.fs = require('fs');
global.ipcRenderer = electron.ipcRenderer;

console.log('=== Booting Client ===');

// require(`${ROOT}/client/components/components`);
// require(`${ROOT}/client/components/backlog`);
// require(`${ROOT}/client/components/character-views`);
// require(`${ROOT}/client/components/equipment-frame`);
// require(`${ROOT}/client/components/event-view`);
// require(`${ROOT}/client/components/inventory-view`);
// require(`${ROOT}/client/components/location-view`);
// require(`${ROOT}/client/components/manage-view`);
// require(`${ROOT}/client/components/minion-detail-view`);
// require(`${ROOT}/client/components/minion-list-view`);
// require(`${ROOT}/client/components/minion-select-dialog`);
// require(`${ROOT}/client/components/plan-view`);
// require(`${ROOT}/client/components/plan-view/crafting`);
// require(`${ROOT}/client/components/plan-view/current`);
// require(`${ROOT}/client/components/plan-view/minions`);
// require(`${ROOT}/client/components/plan-view/missions`);
// require(`${ROOT}/client/components/plan-view/projects`);
// require(`${ROOT}/client/components/plan-view/tasks`);
// require(`${ROOT}/client/components/player-view`);
// require(`${ROOT}/client/components/report-row`);
// require(`${ROOT}/client/components/report-view`);
// require(`${ROOT}/client/components/saved-games`);
// require(`${ROOT}/client/components/settings-dialog`);
// require(`${ROOT}/client/components/training-plan`);

// === Event View Page Types ===
// require(`${ROOT}/client/components/event-view/chooser-page`);
// require(`${ROOT}/client/components/event-view/form-page`);
// require(`${ROOT}/client/components/event-view/selection-page`);

// === Elements ===
require(`${ROOT}/artificer/client/elements/elements`);
require(`${ROOT}/artificer/client/elements/alert`);
require(`${ROOT}/artificer/client/elements/badges`);
require(`${ROOT}/artificer/client/elements/buttons`);
require(`${ROOT}/artificer/client/elements/chooser`);
require(`${ROOT}/artificer/client/elements/confirm`);
require(`${ROOT}/artificer/client/elements/consent-badge`);
require(`${ROOT}/artificer/client/elements/dialog`);
require(`${ROOT}/artificer/client/elements/floating-frame`);
require(`${ROOT}/artificer/client/elements/image-resource`);
require(`${ROOT}/artificer/client/elements/paged-content`);
require(`${ROOT}/artificer/client/elements/radio-buttons`);
require(`${ROOT}/artificer/client/elements/scrolling-panel`);
require(`${ROOT}/artificer/client/elements/selection-badge`);
require(`${ROOT}/artificer/client/elements/tabs`);
require(`${ROOT}/artificer/client/elements/tooltip`);

// === Components ===
require(`${ROOT}/artificer/client/components/components`);
require(`${ROOT}/artificer/client/components/backlog`);

// === Interface ===
// require(`${ROOT}/artificer/client/interface/adjustment`);
// require(`${ROOT}/artificer/client/interface/alerts`);
require(`${ROOT}/artificer/client/interface/client`);
// require(`${ROOT}/artificer/client/interface/debug`);
require(`${ROOT}/artificer/client/interface/renderer`);
// require(`${ROOT}/artificer/client/interface/renderer-commands`);

// === Reference ===
// require(`${ROOT}/client/reference/aspects`);

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
//   Components.EquipmentFrame.init();
//   Components.EventView.init();
//   Components.InventoryView.init();
//   Components.LocationView.init();
//   Components.ManageView.init();
//   Components.MinionListView.init();
//   Components.MinionDetailView.init();
//   Components.MinionSelectDialog.init();
//   Components.PlanView.init();
//   Components.PlayerView.init();
//   Components.SavedGames.init();
//   Components.SettingsDialog.init();
//   Components.TrainingPlan.init();

  // === Init Interface ===
  Renderer.init();
  // RendererCommands.init();
  Client.init();

});
