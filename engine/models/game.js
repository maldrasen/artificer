global.Game = Database.instance().define('game', {
  location:    { type:Sequelize.STRING },
  dayNumber:   { type:Sequelize.INTEGER },
  anger:       { type:Sequelize.INTEGER },
  frustration: { type:Sequelize.INTEGER },
},{
  timestamps: false,
});

Game.instance = function() {
  return Game.findByPk(1);
}

Game.start = function() {
  return new Promise((resolve, reject) => {
    Game.instance().then(game => {
      if (game != null) { return reject("Cannot start a new Game. A Game currently exists.") }

      Game.create({
        id: 1,
        location: Configuration.gameStartLocation,
        dayNumber: 1,
        anger: 0,
        frustration: 0
      }).then(game => {
        buildStartingMinions(game).then(() => {
          resolve(game);
        });
      });
    });
  });
}

Game.clear = function() {
  return new Promise(resolve => {
    Promise.all(Database.getPersistedModels().map(model => {
      return model.destroy({ where:{}, truncate:true })
    })).then(resolve);
  });
}

Game.prototype.createPlayer = function(options) {
  Player.forge(options).then(player => {
    Composer.render();
  });
}

function buildStartingMinions(game) {
  return new Promise(resolve => {
    let startingCharacters = [
      { type:'minion', species:'rat', gender:'male'   },
      { type:'minion', species:'rat', gender:'male'   },
      { type:'minion', species:'rat', gender:'male'   },
      { type:'minion', species:'rat', gender:'female' },
      { type:'minion', species:'rat', gender:'female' },
      { type:'minion', species:'rat', gender:'female' },
    ];

    Promise.all(startingCharacters.map((options) => {
      return CharacterBuilder.build(options);
    })).then(resolve);
  })
}
