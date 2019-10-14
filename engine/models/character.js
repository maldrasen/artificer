global.Character = Database.instance().define('character', {
  type:             { type:Sequelize.STRING, validate:{ isIn:[['minion','hero','useless','enforcer','slave']] }},
  currentTask:      { type:Sequelize.STRING, validate:{ isIn:[['free','project','mission','missing','dead']] }},
  roleCode:         { type:Sequelize.STRING },
  roleOptions_json: { type:Sequelize.STRING },
  genderCode:       { type:Sequelize.STRING },
  speciesCode:      { type:Sequelize.STRING },
  preName:          { type:Sequelize.STRING },
  firstName:        { type:Sequelize.STRING },
  lastName:         { type:Sequelize.STRING },
  forcedName:       { type:Sequelize.STRING },
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

    name() {
      return this.forcedName || `${this.preName||''} ${this.firstName} ${this.lastName||''}`.trim();
    },

  },
  setterMethods: {
    roleOptions(json) { this.setDataValue('roleOptions_json',JSON.stringify(json)) },
  }
});

// This function will need to select all the minions and format them as POJOs
// for the plan view. We're going to display all the minions here on the view
// so you know what their status is, but if a minion is already assigned to a
// project or on a mission we need to mark them as unavailable.
//
// We'll eventually need to do something to calculate the availableRoles. Not
// every minion will be able to work every role, but that's not the case right
// now.
Character.allForPlan = async function() {
  const minions = await Character.findAll({ where:{ type:'minion' } });

  return await Promise.all(minions.map(async minion => {
    const health = await minion.getHealth();
    const healthWord = await minion.getHealthWord();

    return {
      id: minion.id,
      name: minion.name,
      gender: minion.gender.Male,
      species: minion.species.name,
      health: health,
      healthWord: healthWord,
      physical: minion.physical,
      mental: minion.mental,
      personal: minion.personal,
      magical: minion.magical,
      currentTask: minion.currentTask,
      role: minion.roleCode,
      availableRoles: [
        { code:'rest',   name:'Rest'   },
        { code:'hunter', name:'Hunter' },
      ]
    };
  }));
}

HasAspects.isAppliedTo(Character);
HasBody.isAppliedTo(Character);
HasInjuries.isAppliedTo(Character);
