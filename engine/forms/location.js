global.Location = class Location extends Form {

  async buildView() {
    const game = await Game.instance();
    const summonAvailable = Flag.lookup('minions.can-summon') && (typeof this.summonActions == 'function');

    const view = {
      actions: this.actions,
      name: (await this.buildName()),
      description: (await this.buildDescription()),
      flags: (await this.buildFlags(game)),
      attributes: (await this.buildAttributes()),
      flavor: (await this.buildFlavor()),
      mapData: (await Location.buildMapData()),
      dates: { day:game.dayNumber },
      summonAvailable
    };

    if (Flag.lookup('locationMenu.showDate')) {
      view.dates.date = Calendar.fullDate(game.dayNumber);
    }

    return view;
  }

  // The names and descriptions of all of the locations will probably always be
  // based on the current game state, a variety of game flags and so forth.
  // Additionally the way each location determines it's name is unique to that
  // location and should be implemented in the form itself. The functions below
  // should be overwritten for this purpose.
  async buildName()        { return '[TODO]'; }
  async buildDescription() { return '[TODO]'; }
  async buildAttributes()  { return []; }
  async buildFlavor()      { return []; }


  async buildFlags(game) {
    let eventActive = await EventQueue.nextLocationEvent(game.location) != null;
    let flags = Flag.getAll();

    return {
      all: flags,
      showPlanAction: (flags['location.current-study'] == game.location),
      showMapMenu: (flags['location-menu.map'] == 'unlocked'),
      showMinionMenu: (flags['location-menu.minions'] == 'unlocked'),
      showInventoryMenu: (flags['location-menu.inventory'] == 'unlocked'),
      playerMenuName: flags['player.first-name'],
      eventActive: eventActive
    };
  }

  static async summonAvailable() {
    return Flag.lookup('minions.can-summon') &&
           (typeof Location.lookup((await Game.instance()).location).summonActions == 'function');
  }

  // We build the locations for the map when building the location view. Right
  // now we only need a name and a code, but eventually I think the map will
  // need to be more graphical, so this will need to carry a lot more map state
  // data and image positioning and stuff.
  static async buildMapData() {
    let current = (await Game.instance()).location;

    let locations = await Promise.all(Location.all().map(async location => {
      if (Flag.lookup(`map.${location.code}`) == null) { return null; } else {
        let events = await EventQueue.getQueuedLocationEvents(location.code);
        let name = await location.buildName();

        return {
          code: location.code,
          current: location.code == current,
          name: name,
          eventFlag: (events.length > 0)
        };
      }
    }));

    return { locations:ArrayUtility.compact(locations) };
  }

}
