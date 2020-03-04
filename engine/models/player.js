global.Player = Database.instance().define('player', {
  title:         { type:Sequelize.STRING  },
  firstName:     { type:Sequelize.STRING  },
  lastName:      { type:Sequelize.STRING  },
  genderCode:    { type:Sequelize.STRING  },
  speciesCode:   { type:Sequelize.STRING  },
  portraitCode:  { type:Sequelize.STRING  },
  body_id:       { type:Sequelize.INTEGER },
  physical:      { type:Sequelize.INTEGER, validate:{ min:0 }},
  mental:        { type:Sequelize.INTEGER, validate:{ min:0 }},
  personal:      { type:Sequelize.INTEGER, validate:{ min:0 }},
  magical:       { type:Sequelize.INTEGER, validate:{ min:0 }},

},{
  timestamps: false,
  getterMethods: {
    name()       { return `${TextUtility.titlecase(this.title)} ${this.firstName} ${this.lastName}` },
    singleName() { return this.firstName },
    species()    { return Species.lookup(this.speciesCode); },
    gender()     { return Gender[this.genderCode]; },
    portrait()   { return ImageResource.lookup(this.portraitCode ? this.portraitCode : 'unknown-portrait'); },
  }
});

// The relationships from all the body parts to the player and character models
// are all polymorphic and share the same ID space. I should really just add a
// type column to every body part, but setting the player ID to 1 billion
// should work just fine too.
Player.instance = function() {
  return Player.findByPk(1000000000);
}

Player.forge = async function(options) {
  let player = await Player.instance();

  if (player != null) { throw 'Cannot create player. The Player already exists.'; }
  if (options.gender == null) { throw 'Player gender is required'; }
  if (options.species == null) { throw 'Player species is required'; }

  if (options.title == null || options.title.length == 0) {
    if (options.gender == 'male')   { options.title = 'master'; }
    if (options.gender == 'female') { options.title = 'mistress'; }
    if (options.gender == 'futa')   { options.title = 'mystress'; }
  }

  let species = Species.lookup(options.species);

  player = await Player.create({
    id:          1000000000,
    title:       options.title.toLowerCase(),
    firstName:   options.firstName,
    lastName:    options.lastName,
    genderCode:  options.gender,
    speciesCode: options.species,
    physical:    Math.max(10,species.randomizedAttribute('physical')),
    personal:    Math.max(10,species.randomizedAttribute('personal')),
    mental:      Math.max(10,species.randomizedAttribute('mental')),
    magical:     Math.max(10,species.randomizedAttribute('magical')),
  });

  let defaultBody = { anus:{ conditon:'virgin' }};

  if (options.gender != 'female') {
    defaultBody.cock = { sizeClass:'average' }
  };

  if (options.gender != 'male') {
    defaultBody.tits = { sizeClass:'average' };
    defaultBody.pussy = { sizeClass:'average', conditon:'virgin' }
  };

  await CharacterBuilder.addBody(player, defaultBody);
  await Flag.setAll({
    'player.first-name': player.firstName,
    'player.last-name': player.lastName,
    'player.title': player.title });
  await player.update({ portraitCode:(await ImageResource.portraitFor(player)).code });
}

Player.forClient = async function() {
  const player = await Player.instance();
  const aspects = await player.getCharacterAspectsForClient();
  const description = await CharacterDescriber.fullDescription(player);

  return {
    name:         player.name,
    gender:       player.gender.Male,
    species:      player.species.name,
    physical:     player.physical,
    personal:     player.personal,
    mental:       player.mental,
    magical:      player.magical,
    physicalWord: player.getPhysicalWord(),
    personalWord: player.getPersonalWord(),
    mentalWord:   player.getMentalWord(),
    magicalWord:  player.getMagicalWord(),
    portrait:     player.portrait.url,
    description,
    ...aspects,
  };
}

Player.hasCock =  async function() { return await Cock.findOne({  where:{ character_id:1000000000 }}) != null; }
Player.hasPussy = async function() { return await Pussy.findOne({ where:{ character_id:1000000000 }}) != null; }
Player.hasTits =  async function() { return await Tits.findOne({  where:{ character_id:1000000000 }}) != null; }

HasAttributes.isAppliedTo(Player);
HasAspects.isAppliedTo(Player);
HasBody.isAppliedTo(Player);
HasSexSkills.isAppliedTo(Player);
