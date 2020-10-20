global.Mouth = class Mouth extends Model {

  static async createModel() {
    await this.buildProxy('mouth',{
      parent_id:         { type:Sequelize.INTEGER },
      parent_class:      { type:Sequelize.STRING },
      throatWidth:       { type:Sequelize.INTEGER },
      tongueLength:      { type:Sequelize.INTEGER },
      tongueShape:       { type:Sequelize.STRING, validate:{ isIn:[['normal','forked','cock']] }},
      width:             { type:Sequelize.INTEGER },
      smashLevel:        { type:Sequelize.INTEGER, validate:{ min:0, max:5 }},
      smashCount:        { type:Sequelize.INTEGER },
      smashHealing:      { type:Sequelize.INTEGER },
      smashTeethMissing: { type:Sequelize.INTEGER },
      cutLevel:          { type:Sequelize.INTEGER, validate:{ min:0, max:5 }},
      cutCount:          { type:Sequelize.INTEGER },
      cutHealing:        { type:Sequelize.INTEGER },
    });
  }

  get convertedTongueLength() { return ConversionUtility.milliToInches(this.tongueLength); }
  get comfortableThroatWidth() { return Math.ceil(this.throatWidth * 0.8); }
  get comfortableWidth() { return Math.ceil(this.width * 0.8); }
}

Database.registerModel(Mouth);
