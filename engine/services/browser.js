global.Browser = (function() {
  let mainWindow;

  function open() {
    mainWindow = new electron.BrowserWindow({
      width: (Environment.Debug ? 1800 : 1200),
      height: (Environment.Debug ? 1000 : 800),
      webPreferences: { nodeIntegration:true },
    });

    mainWindow.loadURL(`file://${ROOT}/client/views/index.html`);
    mainWindow.setMenu(null);

    if (Environment.Debug) {
      mainWindow.webContents.openDevTools();
      mainWindow.webContents.executeJavaScript('window.DEBUG = true;');
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
