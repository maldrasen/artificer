Components.PlanView.Minions = (function() {

  function init() {
    $(document).on('click', '#planView .role-link', Elements.buttonAction(selectRole));
  }

  function build(planData) {
    Components.MinionListView.buildForPlan($('#planView .plan-minion-list'), planData.minions, addRoleSelect);
  }

  function getFree() {
    return Components.PlanView.getPlanData().minions.filter(minion => {
      return minion.currentDuty == 'role'
    });
  }

  // The release() function only marks the minion as free in the UI. We don't
  // also adjust the minion data because if we're canceling a task, we might
  // not know which minion is associated with each task? We should though, but
  // I'll figure that out later.
  function release(minionIDs) {
    each(minionIDs, id => {
      $(`.plan-minion-list .minion-${id}`).removeClass('taken').addClass('free');
    });
  }

  // The claim() functions sets the currentDuty for each of the minions in the
  // minion ID list and also marks the minion as taken in the UI.
  function claim(minionIDs, duty) {
    let minionData = Components.PlanView.getPlanData().minions;
    each(minionData, minion => {
      if (minionIDs.indexOf(minion.id) >= 0) {
        minion.currentDuty = duty;
        $(`.plan-minion-list .minion-${minion.id}`).removeClass('free').addClass('taken');
      }
    });
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

  return {
    init,
    build,
    getFree,
    release,
    claim,
  };

})();
