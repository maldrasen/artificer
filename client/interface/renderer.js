global.Renderer = (function() {
  const VIEWS = {};
  const TEMPLATES = [];

  // === Initialization ===

  function init() {
    $(document).on('click', '.send-command', Elements.buttonAction(sendCommandButton));
  }

  async function ready(transport, env) {
    global.Environment = env;
    document.title = Configuration.title

    $('body').removeClass('main-loading').find('.loading').remove();

    await installTemplates();
    showView('main-menu');

    // Need to check this. Why does page content need to be built when there
    // is no event? This is a one time build function after templates are
    // loaded?
    // Elements.PagedContent.build();

    ImageResourceLoader.resolveAll();

    prepare();
  }

  // The prepare() function is called when a new game is started. This can be
  // used to clean up any state that would persist between games if a new game
  // is loaded. It should esentially reset everything in the UI, though only
  // the paged view really maintains any kind of state right now.
  function prepare() {
    Components.PagedView.prepare();
  }

  // === Views ===

  // Add a view to the view registry. This will be called by scenarios to add
  // new views. Could also be used to replace a view I suppose.
  function addView(code, view) {
    VIEWS[code] = view;
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

  // === Templates ===

  function addTemplate(path) { TEMPLATES.push(path); }

  async function installTemplates() {
    each(await (util.promisify(fs.readdir)(`${ROOT}/client/views/templates`)), filename => {
      addTemplate(`${ROOT}/client/views/templates/${filename}`);
    });

    await Promise.all(TEMPLATES.map(async path => {
      $('#templates').append($(await loadFile(path)));
    }));
  }

  // === Shared Button Actions ===

  // The standard view link will look something like this:
  //
  //   <a href='#' class='send-command' data-command='model.action'>Title</a>
  //
  // This will send a command down to the main thread. Commands will probably
  // also need to support a number of other data attributes (in addition to id
  // or code) that are used as arguments. They'll be added as we find them.
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

  function loadFile(viewPath) {
    return new Promise((resolve, reject) => {
      fs.readFile(viewPath, 'utf8', function(err, data) {
        err ? reject(err) : resolve(data.replace(/@ROOT/g,ROOT));
      });
    });
  }

  return {
    init,
    ready,
    prepare,
    addView,
    showView,
    addTemplate,
    sendCommand,
    sendCancel,
  };

})();
