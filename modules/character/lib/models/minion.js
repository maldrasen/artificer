global.Minion = class Minion extends Character {

  static async createModel() {
    await this.buildProxy('minion',{
      genderCode:       { type:Sequelize.STRING },
      speciesCode:      { type:Sequelize.STRING },
      portraitCode:     { type:Sequelize.STRING },
      firstName:        { type:Sequelize.STRING },
      lastName:         { type:Sequelize.STRING },
      physical:         { type:Sequelize.INTEGER, validate:{ min:0 }},
      mental:           { type:Sequelize.INTEGER, validate:{ min:0 }},
      personal:         { type:Sequelize.INTEGER, validate:{ min:0 }},
      magical:          { type:Sequelize.INTEGER, validate:{ min:0 }},
      type:             { type:Sequelize.STRING, validate:{ isIn:[['normal','pending']] }},
      status:           { type:Sequelize.STRING, validate:{ isIn:[['normal','missing','dead']] }},
      preName:          { type:Sequelize.STRING },
      forcedName:       { type:Sequelize.STRING },
      personalityCode:  { type:Sequelize.STRING },
      energy:           { type:Sequelize.INTEGER, validate:{ min:0, max:2 }},
      loyalty:          { type:Sequelize.INTEGER, validate:{ min:0, max:100 }},
      fear:             { type:Sequelize.INTEGER, validate:{ min:0, max:100 }},
      lust:             { type:Sequelize.INTEGER, validate:{ min:0, max:100 }},
    });
  }
  //     get personality() { return Personality.lookup(this.personalityCode); },
  //     get alive()       { return this.status == 'normal' },
  //     get isLoyal()      { return this.loyalty >= 25 },
  //     get isAfraid()     { return this.fear >= 25 },
  //     // For a minion to be rebellus they either need to have low fear or low
  //     // loyalty. The more they don't like you, the less fear of you they need
  //     // to betray you.
  //     get isRebellious() {
  //       if (this.fear < 7)  { return this.loyalty < 25; }
  //       if (this.fear < 15) { return this.loyalty < 15; }
  //       if (this.fear < 25) { return this.loyalty < 7; }
  //       if (this.fear < 50) { return this.loyalty < 1; }
  //       return false;
  //     },
  //
  //     // Essentially the same as the rebellious but while the rebellious cutoff is
  //     // about fear + loyalty being less than 32, the cutoff for traitorous is 16
  //     get isTraitorous() { return (this.fear + this.loyalty) < 16 },
  //
  //     get name() {
  //       return this.forcedName || `${this.preName||''} ${this.firstName} ${this.lastName||''}`.trim();
  //     },

}

Database.registerModel(Minion);
