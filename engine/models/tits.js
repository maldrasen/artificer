const TITS_SHAPES = ['flat','bell','conical','dangling','perky','round'];
const TITS_SIZES = ['zero','tiny','small','average','big','huge','monster'];

global.Tits = Database.instance().define('tits', {
  character_id:  { type:Sequelize.INTEGER },
  size_class:    { type:Sequelize.STRING, validate:{ isIn:[TITS_SIZES] }},
  size_scale:    { type:Sequelize.DOUBLE, validate:{ min:0, max:100 }},
  shape:         { type:Sequelize.STRING, validate:{ isIn:[TITS_SHAPES] }},
  count:         { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {
    size() { return 0; }
  }
});
