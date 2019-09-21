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

if (typeof ipcMain != 'undefined') {
  ipcMain.on('game.start', () => {
    Game.start(game => {
      Browser.send('render',{ view:Game.startView });
    });
  });
}
