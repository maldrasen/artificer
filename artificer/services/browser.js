global.Browser = (function() {

  let mainWindow;

  function init() {
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
  }

  function open() {
    mainWindow = new electron.BrowserWindow({
      width: (Environment.Debug ? 1800 : 1200),
      height: (Environment.Debug ? 1000 : 1000),
      webPreferences: {
        nodeIntegration: true,
        // worldSafeExecuteJavaScript: true,
        // allowRunningInsecureContent: true,
      },
    });

    mainWindow.loadURL(`file://${ROOT}/artificer/client/views/index.html`);
    mainWindow.setMenu(null);

    if (Environment.Debug) {
      mainWindow.webContents.openDevTools();
      mainWindow.webContents.send('debug-mode');
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

  // TODO: Need to make this universal

  // // Make sure that all the ImageResources are loaded before sending data to
  // // the client the image resource should be the last mod that gets added that
  // // this function cares about.
  // function sendDataToClient() {
  //   setTimeout(() => {
  //     if (Object.keys(ImageResource.instances||{}).length < MIN_EXPECTED_IMAGES) {
  //       return sendDataToClient();
  //     }
  //
  //     console.log("> Sending Reference Data to Client");
  //     console.log(`    - ${Object.keys(ImageResource.instances).length} Images`)
  //     console.log(`    - ${Object.keys(Aspect.instances).length} Aspects`);
  //     console.log('');
  //
  //     send('init.aspect-library',{
  //       aspects: Object.keys(Aspect.instances).map(code => Aspect.lookup(code).properties)
  //     });
  //
  //     send('init.icon-library',{
  //       item: Item.forClient(),
  //       flavor: ItemFlavor.forClient(),
  //       equipment: Equipment.forClient(),
  //     });
  //   },10);
  // }

  return { init, open, quit, activate, send };
  // , sendDataToClient ;

})();
//
