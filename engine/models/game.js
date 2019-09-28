global.Game = Database.instance().define('game', {
  location:    { type:Sequelize.STRING },
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

Game.prototype.createPlayer = function(options) {
  Player.forge(options).then(player => {
    Composer.render();
  });
}

// The game model responds to several events from the client. These triggers
// are only included when Electron is present, so they won't be included in the
// spec context.
if (typeof ipcMain != 'undefined') {
  ipcMain.on('game.start', () => {
    Game.start().then(game => {
      Browser.send('render.file',{ path:Configuration.gameStartView });
    });
  });

  ipcMain.on('game.create-player', (event, options) => {
    Game.instance().then(game => {
      game.createPlayer(options)
    });
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
