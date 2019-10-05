global.Location = class Location extends Form {

  async buildView() {
    let results = await Promise.all([
      this.buildName(),
      this.buildDescription(),
      this.buildFlags(),
      this.buildAttributes(),
      this.buildFlavor(),
    ]);

    return {
      name: results[0],
      description: results[1],
      flags: results[2],
      attributes: results[3],
      flavor: results[4],
    };
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


  async buildFlags() {
    let game =  await Game.instance();
    let flags = await game.getFlags();

    return {
      all: flags,
      showPlanAction: (flags['location.currentStudy'] == game.location),
      showMapMenu: (flags['locationMenu.map'] != 'locked'),
      showMinionMenu: (flags['locationMenu.minions'] != 'locked'),
      eventActive: game.nextLocationEvent != null
    };
  }

}
