Components.PlanView.Minions = (function() {

  function init() {
    $(document).on('click', '#planView .helper-minion', Elements.buttonAction(toggleHelperMinion));
    $(document).on('click', '#planView .minion-select-cancel', Elements.buttonAction(cancelMinionSelect));
    $(document).on('click', '#planView .minion-select-confirm', Elements.buttonAction(confirmSelectProject));
    $(document).on('click', '#planView .role-link', Elements.buttonAction(selectRole));
  }

  function build(planData) {
    Components.MinionListView.buildForPlan($('#planView .plan-minion-list'), planData.minions, addRoleSelect);
  }

  function addRoleSelect(minion, element) {
    let addendum = $('<div>',{ class:'addendum role-select' });
    each(minion.availableRoles, role => {
      let link = $('<a>',{ href:'#', class:'role-link' }).data('role',role.code).append(role.name);
      if (role.code == minion.duty) { link.addClass('selected'); }
      addendum.append(link);
    });
    element.append(addendum);
  }

  function selectRole() {
    let link = $(this);
    let role = link.data('role');
    let select = link.closest('.role-select');

    select.find('.selected').removeClass('selected');
    link.addClass('selected');
  }








  // Move to minion select...

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
