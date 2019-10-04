global.Character = Database.instance().define('character', {
  type:        { type:Sequelize.STRING, validate:{ isIn:[['minion','hero']] }},
  roleCode:    { type:Sequelize.STRING },
  genderCode:  { type:Sequelize.STRING },
  speciesCode: { type:Sequelize.STRING },
  preName:     { type:Sequelize.STRING },
  firstName:   { type:Sequelize.STRING },
  lastName:    { type:Sequelize.STRING },
  forcedName:  { type:Sequelize.STRING },
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

HasAspects.isAppliedTo(Character);
HasBody.isAppliedTo(Character);
