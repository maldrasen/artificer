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
    each(inventory.resources, item => { $('#inventory .resource-list').append(itemElement(item,'item')); });
    each(inventory.equipment, item => { $('#inventory .equipment-list').append(itemElement(item,'equipment')); });
  }

  function itemElement(item,type) {
    return Elements.ImageResource.iconElement(type, item.code, item.count)
  }

  function buildInventoryItem(data,type) {
    return $('<li>',{ class:'item' }).append();
  }

  return { init, open, build };

})();
