Components.PlanView = (function() {

  function init() {
    Components.PlanView.Current.init();
    Components.PlanView.Projects.init();
    Components.PlanView.Missions.init();
    Components.PlanView.Minions.init();
    Components.PlanView.Tasks.init();

    $(document).on('click', '#planView .plan-cancel', Elements.buttonAction(cancelPlan));
    $(document).on('click', '#planView .plan-confirm', Elements.buttonAction(confirmPlan));
  }

  function build(event, planData) {
    $('#mainContent').empty().append($('<div>',{ id:"planView" }).append($('#planTemplate').html()));
    $('#planView').data('planData', planData);

    Components.PlanView.Current.build(planData);
    Components.PlanView.Minions.build(planData);
  }

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

  function getPlanData() { return $('#planView').data('planData'); }
  function showAvailable(items) { $('#planView .available-actions').empty().append(items); }

  return { init, build, getPlanData, showAvailable };

})();
