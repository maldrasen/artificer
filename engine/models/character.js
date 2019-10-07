global.Character = Database.instance().define('character', {
  type:             { type:Sequelize.STRING, validate:{ isIn:[['minion','hero','useless','enforcer','slave']] }},
  currentTask:      { type:Sequelize.STRING, validate:{ isIn:[['free','project','mission']] }},
  roleCode:         { type:Sequelize.STRING },
  roleOptions_json: { type:Sequelize.STRING },
  genderCode:       { type:Sequelize.STRING },
  speciesCode:      { type:Sequelize.STRING },
  preName:          { type:Sequelize.STRING },
  firstName:        { type:Sequelize.STRING },
  lastName:         { type:Sequelize.STRING },
  forcedName:       { type:Sequelize.STRING },
  health:           { type:Sequelize.INTEGER, validate:{ min:0 }},
  physical:         { type:Sequelize.INTEGER, validate:{ min:0 }},
  mental:           { type:Sequelize.INTEGER, validate:{ min:0 }},
  personal:         { type:Sequelize.INTEGER, validate:{ min:0 }},
  magical:          { type:Sequelize.INTEGER, validate:{ min:0 }},
  body_id:          { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {
    gender()      { return Gender[this.genderCode]; },
    species()     { return Species.lookup(this.speciesCode); },
    role()        { return Role.lookup(this.roleCode); },
    roleOptions() { return JSON.parse(this.roleOptions_json||'{}') },
    isMale()      { return this.genderCode == 'male'; },
    isFemale()    { return this.genderCode == 'female'; },
    maxHealth()   { return physical == 0 ? 10 : this.physical*10; },
    name() {
      return this.forcedName || `${this.preName||''} ${this.firstName} ${this.lastName||''}`.trim();
    }
  },
  setterMethods: {
    roleOptions(json) { this.setDataValue('roleOptions_json',JSON.stringify(json)) },
  }
});

// This function will need to select all the minions and format them as POJOs
// for the plan view. We're going to display all the minions here on the view
// so you know what their status is, but if a minion is already assigned to a
// project or on a mission we need to mark them as unavailable.
Character.allForPlan = async function() {
  const minions = await Character.findAll({ where:{ type:'minion' } });

  return minions.map(minion => {
    return {
      id: minion.id,
      name: minion.name,
      currentTask: minion.currentTask,
    };
  });
}

HasAspects.isAppliedTo(Character);
HasBody.isAppliedTo(Character);
