global.Name = class Name extends Model {

  static async createModel() {
    await this.buildProxy('name',{
      name:             { type:Sequelize.STRING },
      species:          { type:Sequelize.STRING },
      adjustments_json: { type:Sequelize.STRING },
      requires:         { type:Sequelize.STRING },
      restriction:      { type:Sequelize.STRING, validate:{ isIn:[['male','not-male']] }},
      position:         { type:Sequelize.STRING, validate:{ isIn:[['pre','first','last']] }},
    });
  }

  static async add(data, options) {
    await Name.create({
      name:             data.name,
      species:          options.species,
      requires:         data.requires,
      restriction:      options.restriction,
      position:         data.position || options.position,
      adjustments_json: JSON.stringify(data.adjustments),
    });
  }

  get adjustments() { return JSON.parse(this.adjustments_json||'[]'); }
}

Database.registerModel(Name, { immutable:true });
