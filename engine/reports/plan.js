global.Plan = class Plan {

  // The plan data will arrive in this format:
  //
  //     assignedRoles: [
  //       { id:1, role:'hunter' }
  //     projectWork: [
  //       { code:'clear-great-hall', minions:[2,3]}
  //
  constructor(data) {
    this.logger = new Logger('Plan', 'rgb(97, 107, 67)');
    this._assignedRoles = data.assignedRoles;
    this._projectWork = data.projectWork;
  }

  get projectWork() { return this._projectWork; }
  get assignedRoles() { return this._assignedRoles; }

  async execute() {
    this.logger.info("=== Execute Plan ===");
    this.logger.info("Projects",this.projectWork);
    this.logger.info("Assignments",this.assignedRoles);
    await this.preProcess();
    await this.buildReport();
  }

  async preProcess() {
    const game = await Game.instance();
          game.time = 'afternoon';

    await this.assignRoles();
    await this.startProjects(game);
    await game.enqueueAvailableEvents();
    await game.save();
  }

  buildReport() {
    return new Promise(resolve => {
      global.preparedReport = new Report(this)
      global.preparedReport.buildReport().then(resolve);
    });
  }

  // === Roles ===

  // This will also need to set role options too I think.
  async assignRoles() {
    await Promise.all(this.assignedRoles.map(async assignment => {
      const character = await Character.findByPk(assignment.id);
            character.roleCode = assignment.role;

      return await character.save();
    }));
  }

  // === Projects ===

  // Starting a single project is actually pretty different from doing multiple
  // projects in a day. A single project may need to be tracked over many days;
  // whereas when if multiple projects are selected they will all be done in
  // the same day. If everything is finished in a day we don't need to set
  // anything in the game or update the minions.
  async startProjects(game) {
    if (this.projectWork && this.projectWork.length == 1) {
      let project = Project.lookup(this.projectWork[0].code);
      let minions = await Character.findAll({ where:{ id:this.projectWork[0].minions }});
      await this.startLongProject(game, project, minions);
    }
  }

  async startLongProject(game, project, minions) {
    game.currentProject = project.code;
    game.currentProjectProgress = 0;

    // All the minions who were assigned to this project should have their
    // current task set to project. This will prevent them from getting
    // assigned to other tasks while the project is being worked on. It's also
    // used when calculating project progress.
    await Promise.all(minions.map(async minion => {
      minion.currentTask = 'project';
      await minion.save();
    }));

    // Execute the project's onStart() function if it has one.
    if (typeof project.onStart == 'function') {
      await project.onStart();
    }

    // Finally (unless this project is repeatable, which none of them are yet)
    // destroy the AvailableProject so that it can't be started again. I
    // shouldn't need to wait for this to complete.
    AvailableProject.destroy({ where:{ code:project.code }});
  }
}
