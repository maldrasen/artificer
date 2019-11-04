global.QueuedEvent = Database.instance().define('queued-event', {
  code:       { type:Sequelize.STRING  },
  location:   { type:Sequelize.STRING  },
  state_json: { type:Sequelize.STRING  },
},{
  timestamps: false,
  getterMethods: {
    state() { return JSON.parse(this.state_json||'[]') },
  },
  setterMethods: {
    state(data) { this.state_json = JSON.stringify(data) },
  },
});
