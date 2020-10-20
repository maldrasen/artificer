const NIPPLE_SHAPES = ['cock','heart','inverted','mouth','normal','puffy','pussy','star','teat'];

global.Nipples = class Nipples extends Model {

  static async createModel() {
    await this.buildProxy('nipples',{
      parent_id:         { type:Sequelize.INTEGER },
      parent_class:      { type:Sequelize.STRING },
      count:             { type:Sequelize.INTEGER },
      shade:             { type:Sequelize.INTEGER },
      shape:             { type:Sequelize.STRING, validate:{ isIn:[NIPPLE_SHAPES] }},
      width:             { type:Sequelize.INTEGER },
      length:            { type:Sequelize.INTEGER },
      orificeWidth:      { type:Sequelize.INTEGER },
      orificeElasticity: { type:Sequelize.INTEGER },
    });
  }

  get convertedWidth()        { return ConversionUtility.milliToInches(this.width); }
  get convertedLength()       { return ConversionUtility.milliToInches(this.length); }
  get convertedOrificeWidth() { return ConversionUtility.milliToInches(this.orificeWidth); }
  get orificeArea()           { return MathUtility.widthToArea(this.orificeWidth); }
}

Database.registerModel(Nipples);
