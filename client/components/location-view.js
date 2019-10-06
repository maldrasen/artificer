Components.LocationView = (function() {
  const logger = new Logger('LocationView', 'rgb(230, 170, 140)');

  function init() {
    // Probably will need this?
  }

  function build(transport, view) {
    logger.info("Build Location",view.name);

    let location = $('<div>',{ id:"locationView" }).append($('#locationTemplate').html());
        location.find('.location-name').append(view.name);
        location.find('.location-description').append(view.description);
        location.find('.date').append(`Day ${view.dates.day}`);

    if (view.flags.showMapMenu) { location.find('.menu-show-map').removeClass('hide') }
    if (view.flags.showMinionMenu) { location.find('.menu-show-minions').removeClass('hide') }
    if (view.flags.eventActive) { location.find('.active-event-notification').removeClass('hide') }
    if (view.flags.showPlanAction) { location.find('.create-plan-action').removeClass('hide'); }

    $('#mainContent').empty().append(location);

    // Only needed when I'm trying to figure something out.
    // appendDebug(view);
  }

  function appendDebug(view) {
    if (DEBUG) {
      let flagList = $('#locationView #debugFlags');
      each(view.flags.all, (value,key)=>{
        flagList.append($('<dt>').append(key));
        flagList.append($('<dd>').append(value));
      });
    }
  }

  return {
    init: init,
    build: build,
  };

})();
