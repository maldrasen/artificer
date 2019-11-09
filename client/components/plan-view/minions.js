Components.PlanView.Minions = (function() {

  function init() {
    $(document).on('click', '#planView .role-link', Elements.buttonAction(selectRole));
  }

  function build(planData) {
    Components.MinionListView.buildForPlan($('#planView .plan-minion-list'), planData.minions.filter(minion => {
      return minion.currentDuty == 'role'
    }), addRoleSelect);
  }

  function getFree() {
    return Components.PlanView.getPlanData().minions.filter(minion => {
      return minion.currentDuty == 'role'
    });
  }

  function findMinion(id) {
    return Components.PlanView.getPlanData().minions.filter(minion => {
      return minion.id == id
    })[0];
  }

  // The claim() function sets the currentDuty for each of the minions in the
  // minion ID list and also marks the minion as taken in the UI.
  function claim(minionIDs, duty) {
    each(Components.PlanView.getPlanData().minions, minion => {
      if (minionIDs.indexOf(minion.id) >= 0) {
        minion.currentDuty = duty;
        $(`.plan-minion-list .minion-${minion.id}`).removeClass('free').addClass('taken');
      }
    });
  }

  // The release() function returns the currentDuty to role for each of the
  // minions in the minionIDs list, then marks the minion as available in the UI.
  function release(minionIDs) {
    each(Components.PlanView.getPlanData().minions, minion => {
      if (minionIDs.indexOf(minion.id) >= 0) {
        minion.currentDuty = 'role';
        $(`.plan-minion-list .minion-${minion.id}`).removeClass('taken').addClass('free');
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
    element.data('selected-role', minion.duty);
    element.append(addendum);
  }

  function selectRole() {
    let link = $(this);
    let role = link.data('role');
    let select = link.closest('.role-select');

    select.find('.selected').removeClass('selected');
    link.closest('.minion-frame').data('selected-role',role);
    link.addClass('selected');
  }

  return {
    init,
    build,
    findMinion,
    getFree,
    release,
    claim,
  };

})();
