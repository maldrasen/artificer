global.electron = require('electron');
global.ipcMain = electron.ipcMain;
global.app = electron.app;

global.VERSION = '0.6.0';
global.ROOT = require('path').normalize(`${__dirname}`).replace(/\\/g,"/");

// require(`${ROOT}/engine/services/configuration`);
// require(`${ROOT}/engine/services/environment`);
// require(`${ROOT}/engine/services/settings`);
// require(`${ROOT}/engine/services/browser`);

// Environment.init();
// Configuration.load('cinnamon');
//
// console.log(Environment)
// Configuration.load('cinnamon');
// Settings.init();
// Browser.init();

console.log("Booting...")

process.exit(0)
