global.Location = class Location extends Form {

  async buildView() {
    const game = await Game.instance();
    const flags = await game.getFlags();

    let results = await Promise.all([
      this.buildName(),
      this.buildDescription(),
      this.buildFlags(game, flags),
      this.buildAttributes(),
      this.buildFlavor(),
    ]);

    let view = {
      name: results[0],
      description: results[1],
      flags: results[2],
      attributes: results[3],
      flavor: results[4],
      mapData: this.buildMapData(flags),
      dates: { day:game.dayNumber }
    };

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


  async buildFlags(game, flags) {
    return {
      all: flags,
      showPlanAction: (flags['location.currentStudy'] == game.location),
      showMapMenu: (flags['locationMenu.map'] != 'locked'),
      showMinionMenu: (flags['locationMenu.minions'] != 'locked'),
      eventActive: game.nextLocationEvent != null
    };
  }

  // We build the locations for the map when building the location view. Right
  // now we only need a name and a code, but eventually I think the map will
  // need to be more graphical, so this will need to carry a lot more map state
  // data and image positioning and stuff.
  buildMapData(flags) {
    let locations = [];

    each(Location.instances, (location, code) => {
      if (location.unlockFlag == null || flags[location.unlockFlag]) {
        locations.push({
          code: location.code,
          name: location.name,
        });
      }
    })

    return { locations:locations };
  }

}
