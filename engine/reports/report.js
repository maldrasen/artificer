global.Report = class Report {

  constructor(plan) {
    this.plan = plan;
    this.project = {};
    this.postActions = [];
  }

  // Package the report so that it can be sent to the client.
  get package() {
    return { project:this.project }
  }

  async buildReport() {
    const game = await Game.instance();

    if (game.currentProject) {
      await this.workLongProject(game)
    } else {
      await this.workShortProjects(game);
    }

    await game.save();
  }

  // The postprocess() function is executed after the report is read and
  // represents the start of a new day. When the postprocess() function is
  // finished the preparedReport is destroyed.
  async postprocess() {
    const game = await Game.instance();

    // Need to do all the daily tasks here.
    game.dayNumber += 1;

    await Promise.all(this.postActions.map(async action => {
      await action();
    }));

    await game.save();

    global.preparedReport = null;
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
      this.postActions.push(project.onFinish)
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

    this.project = { text:text };
  }

  setProjectCompletedText(project) {
    this.project = { text:`I've completed work on ${project.workingName}.` };
  }

  // This function checks to see if there are any half or quarter day projects
  // in the plan. If so they're completed immeadietly.
  async workShortProjects(game) {

  }

}
