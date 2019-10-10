global.Resolver = (function() {

  // The plan data will arrive in this format:
  //
  //     assignedRoles: [
  //       { id:1, role:'hunter', { capture:true }}
  //     projectWork: [
  //       { code:'blood-enema', minions:[2,3]}
  //
  async function startWork(plan) {
    console.log("=== Start Work ===")
    console.log(plan);

    await Resolver.Game.becomeAfternoon();
    await Resolver.Roles.assignRoles(plan.assignedRoles);
    await Resolver.Projects.startProjects(plan.projectWork);
    await Resolver.Events.enqueueAvailable();
    await Resolver.Report.buildReport();
    await Composer.render();
  }

  async function startDay() {
    await Resolver.Game.becomeMorning();
    await Resolver.Events.enqueueAvailable();
    await Composer.render();
  }

  function currentReport() {
    return Resolver._currentReport;
  }

  return {
    startWork: startWork,
    startDay: startDay,
    currentReport: currentReport
  }

})();
