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
      $('#inventory .resource-list').append(buildInventoryItem(resource));
    });
  }

  function buildInventoryItem(data) {
    return $(`
      <li class='item'>
        <div class='item-icon large-icon'>
          <img src='${data.icon}' height=40 width=40/>
        </div>
        <span class='item-name'>${data.count} ${data.name}</span>
      </li>
    `);
  }

  return { init, open, build };

})();
