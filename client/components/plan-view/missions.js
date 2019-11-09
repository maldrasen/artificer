Components.PlanView.Missions = (function() {

  function init() {
    $(document).on('click', '#planView .show-available-missions-button', Elements.buttonAction(e => {
      Components.PlanView.showAvailable(getAvailableMissions());
    }));
  }

  function getAvailableMissions() {
    return Components.PlanView.getPlanData().missions.map(mission => {
      let link = $('<a>',{ class:'start-mission-button button button-small ready' });
          link.append($('<div>',{ class:'name' }).append(mission.name));
          link.data('mission',mission);

      let row = $('<tr>');
          row.append($('<td>').append(link));
          row.append($('<td>').append( $('<div>',{ class:'description' }).append(mission.description) ));

      return row;
    });
  }

  return { init };

})();
