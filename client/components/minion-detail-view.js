Components.MinionDetailView = (function() {
  let minion;

  function init() {}

  function open(event, data) {
    minion = data;
    Renderer.showMinion();
    Renderer.unlock();
  }

  function build() {
    console.log("Build Minion View:",minion);
  }

  return { init, open, build };

})();
