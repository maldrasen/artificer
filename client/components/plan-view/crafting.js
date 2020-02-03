Components.PlanView.Crafting = (function() {

  function init() {
  }

  function open() {
    Elements.Dialog.open({
      id: 'recipes',
      template: '#recipesTemplate',
      title: 'Recipes' ,
      dialog: 'simple',
    });

    requestRecipeList();
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
    $('#recipes .recipe-list').empty();
    $.each(list, (i, data) => {
      $('#recipes .recipe-list').append(buildRecipeItem(data));
    });

    Elements.ScrollingPanel.resizeAll();
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
    let ingredientsNote = $('<div>',{ class:'ingredients-note' }).append(data.note);
    let ingredientsPanel = $('<div>',{ class:'ingredients-panel' }).append(ingredientsIcons).append(ingredientsNote);
    let buttonPanel = $('<div>',{ class:'button-panel' }).append(button);

    $.each(data.ingredients, (code, count) => {
      ingredientsIcons.append(Elements.ImageResource.iconElement('item',code,count));
    });

    if (data.enoughResources == false) {
      button.addClass('disabled-button');
      ingredientsNote.addClass('cannot-build');
    }

    return $('<li>',{ class:'recipe' }).append(buttonPanel).append(ingredientsPanel);;
  }

  return { init, open, showRecipeList };

})();
