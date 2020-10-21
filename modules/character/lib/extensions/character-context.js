// The character module adds a few functions and properties to the context in
// order to allow the context to easily handle character data.

// When an event is added to the context we add the player to the context as
// well as any actors as defined in the event.
Messenger.subscribe('core.context.set-event', async function(data) {
  await data.context.addPlayer();
  await Promise.all(Object.keys(data.context.event.actors||[]).map(async key => {
    await data.context.addActor(key, data.context.event.actors[key]);
  }));
});

// When enqueueing a chained event, the event state may have an actors map,
// that maps the character's context key to the character's id. If so we
// populate the actors with those IDs when the event state is set.
Messenger.subscribe('core.context.set-event-state', async function(data) {
  await Promise.all(Object.keys(data.state.actors||[]).map(async key => {
    await data.context.addCharacter(key,(await Character.lookup(data.state.actors[key])));
  }));
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

Context.prototype.addActor = async function(key, descriptive) {
  const character = await CharacterAgent.findActor(descriptive);
  if (character) {
    await this.addCharacter(key, character);
  }
}
