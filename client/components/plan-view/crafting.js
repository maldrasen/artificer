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
    $('#craftingDialog .recipe-list').empty();
    $.each(list, (i, data) => {
      $('#craftingDialog .recipe-list').append(buildRecipeButton(data));
    });
  }

  function buildRecipeButton(data) {
    let button = $('<a>',{ href:'#', class:'button button-small' }).append(data.name);
    let item = $('<li>').append(button);

    button.on('click', Elements.buttonAction(() => {
      console.log("Commit Recipe");
    }));

    if (data.enoughResources == false) {
      button.addClass('disabled-button');
      item.append($('<span>',{ class:'note' }).append(data.resourceSentence))
    }

    console.log("Build Recipe Button",data)

    return item;
  }

  return { init, open, close, isDialogOpen, showRecipeList };

})();
