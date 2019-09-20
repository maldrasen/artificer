global.Browser = (function() {
  "use strict";

  let mainWindow;

  function open() {
    mainWindow = new electron.BrowserWindow({
      width: (DEBUG ? 2400 : 1000),
      height: (DEBUG ? 1100 : 600),
      webPreferences: { nodeIntegration:true },
    });

    mainWindow.loadURL(`file://${ROOT}/client/views/index.html`);
    mainWindow.setMenu(null);

    if (DEBUG) {
      mainWindow.webContents.openDevTools();
      mainWindow.webContents.executeJavaScript('window.DEBUG = true;');
      LoggerService.openLog(mainWindow);
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

  function send(message, content) {
    mainWindow.webContents.send(message, content);
  }

  return {
    open: open,
    quit: quit,
    activate: activate,
    send: send,
  };

})();

app.on('ready', Browser.open);
app.on('window-all-closed', Browser.quit);
app.on('activate', Browser.activate);
