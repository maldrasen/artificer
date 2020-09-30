global.Interface = (function() {

  function init() {
    Renderer.addTemplate(`${ROOT}/scenarios/cinnamon/views/main-menu.html`);
    Renderer.addView('main-menu',{ template:'#mainMenuTemplate', build:buildMainMenu });
  }

  function buildMainMenu() {
    if (DEBUG) { $('#mainMenu .debug-game-start').removeClass('hide'); }
  }

  return { init }

})()
