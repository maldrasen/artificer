Components.LocationView = (function() {
  const logger = new Logger('LocationView', 'rgb(230, 170, 140)');

  function init() {}

  function build(transport, view) {
    logger.info("Build Location",view.name);

    let location = $('<div>',{ id:"currentLocation" }).append($($('#locationTemplate').html()));
        location.find('.location-name').append(view.name);
        location.find('.location-description').append(view.description);

    if (view.flags.showMapMenu) { location.find('.menu-show-map').removeClass('hide') }
    if (view.flags.showMinionMenu) { location.find('.menu-show-minions').removeClass('hide') }
    if (view.flags.eventActive) { location.find('.active-event-notification').removeClass('hide') }

    $('#mainContent').empty().append(location);
  }

  return {
    init: init,
    build: build,
  };

})();
