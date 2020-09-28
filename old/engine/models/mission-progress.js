global.MissionProgress = Database.instance().define('mission-progress', {
  code:       { type:Sequelize.STRING  },
  day:        { type:Sequelize.INTEGER },
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
