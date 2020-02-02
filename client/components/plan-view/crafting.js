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

  // === Material Management ===

  // Need to get a map of all the materials reserved by other crafting tasks.
  function getReservedMaterials() {
    return {};
  }

  function commitRecipe(recipe) {
    console.log("Commit to crafting : ",recipe)
  }

  // === Recipe List Construction ===

  function requestRecipeList() {
    Renderer.sendCommand('plan.crafting.getRecipeList', { reserved:getReservedMaterials() })
  }

  function showRecipeList(event, list) {
    $('#craftingDialog .recipe-list').empty();
    $.each(list, (i, data) => {
      $('#craftingDialog .recipe-list').append(buildRecipeItem(data));
    });
  }

  function buildRecipeItem(data) {
    let button = Elements.Buttons.iconButtonWithLabel({
      label: data.name,
      code:  data.builds,
      type:  data.buildsType,
      count: data.buildsCount,
      action: button => { commitRecipe(data) }
    });

    let ingredientsIcons = $('<div>',{ class:'ingredients-icons' });
    let ingredientsNote = $('<div>',{ class:'ingredients-note' });
    let ingredientsPanel = $('<div>',{ class:'ingredients-panel' }).append(ingredientsIcons).append(ingredientsNote);
    let buttonPanel = $('<div>',{ class:'button-panel' }).append(button);

    $.each(data.ingredients, (code, count) => {
      ingredientsIcons.append(Elements.ImageResource.iconElement('item',code,count));
    });

    if (data.enoughResources == false) {
      button.addClass('disabled-button');
      ingredientsNote.append($('<span>',{ class:'cannot-build' }).append(data.resourceSentence))
    }

    return $('<li>',{ class:'recipe' }).append(buttonPanel).append(ingredientsPanel);;
  }

  return { init, open, close, isDialogOpen, showRecipeList };

})();
