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
  async function startWork(plan) {
    Resolver._currentReport = {};
    Resolver._finishers = [];
    Resolver._itemsToAdd = {};

    await Resolver.Report.start();
    await Resolver.Game.becomeAfternoon();
    await Resolver.Roles.assignRoles(plan.assignedRoles);
    await Resolver.Projects.startProject(plan.projectWork);
    await Resolver.Tasks.workTasks(plan.taskWork);
    await Resolver.Missions.startMissions(plan.missionWork);
    await Resolver.Events.enqueueAvailable();
    await Resolver.Roles.workRoles();
    await Resolver.Projects.workProject();
    await Resolver.Missions.workMissions();
    await Resolver.Items.commit();
    await Resolver.Minions.dailyUpdate();
    await Composer.render();
  }

  async function startDay() {
    await Resolver.Game.becomeMorning();
    await Resolver.Events.enqueueAvailable();
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

  return {
    addFinisher,
    currentReport,
    itemsToAdd,
    startDay,
    startWork,
  }

})();
