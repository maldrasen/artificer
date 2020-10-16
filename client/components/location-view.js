Components.LocationView = (function() {

  function init() {
    $(document).on('click','.menu-show-load',       Elements.buttonAction(Components.PersistenceViews.showLoadGame));
    $(document).on('click','.menu-show-save',       Elements.buttonAction(Components.PersistenceViews.showSaveGame));
    $(document).on('click','.menu-quit',            Elements.buttonAction(confirmQuit));
    $(document).on('click','.start-location-event', Elements.buttonAction(startLocationEvent));

    // $(document).on('click','.menu-show-map',        Elements.buttonAction(Renderer.showMap));
    // $(document).on('click','.menu-show-minions',    Elements.buttonAction(() => { Renderer.sendCommand('location.show-minions');   }));
    // $(document).on('click','.menu-show-inventory',  Elements.buttonAction(() => { Renderer.sendCommand('location.show-inventory'); }));
    // $(document).on('click','.menu-show-player',     Elements.buttonAction(() => { Renderer.sendCommand('location.show-player');    }));
  }

  function build(transport, view) {
    Elements.reset();

    let location = $('<div>',{ id:"locationView" }).append($('#locationTemplate').html());
        location.find('.location-name').append(view.name);
        location.find('.location-description').append(view.description);
    //     location.find('.date').append(`${view.time}, Day ${view.dates.day}`);
    //     location.find('.menu-show-player').append(view.flags.playerMenuName);
    //     location.data('mapData',view.mapData);

    // if (view.dates.date) { location.find('.date').append(`, ${view.dates.date}`); }
    // if (view.flags.showMapMenu) { location.find('.menu-show-map').removeClass('hide'); }
    // if (view.flags.showMinionMenu) { location.find('.menu-show-minions').removeClass('hide'); }
    // if (view.flags.showInventoryMenu) { location.find('.menu-show-inventory').removeClass('hide'); }
    // if (view.flags.showPlanAction) { location.find('.create-plan-action').removeClass('hide'); }
    // if (view.flags.showManageAction) { location.find('.manage-action').removeClass('hide'); }
    // if (view.flags.showTrainAction) { location.find('.train-action').removeClass('hide'); }

    if (view.event) {
      location.find('.active-event-notification').
        data('code',view.event.code).
        removeClass('hide').
        append(view.event.label);
    }

    $('#mainContent').empty().append(location);

    // if (locationEventActive(view)) {
    //   showMapFlag();
    // }

    // each(view.actions||[], action => {
    //   addAction(action);
    // });
  }

  // function addAction(action) {
  //   $('#locationView ul.actions').append($('<li>',{ class:'small-margin-bottom' }).append(
  //     $('<a>',{ href:'#', class:'button-primary' }).append(action.name).on('click', Elements.buttonAction(() => {
  //       Renderer.sendCommand(action.command, action.data);
  //     }))
  //   ));
  // }
  //
  // function locationEventActive(view) {
  //   return view.mapData.locations.filter(datum => {
  //     return datum.eventFlag && !datum.current;
  //   }).length > 0;
  // }

  function startLocationEvent() {
    Renderer.sendCommand('game.start-location-event', { code:$(this).data('code') });
  }

  // function showMapFlag() {
  //   let position = $('#mainContent .menu-show-map').offset();
  //   let flag = $('<div>',{ class:'map-flag' }).css({ left:position.left-8 });
  //   $('#mainContent .location-menu').append(flag);
  // }
  //
  // function buildMap() {
  //   let mapData = $('#locationView').data('mapData');
  //   let list = $('#overlayFrame #mapView .locations').empty();
  //
  //   each(mapData.locations, location => {
  //     let element = (location.current == false) ? buildMapLink(location) : $('<li>').append(location.name);
  //     if (location.eventFlag) { element.append($('<span>',{ class:'event-flag' }).append('(!) Event')); }
  //     list.append(element);
  //   });
  // }
  //
  // function buildMapLink(location) {
  //   return $('<li>').append($('<a>',{ href:'#' }).append(location.name).on('click',Elements.buttonAction(()=>{
  //     Renderer.removeOverlay();
  //     Renderer.sendCommand('location.change', { code:location.code }) ;
  //   })));
  // }
  //
  // function isOpen() {
  //   return $('#locationView').length > 0;
  // }


  // === Location Menu ===

  function confirmQuit() {
    Elements.Confirm.showConfirm({
      message: 'Quit this shit?',
      yes: () => { Renderer.sendCommand('game.quit'); }
    })
  }

  return {
    init: init,
    build: build,
    // buildMap: buildMap,
    // isOpen: isOpen,
  };

})();
