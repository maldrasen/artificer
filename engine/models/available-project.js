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

AvailableProject.add = async function(code,data={}) {
  return AvailableProject.create({
    code: code,
    requires_json: JSON.stringify(data.requires||[]),
  });
}

AvailableProject.all = async function() {
  const projects = await AvailableProject.findAll({ where:{} });
  const ready = await Promise.all(projects.map(async available => {
    if ((await CentralScrutinizer.meetsRequirements(available.requires)) == false) { return null; } else {
      let project = Project.lookup(available.code);
      let readyState = await project.readyState();
      return {
        code:        project.code,
        name:        project.name,
        description: project.description,
        effort:      project.effort,
        help:        project.help,
        readyState:  readyState,
      };
    }
  }));

  return ready.filter(project => { return project != null });
}
