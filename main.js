global.electron = require('electron');
global.ipcMain = electron.ipcMain;
global.app = electron.app;

global.VERSION = '0.0.0';
global.ROOT = require('path').normalize(`${__dirname}`).replace(/\\/g,"/");

require(`${ROOT}/artificer/services/configuration`);
require(`${ROOT}/artificer/services/environment`);
require(`${ROOT}/artificer/services/settings`);
require(`${ROOT}/artificer/services/browser`);

Environment.load();
Configuration.load('cinnamon');
Settings.init();
Browser.init();
