global.Resolver = (function() {

  // The plan data will arrive in this format:
  //
  //     projectWork: { code:'blood-enema', minions:[2,3]}
  //     taskWork: [
  //       { code:'punch-fisting', minions:[1] }
  //     ],
  //     missionWork: [
  //       { code:'horse-blowjobs', minions:[4,5] }
  //     ],
  //     assignedRoles: [
  //       { id:1, role:'hunter', { capture:true }}
  //     ],
  //
  async function submitWorkPlan(plan) {
    Resolver._currentReport = {};
    Resolver._finishers = [];
    Resolver._itemsToAdd = {};

    Game.log("Work Plan Submitted",true);
    Game.log(`Plan: ${JSON.stringify(plan)}`);

    setPlanFlags(plan);

    await Game.setPhase('before-work');
    await Resolver.Report.start();
    await Resolver.Roles.assignRoles(plan.assignedRoles);
    await Resolver.Projects.startProject(plan.projectWork);
    await Resolver.Tasks.workTasks(plan.taskWork);
    await Resolver.Missions.startMissions(plan.missionWork);
    await Resolver.Roles.workRoles();
    await Resolver.Projects.workProject();
    await Resolver.Missions.workMissions();
    await Resolver.Items.commit();
    await Resolver.Minions.dailyUpdate();
    await Resolver.Incidentals.dailyUpdate();
    await Composer.render();
  }

  // These flags are based on the day's plan and can be used to trigger events
  // that depend on what the characters spent their day doing.
  function setPlanFlags(plan) {
    const taskCodes = plan.taskWork.map(task => task.code);
    const meditated = ArrayUtility.contains(taskCodes,'meditate') ? 'yes' : 'no';

    Flag.setAll({
      'player.meditated-today': meditated,
      'role.hunter.success-today': '',
      'role.hunter.failure-today': '',
    });
  }

  async function startAfterWork() {
    await Game.setPhase('after-work');
    await Promise.all(Resolver._finishers.map(async action => {
      await action();
    }));

    Resolver._currentReport = null;
    Resolver._finishers = null;

    await Composer.render();
  }

  function addFinisher(finisher) { Resolver._finishers.push(finisher); }
  function currentReport() { return Resolver._currentReport; }
  function itemsToAdd() { return Resolver._itemsToAdd; }

  // We need to format the report for the view. When we build the report we
  // handle the minions as a map because of the way we add minion data. The
  // view however expects the minion data to be an array of flat objects.
  function reportForView() {
    const report = { type:'work', ...Resolver._currentReport };

    report.minionResults = Object.keys(report.minions).map(id => {
      const result = { ...report.minions[id], ...report.minions[id].work };
      delete result.work;
      return result;
    });

    delete report.minions;
    return report
  }

  return {
    submitWorkPlan,
    startAfterWork,
    addFinisher,
    currentReport,
    itemsToAdd,
    reportForView,
  };

})();
