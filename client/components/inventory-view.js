Components.InventoryView = (function() {
  let inventory;

  function init() {}

  function open(event, items) {
    inventory = items;
    Renderer.showInventory();
  }

  function build() {
    console.log("Build",inventory)
  }

  return { init, open, build };

})();
