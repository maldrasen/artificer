global.Renderer = (function() {
  const logger = new Logger('Renderer', 'rgb(150,200,200)');

  const VIEWS = {
    mainMenu: { path:`${ROOT}/client/views/main-menu.html` },
  };

  function init() {
    initActions();
    initMessages();
  }

  function initMessages() {
    ipcRenderer.on('engine.ready', buildMainContent);
    ipcRenderer.on('render.page', renderPage);
  }

  function initActions() {
    $(document).on('click', '.send-command', Elements.buttonAction(sendCommand));
  }

  function buildMainContent() {
    let body = $('body').removeClass('main-loading').empty();
    body.append($('<div>',{ id:'mainContent' }).append($('<div>',{ class:'partial' }).data('url',VIEWS.mainMenu.path)));
    body.append($('<div>',{ class:'partial' }).data('url',`${ROOT}/client/views/layers.html`));
    body.append($('<div>',{ class:'partial' }).data('url',`${ROOT}/client/views/templates.html`));

    renderPartials();
  }

  // The standard view link will look something like this:
  //
  //   <a href='#' class='send-command' data-command='model.action'>Title</a>
  //
  // This will send a command down to the main thread. Commands will probably
  // also need to support a number of other data attributes that are used as
  // arguments. They'll be added as we find them.
  function sendCommand() {
    let data = $(this).data();
    let options = {};

    if (data.id) { options.id = data.id; }

    ipcRenderer.send(data.command,options);
    lock();
  }

  function lock() { $('#viewLock').removeClass('hide'); }
  function unlock() { $('#viewLock').addClass('hide'); }

  function renderPage(transport, options) {
    loadView(`${ROOT}/${options.path}`, (data) => {
      $('#mainContent').empty().append(data);
      unlock();
    });
  }

  function render() {
  }

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

  return {
    init: init,
  };

})();
