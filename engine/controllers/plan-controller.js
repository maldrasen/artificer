global.PlanController = (function() {

  function init() {
    ipcMain.on('plan.crafting.getRecipeList', async (event, data) => {
      Browser.send('plan.crafting.showRecipeList',(await Recipe.getRecipeListForPlan(data)));
    });
  }

  return { init };

})();
