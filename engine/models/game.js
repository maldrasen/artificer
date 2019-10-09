global.Game = Database.instance().define('game', {
  location:                 { type:Sequelize.STRING  },
  dayNumber:                { type:Sequelize.INTEGER },
  time:                     { type:Sequelize.STRING, validate:{ isIn:[['morning','afternoon']] }},
  anger:                    { type:Sequelize.INTEGER },
  frustration:              { type:Sequelize.INTEGER },
  gameEventQueue_json:      { type:Sequelize.STRING  },
  locationEventQueue_json:  { type:Sequelize.STRING  },
  currentProject:           { type:Sequelize.STRING  },
  currentProjectProgress:   { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {
    gameEventQueue()     { return JSON.parse(this.gameEventQueue_json||'[]') },
    locationEventQueue() { return JSON.parse(this.locationEventQueue_json||'[]') },
    nextGameEvent()      { return this.gameEventQueue[0]; },
    nextLocationEvent()  { return (this.locationEventQueue[this.location]||[])[0]; },
  },
  setterMethods: {
    gameEventQueue(queue) { this.setDataValue('gameEventQueue_json',JSON.stringify(queue)) },
    locationEventQueue(queue) { this.setDataValue('locationEventQueue_json',JSON.stringify(queue)) },
  }
});

Game.logger = new Logger('Game', 'rgb(105, 100, 163)');


Game.instance = function() {
  return Game.findByPk(1);
}

Game.start = async function() {
  if (await Game.instance() != null) { throw "Cannot start a new Game. A Game currently exists." }

  const game = await Game.create({
    id: 1,
    location: Configuration.gameStartLocation,
    dayNumber: 1,
    time: 'morning',
    anger: 0,
    frustration: 0,
    gameEventQueue_json: "[]",
    locationEventQueue_json: "{}",
  });

  await buildStartingMinions(game);
  await game.enqueueEvents(Configuration.gameStartEvents);
  await game.setFlags(Configuration.gameStartFlags);

  Composer.render(game);

  return game;
}

Game.clear = async function() {
  await Promise.all(Database.getPersistedModels().map(model => {
    return model.destroy({ where:{}, truncate:true })
  }));
}

Game.prototype.createPlayer = function(options) {
  Player.forge(options).then(player => {
    Composer.render();
  });
}

Game.updateLocation = async function(code) {
  const game = await Game.instance();
        game.location = Location.lookup(code).code;
  await game.save();
}

// === Game Flags ===

Game.prototype.setFlags = async function(flags) {
  Game.logger.info(`Set Flags`,flags);

  let operations = []
  each(flags, (value,code) => {
    return Flag.create({ code:code, value:value })
  });

  return await Promise.all(operations);
}

// === Event Queues ===

// This function just finds all the available events and attempts to enqueue
// each one of them.
Game.prototype.enqueueAvailableEvents = async function() {
  const events = await AvailableEvent.findAll({ where:{} });
  await Promise.all(events.map(async event => {
    await enqueueAvailableEvent(event);
  }));
}

Game.prototype.enqueueEvents = async function(events) {
  await Promise.all(events.map(async event => {
    if (event.type == 'gameEvent')     { return await this.enqueueGameEvent(event.code); }
    if (event.type == 'locationEvent') { return await this.enqueueLocationEvent(event.code); }
    throw `Unrecognized Event Type : ${event.type}`
  }));
}

Game.prototype.enqueueGameEvent = async function(code, state) {
  Game.logger.info(`Enqueued Game Event ${code}`,state);
  Event.lookup(code)

  let queue = this.gameEventQueue;
      queue.push({ code:code, state:(state||{}) });

  this.gameEventQueue = queue;
  await this.save()

  return;
}

Game.prototype.unqueueGameEvent = async function() {
  let queue = this.gameEventQueue;
  let event = queue.shift();
  if (event == null) { return null; }

  this.gameEventQueue = queue;
  await this.save();
  return event;
}

Game.prototype.enqueueLocationEvent = async function(code, state) {
  Game.logger.info(`Enqueued Location Event ${code}`,state);
  let event = Event.lookup(code);
  let location = Location.lookup(event.location);
  let queue = this.locationEventQueue;

  if (queue[location.code]==null) { queue[location.code]=[]; }
  queue[location.code].push({ code:code, state:(state||{}) });

  this.locationEventQueue = queue;
  await this.save();
  return;
}

Game.prototype.unqueueLocationEvent = async function() {
  let queue = this.locationEventQueue;
  let event = (queue[this.location]||[]).shift();
  if (event == null) { return null; }

  this.locationEventQueue = queue;
  await this.save();
  return event;
}

// === Private Functions ===

async function buildStartingMinions(game) {
  let startingCharacters = [
    { type:'minion', species:'rat', gender:'male'   },
    { type:'minion', species:'rat', gender:'male'   },
    { type:'minion', species:'rat', gender:'male'   },
    { type:'minion', species:'rat', gender:'female' },
    { type:'minion', species:'rat', gender:'female' },
    { type:'minion', species:'rat', gender:'female' },
  ];

  return await Promise.all(startingCharacters.map((options) => {
    return CharacterBuilder.build(options);
  }));
}

async function enqueueAvailableEvent(event) {
  const game = await Game.instance();
  const eventForm = Event.lookup(event.code)
  if (eventForm.time && eventForm.time != game.time) { return false; }

  const valid = await CentralScrutinizer.meetsRequirements(event.requires)
  if (valid && Random.upTo(100) <= event.chance) {

    // The event is valid so enqueue it as either a location or a game event.
    if (event.eventType == 'location') {
      await game.enqueueLocationEvent(event.code, event.state);
    } else {
      await game.enqueueGameEvent(event.code, event.state);
    }

    // If this event was queued it should no longer be available, unless it's
    // a repeatable event.
    if (event.repeat == false) {
      await AvailableEvent.destroy({ where:{ code:event.code }})
    }
  }
}
