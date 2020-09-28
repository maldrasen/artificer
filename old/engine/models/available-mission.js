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

AvailableMission.add = async function(code, data={}) {
  return AvailableMission.create({
    code: code,
    requires_json: JSON.stringify(data.requires||[]),
  });
}
