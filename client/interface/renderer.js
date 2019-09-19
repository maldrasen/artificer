global.Renderer = (function() {
  const logger = new Logger('Renderer', 'rgb(150,200,200)');

  const VIEWS = {
    mainMenu: { path:`${ROOT}/client/views/main-menu.html` },
  };

  function init() {
    initActions();
    buildInitialContent();
    renderPartials();
  }

  function initActions() {
  //   $(document).on('click', '#startNewGame',       Elements.buttonAction(function() { startNewGame();                     }));
  //   $(document).on('click', '.action.end-event',   Elements.buttonAction(function() { endEvent($(this).data('view'));     }));
  //   $(document).on('click', '.action.add-event',   Elements.buttonAction(function() { addEvent($(this).data('code'), {}); }));
  //   $(document).on('click', '.action.set-view',    Elements.buttonAction(function() { setView($(this).data('code'));      }));
  //   $(document).on('click', '.action.change-page', Elements.buttonAction(function() { changePage($(this).data('page'));   }));
  //   $(document).on('click','.action.debug-start',  Elements.buttonAction(function() { debugStart($(this).data('view'));   }));
  }

  function buildInitialContent() {
    document.title = `Artificer`;
    let body = $('body').attr('style','').empty();
    body.append($('<div>',{ id:'mainContent' }).append($('<div>',{ class:'partial' }).data('url',VIEWS.mainMenu.path)));
    // body.append($('<div>',{ class:'partial' }).data('url',`${ROOT}/client/views/layers.html`));
    // body.append($('<div>',{ class:'partial' }).data('url',`${ROOT}/client/views/templates.html`));
  }

  // // === View Setters ===
  //
  // function startNewGame() {
  //   Game.startNewGame();
  //   render();
  // }
  //
  // function addEvent(code,state) {
  //   EventQueue.addEvent(code, state);
  //   render();
  // }
  //
  // function endEvent(view) {
  //   if (view) {
  //     Game.setView(view);
  //   }
  //   EventQueue.endEvent();
  //   render();
  // }
  //
  // function setView(view,state) {
  //   Game.setView(view);
  //   render();
  // }
  //
  // function debugStart(view) {
  //   if (Game.hasStarted() == false) { Game.setupGame(); }
  //   ({ encounter: Encounter.startDebug }[view])();
  //   render();
  // }
  //
  // // === Rendering ===
  //
  // function render() {
  //   $('#mainContent').empty();
  //
  //   let path;
  //   let initScript;
  //
  //   if (Game.getView() == 'event') {
  //     path = EventQueue.getEvent().view;
  //     initScript = InitScripts[EventQueue.getEvent().code];
  //   } else {
  //     path = VIEWS[Game.getView()].path;
  //     initScript = InitScripts[Game.getView()];
  //   }
  //
  //   loadView(path, function(data) {
  //     $('#mainContent').empty();
  //     $('#mainContent').append($(data));
  //
  //     renderPartials();
  //
  //     if (initScript) { initScript.init(); }
  //   });
  // }

  function loadView(viewPath, callback) {
    logger.info(`Load ${viewPath}`);

    fs.readFile(viewPath, 'utf8', function(err, data) {
      if (err) {
        throw err;
      }
      callback(data.replace(/@ROOT/g,ROOT));
    });
  }

  function renderPartials() {
    $.each($('.partial'), function(i, element) {
      loadView($(element).data('url'), function(data) {
        $(element).removeClass('partial').empty().append(data);
      });
    });
  }

  // // === Event Paging ===
  //
  // function changePage(id) {
  //   let page = $('#'+id);
  //
  //   logger.info('Rendering Page', { page:`${EventQueue.getEventCode()} : ${id}` });
  //
  //   if (page.length == 0) {
  //     throw "No page with id "+id;
  //   }
  //
  //   if (page.data('on-display')) {
  //     PageFunctions[page.data('on-display')]();
  //   }
  //
  //   $('.page.active').removeClass('active');
  //   page.addClass('active');
  // }
  //
  return {
    init: init,
    // addEvent: addEvent,
    // endEvent: endEvent,
    // setView: setView,
    // loadView: loadView,
    // renderPartials: renderPartials,
    // render: render,
  };

})();
