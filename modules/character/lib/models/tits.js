const TITS_SHAPES = ['flat','bell','conical','dangling','perky','round'];
const TITS_SIZES = ['zero','tiny','small','average','big','huge','monster'];

global.Tits = class Tits extends Model {

  static async createModel() {
    await this.buildProxy('tits',{
      parent_id:       { type:Sequelize.INTEGER },
      parent_class:    { type:Sequelize.STRING },
      sizeClass:       { type:Sequelize.STRING, validate:{ isIn:[TITS_SIZES] }},
      sizeScale:       { type:Sequelize.DOUBLE, validate:{ min:0, max:100 }},
      shape:           { type:Sequelize.STRING, validate:{ isIn:[TITS_SHAPES] }},
      count:           { type:Sequelize.INTEGER },
      lactationLevel:  { type:Sequelize.INTEGER, validate:{ min:0, max:5 }},
      lactationFactor: { type:Sequelize.DOUBLE },
      description:     { type:Sequelize.STRING },
    });
  }

  // TODO: Like the cocks, injuries to the tits can increase their size. We
  //       need to reimplement the injuries though before we can include these
  //       size factors back in though.
  //
  //         let smash = (this.smashLevel * 0.02)+1;
  //         let blight = (this.blightLevel * 0.1)+1;
  //         return Math.round(size * smash * blight * lactation);
  //
  get size() {
    let range = Tits.SizeRanges[this.sizeClass]
    let lactation = (this.lactationLevel * 0.1)+1;

    let size = (this.sizeScale/100)*(range.max-range.min) + range.min
    return Math.round(size * lactation);
  }

  // The size class influences how tits grow in size, the current size though
  // is used to determine what their current class is now. A flat chest
  // swells to tiny if the character's tits are blighted.
  get currentSizeClass() {
    let size = this.size;
    if (size == 0)   { return (this.blightLevel == 0) ? 'zero' : 'tiny' }
    if (size < 30)   { return 'tiny'; }
    if (size < 100)  { return 'small'; }
    if (size < 300)  { return 'average'; }
    if (size < 600)  { return 'big'; }
    if (size < 1000) { return 'huge'; }
    return 'monster'
  }

}

Database.registerModel(Tits);

// The breast sizes are abstract values. Because the species in the Rhysh have
// such dramatically different sizes, from scaven to ogres, we measure breast
// size by how they look on a body. Human sizes generally align to:
//     0 - 100  : A cup
//   100 - 200  : B cup
//   200 - 300  : C cup
//   400 - 500  : D cup
//   500 - 600  : DD cup
//   600 - 700  : E cup
//   700 - 800  : F cup
//   800 - 900  : G cup
//   900 - 1000 : H cup
// Beyond 1000 (or really past 600 or so) isn't really normal on humans. At
// 1000 a character's tits will look like watermelons, at 1500 they'll look
// like beachballs and weigh as much as the rest of the character's body. At
// 2000 their tits are large enough to completely immobilize a character.
Tits.SizeRanges = {
  zero:    { min:0, max:0 },
  tiny:    { min:0, max:30 },
  small:   { min:30, max:100 },
  average: { min:50, max:300 },
  big:     { min:300, max:600 },
  huge:    { min:600, max:1000 },
  monster: { min:1000, max:2000 },
}
