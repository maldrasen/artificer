Components.SavedGames = (function() {
  let mode;

  function init() {
    $(document).on('click','.new-save-link', Elements.buttonAction(()=>{
      Renderer.sendCommand('game.save',$('#gameName').val());
      Renderer.removeOverlay();
    }));
  }

  // It's not unusual for this event to finish before the page is built. This
  // small delay should be enough to ensure that the view has been rendered.
  function buildLoad() {
    setTimeout(() => {
      mode = 'load';
      Renderer.sendCommand('game.list-save-files');
    },10);
  }

  function buildSave() {
    setTimeout(() => {
      mode = 'save';
      Renderer.sendCommand('game.list-save-files');
    },10);
  }

  function showSaves(transport, saves) {
    if (saves.length == 0) {
      $('#savedGameList').append($('<li>',{ class:'note' }).append('There are no saved games.'));
    }
    $.each(saves, (i, save) => {
      let label = $('<label>').append((mode == 'load') ? 'Load' : 'Overwrite');
      let item = $('<li>',{ class:'saved-game' });
      item.append($('<div>',{ class:'game-name' }).append(label).append((mode == 'load') ? getLoadLink(save) : getOverwriteLink(save)));
      item.append($('<div>',{ class:'delete' }).append(getDeleteLink(save,item)));
      $('#savedGameList').append(item);
    });
  }

  function getOverwriteLink(save) {
    return $('<a>',{ href:'#', class:'button-small button-primary' }).append(`${save.playerName} / ${save.gameName}`).on('click',Elements.buttonAction(()=>{
      Renderer.sendCommand('game.save',save.filename);
      Renderer.removeOverlay();
    }));
  }

  function getLoadLink(save) {
    return $('<a>',{ href:'#', class:'button-small button-primary' }).append(`${save.playerName} / ${save.gameName}`).on('click',Elements.buttonAction(()=>{
      Renderer.sendCommand('game.load',save.filename);
      Renderer.removeOverlay();
    }));
  }

  function getDeleteLink(save,item) {
    return $('<a>',{ href:'#', class:'button-small button-warning' }).append('delete').on('click',Elements.buttonAction(()=>{
      Renderer.sendCommand('game.delete-save',save.filename);
      item.remove();
      if ($('#savedGameList .saved-game').length == 0) {
        Renderer.removeOverlay();
      }
    }));
  }

  return {
    init: init,
    buildLoad: buildLoad,
    buildSave: buildSave,
    showSaves: showSaves,
  }

})();
