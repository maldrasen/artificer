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
    Components.PlanView.Missions.build(planData);
    Components.PlanView.Tasks.build(planData);
  }

  function cancelPlan() {
    Renderer.sendCommand('game.cancel');
  }

  function confirmPlan() {
    let message = (Components.PlanView.Current.getCommitted() < 4) ?
      `You're going to have plenty of idle time today. Are you sure you don't want to plan to work on something else too?`:
      `Are you sure this is what you want to work on today?`;

    let roles = Components.PlanView.Minions.getFree().map(minion => {
      return { id:minion.id, role:$(`.plan-minion-list .minion-${minion.id}`).data('selected-role') }
    });

    let plan = {
      projectWork: Components.PlanView.Current.getProjectWork(),
      taskWork: Components.PlanView.Current.getTaskWork(),
      missionWork: Components.PlanView.Current.getMissionWork(),
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
