global.Renderer = (function() {

  const VIEWS = {
    mainMenu:   { template:'#mainMenuTemplate',     build:buildMainMenu },
    createPlan: { template:'#planTemplate',         title:"Create Today's Plan" },
    inventory:  { template:'#inventoryTemplate',    title:"Inventory",     build:Components.InventoryView.build    },
    map:        { template:'#mapTemplate',          title:"Keep Map",      build:Components.LocationView.buildMap  },
    manage:     { template:'#manageTemplate',       title:"",              build:Components.ManageView.build       },
    minion:     { template:'#minionDetailTemplate', title:"Minion Detail", build:Components.MinionDetailView.build },
    player:     { template:'#playerTemplate',       title:"",              build:Components.PlayerView.build       },
    loadGame:   { template:'#loadGameTemplate',     title:'Load Game',     build:Components.SavedGames.buildLoad   },
    saveGame:   { template:'#saveGameTemplate',     title:'Save Game',     build:Components.SavedGames.buildSave   },
  };

  const TEMPLATES = [
    'character-aspects',
    'chooser',
    'dialog',
    'event',
    'inventory',
    'load-game',
    'location',
    'main-menu',
    'manage',
    'map',
    'minion-detail',
    'minion-frame',
    'minion-list',
    'minion-select-dialog',
    'plan',
    'player',
    'recipes',
    'rename-minion-dialog',
    'report',
    'save-game',
    'settings-dialog',
    'summon-minion-dialog',
    'summon-minion-result',
  ];

  function init() {
    $(document).on('click', '.send-command', Elements.buttonAction(sendCommandButton));
    $(document).on('click', '.close-overlay', Elements.buttonAction(removeOverlay));
    $(document).on('keydown', handleKeypress);
  }

  // Universal escape handler.
  function handleKeypress(e) {
    if (e.key == 'Escape') {
      Elements.Tooltip.close();

      // If a dialog or floating frame nested inside of an overlay is open, it
      // should be closed without closing the parent overlay.
      if (Elements.Dialog.isOpen()) { return Elements.Dialog.close(); }
      if (Elements.FloatingFrame.isOpen()) { return Elements.FloatingFrame.close(); }
      if (Elements.Confirm.isOpen()) { return Elements.Confirm.hideConfirm(); }
      if (Components.Backlog.isOpen()) { return Components.Backlog.close(); }
      if ($('#overlayContent').children().length > 0) { return removeOverlay(); }

      // TODO: Minion select dialog was being stupid, but I can't fix it right
      //       now, because there's nothing that actually opens it. Should just
      //       convert the minion dialog into a regular dialog, but smaller.

      // A view can only be canceled when the first child of #mainContent has
      // the can-cancel class. This applies to the PlanView and the
      // MinionListView, and probably to others in the future.
      if ($($('#mainContent').children()[0]).hasClass('can-cancel')) {
        return sendCancel();
      }
    }
  }

  function ready() {
    document.title = `Artificer`

    let body = $('body');
    body.find('.loading').empty().append('Loading Views...');
    body.append($('<div>',{ id:'mainContent' }));
    body.append($('<div>',{ class:'partial' }).data('url',`${ROOT}/client/views/layers.html`));

    each(TEMPLATES, template => {
      body.append($('<div>',{ class:'partial' }).data('url',`${ROOT}/client/views/templates/${template}.html`));
    });

    constructView();
  }

  // The prepare() function is called when a new game is started. This can be
  // used to clean up any state that would persist between games if a new game
  // is loaded.
  function prepare() {
    Components.Backlog.prepare();
  }

  function finishedLoading() {
    $('body').removeClass('main-loading').find('.loading').remove();
    showMainMenu();
  }

  // === Views ===

  function buildMainMenu() {
    if (DEBUG) { $('#mainMenu .debug-game-start').removeClass('hide'); }
  }

  function showMainMenu()   { showView(VIEWS.mainMenu);      }
  function showCreatePlan() { showOverlay(VIEWS.createPlan); }
  function showInventory()  { showOverlay(VIEWS.inventory);  }
  function showManage()     { showOverlay(VIEWS.manage);     }
  function showMinion()     { showOverlay(VIEWS.minion);     }
  function showPlayer()     { showOverlay(VIEWS.player);     }
  function showLoadGame()   { showOverlay(VIEWS.loadGame);   }
  function showSaveGame()   { showOverlay(VIEWS.saveGame);   }
  function showMap()        { showOverlay(VIEWS.map);        }

  function showView(view) {
    $('#mainContent').empty().append($(view.template).html())
    if (view.build) { view.build(); }
  }

  function showOverlay(view) {
    $('#overlayFrame').removeClass('hide').find('.title').empty().append(view.title);
    $('#overlayContent').append($(view.template).html());
    if (view.build) { view.build(); }
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
    if (data.code) { options.code = data.code; }

    sendCommand(data.command, options)
  }

  function sendCommand(command, options) {
    ipcRenderer.send(command,options);
  }

  function sendCancel() { sendCommand('game.cancel'); }

  // === Rendering ===

  function constructView() {
    if ($('.partial').length > 0) { return renderPartial(); }
    finishedLoading();
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
    init,
    sendCommand,
    sendCancel,
    ready,
    prepare,

    showCreatePlan,
    showInventory,
    showMainMenu,
    showManage,
    showMinion,
    showPlayer,
    showLoadGame,
    showSaveGame,
    showMap,

    loadFile,

    lock,
    unlock,
    removeOverlay,
  };

})();
