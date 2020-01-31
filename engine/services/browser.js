global.Browser = (function() {

  // This value should be updated as more images are added to the game.
  const MIN_EXPECTED_IMAGES = 36;

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

  // Make sure that all the ImageResources are loaded before sending data to
  // the client the image resource should be the last mod that gets added that
  // this function cares about.
  function sendDataToClient() {
    setTimeout(() => {
      if (Object.keys(ImageResource.instances||{}).length < MIN_EXPECTED_IMAGES) {
        return sendDataToClient();
      }

      console.log("> Sending Reference Data to Client");
      console.log(`    - ${Object.keys(ImageResource.instances).length} Images\n`)

      send('image.init-icon-library', ImageResource.iconsForClient());
    },10);
  }

  return { open, quit, activate, send, sendDataToClient };

})();

app.on('ready', Browser.open);
app.on('window-all-closed', Browser.quit);
app.on('activate', Browser.activate);
