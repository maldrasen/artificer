Components.PlanView.Minions = (function() {

  function init() {
    $(document).on('click', '#planView .helper-minion', Elements.buttonAction(toggleHelperMinion));
    $(document).on('click', '#planView .minion-select-cancel', Elements.buttonAction(cancelMinionSelect));
    $(document).on('click', '#planView .minion-select-confirm', Elements.buttonAction(confirmSelectProject));
  }

  function build(planData) {
    each(planData.minions, minion => {
      $('#planView .plan-minion-list').append(buildMinion(minion));
    });
  }

  function buildMinion(minion) {
    let healthClass = minion.healthWord.toLowerCase().replace(/\s/g,'-');

    let roleSelect = $('<select>',{ class:'role-select' });
    each(minion.availableRoles, role => {
      let option = $('<option>',{ value:role.code });
      if (role.code == minion.role) {
        option.prop('selected', true)
      }
      roleSelect.append(option.append(role.name))
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
        <span class='health ${healthClass}'>
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

  function toggleHelperMinion() {
    let project = Components.PlanView.getSelectedProject();
    let selected = Components.PlanView.getSelectedHelperMinions();
    let minion = $(this);

    if (minion.hasClass('selected')) {
      minion.removeClass('selected');
    } else {
      if (selected.length < project.help.max) {
        minion.addClass('selected');
      }
    }

    Components.PlanView.Projects.setHelpStatus(project);
  }


  function cancelMinionSelect() {
    $('#planView .minion-select-frame').addClass('hide');
    $('#planView .modal-cover').addClass('hide');
  }

  function confirmSelectProject() {
    let working = $('#planView').data('workingProjects');
    let current = $('#planView .current-project').empty();
    let committed = current.data('committed');

    let project = Components.PlanView.getSelectedProject()
    let minions = Components.PlanView.getSelectedHelperMinions();

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
      $(`.plan-minion-list .minion-${id}`).removeClass('free').addClass('project');
    })

    cancelMinionSelect();
  }

  return { init, build };

})();
