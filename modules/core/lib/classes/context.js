global.Context = class Context {

  constructor(properties) {
    this._properties = properties || {};
  }

  get properties() { return this._properties; }

  get(key) { return this._properties[key]; }
  set(key, value) { this._properties[key] = value; }


  // Hmm, setEvent and setEvent state both reach into the character module. I
  // think I need to use a request and response here in order to keep the
  // character class out of the core classes. Also, by sending a message with
  // the context it should be possible for any other module to add stuff onto
  // the context.

  async setEvent(event) {
    this._event = event;

    // Need to think this through...
    // await Messenger.request('character.add-player-data',{ context:this });

    // await this.addPlayer();
    // await this.addMinionData();

    // await Promise.all(Object.keys(event.actors||[]).map(async key => {
    //   await this.addActor(key, event.actors[key]);
    // }));
  }

  // Characters can also be added through the event state, for when a
  // character with a known ID is added to the context.
  async setEventState(state) {
    // await Promise.all(Object.keys(state.actors||[]).map(async key => {
    //   await this.addCharacter(key,(await Character.lookup(state.actors[key])));
    // }));
  }


}
