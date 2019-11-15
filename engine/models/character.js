global.Character = Database.instance().define('character', {
  type:             { type:Sequelize.STRING, validate:{ isIn:[['minion']] }},
  status:           { type:Sequelize.STRING, validate:{ isIn:[['normal','missing','dead']] }},
  currentDuty:      { type:Sequelize.STRING, validate:{ isIn:[['role','project','mission','task']] }},
  dutyCode:         { type:Sequelize.STRING },
  dutyOptions_json: { type:Sequelize.STRING },
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
  loyalty:          { type:Sequelize.INTEGER, validate:{ min:0 }},
  fear:             { type:Sequelize.INTEGER, validate:{ min:0 }},
  body_id:          { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {
    gender()      { return Gender[this.genderCode]; },
    species()     { return Species.lookup(this.speciesCode); },
    dutyOptions() { return JSON.parse(this.dutyOptions_json||'{}') },
    role()        { return this.currentDuty == 'role' ? Role.lookup(this.dutyCode) : null; },
    isMale()      { return this.genderCode == 'male'; },
    isFemale()    { return this.genderCode == 'female'; },
    alive()       { return this.status == 'normal' },
    singleName()  { return this.forcedName || this.firstName },

    name() {
      return this.forcedName || `${this.preName||''} ${this.firstName} ${this.lastName||''}`.trim();
    },
  },
  setterMethods: {
    dutyOptions(json) { this.setDataValue('dutyOptions_json',JSON.stringify(json)) },
  }
});

// This function will need to select all the minions and format them as POJOs
// for any client view that shows all the minions.
//
// TODO: Plan View Specific. We'll eventually need to do something to calculate
//       the availableRoles. Not every minion will be able to work every role,
//       but that's not the case right now.
Character.allForClient = async function() {
  const minions = await Character.findAll({ where:{ type:'minion' } });

  return await Promise.all(minions.map(async minion => {
    return await minion.properties();
  }));
}

Character.prototype.properties = async function() {
  const health = await this.getHealth();
  const healthClass = await this.getHealthClass();
  const healthWord = await this.getHealthWord();

  // TODO: This is just here temporarily, until the portrait is actually
  //       saved on the minion itself.
  const portrait = await CharacterPortraits.lookup(this);

  return {
    id: this.id,
    name: this.name,
    gender: this.gender.Male,
    species: this.species.name,
    portrait: portrait,
    health: health,
    healthClass: healthClass,
    healthWord: healthWord,
    physical: this.physical,
    mental: this.mental,
    personal: this.personal,
    magical: this.magical,
    currentDuty: this.currentDuty,
    duty: this.dutyCode,
    availableRoles: [
      { code:'rest',   name:'Rest'   },
      { code:'hunter', name:'Hunter' },
    ]
  };
}

Character.prototype.detailForClient = async function() {
  let properties = await this.properties();
  let aspects = await this.getCharacterAspects();

  properties.skillAspects = [];
  properties.personalityAspects = [];
  properties.sexualAspects = [];
  properties.description = await CharacterDescriber.fullDescription(this);

  each(aspects, characterAspect => {
    let aspect = Aspect.lookup(characterAspect.code);
    let package = {
      name: aspect.name || TextUtility.titlecase(aspect.code),
      level: characterAspect.level,
      strength: characterAspect.strength,
    }

    if (aspect.type == 'skill')       { properties.skillAspects.push(package); }
    if (aspect.type == 'personality') { properties.personalityAspects.push(package); }
    if (aspect.type == 'sexual')      { properties.sexualAspects.push(package); }
  });

  return properties;
}

HasAspects.isAppliedTo(Character);
HasBody.isAppliedTo(Character);
HasInjuries.isAppliedTo(Character);
