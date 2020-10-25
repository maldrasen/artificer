global.Minion = class Minion extends Character {

  static async createModel() {
    await this.buildProxy('minion',{
      genderCode:       { type:Sequelize.STRING },
      speciesCode:      { type:Sequelize.STRING },
      portraitCode:     { type:Sequelize.STRING },
      personalityCode:  { type:Sequelize.STRING },
      preName:          { type:Sequelize.STRING },
      firstName:        { type:Sequelize.STRING },
      lastName:         { type:Sequelize.STRING },
      forcedName:       { type:Sequelize.STRING },
      physical:         { type:Sequelize.INTEGER, validate:{ min:0 }},
      mental:           { type:Sequelize.INTEGER, validate:{ min:0 }},
      personal:         { type:Sequelize.INTEGER, validate:{ min:0 }},
      magical:          { type:Sequelize.INTEGER, validate:{ min:0 }},
      type:             { type:Sequelize.STRING, validate:{ isIn:[['normal','pending']] }},
      status:           { type:Sequelize.STRING, validate:{ isIn:[['normal','missing','dead']] }},
      energy:           { type:Sequelize.INTEGER, validate:{ min:0, max:2 }},
      loyalty:          { type:Sequelize.INTEGER, validate:{ min:0, max:100 }},
      fear:             { type:Sequelize.INTEGER, validate:{ min:0, max:100 }},
      lust:             { type:Sequelize.INTEGER, validate:{ min:0, max:100 }},
    });
  }

  get name() { return this.forcedName || `${this.preName||''} ${this.firstName} ${this.lastName||''}`.trim(); }
  get singleName() { return this.forcedName || this.firstName }

  //     get personality() { return Personality.lookup(this.personalityCode); },
  //     get alive()       { return this.status == 'normal' },
  //     get isLoyal()      { return this.loyalty >= 25 },
  //     get isAfraid()     { return this.fear >= 25 },

  //     // For a minion to be rebellus they either need to have low fear or low
  //     // loyalty. The more they don't like you, the less fear of you they need
  //     // to betray you.
  //     get isRebellious() {
  //       if (this.fear < 7)  { return this.loyalty < 25; }
  //       if (this.fear < 15) { return this.loyalty < 15; }
  //       if (this.fear < 25) { return this.loyalty < 7; }
  //       if (this.fear < 50) { return this.loyalty < 1; }
  //       return false;
  //     },

  //     // Essentially the same as the rebellious but while the rebellious cutoff is
  //     // about fear + loyalty being less than 32, the cutoff for traitorous is 16
  //     get isTraitorous() { return (this.fear + this.loyalty) < 16 },

  // TODO: Need to actually implement the portraits at some point.
  async determinePortrait() {
    // if (minion.portraitCode == null) {
    //   await minion.update({ portraitCode:(await ImageResource.portraitFor(character)).code });
    // }
  }

  // Completely remove a character and their dependant models.
  async completelyRemove(options={}) {
    await CharacterAspect.destroy({ where:{ parent_class:'Minion', parent_id:this.id }});
    await this.completelyRemoveBody();
    await this.destroy();
  }


}

Database.registerModel(Minion);







// TODO: Stuff copied over from old character model.

