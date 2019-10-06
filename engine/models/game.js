global.Game = Database.instance().define('game', {
  location:                 { type:Sequelize.STRING  },
  dayNumber:                { type:Sequelize.INTEGER },
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
    nextLocationEvent()  { return this.locationEventQueue[this.location][0]; },
  },
  setterMethods: {
    gameEventQueue(queue) { this.setDataValue('gameEventQueue_json',JSON.stringify(queue)) },
    locationEventQueue(queue) { this.setDataValue('locationEventQueue_json',JSON.stringify(queue)) },
  }
});

Game.instance = function() {
  return Game.findByPk(1);
}

Game.start = async function() {
  if (await Game.instance() != null) { throw "Cannot start a new Game. A Game currently exists." }

  const game = await Game.create({
    id: 1,
    location: Configuration.gameStartLocation,
    dayNumber: 1,
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

// === Game Flags ===

Game.prototype.setFlags = async function(flags) {
  let operations = []
  each(flags, (value,code) => {
    return Flag.create({ code:code, value:value })
  });

  return await Promise.all(operations);
}

Game.prototype.getFlags = async function() {
  let flags = await Flag.findAll({ where:{} })

  let compact = {};
  each(flags, flag => {
    compact[flag.code] = flag.value
  });

  return compact;
}

// === Event Queues ===

Game.prototype.enqueueEvents = async function(events) {
  await Promise.all(events.map(async event => {
    if (event.type == 'gameEvent')     { return await this.enqueueGameEvent(event.code); }
    if (event.type == 'locationEvent') { return await this.enqueueLocationEvent(event.code); }
    throw `Unrecognized Event Type : ${event.type}`
  }));
}

Game.prototype.enqueueGameEvent = async function(code, state) {
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

// === Projects ===

Game.prototype.startProject = async function(code) {
  this.currentProject = code;
  this.currentProjectProgress = 0;
  await this.save();
}

// === Private Functions ===

async function buildStartingMinions(game) {
  let startingCharacters = [
    { type:'minion', species:'rat', gender:'male'   },
    { type:'minion', species:'rat', gender:'male'   },
    { type:'minion', species:'rat', gender:'male'   },
    { type:'minion', species:'rat', gender:'female' },
    { type:'minion', species:'rat', gender:'female' },
  ];

  return await Promise.all(startingCharacters.map((options) => {
    return CharacterBuilder.build(options);
  }));
}
