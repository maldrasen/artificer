global.Game = Database.instance().define('game', {
  location:                 { type:Sequelize.STRING  },
  dayNumber:                { type:Sequelize.INTEGER },
  time:                     { type:Sequelize.STRING, validate:{ isIn:[['morning','afternoon']] }},
  food:                     { type:Sequelize.INTEGER },
  currentProject:           { type:Sequelize.STRING  },
  currentProjectProgress:   { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {},
  setterMethods: {},
});

Game.instance = function() {
  return Game.findByPk(1);
}

Game.start = async function(debugStart) {
  if (await Game.instance() != null) { throw "Cannot start a new Game. A Game currently exists." }

  const game = await Game.create({
    id: 1,
    dayNumber: 1,
    time: 'morning',
    food: 30,
  });

  (debugStart ? Configuration.onDebugStart : Configuration.onStart)(game).then(() => {
    Composer.render(game);
  });

  return game;
}

Game.clear = async function() {
  Flag.clear();
  CurrentEvent.clear();

  await Promise.all(Database.getPersistedModels().map(model => {
    return model.destroy({ where:{}, truncate:true })
  }));
}

Game.prototype.createPlayer = async function(options) {
  await Player.forge(options);
}

Game.updateLocation = async function(code) {
  const game = await Game.instance();
        game.location = Location.lookup(code).code;
  await game.save();
}
