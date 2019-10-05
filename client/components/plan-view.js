Components.PlanView = (function() {
  const logger = new Logger('Plan View', 'rgb(199, 219, 144)');

  function init() {
    $(document).on('click', '.available-project', selectAvailableProject);
    $(document).on('click', '.select-available-project', workSelectedProject);
  }

  function build(event, planData) {
    logger.info("Build Plan View");

    $('#mainContent').empty().append($('<div>',{ id:"planView" }).append($('#planTemplate').html()));

    console.log("=== Build Plan ===")
    console.log(planData);

    buildCurrentProject(planData);
    buildAvailableProjects(planData);
  }

  function buildCurrentProject(planData) {
    let current = $('#planView .current-project');
    let progress = $('#planView .current-progress');

    if (planData.currentProject == null) {
      current.append("Nothing (0/4)");
      current.data('committed',0);
    }
  }

  function buildAvailableProjects(planData) {
    let list = $('<ul>');

    each(planData.projects, project => {
      let item = $('<li>',{ class:'available-project' });
          item.addClass(project.readyState.ready ? 'ready' : 'not-ready');
          item.append($('<div>',{ class:'name' }).append(project.name));
          item.data('project',project);

      list.append(item);
    });

    $('#planView .available-projects').append(list);
  }

  // === Project Selection ===

  function selectAvailableProject(e) {
    if ($(this).hasClass('selected')) { return false; }

    $('.available-project.selected').removeClass('selected');
    $(this).addClass('selected');

    displaySelectedProject($(this).data('project'));
  }

  function getSelectedProject() {
    return $('.available-project.selected').data('project');
  }

  function displaySelectedProject(project) {
    let selected = $('#planView .selected-project').append(`
      <div class='description'>${project.description}</div>
      <div class='effort'>${project.effort} man hours</div>
      <div class='help'>Assistance: ${project.help.min} - ${project.help.max} minions.</div>
    `)

    if (project.readyState.ready && availableHoursFor(project)) {
      selected.append($('<a>',{ href:'#', class:'select-available-project button-primary' }).append('Select'));
    }
  }

  // Most projects will have an effort level of 10 or more required hours.
  //   Half day projects take 4 effort.
  //   Quarter day projects take 2 effort.
  function availableHoursFor(project) {
    let committed = $('#planView .current-project').data('committed');
    if (project.effort > 4) { return committed == 0; }
    if (project.effort == 4) { return comitted <= 4; }
    if (project.effort == 2) { return comitted <= 6; }
    throw `Bad number of hours in project ${project.code} effort - ${project.effort}`
  }

  function workSelectedProject() {
    let project = getSelectedProject();
    console.log("Work on:",project)
  }



  return {
    init: init,
    build: build,
  };

})();
