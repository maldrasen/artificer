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

HasEventQueues.addToGame();

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
