
global.Player = Database.instance().define('player', {
  title:              { type:Sequelize.STRING },
  firstName:          { type:Sequelize.STRING },
  lastName:           { type:Sequelize.STRING },
  gender:             { type:Sequelize.STRING },
  genderOptions:      { type:Sequelize.STRING },
  species_id:         { type:Sequelize.INTEGER },
},{
  timestamps: false,
});

Player.instance = function(callback) {
  Player.findByPk(1).then(callback);
}

Player.forge = function(options, callback) {
  Player.instance(player => {
    if (player != null) { throw "Cannot create player. The Player already exists." }

    Player.create({
      id: 1,
      firstName: options.firstName,
      lastName: options.lastName,
      gender: options.gender,
    }).then(player => {
      saveCustomGender(player, options);
      callback();
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

function loadCustomGender() {

}
