Resolver.Projects = (function() {

  async function startProject(projectWork) {
    if (projectWork == null) { return false; }

    const project = Project.lookup(projectWork.code);
    const minions = await Character.findAll({ where:{ id:projectWork.minions }});

    Game.setCurrentProject(project.code)
    await Resource.consume(project.materials);

    // All the minions who were assigned to this project should have their
    // current task set to project. This will prevent them from getting
    // assigned to other tasks while the project is being worked on. It's also
    // used when calculating project progress.
    await Promise.all(minions.map(async minion => {
      return minion.update({ currentDuty:'project' });
    }));

    // Execute the project's onStart() function now if it has one.
    if (typeof project.onStart == 'function') {
      await project.onStart({ minions });
    }

    // Finally (unless this project is repeatable, which none of them are yet)
    // destroy the AvailableProject so that it can't be started again. I
    // shouldn't need to wait for this to complete.
    AvailableProject.destroy({ where:{ code:project.code }});
  }

  async function workProject() {
    if (Game.currentProject() == null) { return false; }
    const minions = await Character.findAll({ where:{ currentDuty:'project' }});
    const project = Project.lookup(Game.currentProject());

    // Do Work. 10 hours for player + 5 each assigned minion.
    Game.addProjectProgress((minions.length * 5) + 10);

    // Set progress if incomplete.
    if (Game.currentProjectProgress() < project.effort) {
      return Resolver.Report.setProjectProgressText(project, minions);
    }

    // The project has been completed.
    await completeProject(project, minions);
  }

  async function completeProject(project, minions) {
    if (typeof project.onFinish == 'function') {
      Resolver.addFinisher(async () => { await project.onFinish({ minions }); });
    }

    // It 'should' be safe to update the minion's current tasks without waiting
    // here. I don't think we need to read this value again until sometime
    // after the report is done.
    each(minions, minion => {
      minion.update({ currentDuty:'role' });
    });

    Game.setCurrentProject(null)
    Resolver.Report.setProjectCompletedText(project, minions)
  }

  return {
    startProject: startProject,
    workProject: workProject,
  }

})();
