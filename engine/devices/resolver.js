global.Resolver = (function() {

  // The plan data will arrive in this format:
  //
  //     assignedRoles: [
  //       { id:1, role:'hunter', { capture:true }}
  //     projectWork: [
  //       { code:'blood-enema', minions:[2,3]}
  //
  async function startWork(plan) {
    Resolver._currentReport = { minions:{} };
    Resolver._finishers = [];
    Resolver._itemsToAdd = {};

    await Resolver.Game.becomeAfternoon();
    await Resolver.Roles.assignRoles(plan.assignedRoles);
    await Resolver.Projects.startProjects(plan.projectWork);
    await Resolver.Missions.startMissions(plan.missionOrders);
    await Resolver.Events.enqueueAvailable();
    await Resolver.Roles.workRoles();
    await Resolver.Projects.workProjects();
    await Resolver.Missions.workMissions();
    await Resolver.Items.commit();
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
