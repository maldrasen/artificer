Components.PlanView.Current = (function() {

  function init() {
    $(document).on('click','#planView .cancel-button', Elements.buttonAction(cancelInProgress));
  }

  function build(planData) {
    if (planData.currentProject) {
      addCommitted(4);
      addProject({
        type: 'project',
        name: planData.currentProjectName,
        progress: Math.floor(planData.currentProjectProgress / planData.currentProjectEffort * 100)
      });
    }
    addNothing();
  }

  function addProject(options) {
    options.type = 'project';
    $('#planView .in-progress .nothing').remove();
    $('#planView .in-progress').append(inProgressElement(options));
  }

  function addTask(options) {
    options.type = 'task';
    $('#planView .in-progress .nothing').remove();
    $('#planView .in-progress').append(inProgressElement(options));
  }

  function addMission(options) {
    options.type = 'mission';
    $('#planView .in-progress .nothing').remove();
    $('#planView .in-progress').append(inProgressElement(options));
  }

  function getProjectWork() {
    let element = $('#planView .in-progress .project');
    let project = element.data('project');
    return project ? { code:project.code, minions:element.data('minions') } : null;
  }

  // Have to call get() after map() because sometimes jQuery is stupid as hell.
  function getTaskWork() {
    return $('#planView .in-progress .task').map((i, taskElement) => {
      let task = $(taskElement).data('task');
      let minions = $(taskElement).data('minions');
      return { code:task.code, minions:minions }
    }).get();
  }

  function getMissionWork() {
    return $('#planView .in-progress .mission').map((i, missionElement) => {
      let mission = $(missionElement).data('mission');
      let minions = $(missionElement).data('minions');
      return { code:mission.code, minions:minions }
    }).get();
  }

  function cancelInProgress() {
    let item = $(this).closest('li.item');
    let task = item.data('task');
    let mission = item.data('mission');

    if (item.hasClass('project')) { removeCommitted(4); }
    if (item.hasClass('task')) { removeCommitted(task.time); }
    if (item.hasClass('mission')) { $(`#planView tr.mission-${mission.code}`).removeClass('hide') }

    Components.PlanView.Minions.release(item.data('minions') || []);
    Components.PlanView.Crafting.releaseMaterials((task && task.ingredients) || {});

    item.remove();
    addNothing();
  }

  function addCommitted(count) {
    if (count + getCommitted() > 4) { throw "Ain't nobody got time for that!"; }
    for (let i=0; i<count; i++) {
      $($('#planView .timeline .chunk.off')[0]).removeClass('off').addClass('on');
    }
    adjustCategoryButtons();
  }

  function removeCommitted(count) {
    let on = $('#planView .timeline .chunk.on');
    for (let i=on.length-1; i>=0; i--) {
      $(on[i]).removeClass('on').addClass('off');
    }
    adjustCategoryButtons();
  }

  function getCommitted() {
    return $('#planView .timeline .chunk.on').length;
  }

  function adjustCategoryButtons() {
    Components.PlanView.enableConfirm();

    let count = getCommitted();

    if (count == 4) {
      $('#planView .show-available-tasks-button').addClass('disabled-button');
      $('#planView .show-available-projects-button').addClass('disabled-button');
      return;
    }

    if (count == 0) {
      $('#planView .show-available-tasks-button').removeClass('disabled-button');
      $('#planView .show-available-projects-button').removeClass('disabled-button');

      if (Components.PlanView.allowIdle() == false) {
        Components.PlanView.disableConfirm();
      }

      return;
    }

    // Count is between 0 and 4, tasks can be added, but new projects cannot be started.
    $('#planView .show-available-tasks-button').removeClass('disabled-button');
    $('#planView .show-available-projects-button').addClass('disabled-button');
  }

  // Add an in progress element to the current day's plan. Options:
  //   name      * Name of this task
  //   type      * [project,task,mission] Should be set by the calling function
  //   progress    (number) Percent complete.
  //   minions     (array of IDs) Array of minion IDs working this.
  //   project     Project code (One of these should be set)
  //   mission     Mission code
  //   task        Task code
  function inProgressElement(options) {
    let item = $('<li>',{ class:`item ${options.type}` });
    let progressNote = options.progress ? `(${options.progress}% complete)` : '';

    if (options.minions) {
      item.data('minions',options.minions);
    }
    if (options.progress == 0 || options.progress == null) {
      item.append($('<a>',{ href:'#', class:'cancel-button no-underline' }).append('X'));
    }
    if (options.progress > 0) {
      item.append($('<div>',{ class:'progress' }).css({ width:`${options.progress}%` }));
    }

    item.append($('<div>',{ class:'name' }).append(`${options.name} ${progressNote}`));

    if (options.project) { item.data('project', options.project); }
    if (options.mission) { item.data('mission', options.mission).addClass(`mission-${options.mission.code}`); }
    if (options.task)    { item.data('task', options.task); }

    return item;
  }

  function addNothing() {
    if ($('#planView .in-progress li').length == 0) {
      $('#planView .in-progress').append(`<li class='nothing'>Nothing</li>`);
    }
  }

  return {
    init,
    build,
    addProject,
    addTask,
    addMission,
    getProjectWork,
    getTaskWork,
    getMissionWork,
    addCommitted,
    getCommitted,
  };

})();
