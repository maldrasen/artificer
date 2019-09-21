global.Game = Database.instance().define('game', {
  anger:       { type:Sequelize.INTEGER },
  frustration: { type:Sequelize.INTEGER },
},{
  timestamps: false,
});

Game.instance = function(callback) {
  Game.findByPk(1).then(callback);
}

Game.start = function(callback) {
  Game.instance((game) => {
    if (game != null) { throw "Cannot start a new Game. A Game currently exists." }

    Game.create({
      id: 1,
      anger: 0,
      frustration: 0
    }).then(callback);

  });
}

Game.startView = 'client/views/game/start.html';

Game.prototype.createPlayer = function(options) {
  console.log("Game: Create Player",options);
  Composer.render();
}

// The game model responds to several events from the client. These triggers
// are only included when Electron is present, so they won't be included in the
// spec context.
if (typeof ipcMain != 'undefined') {
  ipcMain.on('game.start', () => {
    Game.start(game => {
      Browser.send('render',{ view:Game.startView });
    });
  });

  ipcMain.on('game.create-player', (event, options) => {
    Game.instance(game => {
      game.createPlayer(options)
    });
  });
}
