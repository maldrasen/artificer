global.Composer = (function(){

  // When the game state changes the composer needs to create everything in the
  // view for the client to render. In its simplist state this just sends a
  // path to an HTML file for the view to render. In most cases though this
  // will need to create a document object that the client will need to turn
  // into an actual html view.

  // The Game model is an optional argument here. If you've just added an event
  // to the game model it's likely that fetching a new game instance won't have
  // the queued event, so if you have an instance of game that you've been
  // changing it should be passed to the renderer so it can use the most up to
  // date game state. If the game hasn't been touched in a while it's probably
  // fine.

  // This is a weird function because when it's called will eventually fire off
  // an event to the browser, but it's not a promise though because nothing on
  // this side waits for anything it does. Also because the Browser doesn't
  // exist in the specs none of this is tested. :)

  function render(game) {
    if (typeof Browser != 'undefined') {
      game ? _render(game) : Game.instance().then(game => { _render(game); });
    }
  }

  function _render(game) {
    // First render a view from the game's event queue if one exists. Location
    // events should only be run when triggered from a link at the location.
    // Other events however will need to be triggered like this too.
    if (game.nextGameEvent != null) {
      return game.unqueueGameEvent().then(event => {
        renderEvent(event);
      });
    }

    // If there are no events happening, but a report is ready, show the report.
    if (Resolver.currentReport() != null) { return renderReport(); }

    // If there's no active event or anything like that:
    renderLocation(game.location)
  }

  async function renderLocationEvent() {
    const game = await Game.instance();
    const event = await game.unqueueLocationEvent();
    renderEvent(event);
  }

  // If an event has an init promise that promise will be resolved first. The
  // event is then sent to the weaver for template replacement. Once that's
  // done the brower is sent the completed event object.
  function renderEvent(event) {
    (event.init ? event.init() : Promise.resolve(0)).then(() => {
      Event.prepare(event).then(prepared => {
        Browser.send('render.event',prepared);
      });
    });
  }

  function renderReport() {
    Browser.send('render.report', Resolver.currentReport());
  }

  function renderLocation(code) {
    Location.lookup(code).buildView().then(view => {
      Browser.send('render.location',view);
    });
  }

  async function renderPlanView() {
    const game = await Game.instance();
    const projects = await AvailableProject.all();
    const minions = await Character.allForPlan();

    let planData = {
      currentProject: game.currentProject,
      currentProjectProgress: game.currentProjectProgress,
      projects: projects,
      minions: minions,
    }

    if (game.currentProject) {
      let current = Project.lookup(game.currentProject);
      planData.currentProjectName = current.name;
      planData.currentProjectEffort = current.effort;
    }

    Browser.send('render.plan',planData);
  }

  return {
    render: render,
    renderLocationEvent: renderLocationEvent,
    renderPlanView: renderPlanView,
  };

})();
