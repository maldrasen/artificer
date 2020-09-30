global.Renderer = (function() {
  //   mainMenu:   { template:'#mainMenuTemplate',     build:buildMainMenu },
  //   createPlan: { template:'#planTemplate',         title:"Create Today's Plan" },
  //   inventory:  { template:'#inventoryTemplate',    title:"Inventory",     build:Components.InventoryView.build    },
  //   map:        { template:'#mapTemplate',          title:"Keep Map",      build:Components.LocationView.buildMap  },
  //   manage:     { template:'#manageTemplate',       title:"",              build:Components.ManageView.build       },
  //   minion:     { template:'#minionDetailTemplate', title:"Minion Detail", build:Components.MinionDetailView.build },
  //   player:     { template:'#playerTemplate',       title:"",              build:Components.PlayerView.build       },
  //   loadGame:   { template:'#loadGameTemplate',     title:'Load Game',     build:Components.SavedGames.buildLoad   },
  //   saveGame:   { template:'#saveGameTemplate',     title:'Save Game',     build:Components.SavedGames.buildSave   },

  const VIEWS = {

  };

  function init() {
    // $(document).on('click', '.send-command', Elements.buttonAction(sendCommandButton));
    // $(document).on('click', '.close-overlay', Elements.buttonAction(removeOverlay));
  }

  function ready() {
    document.title = Configuration.title
    $('body').removeClass('main-loading').find('.loading').remove();

    Templates.installTemplates();
    Renderer.showView('main-menu');
    prepare()
  }

  // The prepare() function is called when a new game is started. This can be
  // used to clean up any state that would persist between games if a new game
  // is loaded. It should esentially reset everything in the UI, though only
  // the backlog really maintains any kind of state right now.
  function prepare() {
    // Components.Backlog.prepare();
  }

  // === Views ===






  // function buildMainMenu() {
  //   if (DEBUG) { $('#mainMenu .debug-game-start').removeClass('hide'); }
  // }

  // function showMainMenu()   { showView(VIEWS.mainMenu);      }
  // function showCreatePlan() { showOverlay(VIEWS.createPlan); }
  // function showInventory()  { showOverlay(VIEWS.inventory);  }
  // function showManage()     { showOverlay(VIEWS.manage);     }
  // function showMinion()     { showOverlay(VIEWS.minion);     }
  // function showPlayer()     { showOverlay(VIEWS.player);     }
  // function showLoadGame()   { showOverlay(VIEWS.loadGame);   }
  // function showSaveGame()   { showOverlay(VIEWS.saveGame);   }
  // function showMap()        { showOverlay(VIEWS.map);        }

  // Add a view to the view registry. This will be called by scenarios to add
  // new views.
  function addView(code, view) {

  }

  // Show view will build one of the registered views. A view should have either
  // a template, which is a selector to its template element, or a path. Views
  // with paths to an html file will have that html put into the main content
  // element. A view can also have an optional build function that's called
  // once the view has been loaded.
  function showView(viewCode) {
    let view = VIEWS[viewCode];
    if (view == null) { throw `There is no view (${viewCode}) in the view registry.` }
    if (view.template) { $('#mainContent').empty().append($(view.template).html()); }
    if (view.path) { throw `TODO: Load this html file into the main content` }
    if (view.build) { view.build(); }
  }

  // function showOverlay(view) {
  //   $('#overlayFrame').removeClass('hide').find('.title').empty().append(view.title);
  //   $('#overlayContent').append($(view.template).html());
  //   if (view.build) { view.build(); }
  // }
  //
  // function removeOverlay() {
  //   $('#overlayFrame').addClass('hide')
  //   $('#overlayContent').empty();
  // }
  //







  // === Shared Button Actions ===

  // The standard view link will look something like this:
  //
  //   <a href='#' class='send-command' data-command='model.action'>Title</a>
  //
  // This will send a command down to the main thread. Commands will probably
  // also need to support a number of other data attributes that are used as
  // arguments. They'll be added as we find them.
  // function sendCommandButton() {
  //   let data = $(this).data();
  //   let options = {};
  //
  //   if (data.id) { options.id = data.id; }
  //   if (data.code) { options.code = data.code; }
  //
  //   sendCommand(data.command, options)
  // }
  //
  // function sendCommand(command, options) {
  //   ipcRenderer.send(command,options);
  // }
  //
  // function sendCancel() { sendCommand('game.cancel'); }





  // === Rendering ===

  function loadFile(viewPath, callback) {
    fs.readFile(viewPath, 'utf8', function(err, data) {
      if (err) {
        throw err;
      }
      callback(data.replace(/@ROOT/g,ROOT));
    });
  }

  // function lock() { $('#viewLock').removeClass('hide'); }
  // function unlock() { $('#viewLock').addClass('hide'); }

  return {
    init,
    ready,
    addView,
    showView,
    prepare,
  //   sendCommand,
  //   sendCancel,
  };


})();
