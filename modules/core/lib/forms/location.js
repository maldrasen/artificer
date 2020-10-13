global.Location = class Location extends Form {

  // I'm still trying to think through this rendering process. Location is a
  // core class, but it might depend on things from the scenario, but then
  // those things can go onto the form...

  async render() {
    console.log("Rendering this location.")

    // let locationEvent = null;
    // let locationEvents = await AvailableEvent.currentLocationEvents();
    // if (locationEvents.length > 0) {
    //   locationEvent = locationEvents[0].code;
    // }

    return {
      name: this.name,
      description: this.description,
    }
  }

}
