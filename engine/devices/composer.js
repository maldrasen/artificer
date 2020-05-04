global.Composer = (function() {

  async function render() {
    if (typeof Browser == 'undefined') { return; }

    // If a current event is set then it should be rendered. This will happen
    // when events are chained together.
    if (Game.currentEvent()) { return renderEvent(Game.currentEvent()); }

    Game.log(`Rendering [${Game.phase()}]`,true)

    // If there isn't a current event set in the Game then try to find one.
    // This function will advance the game time until a phase with an event is
    // found or it will return null if there are no events.
    const eventData = await Game.pullNextEvent();
    if (eventData) {
      Game.log(`Rendering Event: ${eventData.event.code}`);
      return renderEvent(eventData);
    }

    // If there are no events happening, but a report is ready, show the report.
    if (Resolver.currentReport() != null) {
      Game.log("Rendering Report")
      return renderReport();
    }

    // If there's no active event or anything like that:
    Game.log(`Rendering Location: ${Game.location()}`);
    renderLocation(Game.location());
  }

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

  async function renderManageView() {
    Browser.send('render.manage', {
      orders: Order.forClient(),
      flags:{
        keepName: Flag.lookup('location.keep-name'),
        playerTitle: Flag.lookup('player.title'),
      },
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
    renderManageView,
  };

})();
