Components.PlanView.Minions = (function() {

  function init() {
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

  return { init, build };

})();
