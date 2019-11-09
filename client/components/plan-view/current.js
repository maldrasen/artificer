Components.PlanView.Current = (function() {

  function init() {

  }

  function build(planData) {
    // if (planData.currentProject) {
    //   let progressPercent = Math.floor(planData.currentProjectProgress / planData.currentProjectEffort * 100)
    //   current.append(`${planData.currentProjectName} (${progressPercent}% complete)`)
    //   current.data('committed',4);
    //   $('#planView .projects .lower-frame').addClass('hide');
    // }
  }

  function addProject(project) {
    console.log("Add Project",project);
  }

  function addCommitted(count) {
    if (count + getCommitted() > 4) { throw "Ain't nobody got time for that!"; }
    for (let i=0; i<count; i++) {
      $('#planView .timeline .chunk.off').removeClass('off').addClass('on');
    }
    adjustCategoryButtons();
  }

  function adjustCategoryButtons() {
    let count = getCommitted();

    if (count == 4) {
      $('#planView .show-available-tasks-button').addClass('disabled-button');
      $('#planView .show-available-projects-button').addClass('disabled-button');
      return;
    }

    if (count == 0) {
      $('#planView .show-available-tasks-button').removeClass('disabled-button');
      $('#planView .show-available-projects-button').removeClass('disabled-button');
      return;
    }

    // Count is between 0 and 4, tasks can be added, but new projects cannot be started.
    $('#planView .show-available-tasks-button').removeClass('disabled-button');
    $('#planView .show-available-projects-button').addClass('disabled-button');
  }

  function getCommitted() {
    return $('#planView .timeline .chunk.on').length;
  }

  return {
    init,
    build,
    addProject,
    addCommitted,
    getCommitted,
  };

})();
