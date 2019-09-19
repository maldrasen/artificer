
// =============================================================================
// The LoggerService opens the log window. It also passes messages from the
// Logger in the render thread to the logger window, writing messages to the log
// =============================================================================

global.LoggerService = (function() {
  let logWindow;

  ipcMain.on('log.open',  function(event) { openLog(); });
  ipcMain.on('log.write', function(event, arg) { writeLogMessage(arg); });

  function openLog(mainWindow) {
    if (logWindow != null) {
      return logWindow.webContents.send('log.clear');
    }

    logWindow = new electron.BrowserWindow({
      parent: mainWindow,
      titleBarStyle: 'hidden',
      darkTheme: true,
      show: false,
      width: 1200,
      height: 150,
      x:0,
      y:0,
      webPreferences: { nodeIntegration:true },
    });

    logWindow.setMenu(null);
    logWindow.loadURL(`file://${ROOT}/client/views/log.html`);
    logWindow.once('ready-to-show', () => {
      logWindow.show();
    });
  }

  function writeLogMessage(message) {
    logWindow.webContents.send('log.write', message);
  }

  return {
    openLog: openLog,
    writeLogMessage: writeLogMessage,
  };

})();
