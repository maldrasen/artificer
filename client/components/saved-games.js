Components.SavedGames = (function() {

  function init() {
    console.log("Saved Games Init")
  }

  // It's not unusual for this event to finish before the page is built. This
  // small delay should be enough to ensure that the view has been rendered.
  function build() {
    setTimeout(()=>{
      Renderer.sendCommand('game.list-save-files');
    },10);
  }

  function showSaves(transport, saves) {
    $.each(saves, (i, save) => {
      let item = $('<li>',{ class:'saved-game' });
      let label = $('<label>').append('Load');

      let loadLink = $('<a>',{ href:'#' }).append(`${save.playerName} / ${save.gameName}`).on('click',Elements.buttonAction(()=>{
        Renderer.sendCommand('game.load',save.filename);
        Renderer.removeOverlay();
      }));

      let deleteLink = $('<a>',{ href:'#' }).append('delete').on('click',Elements.buttonAction(()=>{
        Renderer.sendCommand('game.delete-save',save.filename);
        item.remove();
      }));

      item.append($('<div>',{ class:'game-name' }).append(label).append(loadLink));
      item.append($('<div>',{ class:'delete' }).append(deleteLink));

      $('#savedGameList').append(item);
    });
  }

  return {
    init: init,
    build: build,
    showSaves: showSaves,
  }

})();
