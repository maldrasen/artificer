global.Game = Database.instance().define('game', {
  location:    { type:Sequelize.STRING },
  dayNumber:   { type:Sequelize.INTEGER },
  anger:       { type:Sequelize.INTEGER },
  frustration: { type:Sequelize.INTEGER },
  gameEventQueue_json:      { type:Sequelize.STRING  },
  locationEventQueue_json:  { type:Sequelize.STRING  },

},{
  timestamps: false,
  getterMethods: {
    gameEventQueue()     { return JSON.parse(this.gameEventQueue_json||'[]') },
    locationEventQueue() { return JSON.parse(this.locationEventQueue_json||'[]') },
    nextGameEvent()      { return this.gameEventQueue[0]; },
    nextLocationEvent()  { return this.locationEventQueue[this.location][0]; },
  },
  setterMethods: {
    gameEventQueue(queue) { this.setDataValue('gameEventQueue_json',JSON.stringify(queue)) },
    locationEventQueue(queue) { this.setDataValue('locationEventQueue_json',JSON.stringify(queue)) },
  }
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
        frustration: 0,
        gameEventQueue_json: "[]",
        locationEventQueue_json: "{}",
      }).then(game => {
        game.enqueueEvents(Configuration.gameStartEvents).then(() => {
          game.setFlags(Configuration.gameStartFlags).then(() => {
            buildStartingMinions(game).then(() => {
              Composer.render(game);
              resolve(game);
            });
          });
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
  });
}

// === Game Flags ===

Game.prototype.setFlags = function(flags) {
  return new Promise(resolve => {
    let operations = []
    each(flags, (value,code) => {
      return new Promise(res => {
        Flag.create({ code:code, value:value }).then(res);
      });
    });
    Promise.all(operations).then(resolve);
  });
}

Game.prototype.getFlags = function() {
  return new Promise(resolve => {
    Flag.findAll({ where:{} }).then(flags => {
      let compact = {};
      each(flags, flag => {
        compact[flag.code] = flag.value
      });
      resolve(compact);
    })
  });
}

// === Event Queues ===

Game.prototype.enqueueEvents = function(events) {
  return new Promise(resolve => {
    Promise.all(events.map(event => {
      return new Promise(res => {
        if (event.type == 'gameEvent') {
          this.enqueueGameEvent(event.code).then(res);
        } else if (event.type == 'locationEvent') {
          this.enqueueLocationEvent(event.code).then(res);
        } else {
          throw `Unrecognized Event Type : ${event.type}`
        }
      });
    })).then(resolve);
  });
}

Game.prototype.enqueueGameEvent = function(code, state) {
  return new Promise((resolve,reject) => {
    try { Event.lookup(code) } catch(e) { reject(e) }

    let queue = this.gameEventQueue;
        queue.push({ code:code, state:(state||{}) });


    this.gameEventQueue = queue;
    this.save().then(resolve);
  });
}

Game.prototype.unqueueGameEvent = function() {
  return new Promise(resolve => {
    let queue = this.gameEventQueue;
    let event = queue.shift();

    if (event == null) {
      resolve(null);
    } else {
      this.gameEventQueue = queue;
      this.save().then(()=>{
        resolve(event);
      });
    }
  })
}

Game.prototype.enqueueLocationEvent = function(code, state) {
  return new Promise((resolve,reject) => {
    let event = Event.lookup(code);
    let location = Location.lookup(event.location);
    let queue = this.locationEventQueue;

    if (queue[location.code]==null) { queue[location.code]=[]; }
    queue[location.code].push({ code:code, state:(state||{}) });

    this.locationEventQueue = queue;
    this.save().then(resolve);
  });
}

Game.prototype.unqueueLocationEvent = function() {
  return new Promise(resolve => {
    let queue = this.locationEventQueue;
    let event = (queue[this.location]||[]).shift();

    if (event == null) {
      resolve(null);
    } else {
      this.locationEventQueue = queue;
      this.save().then(()=>{
        resolve(event);
      });
    }
  })
}
