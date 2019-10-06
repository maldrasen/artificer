global.AvailableMission = Database.instance().define('available_mission', {
  code:          { type:Sequelize.STRING },
  requires_json: { type:Sequelize.STRING },
},{
  timestamps: false,
  getterMethods: {
    requires() { return JSON.parse(this.requires_json||'[]') }
  },
  setterMethods: {
    requires(json) { this.setDataValue('requires_json',JSON.stringify(json)) },
  }
});

AvailableMission.addAll = async function(missions) {
  return await Promise.all(missions.map(async event => {
    return await AvailableMission.add(event);
  }));
}

// Data should have the following format:
//   code:         (*) code
//   requires:     []
AvailableMission.add = async function(data) {
  return AvailableMission.create({
    code:          data.code,
    requires_json: JSON.stringify(data.requires||[]),
  });
}
