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
    }).then(callback);
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
