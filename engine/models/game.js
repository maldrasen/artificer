const GAME_PHASES = {
  'wake':        'Early Morning',
  'early':       'Early Morning',
  'morning':     'Morning',
  'before-work': 'Afternoon',
  'after-work':  'Afternoon',
  'evening':     'Evening',
  'planning':    'Evening',
  'night':       'Night',
  'late-night':  'Late Night' };

global.Game = Database.instance().define('game', {
  location:                 { type:Sequelize.STRING  },
  dayNumber:                { type:Sequelize.INTEGER },
  phase:                    { type:Sequelize.STRING, validate:{ isIn:[Object.keys(GAME_PHASES)] }},
  food:                     { type:Sequelize.INTEGER },
  currentProject:           { type:Sequelize.STRING  },
  currentProjectProgress:   { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {
    time: function() { return GAME_PHASES[Game._instance.phase]; }
  }
});

Game.loadGame = async function() { Game._instance = await Game.findByPk(1); }
Game.saveGame = async function() { await Game._instance.save(); }
Game.instance = function() { return Game._instance; }

Game.start = async function(debugStart) {
  if (Game._instance != null) { throw "Cannot start a new Game. A Game currently exists." }

  Game._instance = await Game.create({
    id: 1,
    dayNumber: 1,
    time: 'early',
    food: Configuration.startingFood,
  });

  (debugStart ? Configuration.onDebugStart : Configuration.onStart)(Game._instance).then(() => {
    Composer.render(Game._instance);
  });

  return Game._instance;
}

Game.clear = async function() {
  Game._instance = null;
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
  Game._instance.location = Location.lookup(code).code;
}
