global.Resolver = (function() {

  function startWork(plan) {
    console.log("=== Start Work ===")
    console.log(plan);

    await Resolver.Projects.startProjects();
    await Resolver.Roles.assignRoles();
    await Composer.render();
  }

  function startDay() {
    Composer.render();
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
