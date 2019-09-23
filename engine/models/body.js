const FUR_COLORS = ['brown','gray','red','purple','white','black'];
const SCALE_COLORS = ['red','gold','green','blue','purple','black','gray','white'];
const TAIL_SHAPES = ['rat','dog','fox','horse','seal','cow','snake','dragon','cat','demon','goat'];
const SKIN_COLORS = ['human','red','black','green','pale-green','gray','blue','purple'];
const HORN_SHAPES = ['deer','curved-ram','forward-cow','curved-back','wide-buffalo','dicks'];
const FACE_SHAPES = ['elf','deer','goat','dragon','horse','dog','seal','cow','snake','rat','fox'];

global.Body = Database.instance().define('body', {
  height:     { type:Sequelize.INTEGER },
  bodyType:   { type:Sequelize.INTEGER },
  furColor:   { type:Sequelize.STRING, validate:{ isIn:[FUR_COLORS] }},
  furShade:   { type:Sequelize.INTEGER, validate:{ min:1, max:5 }},
  hairColor:  { type:Sequelize.STRING  },
  scaleColor: { type:Sequelize.STRING, validate:{ isIn:[SCALE_COLORS] }},
  skinColor:  { type:Sequelize.STRING, validate:{ isIn:[SKIN_COLORS] }},
  skinShade:  { type:Sequelize.INTEGER, validate:{ min:1, max:5 }},
  tailShape:  { type:Sequelize.STRING, validate:{ isIn:[TAIL_SHAPES] }},
  hornShape:  { type:Sequelize.STRING, validate:{ isIn:[HORN_SHAPES] }},
  faceShape:  { type:Sequelize.STRING, validate:{ isIn:[FACE_SHAPES] }},
},{
  timestamps: false,
  getterMethods: {
    convertedHeight() { return ConversionUtility.milliToInches(this.height); },

    // Both finger and fist sizes are entirely dependent on height.
    fistWidth()   { return Math.round(this.height*(86/1750)); },
    fingerWidth() { return Math.round(this.height*(18/1750)); },
    fistArea()    { return MathUtility.widthToArea(this.fistWidth); },
    fingerArea()  { return MathUtility.widthToArea(this.fingerWidth); },
  }
});
