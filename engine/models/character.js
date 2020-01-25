global.Character = Database.instance().define('character', {
  type:             { type:Sequelize.STRING, validate:{ isIn:[['pending','minion']] }},
  status:           { type:Sequelize.STRING, validate:{ isIn:[['normal','missing','dead']] }},
  currentDuty:      { type:Sequelize.STRING, validate:{ isIn:[['role','project','mission','task']] }},
  dutyCode:         { type:Sequelize.STRING },
  dutyOptions_json: { type:Sequelize.STRING },
  genderCode:       { type:Sequelize.STRING },
  speciesCode:      { type:Sequelize.STRING },
  portraitCode:     { type:Sequelize.STRING },
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
    portrait()    { return ImageResource.lookup(this.portraitCode ? this.portraitCode : 'unknown-portrait'); },
    dutyOptions() { return JSON.parse(this.dutyOptions_json||'{}') },
    role()        { return this.currentDuty == 'role' ? Role.lookup(this.dutyCode) : null; },
    isMale()      { return this.genderCode == 'male'; },
    isFemale()    { return this.genderCode == 'female'; },
    alive()       { return this.status == 'normal' },
    singleName()  { return this.forcedName || this.firstName },
    portrait()    { return ImageResource.lookup(this.portraitCode || 'unknown-portrait'); },

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
  const availableRoles = await Role.getAvailableRoles(this);

  return {
    id: this.id,
    name: this.name,
    gender: this.gender.Male,
    species: this.species.name,
    portrait: this.portrait.url,
    health: health,
    healthClass: healthClass,
    healthWord: healthWord,
    physical: this.physical,
    physicalWord: this.getPhysicalWord(),
    mental: this.mental,
    mentalWord: this.getMentalWord(),
    personal: this.personal,
    personalWord: this.getPersonalWord(),
    magical: this.magical,
    magicalWord: this.getMagicalWord(),
    loyalty: this.loyalty,
    loyaltyWord: this.getLoyaltyWord(),
    fear: this.fear,
    fearWord: this.getFearWord(),
    currentDuty: this.currentDuty,
    duty: this.dutyCode,
    availableRoles: availableRoles,
  };
}

Character.prototype.detailForClient = async function() {
  const description = await CharacterDescriber.fullDescription(this);
  const properties =  await this.properties();
  const aspects =     await this.getCharacterAspectsForClient();
  return { description, ...properties, ...aspects };
}

HasAspects.isAppliedTo(Character);
HasAttributes.isAppliedTo(Character);
HasBody.isAppliedTo(Character);
HasInjuries.isAppliedTo(Character);
