
Messenger.subscribe("server.start", () => {
  Loader.loadModule('server');
  Browser.init();
});
