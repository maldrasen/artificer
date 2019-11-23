
global.Player = Database.instance().define('player', {
  title:         { type:Sequelize.STRING  },
  firstName:     { type:Sequelize.STRING  },
  lastName:      { type:Sequelize.STRING  },
  genderCode:    { type:Sequelize.STRING  },
  speciesCode:   { type:Sequelize.STRING  },
  body_id:       { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {
    name()       { return `${this.title} ${this.firstName} ${this.lastName}` },
    singleName() { return this.firstName },
    species()    { return Species.lookup(this.speciesCode); },
    gender()     { return Gender[this.genderCode]; },
  }
});

// The relationships from all the body parts to the player and character models
// are all polymorphic and share the same ID space. I should really just add a
// type column to every body part, but setting the player ID to 1 billion
// should work just fine too.
Player.instance = function() {
  return Player.findByPk(1000000000);
}

Player.forge = function(options) {
  return new Promise((resolve, reject) => {
    Player.instance().then(player => {
      if (player != null) { return reject("Cannot create player. The Player already exists."); }

      Player.create({
        id: 1000000000,
        title: options.title || 'Master',
        firstName: options.firstName,
        lastName: options.lastName,
        genderCode: options.gender,
        speciesCode: options.species,
      }).then(player => {
        CharacterBuilder.addBody(player, {}).then(() => {
          Flag.set('player.firstName',player.firstName).then(resolve);
        });
      });
    });
  });
}

Player.hasCock =  async function() { return await Cock.findOne({  where:{ character_id:1000000000 }}) != null; }
Player.hasPussy = async function() { return await Pussy.findOne({ where:{ character_id:1000000000 }}) != null; }
Player.hasTits =  async function() { return await Tits.findOne({  where:{ character_id:1000000000 }}) != null; }

HasAspects.isAppliedTo(Player);
HasBody.isAppliedTo(Player);
