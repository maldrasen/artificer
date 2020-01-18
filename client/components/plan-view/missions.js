Components.PlanView.Missions = (function() {

  function init() {
    $(document).on('click', '#planView .start-mission-button', Elements.buttonAction(startMission));
    $(document).on('click', '#planView .show-available-missions-button', Elements.buttonAction(e => {
      Components.PlanView.showAvailable(getAvailableMissions());
    }));
  }

  function build(planData) {
    if (planData.missions.length > 0) {
      $('#planView .show-available-missions-button').removeClass('hide');
      $('#planView #idleMessage').addClass('hide');
    }
  }

  function getAvailableMissions() {
    return Components.PlanView.getPlanData().missions.map(mission => {
      let link = $('<a>',{ class:'start-mission-button button button-small ready' });
          link.append($('<div>',{ class:'name' }).append(mission.name));
          link.data('mission',mission);

      let row = $('<tr>').addClass(`mission-${mission.code}`);
          row.append($('<td>').append(link));
          row.append($('<td>').append( $('<div>',{ class:'description' }).append(mission.description) ));

      if ($(`#planView .in-progress .item.mission-${mission.code}`).length > 0) {
        row.addClass('hide');
      }

      return row;
    });
  }

  function startMission() {
    let mission = $(this).data('mission');
    let minions = Components.PlanView.Minions.getFree();

    Components.MinionSelectDialog.open({
      title: 'Select Minions',
      minions: minions,
      minimum: mission.minions.min,
      limit: mission.minions.max,
      onConfirm: ids => {
        $(this).closest('tr').addClass('hide');
        confirmSelectMission(mission, ids);
      }
    });
  }

  function confirmSelectMission(mission, ids) {
    Components.PlanView.Minions.claim(ids, 'mission');
    Components.PlanView.Current.addMission({
      mission: mission,
      name: mission.name,
      progress: 0,
      minions: ids,
    });
  }

  return { init, build };

})();
