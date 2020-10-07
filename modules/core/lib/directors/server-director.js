
postal.subscribe({ channel:"server", topic:"start", callback:() => {
  Loader.loadModule('server');

console.log("Starting server now...")

  Browser.init();
}});

// When client is open and ready:
// Browser.sendDataToClient();
// Browser.send('engine.ready');
