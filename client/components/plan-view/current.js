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

  function getTaskWork() {
    return $('#planView .in-progress .task').map((i, taskElement) => {
      let task = $(taskElement).data('task');
      let minions = $(taskElement).data('minions');
      return { code:task.code, minions:minions }
    });
  }

  function cancelInProgress() {
    let item = $(this).closest('li.item');
    if (item.hasClass('project')) { cancelProject(item.data('project'), item.data('minions')); }
    if (item.hasClass('mission')) { cancelMission(item.data('mission'), item.data('minions')); }
    if (item.hasClass('task'))    { cancelTask(   item.data('task'),    item.data('minions')); }
    item.remove();
    addNothing();
  }

  function addCommitted(count) {
    if (count + getCommitted() > 4) { throw "Ain't nobody got time for that!"; }
    for (let i=0; i<count; i++) {
      $('#planView .timeline .chunk.off').removeClass('off').addClass('on');
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
    if (options.mission) { item.data('mission', options.mission); }
    if (options.task)    { item.data('task', options.task); }

    return item;
  }

  function cancelProject(project, minions) {
    Components.PlanView.Minions.release(minions);
    removeCommitted(4);
  }

  function cancelMission(mission, minions) {

  }

  function cancelTask(task, minions) {
    Components.PlanView.Minions.release(minions);
    removeCommitted(task.time);
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
    addCommitted,
    getCommitted,
  };

})();
