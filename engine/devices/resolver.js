global.Resolver = (function() {

  function startWork(plan) {
    Composer.render();
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
