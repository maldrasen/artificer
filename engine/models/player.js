
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
    species() { return Species.lookup(this.speciesCode); },
    gender()  { return Gender[this.genderCode]; },
  }
});

Player.instance = function(callback) {
  Player.findByPk(1).then(callback);
}

Player.forge = function(options, callback) {
  Player.instance(player => {
    if (player != null) { throw "Cannot create player. The Player already exists." }

    Player.create({
      id: 1,
      title: options.title,
      firstName: options.firstName,
      lastName: options.lastName,
      genderCode: options.gender,
      speciesCode: options.species,
    }).then(player => {
      saveCustomGender(player, options);
      CharacterBuilder.addBody(player, {}, body => {
        callback();
      });
    });
  });
}

Player.prototype.getBody = function(callback) {
  Body.findByPk(this.body_id).then(body => { callback(body) });
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
