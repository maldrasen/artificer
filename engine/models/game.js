global.Game = Database.instance().define('game', {
  location:    { type:Sequelize.STRING },
  dayNumber:   { type:Sequelize.INTEGER },
  anger:       { type:Sequelize.INTEGER },
  frustration: { type:Sequelize.INTEGER },
  eventQueue_json:  { type:Sequelize.STRING  },
},{
  timestamps: false,
  getterMethods: {
    eventQueue() { return JSON.parse(this.eventQueue_json||'[]') },
    nextEvent() { return this.eventQueue[0]; }
  },
  setterMethods: {
    eventQueue(queue) { this.setDataValue('eventQueue_json',JSON.stringify(queue)) }
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
        frustration: 0
      }).then(game => {
        game.enqueueEvent('game-start').then(() => {
          Composer.render(game);
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

// === Event Queue ===

// TODO: I might need more event queues at some point for different types of
//       events that should fire at different times. This should be sufficient
//       for now. These events always fire immeadietly.

Game.prototype.enqueueEvent = function(code, state) {
  return new Promise((resolve,reject) => {
    try { Event.lookup(code) } catch(e) { reject(e) }

    let queue = this.eventQueue;
        queue.push({ code:code, state:(state||{}) });

    this.eventQueue = queue;
    this.save().then(resolve);
  });
}

Game.prototype.unqueueEvent = function() {
  return new Promise(resolve => {
    let queue = this.eventQueue;
    let event = queue.shift();

    if (event == null) {
      resolve(null);
    } else {
      this.eventQueue = queue;
      this.save().then(()=>{
        resolve(event);
      });
    }
  })
}
