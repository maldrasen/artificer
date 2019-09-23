global.Character = Database.instance().define('character', {
  type:        { type:Sequelize.STRING, validate:{ isIn:[['minion','hero']] }},
  roleCode:    { type:Sequelize.STRING },
  genderCode:  { type:Sequelize.STRING },
  speciesCode: { type:Sequelize.STRING },
  preName:     { type:Sequelize.STRING },
  firstName:   { type:Sequelize.STRING },
  lastName:    { type:Sequelize.STRING },
  forcedName:  { type:Sequelize.STRING },
  violent:     { type:Sequelize.INTEGER, validate:{ min:-100, max:100 }},
  fear:        { type:Sequelize.INTEGER, validate:{ min:0, max:100 }},
  love:        { type:Sequelize.INTEGER, validate:{ min:0, max:100 }},
  happiness:   { type:Sequelize.INTEGER, validate:{ min:0, max:100 }},
  health:      { type:Sequelize.INTEGER, validate:{ min:0 }},
  physical:    { type:Sequelize.INTEGER, validate:{ min:0 }},
  mental:      { type:Sequelize.INTEGER, validate:{ min:0 }},
  personal:    { type:Sequelize.INTEGER, validate:{ min:0 }},
  magical:     { type:Sequelize.INTEGER, validate:{ min:0 }},
  body_id:     { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {
    role()     { return Role.lookup(this.roleCode); },
    species()  { return Species.lookup(this.speciesCode); },

    gender()   { return Gender[this.genderCode]; },
    isMale()   { return this.genderCode == 'male'; },
    isFemale() { return this.genderCode == 'female'; },

    maxHealth() { return physical == 0 ? 10 : this.physical*10; },

    name() {
      return this.forcedName || `${this.preName||''} ${this.firstName} ${this.lastName||''}`.trim();
    }
  }
});

// Get the character's first name, possibly in possessive form. This is used by
// the Loom when fetching character names.
Character.prototype.getFirstName = function(possessive) {
  return (possessive) ? EnglishUtility.possessive(this.firstName) : this.firstName;
}

Character.prototype.getAnus = function(callback) {
  Anus.findOne({ where:{ character_id:this.id }}).then(anus => { callback(anus) });
}

Character.prototype.getBalls = function(callback) {
  Balls.findOne({ where:{ character_id:this.id }}).then(balls => { callback(balls) });
}

Character.prototype.getBody = function(callback) {
  Body.findByPk(this.body_id).then(body => { callback(body) });
}

Character.prototype.getCock = function(callback) {
  Cock.findOne({ where:{ character_id:this.id }}).then(cock => { callback(cock) });
}

Character.prototype.getMouth = function(callback) {
  Mouth.findOne({ where:{ character_id:this.id }}).then(mouth => { callback(mouth) });
}
