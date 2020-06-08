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
    if (TrainingPlan.currentReport() != null) {
      Game.log("Rendering Training Report")
      return await renderTrainingReport();
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
      flags: Flag.getAll(),
    });
  }

  async function renderPlanView() {
    const currentProject = Game.currentProject();
    const flags = {
      'plan-view.allow-idle': Flag.lookup('plan-view.allow-idle'),
    };

    const planData = {
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

  async function renderTrainingView() {
    Browser.send('render.training-plan',{
      maxMinionCount: TrainingPlan.maxMinionCount(),
      minions: (await Character.allForClient()),
    });
  }

  async function renderTrainingReport() {
    Browser.send('render.training-report', TrainingPlan.currentReport());
    await TrainingPlan.reportViewed();
  }

  return {
    render,
    renderPlanView,
    renderManageView,
    renderTrainingView,
    renderTrainingReport,
  };

})();
