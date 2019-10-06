global.Plan = class Plan {

  constructor(data) {
    this._projectWork = data.projectWork;
    this.logger = new Logger('Plan', 'rgb(97, 107, 67)');
  }

  get projectWork() { return this._projectWork; }

  async execute() {
    this.logger.info("=== Execute Plan ===");
    this.logger.info("Projects",this.projectWork);

    await this.preProcess();
    await this.buildReport();
    await this.postProcess();
  }

  async preProcess() {
    await this.startProjects();
  }

  async buildReport() {
    let report =  new Report(this)
    await report.buildReport();
  }

  async postProcess() {
  }

  // === Projects ===

  // Starting a single project is actually pretty different from doing multiple
  // projects in a day. A single project may need to be tracked over many days;
  // whereas when if multiple projects are selected they will all be done in
  // the same day. If everything is finished in a day we don't need to set
  // anything in the game or update the minions.
  async startProjects() {
    if (this.projectWork && this.projectWork.length == 1) {
      let project = Project.lookup(this.projectWork[0].code);
      let minions = await Character.findAll({ where:{ id:this.projectWork[0].minions }});
      await this.startLongProject(project, minions);
    }
  }

  async startLongProject(project, minions) {
    const game = await Game.instance();
    await game.startProject(project.code);

    await Promise.all(minions.map(async minion => {
      minion.currentTask = 'project';
      await minion.save();
    }));

    await project.onStart();
  }
}
