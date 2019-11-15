global.Game = Database.instance().define('game', {
  location:                 { type:Sequelize.STRING  },
  dayNumber:                { type:Sequelize.INTEGER },
  time:                     { type:Sequelize.STRING, validate:{ isIn:[['morning','afternoon']] }},
  anger:                    { type:Sequelize.INTEGER },
  frustration:              { type:Sequelize.INTEGER },
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

Game.start = async function() {
  if (await Game.instance() != null) { throw "Cannot start a new Game. A Game currently exists." }

  const game = await Game.create({
    id: 1,
    location: Configuration.gameStartLocation,
    dayNumber: 1,
    time: 'morning',
    anger: 0,
    frustration: 0,
    food: 30,
  });

  await buildStartingMinions(game);
  await EventQueue.enqueueEvents(Configuration.gameStartEvents);
  await Flag.setAll(Configuration.gameStartFlags);

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

// === Private Functions ===

async function buildStartingMinions(game) {
  let startingCharacters = [
    { type:'minion', species:'rat', gender:'male',   fear:Random.between(20,50), loyalty:Random.between(10,25) },
    { type:'minion', species:'rat', gender:'male',   fear:Random.between(20,50), loyalty:Random.between(10,25) },
    { type:'minion', species:'rat', gender:'male',   fear:Random.between(20,50), loyalty:Random.between(10,25) },
    { type:'minion', species:'rat', gender:'female', fear:Random.between(20,50), loyalty:Random.between(10,25) },
    { type:'minion', species:'rat', gender:'female', fear:Random.between(20,50), loyalty:Random.between(10,25) },
    { type:'minion', species:'rat', gender:'female', fear:Random.between(20,50), loyalty:Random.between(10,25) },
  ];

  return await Promise.all(startingCharacters.map((options) => {
    return CharacterBuilder.build(options);
  }));
}
