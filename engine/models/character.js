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
  energy:           { type:Sequelize.INTEGER, validate:{ min:0, max:2 }},
  loyalty:          { type:Sequelize.INTEGER, validate:{ min:0, max:100 }},
  fear:             { type:Sequelize.INTEGER, validate:{ min:0, max:100 }},
  lust:             { type:Sequelize.INTEGER, validate:{ min:0, max:100 }},
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

    isLoyal()      { return this.loyalty >= 25 },
    isAfraid()     { return this.fear >= 25 },

    // For a minion to be rebellus they either need to have low fear or low
    // loyalty. The more they don't like you, the less fear of you they need
    // to betray you.
    isRebellious() {
      if (this.fear < 7)  { return this.loyalty < 25; }
      if (this.fear < 15) { return this.loyalty < 15; }
      if (this.fear < 25) { return this.loyalty < 7; }
      if (this.fear < 50) { return this.loyalty < 1; }
      return false;
    },

    // Essentially the same as the rebellious but wile the rebellious cutoff is
    // about fear + loyalty being less than 32, the cutoff for traitorous is 16
    isTraitorous() { return (this.fear + this.loyalty) < 16 },

    name() {
      return this.forcedName || `${this.preName||''} ${this.firstName} ${this.lastName||''}`.trim();
    },
  },
  setterMethods: {
    dutyOptions(json) { this.setDataValue('dutyOptions_json',JSON.stringify(json)) },
  }
});

// Lookup the character by their ID, unless you meant the player, in which case
// actually get the player instance.
Character.lookup = async function(id) {
  return (id == 1000000000) ? (await Player.instance()) : (await Character.findByPk(id));
}

// This function will need to select all the minions and format them as POJOs
// for any client view that shows all the minions.
Character.allForClient = async function() {
  const minions = await Character.findAll({ where:{ type:'minion' } });

  return await Promise.all(minions.map(async minion => {
    return await minion.properties();
  }));
}

// Reduce the loyality of all the player's minions. This happens in the
// starvation event, but may also happen at other disastrous moments as well.
// If the minion's loyalty is already at 0 their fear will begin to drop
// instead.
Character.reduceAllLoyalty = async function(severity) {
  const minions = await Character.findAll({ where:{ type:'minion' }});

  await Promise.all(minions.map(async minion => {
    minion.loyalty = minion.loyalty - Random.upTo(severity);
    minion.loyalty = minion.loyalty < 0 ? 0 : minion.loyalty;

    if (minion.loyalty == 0) {
      minion.fear = minion.fear - Random.upTo(Math.ceil(severity/2));
      minion.fear = minion.fear < 0 ? 0 : minion.fear;
    }

    await minion.save();
  }));

  return minions;
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
    mental: this.mental,
    personal: this.personal,
    magical: this.magical,
    energy: this.energy,
    loyalty: this.loyalty,
    fear: this.fear,
    lust: this.lust,
    physicalWord: TextUtility.titlecase(this.getPhysicalWord()),
    mentalWord: TextUtility.titlecase(this.getMentalWord()),
    personalWord: TextUtility.titlecase(this.getPersonalWord()),
    magicalWord: TextUtility.titlecase(this.getMagicalWord()),
    energyWord: TextUtility.titlecase(this.getEnergyWord()),
    loyaltyWord: TextUtility.titlecase(this.getLoyaltyWord()),
    fearWord: TextUtility.titlecase(this.getFearWord()),
    lustWord: TextUtility.titlecase(this.getLustWord()),
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

Character.prototype.rename = async function(name) {
  console.log("Renaming(",this.id,")",name)

  await this.update({ forcedName:name });
  await CharacterDescriber.updateAll(this);
}

HasAspects.isAppliedTo(Character);
HasAttributes.isAppliedTo(Character);
HasBody.isAppliedTo(Character);
HasEquipment.isAppliedTo(Character);
HasInjuries.isAppliedTo(Character);
HasSexSkills.isAppliedTo(Character);
