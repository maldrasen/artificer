global.preparedReport = null;

global.Report = class Report {

  constructor(plan) {
    this.logger = new Logger('Report', 'rgb(67, 107, 98)');
    this.plan = plan;
    this.segments = {
      project:{},
    };
  }

  async buildReport() {
    const game = await Game.instance();

    this.logger.info("Build Report");

    if (game.currentProject) {
      this.segments.project = await this.workLongProject(game)
    } else {
      this.segments.project = await this.workShortProjects(game);
    }

    // Need to do all the daily tasks here.
    game.dayNumber += 1;

    await game.save();

    // Save the finished report on the global scope. (No where else to really
    // stick it.)
    global.preparedReport = this.segments;
  }

  // This function will do work on the project. If a project is set on the game
  // it's a long running project and is either updated, or completed.
  async workLongProject(game) {
    const minions = await Character.findAll({ where:{ currentTask:'project' }});
    const project = Project.lookup(game.currentProject);

    // 10 hours for playrer + 5 each assigned minion.
    game.currentProjectProgress += (minions.length * 5) + 10;
    if (game.currentProjectProgress < project.effort) {
      return { text:this.projectProgressText(project, minions) }
    }

    game.currentProject = null;
    game.currentProjectProgress = 0;

    // It 'should' be safe to save them without waiting here. I don't think we
    // need to read this value again until sometime after the report is done.
    each(minions, minion => {
      minion.currentTask = 'free'
      minion.save();
    });

    return { text:this.projectCompletedText(project) }
  }

  projectProgressText(project, minions) {
    let text = `I'm working on ${project.workingName}. `
    if (minions.length == 0) { text += `I've made some progress, but there's still work to do.` }
    if (minions.length == 1) { text += `${minions[0].firstName} and I've made some progress, but there's still work to do.` }
    if (minions.length > 1)  { text += `${EnglishUtility.NumberInEnglish(minions.length)} of my minions and I have made some progress, but there's still work to do.` }
    return text;
  }

  projectCompletedText(project) {
    return `I've completed work on ${project.workingName}.`
  }

  // This function checks to see if there are any half or quarter day projects
  // in the plan. If so they're completed immeadietly.
  async workShortProjects(game) {

  }

}
