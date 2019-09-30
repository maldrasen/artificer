Components.MainMenu = (function() {

  function init() {
    $(document).on('click','.menu-show-load',Elements.buttonAction(Renderer.showSavedGames))
    $(document).on('click','.menu-show-save',Elements.buttonAction(Renderer.showSaveGame))
  }

  return {
    init: init,
  }

})();
