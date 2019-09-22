global.Game = Database.instance().define('game', {
  location:    { type:Sequelize.STRING },
  anger:       { type:Sequelize.INTEGER },
  frustration: { type:Sequelize.INTEGER },
},{
  timestamps: false,
});

Game.instance = function(callback) {
  Game.findByPk(1).then(callback);
}

Game.start = function(callback) {
  Game.instance(game => {
    if (game != null) { throw "Cannot start a new Game. A Game currently exists." }

    Game.create({
      id: 1,
      location: Configuration.gameStartLocation,
      anger: 0,
      frustration: 0
    }).then(game => {
      buildStartingMinions(game, () => {
        callback(game);
      });
    });
  });
}

Game.prototype.createPlayer = function(options) {
  Player.forge(options, player => {
    Composer.render();
  });
}

// The game model responds to several events from the client. These triggers
// are only included when Electron is present, so they won't be included in the
// spec context.
if (typeof ipcMain != 'undefined') {
  ipcMain.on('game.start', () => {
    Game.start(game => {
      Browser.send('render.file',{ path:Configuration.gameStartView });
    });
  });

  ipcMain.on('game.create-player', (event, options) => {
    Game.instance(game => {
      game.createPlayer(options)
    });
  });
}

function buildStartingMinions(game, callback) {
  let startingCharacters = [
    { type:'minion', species:'rat', gender:'male',   fear:Random.roll(10,60), love:Random.roll(10,0), happiness:Random.roll(20,10) },
    { type:'minion', species:'rat', gender:'male',   fear:Random.roll(10,75), love:Random.roll(10,0), happiness:Random.roll(20,10) },
    { type:'minion', species:'rat', gender:'male',   fear:Random.roll(10,75), love:Random.roll(10,0), happiness:Random.roll(20,10) },
    { type:'minion', species:'rat', gender:'female', fear:Random.roll(10,80), love:Random.roll(10,0), happiness:Random.roll(20,10) },
    { type:'minion', species:'rat', gender:'female', fear:Random.roll(10,80), love:Random.roll(10,0), happiness:Random.roll(20,10) },
    { type:'minion', species:'rat', gender:'female', fear:Random.roll(10,90), love:Random.roll(10,0), happiness:Random.roll(20,10) },
  ];

  Promise.all(startingCharacters.map((options) => {
    return new Promise((resolve, reject) => {
      CharacterBuilder.build(options, resolve);
    })
  })).then(callback);
}
