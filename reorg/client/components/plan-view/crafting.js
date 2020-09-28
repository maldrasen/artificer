Components.PlanView.Crafting = (function() {
  let reservedMaterials;

  // TODO: Eventually this init will need implemented because the list of
  //       recipes should be categorized somehow, either in tabs or expanding
  //       panels or something.
  function init() { }

  function open() {
    Elements.Dialog.open({
      id: 'recipes',
      template: '#recipesTemplate',
      title: 'Recipes' ,
      dialog: 'simple',
    });

    requestRecipeList();
  }

  // When a recipe is selected we add a task to the current plan. The engine
  // needs the task code and the recipe code. The current control needs the
  // time and the ingredients list for if when the task is canceled those
  // resources need to be released.
  function commitRecipe(recipe) {
    reserveMaterials(recipe.ingredients);

    Elements.Dialog.close();
    Components.PlanView.Current.addCommitted(recipe.time);
    Components.PlanView.Current.addTask({
      name: `Craft: ${recipe.name}`,
      task: {
        code: 'craft',
        recipe: recipe.code,
        ingredients: recipe.ingredients,
        time: recipe.time,
      },
    });
  }

  // Reset needs to be called when the plan view is opened, because the
  // reserved materials only apply to that instance of the plan.
  function reset() {
    reservedMaterials = {};
  }

  // === Material Management ===

  function getReservedMaterials() {
    return reservedMaterials;
  }

  function reserveMaterials(ingredients) {
    $.each(ingredients, (code,count) => {
      if (reservedMaterials[code] == null) { reservedMaterials[code] = 0; }
      reservedMaterials[code] += count;
    });
  }

  function releaseMaterials(ingredients) {
    $.each(ingredients, (code,count) => {
      reservedMaterials[code] -= count;
      if (reservedMaterials[code] == 0) { delete reservedMaterials[code]; }
    });
  }

  // === Recipe List Construction ===

  function requestRecipeList() {
    Renderer.sendCommand('plan.crafting.getRecipeList', { reserved:getReservedMaterials() })
  }

  function showRecipeList(event, list) {
    const committed = Components.PlanView.Current.getCommitted();

    $('#recipes .recipe-list').empty();
    each(list, data => {
      $('#recipes .recipe-list').append(buildRecipeItem(data,committed));
    });

    Elements.ScrollingPanel.resizeAll();
  }

  function buildRecipeItem(data, committed) {
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
    else if (data.time + committed > 4) {
      button.addClass('disabled-button');
      ingredientsNote.addClass('cannot-build');
      ingredientsNote.append(` There's not enough time left in the day for me to make this.`);
    }

    return $('<li>',{ class:'recipe' }).append(buttonPanel).append(ingredientsPanel);;
  }

  return { init, open, reset, showRecipeList, releaseMaterials };

})();