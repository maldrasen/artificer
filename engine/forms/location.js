global.Location = class Location extends Form {

  async buildView() {
    const summonAvailable = Flag.lookup('minions.can-summon') && (typeof this.summonActions == 'function');

    let locationEvent = null;
    let locationEvents = await AvailableEvent.currentLocationEvents();
    if (locationEvents.length > 0) {
      locationEvent = locationEvents[0].code;
    }

    const view = {
      actions: this.actions,
      activeEvent: locationEvent,
      name: this.buildName(),
      description: this.buildDescription(),
      flags: this.buildFlags(),
      attributes: this.buildAttributes(),
      flavor: this.buildFlavor(),
      mapData: (await Location.buildMapData()),
      dates: { day:Game.dayNumber() },
      time: Game.time(),
      summonAvailable
    };

    if (Flag.lookup('locationMenu.showDate')) {
      view.dates.date = Calendar.fullDate(Game.dayNumber());
    }

    return view;
  }

  // The names and descriptions of all of the locations will probably always be
  // based on the current game state, a variety of game flags and so forth.
  // Additionally the way each location determines it's name is unique to that
  // location and should be implemented in the form itself. The functions below
  // should be overwritten for this purpose.
  buildName()        { return '[TODO]'; }
  buildDescription() { return '[TODO]'; }
  buildAttributes()  { return []; }
  buildFlavor()      { return []; }

  buildFlags() {
    let flags = Flag.getAll();

    return {
      all: flags,
      showPlanAction: (flags['location.current-study'] == Game.location()),
      showManageAction: (flags['location.current-study'] == Game.location() && flags['game.keep-management'] == 'Y'),
      showMapMenu: (flags['location-menu.map'] == 'Y'),
      showMinionMenu: (flags['location-menu.minions'] == 'Y'),
      showInventoryMenu: (flags['location-menu.inventory'] == 'Y'),
      playerMenuName: flags['player.first-name'],
    };
  }

  static async summonAvailable() {
    return Flag.lookup('minions.can-summon') && (typeof Location.lookup(Game.location()).summonActions == 'function');
  }

  // We build the locations for the map when building the location view. Right
  // now we only need a name and a code, but eventually I think the map will
  // need to be more graphical, so this will need to carry a lot more map state
  // data and image positioning and stuff.
  static async buildMapData() {
    let allEvents = await AvailableEvent.locationEvents();

    const locations = await Promise.all(Location.all().map(async location => {
      if (Flag.lookup(`map.${location.code}`) == null) { return null; } else {

        let name = await location.buildName();
        let events = allEvents.filter(e => {
          return Event.lookup(e.code).setting.location == location.code
        });

        return {
          code: location.code,
          current: location.code == Game.location(),
          name: name,
          eventFlag: (events.length > 0)
        };
      }
    }));

    return { locations:ArrayUtility.compact(locations) };
  }

}
