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

  async function startLongProject(project, minions) {
    const game = await Game.instance();
    game.currentProject = project.code;
    game.currentProjectProgress = 0;
    await game.save();

    // All the minions who were assigned to this project should have their
    // current task set to project. This will prevent them from getting
    // assigned to other tasks while the project is being worked on. It's also
    // used when calculating project progress.
    await Promise.all(minions.map(async minion => {
      minion.currentTask = 'project';
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

  return {
    startProjects: startProjects,
  }

})();
