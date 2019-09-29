
// === Dependencies ===
global.$ = global.jQuery = require('jquery');
global.each = require('iterate-object');
global.electron = require('electron');
global.extend = require('extend');
global.fs = require('fs');
global.ipcRenderer = electron.ipcRenderer;

// === Interface ===
require(`${ROOT}/client/interface/alerts`);
require(`${ROOT}/client/interface/client`);
require(`${ROOT}/client/interface/logger`);
require(`${ROOT}/client/interface/renderer`);
require(`${ROOT}/client/interface/renderer-commands`);

// === Elements ===
require(`${ROOT}/client/interface/elements/elements`);
require(`${ROOT}/client/interface/elements/chooser`);
require(`${ROOT}/client/interface/elements/paged-content`);
require(`${ROOT}/client/interface/elements/radio-buttons`);
require(`${ROOT}/client/interface/elements/scrolling-panel`);
