global.TrainingController = (function() {

  function init() {
    ipcMain.on('training-plan.add-minion', async (event, data) => {
      const minion = await Character.lookup(data.id);

      Browser.send('training-plan.add-minion', {
        minion: (await minion.properties()),
        courses: (await TrainingPlan.availableCourses(minion))
      });
    });
  }

  return { init };

})();
