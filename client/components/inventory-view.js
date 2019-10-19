Components.InventoryView = (function() {

  function init() {}

  function build(event, items) {
    console.log("Build Inventory View:", items)
  }

  return { init, build };

})();
