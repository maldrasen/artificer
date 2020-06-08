global.Character = Database.instance().define('character', {
  type:             { type:Sequelize.STRING, validate:{ isIn:[['pending','minion']] }},
  status:           { type:Sequelize.STRING, validate:{ isIn:[['normal','missing','dead']] }},
  currentDuty:      { type:Sequelize.STRING, validate:{ isIn:[['role','project','mission','task']] }},
  dutyCode:         { type:Sequelize.STRING },
  dutyOptions_json: { type:Sequelize.STRING },
  genderCode:       { type:Sequelize.STRING },
  speciesCode:      { type:Sequelize.STRING },
  personalityCode:  { type:Sequelize.STRING },
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
  pregnantWith:     { type:Sequelize.STRING  },
  pregnantDays:     { type:Sequelize.INTEGER },
  pregnantTotal:    { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {
    gender()      { return Gender[this.genderCode]; },
    species()     { return Species.lookup(this.speciesCode); },
    personality() { return Personality.lookup(this.personalityCode); },
    portrait()    { return ImageResource.lookup(this.portraitCode ? this.portraitCode : 'unknown-portrait'); },
    dutyOptions() { return JSON.parse(this.dutyOptions_json||'{}') },
    role()        { return this.currentDuty == 'role' ? this.dutyCode : null; },
    isMale()      { return this.genderCode == 'male'; },
    isFemale()    { return this.genderCode == 'female'; },
    alive()       { return this.status == 'normal' },
    singleName()  { return this.forcedName || this.firstName },
    portrait()    { return ImageResource.lookup(this.portraitCode || 'unknown-portrait'); },

    isFurry()      { return this.species.isFurry(this.genderCode); },
    isScalie()     { return this.species.isScalie; },
    hasSkinBody()  { return !this.isFurry && !this.isScalie; },
    hasHair()      { return this.hasSkinBody || this.species.hasHair },
    isPlayer()     { return false; },
    isLoyal()      { return this.loyalty >= 25 },
    isAfraid()     { return this.fear >= 25 },
    isPregnant()   { return this.pregnantWith != null },
    isForager()    { return this.currentDuty == 'role' && this.dutyCode == 'forager' },
    isHunter()     { return this.currentDuty == 'role' && this.dutyCode == 'hunter' },

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

    // Essentially the same as the rebellious but while the rebellious cutoff is
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

Character.getNormalMinions = async function(where) {
  return await Character.findAll({ where:extend((where||{}),{ type:'minion', status:'normal' }) });
}

// A character scope that gets all the minions that can currently be summoned
// for sex actions and such. Characters in the mission are not in the keep
// right not, so they can't be summoned. Can't figure out the sequalize method
// for not queries so I'm just doing this the "I'm stupid" way.
Character.getSummonable = async function() {
  const characters = await Character.findAll({ where:{ type:'minion', status:'normal', energy:2 }});
  return await Character.formatAllForClient(characters.filter(character => {
    return character.currentDuty != 'mission'
  }));
}

// This function will need to select all the minions and format them as POJOs
// for any client view that shows all the minions.
Character.allForClient = async function() {
  return await Character.formatAllForClient((await Character.findAll({ where:{ type:'minion' } })));
}

Character.formatAllForClient = async function(characters) {
  return await Promise.all(characters.map(async character => {
    return await character.properties();
  }));
}

// Reduce the loyality of all the player's minions. This happens in the
// starvation event, but may also happen at other disastrous moments as well.
Character.reduceAllLoyalty = async function(amount) {
  await Promise.all((await Character.getNormalMinions()).map(async minion => {
    await minion.reduceLoyalty(amount);
  }));
}

// Randomly reduce a minion's loyalty by a value between 0 and the amount
// specified. If the minion's loyalty is already at 0 their fear will begin to
// drop instead.
Character.prototype.reduceLoyalty = async function(amount) {
  (this.loyalty > 0) ?
    (await this.update({ loyalty: Math.max(0, this.loyalty - Random.between(1,amount)) })):
    (await this.update({ fear: Math.max(0, this.fear - Random.between(1,Math.ceil(amount/2))) }));
}

Character.prototype.increaseLoyalty = async function(amount) {
  await this.update({ loyalty: Math.min(100, this.loyalty + Random.between(1,amount)) });
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

// TODO: This function will eventually be used to add a record of the
//       character's orgasm to their history, just so we can see some
//       interesting stats and such on by who and how much they're being fucked.
//
// This function also resets the character's lust. Their baseline lust level is
// normally 0, but the slut aspect can raise it to a higher minimum.
//
// options:
//   from     Who or what made them orgasm: (player, self, minion id, other?)
//   with     What was used to make them orgasm: (hand, cock, toy, other?)
//   in       Where did the orgasm originate: (cock, pussy, tits, nipple-cunts?)
Character.prototype.orgasmed = async function(options) {
  let lust = 0;
  let slut = await this.getCharacterAspect('slut');
  let level = slut != null ? slut.level : 0;

  if (level == 1) { lust = 3 + Random.upTo(4); }
  if (level == 2) { lust = 7 + Random.upTo(6); }
  if (level == 3) { lust = 13 + Random.upTo(8); }

  await this.update({ lust });
}

// Completely remove a character and their dependant models. If for some reason
// the destroyed character has equipment it should be removed first, or else
// this function will detroy it. (also, why is body on backwards?)
Character.prototype.completelyRemove = async function(options={}) {
  await CharacterAspect.destroy({ where:{ character_id:this.id }});
  await CharacterEquipment.destroy({ where:{ character_id:this.id }});
  await this.completelyRemoveBody();
  await this.destroy();
}

HasAspects.isAppliedTo(Character);
HasAttributes.isAppliedTo(Character);
HasBody.isAppliedTo(Character);
HasEquipment.isAppliedTo(Character);
HasInjuries.isAppliedTo(Character);
HasPersonality.isAppliedTo(Character);
HasSexSkills.isAppliedTo(Character);
