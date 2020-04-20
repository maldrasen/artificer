global.ResolverController = (function() {

  function init() {
    ipcMain.on('resolver.submit-work-plan', (event, plan) => {
      Resolver.submitWorkPlan(plan);
    });

    ipcMain.on('resolver.start-after-work', (event, plan) => {
      Resolver.startAfterWork(plan);
    });

    ipcMain.on('resolver.submit-training-plan', (event, plan) => {
      Resolver.submitTrainingPlan(plan);
    });

    ipcMain.on('resolver.start-night', () => {
      Resolver.startNight();
    });
  }

  return { init };

})();
