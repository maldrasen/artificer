global.preparedReport = null;

global.Report = class Report {

  constructor(plan) {
    this.plan = plan;

    // Save the finished report on the global scope. (No where else to really
    // stick it.)
    global.preparedReport = {
      project: {},
      postActions: [],
    };
  }

  async buildReport() {
    const game = await Game.instance();

    if (game.currentProject) {
      await this.workLongProject(game)
    } else {
      await this.workShortProjects(game);
    }

    // Need to do all the daily tasks here.
    game.dayNumber += 1;

    await game.save();
  }

  // This function will do work on the project. If a project is set on the game
  // it's a long running project and is either updated, or completed.
  async workLongProject(game) {
    const minions = await Character.findAll({ where:{ currentTask:'project' }});
    const project = Project.lookup(game.currentProject);

    // 10 hours for playrer + 5 each assigned minion.
    game.currentProjectProgress += (minions.length * 5) + 10;
    if (game.currentProjectProgress < project.effort) {
      return this.setProjectProgressText(project, minions);
    }

    if (typeof project.onFinish == 'function') {
      global.preparedReport.postActions.push(project.onFinish)
    }

    game.currentProject = null;
    game.currentProjectProgress = 0;

    // It 'should' be safe to save them without waiting here. I don't think we
    // need to read this value again until sometime after the report is done.
    each(minions, minion => {
      minion.currentTask = 'free'
      minion.save();
    });

    this.setProjectCompletedText(project)
  }

  setProjectProgressText(project, minions) {
    let text = `I'm working on ${project.workingName}. `
    if (minions.length == 0) { text += `I've made some progress, but there's still work to do.` }
    if (minions.length == 1) { text += `${minions[0].firstName} and I've made some progress, but there's still work to do.` }
    if (minions.length > 1)  { text += `${EnglishUtility.NumberInEnglish(minions.length)} of my minions and I have made some progress, but there's still work to do.` }

    global.preparedReport.project = { text:text };
  }

  setProjectCompletedText(project) {
    global.preparedReport.project = {
      text: `I've completed work on ${project.workingName}.`
    };
  }

  // This function checks to see if there are any half or quarter day projects
  // in the plan. If so they're completed immeadietly.
  async workShortProjects(game) {

  }

}
