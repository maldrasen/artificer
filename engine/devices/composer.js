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

  async function render() {
    if (typeof Browser == 'undefined') { return; }

    if (Game.currentEvent()) {
      return renderEvent(Game.currentEvent());
    }

    Game.log(`Rendering [${Game.phase()}]`,true)

    // First render the current event if it exists. This isn't correct. The
    // game will need to advance phases until it reaches a control phase or an
    // event...
    const eventData = Game.pullNextEvent();

    if (eventData) {
      Game.log(`Rendering Event: ${eventData.event.code}`);
      return renderEvent(eventData);
    }

    // If there are no events happening, but a report is ready, show the report.
    // TODO: This should be changed to check the game phase to see if we're in
    //       a report phase
    if (Resolver.currentReport() != null) {
      Game.log("Rendering Report")
      return renderReport();
    }

    // If there's no active event or anything like that:
    Game.log("Rendering Location");
    renderLocation(Game.location());
  }

  // If an event has an init promise that promise will be resolved first. The
  // event is then sent to the weaver for template replacement. Once that's
  // done the brower is sent the completed event object.
  function renderEvent(eventData) {
    Event.prepare(eventData).then(prepared => {
      Browser.send('render.event',prepared);
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
    const currentProject = Game.currentProject();
    const flags = {
      'plan-view.allow-idle': Flag.lookup('plan-view.allow-idle'),
    };

    let planData = {
      currentProject: currentProject,
      currentProjectProgress: Game.currentProjectProgress(),
      projects: (await AvailableProject.all()),
      missions: (await Mission.availableForClient()),
      minions: (await Character.allForClient()),
      tasks: (await Task.availableForClient()),
      flags: flags,
    }

    if (currentProject) {
      let current = Project.lookup(currentProject);
      planData.currentProjectName = current.name;
      planData.currentProjectEffort = current.effort;
    }

    Browser.send('render.plan',planData);
  }

  return {
    render,
    renderPlanView,
  };

})();
