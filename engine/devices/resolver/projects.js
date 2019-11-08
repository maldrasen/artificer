Resolver.Projects = (function() {

  // Starting a single project is actually pretty different from doing multiple
  // projects in a day. A single project may need to be tracked over many days;
  // whereas when if multiple projects are selected they will all be done in
  // the same day. If everything is finished in a day we don't need to set
  // anything in the game or update the minions.
  async function startProjects(projects) {
    if (projects && projects.length == 1) {
      let project = Project.lookup(projects[0].code);
      let minions = await Character.findAll({ where:{ id:projects[0].minions }});
      await startLongProject(project, minions);
    }
  }

  function workProjects() {
    return new Promise(resolve => {
      Game.instance().then(game => {
        game.currentProject ?
          workLongProject(game).then(resolve):
          workShortProjects(game).then(resolve);
      });
    });
  }

  async function startLongProject(project, minions) {
    const game = await Game.instance();
    game.currentProject = project.code;
    game.currentProjectProgress = 0;
    await game.save();

    if (project.materials) {
      await Resource.consume(project.materials);
    }

    // All the minions who were assigned to this project should have their
    // current task set to project. This will prevent them from getting
    // assigned to other tasks while the project is being worked on. It's also
    // used when calculating project progress.
    await Promise.all(minions.map(async minion => {
      minion.currentDuty = 'project';
      await minion.save();
    }));

    // Execute the project's onStart() function now if it has one.
    if (typeof project.onStart == 'function') {
      await project.onStart();
    }

    // Finally (unless this project is repeatable, which none of them are yet)
    // destroy the AvailableProject so that it can't be started again. I
    // shouldn't need to wait for this to complete.
    AvailableProject.destroy({ where:{ code:project.code }});
  }

  // This function will do work on the project. If a project has been set on the
  // game then it's a long running project and is either updated, or completed.
  async function workLongProject(game) {
    const minions = await Character.findAll({ where:{ currentDuty:'project' }});
    const project = Project.lookup(game.currentProject);

    // Do Work. 10 hours for player + 5 each assigned minion.
    game.currentProjectProgress += (minions.length * 5) + 10;
    await game.save();

    if (game.currentProjectProgress < project.effort) {
      Resolver.Report.setProjectProgressText(project, minions);
    }
    else {

      // === The Project Has Been Completed ===
      if (typeof project.onFinish == 'function') {
        Resolver.addFinisher(project.onFinish);
      }

      game.currentProject = null;
      game.currentProjectProgress = 0;
      await game.save();

      // It 'should' be safe to update the minion's current tasks without waiting
      // here. I don't think we need to read this value again until sometime
      // after the report is done.
      each(minions, minion => {
        minion.currentDuty = 'role'
        minion.save();
      });

      Resolver.Report.setProjectCompletedText(project)
    }
  }

  // This function checks to see if there are any half or quarter day projects
  // in the plan. If so they're completed immeadietly. It's also possible that
  // there are not projects planned at all.
  async function workShortProjects(game) {
    Resolver.Report.setProjectIdleText();
  }

  return {
    startProjects: startProjects,
    workProjects: workProjects,
  }

})();
