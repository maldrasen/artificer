global.Renderer = (function() {
  const logger = new Logger('Renderer', 'rgb(150,200,200)');

  const VIEWS = {
    createPlan: { path:`${ROOT}/client/views/screens/create-plan.html`, title:"Create Today's Plan" },
    mainMenu:   { path:`${ROOT}/client/views/screens/main-menu.html` },
    savedGames: { path:`${ROOT}/client/views/screens/saved-games.html`, title:'Load Game', build:Components.SavedGames.buildLoad },
    saveGame:   { path:`${ROOT}/client/views/screens/save-game.html`, title:'Save Game', build:Components.SavedGames.buildSave },
  };

  function init() {
    $(document).on('click', '.send-command', Elements.buttonAction(sendCommandButton));
    $(document).on('click', '.close-overlay', Elements.buttonAction(removeOverlay));
    $(document).on('keydown', handleKeypress);
  }

  function handleKeypress(e) {
    if (e.key == 'Escape') {
      if ($('#overlayFrame').hasClass('hide') == false) { removeOverlay(); }
    }
  }

  function ready() {
    document.title = `Artificer`

    let body = $('body').removeClass('main-loading').empty();
    body.append($('<div>',{ id:'mainContent' }));
    body.append($('<div>',{ class:'partial' }).data('url',`${ROOT}/client/views/layers.html`));
    body.append($('<div>',{ class:'partial' }).data('url',`${ROOT}/client/views/templates/chooser.html`));
    body.append($('<div>',{ class:'partial' }).data('url',`${ROOT}/client/views/templates/event.html`));
    body.append($('<div>',{ class:'partial' }).data('url',`${ROOT}/client/views/templates/location.html`));
    showMainMenu();
  }

  // === Views ===

  function showMainMenu()   { showView(VIEWS.mainMenu);      }
  function showCreatePlan() { showOverlay(VIEWS.createPlan); }
  function showSavedGames() { showOverlay(VIEWS.savedGames); }
  function showSaveGame()   { showOverlay(VIEWS.saveGame);   }

  function showView(view) {
    $('#mainContent').empty().append($('<div>',{ class:'partial' }).data('url',view.path))
    if (view.build) { view.build(); }
    constructView();
  }

  function showOverlay(view) {
    $('#overlayFrame').removeClass('hide').find('.title').empty().append(view.title);
    $('#overlayContent').append($('<div>',{ class:'partial' }).data('url',view.path));
    if (view.build) { view.build(); }
    constructView();
  }

  function removeOverlay() {
    $('#overlayFrame').addClass('hide')
    $('#overlayContent').empty();
  }

  // === Shared Button Actions ===

  // The standard view link will look something like this:
  //
  //   <a href='#' class='send-command' data-command='model.action'>Title</a>
  //
  // This will send a command down to the main thread. Commands will probably
  // also need to support a number of other data attributes that are used as
  // arguments. They'll be added as we find them.
  function sendCommandButton() {
    let data = $(this).data();
    let options = {};

    if (data.id) { options.id = data.id; }

    sendCommand(data.command, options)
  }

  function sendCommand(command, options) {
    ipcRenderer.send(command,options);
  }

  // === Rendering ===

  // Render file simply loads the content of an HTML file into the #mainContent
  // element, replacing the view entirely. I think I should get rid of this
  // soon as directly rendering a file is a bit too low level, but useful to
  // have when building all this.
  //
  // Arguments:
  //    path (required) - Path to the HTML file.
  function renderFile(transport, options) {
    loadFile(`${ROOT}/${options.path}`, (data) => {
      $('#mainContent').empty().append(data);
      constructView();
    });
  }

  function constructView() {
    if ($('.partial').length > 0) { return renderPartial(); }
    Elements.PagedContent.build();
  }

  function renderPartial() {
    let partial = $($('.partial')[0]);
    loadFile(partial.data('url'), (data)=>{
      partial.replaceWith(data);
      constructView();
    });
  }

  function loadFile(viewPath, callback) {
    logger.info(`Load ${viewPath}`);

    fs.readFile(viewPath, 'utf8', function(err, data) {
      if (err) {
        throw err;
      }
      callback(data.replace(/@ROOT/g,ROOT));
    });
  }

  function lock() { $('#viewLock').removeClass('hide'); }
  function unlock() { $('#viewLock').addClass('hide'); }

  return {
    init: init,
    sendCommand: sendCommand,
    ready: ready,

    showCreatePlan: showCreatePlan,
    showMainMenu: showMainMenu,
    showSaveGame: showSaveGame,
    showSavedGames: showSavedGames,

    renderFile: renderFile,

    lock: lock,
    unlock: unlock,
    removeOverlay: removeOverlay,
  };

})();
