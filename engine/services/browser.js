global.Browser = (function() {
  "use strict";

  let mainWindow;
  let logWindow;

  function open() {
    mainWindow = new electron.BrowserWindow({
      width: (DEBUG ? 2400 : 1000),
      height: (DEBUG ? 1100 : 600),
      webPreferences: {
        preload: `${ROOT}/client/boot-client.js`,
        nodeIntegration: true
      },
    });

    mainWindow.loadURL(`file://${ROOT}/client/views/index.html`);
    mainWindow.setMenu(null);

    if (DEBUG) {
      mainWindow.webContents.openDevTools();
      mainWindow.webContents.executeJavaScript('window.DEBUG = true;');
      Logger.openLog(mainWindow);
    }

    mainWindow.on('closed', () => {
      mainWindow = null;
      quit();
    });
  }

  function activate() {
    if (mainWindow === null) { createWindow(); }
  }

  function quit() {
    app.quit();
  }

  return {
    open: open,
    quit: quit,
    activate: activate,
  };

})();

app.on('ready', Browser.open);
app.on('window-all-closed', Browser.quit);
app.on('activate', Browser.activate);
