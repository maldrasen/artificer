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

}

Database.registerModel(Minion);
