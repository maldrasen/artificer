Components.PlanView = (function() {
  const logger = new Logger('Plan View', 'rgb(199, 219, 144)');

  function init() {
    $(document).on('click', '#planView .available-project', selectAvailableProject);
    $(document).on('click', '#planView .select-available-project', workSelectedProject);
    $(document).on('click', '#planView .helper-minion', Elements.buttonAction(toggleHelperMinion));
    $(document).on('click', '#planView .minion-select-cancel', Elements.buttonAction(cancelMinionSelect));
    $(document).on('click', '#planView .minion-select-confirm', Elements.buttonAction(confirmSelectProject));
    $(document).on('click', '#planView .plan-cancel', Elements.buttonAction(cancelPlan));
    $(document).on('click', '#planView .plan-confirm', Elements.buttonAction(confirmPlan));
  }

  function build(event, planData) {
    logger.info("Build Plan View");

    $('#mainContent').empty().append($('<div>',{ id:"planView" }).append($('#planTemplate').html()));
    $('#planView').data('planData', planData);

    buildCurrentProject(planData);
    buildAvailableProjects(planData);
    buildMinionFrame(planData);
  }

  function buildCurrentProject(planData) {
    let current = $('#planView .current-project');
    let progress = $('#planView .current-progress');

    if (planData.currentProject == null) {
      $('#planView').data('workingProjects',[]);
      current.append("Nothing (0/4)");
      current.data('committed',0);
    } else {
      let progressPercent = Math.floor(planData.currentProjectProgress / planData.currentProjectEffort * 100)
      current.append(`${planData.currentProjectName} (${progressPercent}% complete)`)
      current.data('committed',4);
      $('#planView .projects .lower-frame').addClass('hide');
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

  function buildMinionFrame(planData) {
    each(planData.minions, minion => {
      $('#planView .minion-frame').append(buildMinion(minion));
    });
  }

  function buildMinion(minion) {

    let roleSelect = $('<select>',{ class:'role-select' });
    each(minion.availableRoles, role => {
      roleSelect.append($('<option>',{ value:role.code }).append(role.name))
    });

    let element = $(`<div class='minion ${minion.currentTask} minion-${minion.id}' data-id='${minion.id}'>
      <div class='top-row'>
        <div class='name-row'>
          <span class='name'>${minion.name}</span>
          <span class='gender'>${minion.gender}</span>
          <span class='species'>${minion.species}</span>
        </div>
        <div class='role-select-area'></div>
        <div class='mission-status'>On a mission.</div>
        <div class='project-status'>Working on a project.</div>
      </div>
      <div class='attributes'>
        <span class='health ${minion.healthWord.toLowerCase()}'>
          <span class='label'>Health</span>
          <span class='health-word'>${minion.healthWord}</span>
          <span class='health-value'>(${minion.health})</span>
        </span>
        <span class='physical'><span class='label'>Physical</span><span class='value'>${minion.physical}</span></span>
        <span class='personal'><span class='label'>Personal</span><span class='value'>${minion.personal}</span></span>
        <span class='mental'><span class='label'>Mental</span><span class='value'>${minion.mental}</span></span>
        <span class='magical'><span class='label'>Magical</span><span class='value'>${minion.magical}</span></span>
      </div>
    </div>`);

    element.find('.role-select-area').append(roleSelect);

    return element;
  }

  // === Project Selection ===

  function selectAvailableProject(e) {
    if ($(this).hasClass('selected')) { return false; }

    $('.available-project.selected').removeClass('selected');
    $(this).addClass('selected');

    displaySelectedProject($(this).data('project'));
  }

  function displaySelectedProject(project) {
    let assistance = (project.help.max == 0) ?
      `Assistance: I'll have to do this myself.`:
      `Assistance: ${project.help.min} - ${project.help.max} minions.`

    let selected = $('#planView .selected-project').empty().append(`
      <div class='description'>${project.description}</div>
      <div class='effort'>${project.effort} man hours</div>
      <div class='help'>${assistance}</div>
    `)

    if (project.readyState.ready && availableHoursFor(project)) {
      selected.append($('<a>',{ href:'#', class:'select-available-project button-primary' }).append('Select'));
    }
  }

  // Most projects will have an effort level of 10 or more required hours.
  //   Half day projects take 4 effort.
  //   Quarter day projects take 2 effort.
  // The committed value represents quarter chunks of the day.
  function availableHoursFor(project) {
    let committed = $('#planView .current-project').data('committed');
    if (project.effort > 4) { return committed == 0; }
    if (project.effort == 4) { return comitted <= 2; }
    if (project.effort == 2) { return comitted <= 3; }
    throw `Bad number of hours in project ${project.code} effort - ${project.effort}`
  }

  function workSelectedProject() {
    let project = getSelectedProject();
    let minions = getPlanData().minions;

    // If this project doesn't allow helpers just add the project, no need to select minions
    if (project.help.max == 0) { return confirmSelectProject(); }

    $('#planView .minion-select-frame').removeClass('hide');
    $('#planView .modal-cover').removeClass('hide');

    let list = $('#planView .minion-select-frame .minions').empty();

    each(minions, minion => {
      if (minion.currentTask == 'free') {
        list.append($('<li>',{ class:'helper-minion' }).append(minion.name).data('id',minion.id));
      }
    });

    setHelpStatus(project);
  }

  function setHelpStatus(project) {
    let selectedHelp = getSelectedHelperMinions();
    let status = `This project will take approximately ${project.effort} man hours of work to complete. `;

    if (project.help.min == 0 && project.help.max == 0) { status += 'No one can help me on this project. '; }
    if (project.help.min == 0 && project.help.max == 1) { status += 'A single one of my minions can help you. ' }
    if (project.help.min == 0 && project.help.max > 1)  { status += `Up to ${project.help.max} of my minions can help me work to complete it. ` }
    if (project.help.min == 1 && project.help.max == 1) { status += `I'll need the help of one of my minions to complete it. ` }
    if (project.help.min >= 1 && project.help.max > 1)  { status += `I'll need the help of ${project.help.min} to ${project.help.max} of my minions to complete it. ` }

    if (selectedHelp.length == 0) {
      let days = Math.ceil(project.effort/10);
      status += (days > 1) ?
        `Working by myself, this project will take <span class='fg-strong'>${days} days</span> to complete.`:
        `Working by myself, this project will take <span class='fg-strong'>a day</span> to complete.`;
    } else {
      let work = (selectedHelp.length * 5) + 10;
      let days = Math.ceil(project.effort/work);

      if (days == 1) {
        status += (selectedHelp.length == 1) ?
          `With the help of a minion, this project will take <span class='fg-strong'>a day</span> to complete.`:
          `With the help of ${selectedHelp.length} minions, this project will take <span class='fg-strong'>a day</span> to complete.`;
      } else {
        status += (selectedHelp.length == 1) ?
          `With the help of a minion, this project will take <span class='fg-strong'>${days} days</span> to complete.`:
          `With the help of ${selectedHelp.length} minions, this project will take <span class='fg-strong'>${days} days</span> to complete.`;
      }
    }

    $('#planView .minion-select-frame .status').empty().append(status);
  }

  function toggleHelperMinion() {
    let project = getSelectedProject();
    let minion = $(this);
    let selected = getSelectedHelperMinions();

    if (minion.hasClass('selected')) {
      minion.removeClass('selected');
    } else {
      if (selected.length < project.help.max) {
        minion.addClass('selected');
      }
    }

    setHelpStatus(getSelectedProject());
  }

  // Wow, an actual use for the spread operator! But only because jQuery is
  // being stupid here, thinking I want to map jQuery elements to other wrapped
  // elements I think.
  function getSelectedHelperMinions() {
    return [...$('#planView .helper-minion.selected').map((i,element) => {
      return $(element).data('id');
    })];
  }

  function cancelMinionSelect() {
    $('#planView .minion-select-frame').addClass('hide');
    $('#planView .modal-cover').addClass('hide');
  }

  function confirmSelectProject() {
    let working = $('#planView').data('workingProjects');
    let current = $('#planView .current-project').empty();
    let committed = current.data('committed');

    let project = getSelectedProject()
    let minions = getSelectedHelperMinions();

    if (project.effort > 4)  { committed += 4; }
    if (project.effort == 4) { committed += 2; }
    if (project.effort == 2) { committed += 1; }
    current.data('committed',committed);

    working.push({
      code: project.code,
      minions: minions
    });

    (working.length == 1) ?
      current.append(`${project.name} (${committed}/4)`):
      current.append(`Multiple Projects (${committed}/4)`);

    $('#planView').data('workingProjects',working);

    if (committed == 4) {
      $('#planView .projects .lower-frame').addClass('hide');
    }

    each(minions, id => {
      $(`.minion-frame .minion-${id}`).removeClass('free').addClass('project');
    })

    cancelMinionSelect();
  }

  // === Plan Actions ===

  function cancelPlan() {
    Renderer.sendCommand('game.cancel');
  }

  function confirmPlan() {
    let committed = $('#planView .current-project').data('committed');

    let message = (committed < 4) ?
      `You're going to have plenty of idle time today. Are you sure you don't want to plan to work on something else too?`:
      `Are you sure this is what you want to work on today?`;

    let roles = [];
    $.each($('.minion-frame .minion.free'), (i, element) => {
      roles.push({
        id:   $(element).data('id'),
        role: $(element).find('.role-select').val()
      });
    });

    let plan = {
      projectWork: $('#planView').data('workingProjects'),
      assignedRoles: roles,
    }

    Elements.Confirm.showConfirm({
      message: message,
      yes: () => {
        logger.info("End Day",plan);
        Renderer.sendCommand('game.end-day',plan);
      }
    })
  }

  function getSelectedProject() { return $('.available-project.selected').data('project'); }
  function getPlanData() { return $('#planView').data('planData'); }

  return {
    init: init,
    build: build,
  };

})();
