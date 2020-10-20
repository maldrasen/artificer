global.Character = class Character extends Model {

  get species() { return Species.lookup(this.speciesCode); }
  get gender() { return Gender[this.genderCode]; }

  //     singleName()  { return this.forcedName || this.firstName },
  //     portrait()   { return ImageResource.lookup(this.portraitCode ? this.portraitCode : 'unknown-portrait'); },
  //     isFurry()    { return this.species.isFurry(this.genderCode); },
  //     isScalie()     { return this.species.isScalie; },
  //     portrait()    { return ImageResource.lookup(this.portraitCode || 'unknown-portrait'); },
  //     hasSkinBody()  { return !this.isFurry && !this.isScalie; },
  //     hasHair()      { return this.hasSkinBody || this.species.hasHair },

  get isMale()      { return this.genderCode == 'male'; }
  get isFemale()    { return this.genderCode == 'female'; }
  get isFuta()      { return this.genderCode == 'futa'; }


}

// HasAttributes.isAppliedTo(Player);
// HasAspects.isAppliedTo(Player);
// HasBody.isAppliedTo(Player);
// HasEquipment.isAppliedTo(Player);
// HasSexSkills.isAppliedTo(Player);


//   },
//   setterMethods: {
//     dutyOptions(json) { this.setDataValue('dutyOptions_json',JSON.stringify(json)) },
//   }
// });
//
// // Lookup the character by their ID, unless you meant the player, in which case
// // actually get the player instance.
// Character.lookup = async function(id) {
//   return (id == 1000000000) ? (await Player.instance()) : (await Character.findByPk(id));
// }
//
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
//
// // Completely remove a character and their dependant models. If for some reason
// // the destroyed character has equipment it should be removed first, or else
// // this function will detroy it. This should only ever be called for temporary
// // minions. If we generate a minion in an event for instance, but then because
// // of some decision we make we never see them again. Even if a minion dies we
// // don't want to completely delete the minion's sexual history.
// Character.prototype.completelyRemove = async function(options={}) {
//   await CharacterAspect.destroy({ where:{ character_id:this.id }});
//   await CharacterEquipment.destroy({ where:{ character_id:this.id }});
//   await this.completelyRemoveBody();
//   await this.destroy();
// }
//
// HasAspects.isAppliedTo(Character);
// HasAttributes.isAppliedTo(Character);
// HasBody.isAppliedTo(Character);
// HasEquipment.isAppliedTo(Character);
// HasInjuries.isAppliedTo(Character);
// HasPersonality.isAppliedTo(Character);
// HasSexHistory.isAppliedTo(Character);
// HasSexSkills.isAppliedTo(Character);
