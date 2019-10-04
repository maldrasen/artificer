
global.Player = Database.instance().define('player', {
  title:         { type:Sequelize.STRING  },
  firstName:     { type:Sequelize.STRING  },
  lastName:      { type:Sequelize.STRING  },
  genderCode:    { type:Sequelize.STRING  },
  genderOptions: { type:Sequelize.STRING  },
  speciesCode:   { type:Sequelize.STRING  },
  body_id:       { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {
    name()    { return `${this.title} ${this.firstName} ${this.lastName}` },
    species() { return Species.lookup(this.speciesCode); },
    gender()  { return Gender[this.genderCode]; },
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
        title: options.title,
        firstName: options.firstName,
        lastName: options.lastName,
        genderCode: options.gender,
        speciesCode: options.species,
      }).then(player => {
        saveCustomGender(player, options);
        CharacterBuilder.addBody(player, {}).then(resolve);
      });
    });
  });
}

function saveCustomGender(player, options) {
  if (options.gender == 'custom') {
    let genderOptions = {
      code: 'custom',
      cock: (options.genderDick == 'yes'),
      tits: (options.genderTits == 'yes'),
      pussy: (options.genderPussy == 'yes'),
      man: options.genderName.trim().toLowerCase(),
      men: options.genderPlural.trim().toLowerCase(),
      male: options.genderDescriptive.trim().toLowerCase(),
      he: options.genderSubject.trim().toLowerCase(),
      him: options.genderObject.trim().toLowerCase(),
      his: options.genderPossessive.trim().toLowerCase(),
      hers: options.genderAbsolute.trim().toLowerCase(),
    }

    Gender.custom = new Gender(genderOptions);

    player.update({
      genderOptions: JSON.stringify(genderOptions)
    });
  }
}

// Will be needed when a game is loaded. Might just do it on demand as well.
function loadCustomGender() {

}

HasBody.isAppliedTo(Player);
