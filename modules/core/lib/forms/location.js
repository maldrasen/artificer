global.Location = class Location extends Form {

  // I'm still trying to think through this rendering process. Location is a
  // core class, but it might depend on things from the scenario, but then
  // those things can go onto the form...

  async render() {
    console.log("Rendering this location.")

    return {
      name: this.name,
      description: this.description,
    }
  }

}
