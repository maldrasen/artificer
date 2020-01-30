Components.PlanView.Crafting = (function() {
  let dialogOpen = false;

  function init() {
  }

  function open() {
    dialogOpen = true;
    $('#mainContent').append($('<div>',{ id:"craftingDialog" }).append($('#craftingDialogTemplate').html()));
    requestRecipeList();
  }

  function close() {
    dialogOpen = false;
    $('#craftingDialog').remove();
  }

  function isDialogOpen() {
    return dialogOpen;
  }

  // Need to get a map of all the materials reserved by other crafting tasks.
  function getReservedMaterials() {
    return {};
  }

  function requestRecipeList() {
    Renderer.sendCommand('plan.crafting.getRecipeList', { reserved:getReservedMaterials() })
  }

  function showRecipeList(event, list) {
    console.log("Show List",list)
  }


  return { init, open, close, isDialogOpen, showRecipeList };

})();