// Character.getNormalMinions = async function(where) {
//   return await Character.findAll({ where:extend((where||{}),{ type:'minion', status:'normal' }) });
// }
//
// // A character scope that gets all the minions that can currently be summoned
// // for sex actions and such. Characters in the mission are not in the keep
// // right not, so they can't be summoned. Can't figure out the sequalize method
// // for not queries so I'm just doing this the "I'm stupid" way.
// Character.getSummonable = async function() {
//   const characters = await Character.findAll({ where:{ type:'minion', status:'normal', energy:2 }});
//   return await Character.formatAllForClient(characters.filter(character => {
//     return character.currentDuty != 'mission'
//   }));
// }
//
// // This function will need to select all the minions and format them as POJOs
// // for any client view that shows all the minions.
// Character.allForClient = async function() {
//   return await Character.formatAllForClient((await Character.findAll({ where:{ type:'minion' } })));
// }
//
// Character.formatAllForClient = async function(characters) {
//   return await Promise.all(characters.map(async character => {
//     return await character.properties();
//   }));
// }
//
// // Reduce the loyality of all the player's minions. This happens in the
// // starvation event, but may also happen at other disastrous moments as well.
// Character.reduceAllLoyalty = async function(amount) {
//   await Promise.all((await Character.getNormalMinions()).map(async minion => {
//     await minion.adjustLoyalty(0 - Random.between(1,amount));
//   }));
// }
//
// // Adjust loyalty by the amount either up or down, clamping loyalty between 0
// // and 100. If the minion's loyalty is already at 0 their fear will begin to
// // drop instead.
// Character.prototype.adjustLoyalty = async function(amount) {
//   if (amount < 0 && this.loyalty == 0) {
//     return await this.adjustFear(Math.ceil(amount/2));
//   }
//   let value = this.loyalty + amount;
//   if (value < 0) { value = 0; }
//   if (value > 100) { value = 100; }
//   await this.update({ loyalty:value })
// }
//
// // Adjust fear by the amount either up or down, clamping fear between 0 and 100.
// Character.prototype.adjustFear = async function(amount) {
//   let value = this.fear + amount;
//   if (value < 0) { value = 0; }
//   if (value > 100) { value = 100; }
//   await this.update({ fear:value })
// }
//
// // Adjust lust by the amount either up or down, clamping fear between 0 and 100.
// Character.prototype.adjustLust = async function(amount) {
//   let value = this.lust + amount;
//   if (value < 0) { value = 0; }
//   if (value > 100) { value = 100; }
//   await this.update({ lust:value })
// }
//
// Character.prototype.properties = async function() {
//   const health = await this.getHealth();
//   const healthClass = await this.getHealthClass();
//   const healthWord = await this.getHealthWord();
//   const availableRoles = await Role.getAvailableRoles(this);
//
//   return {
//     id: this.id,
//     name: this.name,
//     gender: this.gender.Male,
//     species: this.species.name,
//     portrait: this.portrait.url,
//     health: health,
//     healthClass: healthClass,
//     healthWord: healthWord,
//     physical: this.physical,
//     mental: this.mental,
//     personal: this.personal,
//     magical: this.magical,
//     energy: this.energy,
//     loyalty: this.loyalty,
//     fear: this.fear,
//     lust: this.lust,
//     physicalWord: TextUtility.titlecase(this.getPhysicalWord()),
//     mentalWord: TextUtility.titlecase(this.getMentalWord()),
//     personalWord: TextUtility.titlecase(this.getPersonalWord()),
//     magicalWord: TextUtility.titlecase(this.getMagicalWord()),
//     energyWord: TextUtility.titlecase(this.getEnergyWord()),
//     loyaltyWord: TextUtility.titlecase(this.getLoyaltyWord()),
//     fearWord: TextUtility.titlecase(this.getFearWord()),
//     lustWord: TextUtility.titlecase(this.getLustWord()),
//     currentDuty: this.currentDuty,
//     duty: this.dutyCode,
//     availableRoles: availableRoles,
//   };
// }
//
// Character.prototype.detailForClient = async function() {
//   const description = await CharacterDescriber.fullDescription(this);
//   const properties =  await this.properties();
//   const aspects =     await this.getCharacterAspectsForClient();
//   return { description, ...properties, ...aspects };
// }
//
// Character.prototype.rename = async function(name) {
//   console.log("Renaming(",this.id,")",name)
//
//   await this.update({ forcedName:name });
//   await CharacterDescriber.updateAll(this);
// }
//
// // This function just resets the character's lust. Their baseline lust level is
// // normally 0, but the slut aspect can raise it to a higher minimum. Adding the
// // associated SexEvent is done in the SexEvent class.
// Character.prototype.orgasmed = async function(options) {
//   let lust = 0;
//   let slut = await this.getCharacterAspect('slut');
//   let level = slut != null ? slut.level : 0;
//
//   if (level == 1) { lust = 3 + Random.upTo(4); }
//   if (level == 2) { lust = 7 + Random.upTo(6); }
//   if (level == 3) { lust = 13 + Random.upTo(8); }
//
//   await this.update({ lust });
// }
