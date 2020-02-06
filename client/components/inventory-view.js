Components.InventoryView = (function() {
  let inventory;

  function init() {}

  function open(event, items) {
    inventory = items;
    Renderer.showInventory();
  }

  function build() {
    $('#inventory .resource-list').empty();
    $('#inventory .possession-list').empty();
    $('#inventory .top-row .food.value').empty().append(inventory.food);

    each(inventory.resources, resource => {
      $('#inventory .resource-list').append(buildInventoryItem(resource,'item'));
    });
  }

  function buildInventoryItem(data,type) {
    let icon = Elements.ImageResource.iconElement(type,data.code,1);
    let label = $('<span>',{ class:'item-name' }).append(`${data.count} ${data.name}`);
    return $('<li>',{ class:'item' }).append(icon).append(label);
  }

  return { init, open, build };

})();
