
global.fs = require('fs');
global.hash = require('object-hash');
global.each = require('iterate-object');
global.electron = require('electron');
global.ipcMain = electron.ipcMain;
global.app = electron.app;

global.ROOT = require('path').normalize(`${__dirname}`).replace(/\\/g,"/");

require(`${ROOT}/boot/boot-main`);
