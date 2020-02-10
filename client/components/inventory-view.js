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

    each(inventory.resources, item => {
      $('#inventory .resource-list').append(Elements.ImageResource.iconElement('item', item.code, item.count));
    });

    each(inventory.equipment, item => {
      $('#inventory .equipment-list').append(Elements.ImageResource.iconElement('equipment', item.code, item.count));
    });
  }

  function buildInventoryItem(data,type) {
    return $('<li>',{ class:'item' }).append();
  }

  return { init, open, build };

})();
