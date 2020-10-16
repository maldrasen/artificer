Components.PersistenceViews = (function() {
  let mode;

  function init() {
    //     $(document).on('click','.new-save-link', Elements.buttonAction(()=>{
    //       Renderer.sendCommand('game.save',$('#gameName').val());
    //       Renderer.removeOverlay();
    //     }));
  }

  function showLoadGame() {
    Elements.WindowManager.addOverlay({
      title: 'Load Game',
      template: '#loadGameTemplate',
      build: buildLoad,
    });
  }

  function showSaveGame() {
    Elements.WindowManager.addOverlay({
      title: 'Save Game',
      template: '#saveGameTemplate',
      build: buildSave,
    });
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

  function showSaveFiles(event, saves) {
    if (saves.length == 0) {
      $('#savedGameList').append($('<li>',{ class:'note' }).append('There are no saved games.'));
    }
    each(saves, save => {
      let label = $('<label>').append((mode == 'load') ? 'Load' : 'Overwrite');
      let item = $('<li>',{ class:'saved-game' });
      item.append($('<div>',{ class:'game-name' }).append(label).append((mode == 'load') ? getLoadLink(save) : getOverwriteLink(save)));
      item.append($('<div>',{ class:'delete' }).append(getDeleteLink(save,item)));
      $('#savedGameList').append(item);
    });
  }

  //   function getOverwriteLink(save) {
  //     return $('<a>',{ href:'#', class:'button-small button-primary' }).append(`${save.playerName} / ${save.gameName}`).on('click',Elements.buttonAction(()=>{
  //       Renderer.sendCommand('game.save',save.filename);
  //       Renderer.removeOverlay();
  //     }));
  //   }

  function getLoadLink(save) {
    let action = () => {
      Renderer.sendCommand('game.load',save.filename);
      Elements.WindowManager.removeOverlay();
    }

    return $('<a>',{ href:'#', class:'button-small button-primary' }).
      on('click',Elements.buttonAction(action)).
      append(`${save.playerName} / ${save.gameName}`);
  }

  function getDeleteLink(save,item) {
    let action = () => {
      Renderer.sendCommand('game.delete-save',save.filename);
      item.remove();
      if ($('#savedGameList .saved-game').length == 0) {
        Elements.WindowManager.removeOverlay();
      }
    }

    return $('<a>',{ href:'#', class:'button-small button-warning' }).
      on('click',Elements.buttonAction(action)).
      append('delete');
  }

  return {
    init,
    showLoadGame,
    showSaveGame,
    showSaveFiles,
  };

})();
