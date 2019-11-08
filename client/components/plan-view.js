Components.PlanView = (function() {

  function init() {
    Components.PlanView.Projects.init();
    Components.PlanView.Missions.init();
    Components.PlanView.Minions.init();

    $(document).on('click', '#planView .plan-cancel', Elements.buttonAction(cancelPlan));
    $(document).on('click', '#planView .plan-confirm', Elements.buttonAction(confirmPlan));
  }

  function build(event, planData) {
    $('#mainContent').empty().append($('<div>',{ id:"planView" }).append($('#planTemplate').html()));
    $('#planView').data('planData', planData);

    // Components.PlanView.Projects.buildCurrent(planData);
    // Components.PlanView.Projects.buildAvailable(planData);
    // Components.PlanView.Missions.build(planData);
    Components.PlanView.Minions.build(planData);
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
    $.each($('.plan-minion-list .minion.free'), (i, element) => {
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
        Renderer.sendCommand('resolver.start-work',plan);
      }
    })
  }

  // === Helpers ===

  // Wow, an actual use for the spread operator! But only because jQuery is
  // being stupid here, thinking I want to map jQuery elements to other wrapped
  // elements I think.
  function getSelectedHelperMinions() {
    return [...$('#planView .helper-minion.selected').map((i,element) => {
      return $(element).data('id');
    })];
  }

  function getPlanData() { return $('#planView').data('planData'); }
  function getSelectedProject() { return $('.available-project.selected').data('project'); }

  return {
    init,
    build,
    getPlanData,
    getSelectedProject,
    getSelectedHelperMinions,
  };

})();
