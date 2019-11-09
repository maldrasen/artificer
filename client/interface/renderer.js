global.Renderer = (function() {

  const VIEWS = {
    mainMenu:   { template:'#mainMenuTemplate' },
    createPlan: { template:'#planTemplate',         title:"Create Today's Plan" },
    inventory:  { template:'#inventoryTemplate',    title:"Inventory",     build:Components.InventoryView.build    },
    map:        { template:'#mapTemplate',          title:"Keep Map",      build:Components.LocationView.buildMap  },
    minion:     { template:'#minionDetailTemplate', title:"Minion Detail", build:Components.MinionDetailView.build },
    loadGame:   { template:'#loadGameTemplate',     title:'Load Game',     build:Components.SavedGames.buildLoad   },
    saveGame:   { template:'#saveGameTemplate',     title:'Save Game',     build:Components.SavedGames.buildSave   },
  };

  const TEMPLATES = [
    'chooser',
    'event',
    'inventory',
    'load-game',
    'location',
    'main-menu',
    'map',
    'minion-detail',
    'minion-frame',
    'minion-list',
    'minion-select-dialog',
    'plan',
    'report',
    'save-game',
  ];

  function init() {
    $(document).on('click', '.send-command', Elements.buttonAction(sendCommandButton));
    $(document).on('click', '.close-overlay', Elements.buttonAction(removeOverlay));
    $(document).on('keydown', handleKeypress);
  }

  function handleKeypress(e) {
    if (e.key == 'Escape') {
      Components.MinionSelectDialog.close();
      removeOverlay();
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

  function finishedLoading() {
    $('body').removeClass('main-loading').find('.loading').remove();
    showMainMenu();
  }

  // === Views ===

  function showMainMenu()   { showView(VIEWS.mainMenu);      }
  function showCreatePlan() { showOverlay(VIEWS.createPlan); }
  function showInventory()  { showOverlay(VIEWS.inventory);  }
  function showMinion()     { showOverlay(VIEWS.minion);     }
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

    showCreatePlan,
    showInventory,
    showMainMenu,
    showMinion,
    showLoadGame,
    showSaveGame,
    showMap,

    renderFile,

    lock,
    unlock,
    removeOverlay,
  };

})();
