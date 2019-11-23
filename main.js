global.electron = require('electron');
global.ipcMain = electron.ipcMain;
global.app = electron.app;

global.VERSION = '0.11.1';
global.DEBUG = true;
global.ROOT = require('path').normalize(`${__dirname}`).replace(/\\/g,"/");

require(`${ROOT}/engine/boot-main.js`);
