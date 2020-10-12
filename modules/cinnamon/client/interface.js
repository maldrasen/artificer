global.Interface = (function() {

  function init() {
    Renderer.addTemplate(`${ROOT}/modules/cinnamon/views/main-menu.html`);
    Renderer.addView('main-menu',{ template:'#mainMenuTemplate', build:buildMainMenu });
  }

  function buildMainMenu() {
    if (Environment.debug) { $('#mainMenu .debug-game-start').removeClass('hide'); }
  }

  return { init }

})()
