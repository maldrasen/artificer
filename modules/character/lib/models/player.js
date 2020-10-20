global.Player = class Player extends Character {

  static async createModel() {
    await this.buildProxy('player',{
      genderCode:       { type:Sequelize.STRING },
      speciesCode:      { type:Sequelize.STRING },
      portraitCode:     { type:Sequelize.STRING },
      firstName:        { type:Sequelize.STRING },
      lastName:         { type:Sequelize.STRING },
      physical:         { type:Sequelize.INTEGER, validate:{ min:0 }},
      mental:           { type:Sequelize.INTEGER, validate:{ min:0 }},
      personal:         { type:Sequelize.INTEGER, validate:{ min:0 }},
      magical:          { type:Sequelize.INTEGER, validate:{ min:0 }},
    });
  }

  static async build(options) {
    let player = await Player.instance();

    if (player != null) { throw 'Cannot build a new player, the singleton player model already exists.'; }
    if (options.gender == null) { throw 'Player gender is required'; }
    if (options.species == null) { throw 'Player species is required'; }

    if (options.title == null || options.title.length == 0) {
      options.title = (options.gender == 'male') ? 'master' : 'mistress';
    }

    let species = Species.lookup(options.species);

    player = await Player.create({
      id:          666,
      speciesCode: options.species,
      genderCode:  options.gender,
      firstName:   options.firstName,
      lastName:    options.lastName,
      physical:    Math.max(10,species.randomizedAttribute('physical')),
      personal:    Math.max(10,species.randomizedAttribute('personal')),
      mental:      Math.max(10,species.randomizedAttribute('mental')),
      magical:     Math.max(10,species.randomizedAttribute('magical')),
    })

    let defaultBody = { anus:{ condition:'tight' }};

    if (options.gender != 'female') {
      defaultBody.cock = { sizeClass:Random.fromFrequencyMap({ average:5, big:2 }) }
    };

    if (options.gender != 'male') {
      defaultBody.tits = { sizeClass:Random.fromFrequencyMap({ small:1, average:2, big:3 }) };
      defaultBody.pussy = { sizeClass:Random.fromFrequencyMap({ small:2, average:5, big:1 }), condition:'tight' };
    };

    await CharacterBuilder.addBody(player, defaultBody);
    //   await CharacterNamer.execute(player);
    //   await CharacterDescriber.updateAll(player);

    //   TODO: Add portrait selection
    //   await player.update({ portraitCode:(await ImageResource.portraitFor(player)).code });

    Flag.setAll({
      'player.title' : options.title.toLowerCase(),
      'player.first-name' : player.firstName,
      'player.last-name' : player.lastName,
    });

    return player;
  }

  static async instance() { return await this.lookup(666); }
  static async hasCock()  { return await (await this.instance()).hasCock();  }
  static async hasPussy() { return await (await this.instance()).hasPussy(); }
  static async hasTits()  { return await (await this.instance()).hasTits();  }

  get title() { return Flag.lookup('player.title'); }
  get name() { return `${TextUtility.titlecase(this.title)} ${this.firstName} ${this.lastName}` }

  static async forClient() {
    const player = await Player.instance();
    // const aspects = await player.getCharacterAspectsForClient();
    // const description = await CharacterDescriber.fullDescription(player);

    return {
      name:         player.name,
      gender:       player.gender.Male,
      species:      player.species.name,
      physical:     player.physical,
      personal:     player.personal,
      mental:       player.mental,
      magical:      player.magical,
    //   physicalWord: player.getPhysicalWord(),
    //   personalWord: player.getPersonalWord(),
    //   mentalWord:   player.getMentalWord(),
    //   magicalWord:  player.getMagicalWord(),
    //   portrait:     player.portrait.url,
    //   description,
    //   ...aspects,
    };
  }


}

Database.registerModel(Player);
