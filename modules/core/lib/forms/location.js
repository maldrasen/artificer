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

}
