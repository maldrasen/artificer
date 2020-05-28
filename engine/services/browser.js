global.Browser = (function() {

  // This value should be updated as more images are added to the game.
  const MIN_EXPECTED_IMAGES = 50;

  let mainWindow;

  function open() {
    mainWindow = new electron.BrowserWindow({
      width: (Environment.Debug ? 1800 : 1200),
      height: (Environment.Debug ? 1000 : 1000),
      webPreferences: { nodeIntegration:true },
    });

    mainWindow.loadURL(`file://${ROOT}/client/views/index.html`);
    mainWindow.setMenu(null);

    if (Environment.Debug) {
      mainWindow.webContents.openDevTools();
      mainWindow.webContents.executeJavaScript('window.DEBUG = true;');
    } else {
      mainWindow.webContents.executeJavaScript('window.DEBUG = false;');
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
      console.log(`    - ${Object.keys(ImageResource.instances).length} Images`)
      console.log(`    - ${Object.keys(Aspect.instances).length} Aspects`);
      console.log('');

      send('init.aspect-library',{
        aspects: Object.keys(Aspect.instances).map(code => Aspect.lookup(code).properties)
      });

      send('init.icon-library',{
        item: Item.forClient(),
        flavor: ItemFlavor.forClient(),
        equipment: Equipment.forClient(),
      });
    },10);
  }

  return { open, quit, activate, send, sendDataToClient };

})();

app.on('ready', Browser.open);
app.on('window-all-closed', Browser.quit);
app.on('activate', Browser.activate);

// Open new windows in the user's default browser.
app.on('web-contents-created', (e, contents) => {
  contents.on('new-window', (e, url) => {
    e.preventDefault();
    electron.shell.openExternal(url);
  });
})
