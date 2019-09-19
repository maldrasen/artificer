
// The boot-system.js loads anything Electron specific. The tests will have to
// stub these when they are used by the engine.
console.log('> Booting System')

// === Electron ===
global.fs = require('fs');
global.electron = require('electron');
global.ipcRenderer = electron.ipcRenderer;
