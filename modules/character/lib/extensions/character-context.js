
// The character module adds a few functions and properties to the context in
// order to allow the context to easily handle character data.

(function() {

  // TODO: Need tests for these first...
  Messenger.subscribe('core.context.set-event', function(data) {
    console.log("=== TODO: Set Event ===")
    console.log(data)
    // await data.context.addPlayer();
    // await Promise.all(Object.keys(data.context.event.actors||[]).map(async key => {
    //   await data.context.addActor(key, data.context.event.actors[key]);
    // }));
  });

  // Characters can also be added through the event state, for when a
  // character with a known ID is added to the context.
  Messenger.subscribe('core.context.set-event-state', function(data) {
    console.log("=== TODO: Set Event State ===")
    console.log(data)
    // await Promise.all(Object.keys(state.actors||[]).map(async key => {
    //   await this.addCharacter(key,(await Character.lookup(state.actors[key])));
    // }));
  });

  Object.defineProperty(Context, 'actors', {
    get: () => { return ObjectUtility.select(this._properties, (key, _) => key.length == 1 && key != 'P'); }
  });

  Object.defineProperty(Context, 'player', {
    get: () => { return this.get('P'); }
  });

  Context.prototype.addPlayer = async function() {
    const player = await Player.instance();
    if (player && this.get('P') == null) { await this.addCharacter('P',player); }
  }

  Context.prototype.addCharacter = async function(key, character) {
    if (key.length != 1) { throw `Characters in the context should have a single letter key.`; }

    const everything = await character.getCompleteBody();
          everything.body.weight = await everything.body.getWeight();

    this.set(key, { character, ...everything });
  }

  // TODO: When we reimplement the Character Agent we need to add minions through it.
  // async addActor(key, descriptive) {
  //   const character = await CharacterAgent.findActor(descriptive);
  //   if (character) {
  //     await this.addCharacter(key, character);
  //   }
  // }

})();
