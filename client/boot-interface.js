
// === Dependencies ===
global.$ = global.jQuery = require('jquery');
global.each = require('iterate-object');
global.electron = require('electron');
global.extend = require('extend');
global.fs = require('fs');
global.ipcRenderer = electron.ipcRenderer;

// === Components ===
require(`${ROOT}/client/components/components`);
require(`${ROOT}/client/components/event-view`);
require(`${ROOT}/client/components/inventory-view`);
require(`${ROOT}/client/components/location-view`);
require(`${ROOT}/client/components/minion-detail-view`);
require(`${ROOT}/client/components/minion-list-view`);
require(`${ROOT}/client/components/minion-select-dialog`);
require(`${ROOT}/client/components/plan-view`);
require(`${ROOT}/client/components/plan-view/current`);
require(`${ROOT}/client/components/plan-view/minions`);
require(`${ROOT}/client/components/plan-view/missions`);
require(`${ROOT}/client/components/plan-view/projects`);
require(`${ROOT}/client/components/plan-view/tasks`);
require(`${ROOT}/client/components/player-view`);
require(`${ROOT}/client/components/report-view`);
require(`${ROOT}/client/components/saved-games`);

require(`${ROOT}/client/components/event-views/name-form`);
require(`${ROOT}/client/components/event-views/sexuality-form`);
require(`${ROOT}/client/components/event-views/warning`);

// === Elements ===
require(`${ROOT}/client/elements/elements`);
require(`${ROOT}/client/elements/adjustment-badge`);
require(`${ROOT}/client/elements/alert`);
require(`${ROOT}/client/elements/chooser`);
require(`${ROOT}/client/elements/confirm`);
require(`${ROOT}/client/elements/image-resource`);
require(`${ROOT}/client/elements/paged-content`);
require(`${ROOT}/client/elements/radio-buttons`);
require(`${ROOT}/client/elements/scrolling-panel`);

// === Interface ===
require(`${ROOT}/client/interface/alerts`);
require(`${ROOT}/client/interface/client`);
require(`${ROOT}/client/interface/debug`);
require(`${ROOT}/client/interface/renderer`);
require(`${ROOT}/client/interface/renderer-commands`);
