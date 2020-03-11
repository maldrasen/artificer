global.ResolverController = (function() {

  function init() {
    ipcMain.on('resolver.start-work', (event, plan) => {
      Resolver.startWork(plan);
    });

    ipcMain.on('resolver.start-day', () => {
      Resolver.startDay();
    });
  }

  return { init };

})();
