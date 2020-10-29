global.Location = class Location extends Form {

  // I'm still trying to think through this rendering process. Location is a
  // core class, but it might depend on things from the scenario, but then
  // those things can go onto the form...

  async render() {

    let rendering = {
      name: this.name,
      description: this.description,
    }

    let locationEvent = (await AvailableEvent.currentLocationEvents())[0];
    if (locationEvent) {
      rendering.event = {
        code: locationEvent.code,
        label: (Event.lookup(locationEvent.code).buttonLabel || '(!) Event')
      }
    }

    return rendering;
  }

  static current() { return this.lookup(Game.getLocation()) }

  // It's possible that the names and descriptions and so forth of locations
  // may be changed by any number of game flags and state changes and so forth.
  // These functions should be called to get the location attributes though
  // the location forms themselves will have associated build functions that
  // are called to get complex attribute, or plain attribute names to get
  // simple attributes. Either the attribute or the function should be
  // overwriten, but not both, or neither in the case of attributes and flavor.
  //
  //      buildName() or name
  //      buildDescription() or description
  //      buildAttributes(), attributes, or undefined
  //      buildFlavor(), flavor, or undefined.

  getName() {
    return (typeof this.buildName == 'function') ? this.buildName() : (this.name || "[MISSING NAME]");
  }

  getDescription() {
    return (typeof this.buildDescription == 'function') ? this.buildDescription() : (this.description || "[MISSING DESCRIPTION]");
  }

  getAttributes()  {
    return (typeof this.buildAttributes == 'function') ? this.buildAttributes() : (this.attributes || []);
  }

  getFlavor() {
    return (typeof this.buildFlavor == 'function') ? this.buildFlavor() : (this.flavor || []);
  }

}
