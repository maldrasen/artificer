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
    await Composer.render();
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

  // The training plan and the evening phase only happen once traing has been
  // unlocked. Because of that nothing that has to happen every day should be
  // triggered here.
  async function submitTrainingPlan() {
  }

  async function startNight() {
    // await Resolver.Events.enqueueAvailable();
    // await Promise.all(Resolver._finishers.map(async action => {
    //   await action();
    // }));
  }

  function addFinisher(finisher) { Resolver._finishers.push(finisher); }
  function currentReport() { return Resolver._currentReport; }
  function itemsToAdd() { return Resolver._itemsToAdd; }

  return {
    submitWorkPlan,
    startAfterWork,
    submitTrainingPlan,
    startNight,
    addFinisher,
    currentReport,
    itemsToAdd,
  };

})();
