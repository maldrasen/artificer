Components.LocationView = (function() {
  function init() {
    $(document).on('click','.menu-show-load',      Elements.buttonAction(Renderer.showLoadGame));
    $(document).on('click','.menu-show-save',      Elements.buttonAction(Renderer.showSaveGame));
    $(document).on('click','.menu-show-map',       Elements.buttonAction(Renderer.showMap));
    $(document).on('click','.menu-show-minions',   Elements.buttonAction(() => { Renderer.sendCommand('location.show-minions');   }));
    $(document).on('click','.menu-show-inventory', Elements.buttonAction(() => { Renderer.sendCommand('location.show-inventory'); }));
    $(document).on('click','.menu-show-player',    Elements.buttonAction(() => { Renderer.sendCommand('location.show-player');    }));
  }

  function build(transport, view) {
    let location = $('<div>',{ id:"locationView" }).append($('#locationTemplate').html());
        location.find('.location-name').append(view.name);
        location.find('.location-description').append(view.description);
        location.find('.date').append(`Day ${view.dates.day}`);
        location.find('.menu-show-player').append(view.flags.playerMenuName);
        location.data('mapData',view.mapData);

    if (view.dates.date) { location.find('.date').append(`, ${view.dates.date}`); }
    if (view.flags.showMapMenu) { location.find('.menu-show-map').removeClass('hide'); }
    if (view.flags.showMinionMenu) { location.find('.menu-show-minions').removeClass('hide'); }
    if (view.flags.showInventoryMenu) { location.find('.menu-show-inventory').removeClass('hide'); }
    if (view.flags.eventActive) { location.find('.active-event-notification').removeClass('hide'); }
    if (view.flags.showPlanAction) { location.find('.create-plan-action').removeClass('hide'); }

    $('#mainContent').empty().append(location);

    if (locationEventActive(view)) {
      showMapFlag();
    }

    each(view.actions||[], action => {
      addAction(action);
    });
  }

  function addAction(action) {
    let link = $('<a>',{ href:'#' }).append(action.name).on('click', Elements.buttonAction(() => {
      Renderer.sendCommand(action.command, action.data);
    }));

    let item = $('<li>',{ class:'action' }).append(link);

    $('#locationView ul.actions').append(item);
  }

  function locationEventActive(view) {
    return view.mapData.locations.filter(datum => {
      return datum.eventFlag && !datum.current;
    }).length > 0;
  }

  function showMapFlag() {
    let position = $('#mainContent .menu-show-map').offset();
    let flag = $('<div>',{ class:'map-flag' }).css({ left:position.left-8 });
    $('#mainContent .location-menu').append(flag);
  }

  function buildMap() {
    let mapData = $('#locationView').data('mapData');
    let list = $('#overlayFrame #mapView .locations').empty();

    each(mapData.locations, location => {
      let element = (location.current == false) ? buildMapLink(location) : $('<li>').append(location.name);
      if (location.eventFlag) { element.append($('<span>',{ class:'event-flag' }).append('(!) Event')); }
      list.append(element);
    });
  }

  function buildMapLink(location) {
    return $('<li>').append($('<a>',{ href:'#' }).append(location.name).on('click',Elements.buttonAction(()=>{
      Renderer.removeOverlay();
      Renderer.sendCommand('location.change', { code:location.code }) ;
    })));
  }

  return {
    init: init,
    build: build,
    buildMap: buildMap,
  };

})();
