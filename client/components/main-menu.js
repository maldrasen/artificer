Components.MainMenu = (function() {

  function init() {
    $(document).on('click','.menu-show-load',Elements.buttonAction(Renderer.showSavedGames))
  }

  return {
    init: init,
  }

})();
