global.Renderer = (function() {
  const logger = new Logger('Renderer', 'rgb(150,200,200)');

  const VIEWS = {
    mainMenu: { path:`${ROOT}/client/views/screens/main-menu.html` },
  };

  function init() {
    $(document).on('click', '.send-command', Elements.buttonAction(sendCommandButton));
  }

  function ready() {
    document.title = `Artificer`

    let body = $('body').removeClass('main-loading').empty();
    body.append($('<div>',{ id:'mainContent' }));
    body.append($('<div>',{ class:'partial' }).data('url',`${ROOT}/client/views/layers.html`));
    body.append($('<div>',{ class:'partial' }).data('url',`${ROOT}/client/views/templates/chooser.html`));
    body.append($('<div>',{ class:'partial' }).data('url',`${ROOT}/client/views/templates/location.html`));
    showMainMenu();
  }

  // === Fatter Views? ===
  // These could probably just be views right?

  function renderLocation(transport, view) {
    let location = $($('#locationTemplate').html())
        location.find('.location-name').append(view.name);
        location.find('.location-description').append(view.description);

    $('#mainContent').empty().append(location);
    constructView();
  }

  // === Views ===

  function showMainMenu() { showView(VIEWS.mainMenu); }

  function showView(view) {
    $('#mainContent').empty().append($('<div>',{ class:'partial' }).data('url',view.path))
    if (view.init) { view.init() }
    constructView();
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
    lock();
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
    unlock();
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
    showMainMenu: showMainMenu,
    renderFile: renderFile,
    renderLocation: renderLocation,
  };

})();
