global.AvailableProject = Database.instance().define('available_project', {
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

AvailableProject.addAll = async function(projects) {
  return await Promise.all(projects.map(async event => {
    return await AvailableProject.add(event);
  }));
}

// Data should have the following format:
//   code:         (*) code
//   requires:     []
AvailableProject.add = async function(data) {
  return AvailableProject.create({
    code:          data.code,
    requires_json: JSON.stringify(data.requires||[]),
  });
}
