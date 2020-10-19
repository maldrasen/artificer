// global.Player = Database.instance().define('player', {
//   firstName:     { type:Sequelize.STRING  },
//   lastName:      { type:Sequelize.STRING  },
//   genderCode:    { type:Sequelize.STRING  },
//   speciesCode:   { type:Sequelize.STRING  },
//   portraitCode:  { type:Sequelize.STRING  },
//   physical:      { type:Sequelize.INTEGER, validate:{ min:0 }},
//   mental:        { type:Sequelize.INTEGER, validate:{ min:0 }},
//   personal:      { type:Sequelize.INTEGER, validate:{ min:0 }},
//   magical:       { type:Sequelize.INTEGER, validate:{ min:0 }},
// },{
//   timestamps: false,
//   getterMethods: {
//     name()       { return `${TextUtility.titlecase(this.title)} ${this.firstName} ${this.lastName}` },
//     singleName() { return this.firstName },
//     species()    { return Species.lookup(this.speciesCode); },
//     title()      { return Flag.lookup('player.title'); },
//     gender()     { return Gender[this.genderCode]; },
//     portrait()   { return ImageResource.lookup(this.portraitCode ? this.portraitCode : 'unknown-portrait'); },
//     isFurry()    { return this.species.isFurry(this.genderCode); },
//     isPlayer()   { return true; },
//   }
// });
//
// // The relationships from all the body parts to the player and character models
// // are all polymorphic and share the same ID space. I should really just add a
// // type column to every body part, but setting the player ID to 1 billion
// // should work just fine too.
// Player.instance = function() {
//   return Player.findByPk(1000000000);
// }
//
// Player.forge = async function(options) {
//   let player = await Player.instance();
//
//   if (player != null) { throw 'Cannot create player. The Player already exists.'; }
//   if (options.gender == null) { throw 'Player gender is required'; }
//   if (options.species == null) { throw 'Player species is required'; }
//
//   if (options.title == null || options.title.length == 0) {
//     options.title = (options.gender == 'male') ? 'master' : 'mistress';
//   }
//
//   let species = Species.lookup(options.species);
//
//   player = await Player.create({
//     id:          1000000000,
//     title:       options.title.toLowerCase(),
//     firstName:   options.firstName,
//     lastName:    options.lastName,
//     genderCode:  options.gender,
//     speciesCode: options.species,
//     physical:    Math.max(10,species.randomizedAttribute('physical')),
//     personal:    Math.max(10,species.randomizedAttribute('personal')),
//     mental:      Math.max(10,species.randomizedAttribute('mental')),
//     magical:     Math.max(10,species.randomizedAttribute('magical')),
//   });
//
//   let defaultBody = { anus:{ condition:'tight' }};
//
//   if (options.gender != 'female') {
//     defaultBody.cock = { sizeClass:Random.fromFrequencyMap({ average:5, big:2 }) }
//   };
//
//   if (options.gender != 'male') {
//     defaultBody.tits = { sizeClass:Random.fromFrequencyMap({ small:1, average:2, big:3 }) };
//     defaultBody.pussy = { sizeClass:Random.fromFrequencyMap({ small:2, average:5, big:1 }), condition:'tight' };
//   };
//
//   if (options.goal == 'conquest')  { player.physical = player.physical + 10; }
//   if (options.goal == 'followers') { player.personal = player.personal + 10; }
//   if (options.goal == 'knowledge') { player.mental =   player.mental + 10; }
//   if (options.goal == 'power')     { player.magical =  player.magical + 10; }
//
//   await CharacterBuilder.addBody(player, defaultBody);
//   await CharacterNamer.execute(player);
//   await CharacterDescriber.updateAll(player);
//
//   await player.update({ portraitCode:(await ImageResource.portraitFor(player)).code });
//
//   Flag.setAll({
//     'player.first-name': player.firstName,
//     'player.last-name': player.lastName,
//     'player.title': options.title,
//     'player.goal': options.goal,
//   });
// }
//
// Player.forClient = async function() {
//   const player = await Player.instance();
//   const aspects = await player.getCharacterAspectsForClient();
//   const description = await CharacterDescriber.fullDescription(player);
//
//   return {
//     name:         player.name,
//     gender:       player.gender.Male,
//     species:      player.species.name,
//     physical:     player.physical,
//     personal:     player.personal,
//     mental:       player.mental,
//     magical:      player.magical,
//     physicalWord: player.getPhysicalWord(),
//     personalWord: player.getPersonalWord(),
//     mentalWord:   player.getMentalWord(),
//     magicalWord:  player.getMagicalWord(),
//     portrait:     player.portrait.url,
//     description,
//     ...aspects,
//   };
// }
//
// Player.hasCock = async function()  { return await (await Player.instance()).hasCock();  }
// Player.hasPussy = async function() { return await (await Player.instance()).hasPussy(); }
// Player.hasTits = async function()  { return await (await Player.instance()).hasTits();  }
//
// HasAttributes.isAppliedTo(Player);
// HasAspects.isAppliedTo(Player);
// HasBody.isAppliedTo(Player);
// HasEquipment.isAppliedTo(Player);
// HasSexSkills.isAppliedTo(Player);
