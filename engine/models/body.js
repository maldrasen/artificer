
const HAIR_COLORS = ['auburn','black','blond','blue','brown','chestnut','copper','dark-blond','dark-blue','dark-brown',
  'dark-green','dark-purple','golden-blond','gray','green','light-blue','light-brown','light-green','light-purple',
  'platinum-blond','purple','red','strawberry-blond','white'];

const EYE_COLORS = ['amber','black','blue','brown','gold','gray','green','hazel','pink','purple','red'];
const FACE_SHAPES = ['elf','deer','goat','dragon','horse','dog','seal','cow','snake','rat','fox'];
const HORN_SHAPES = ['deer','curved-ram','forward-cow','curved-back','wide-buffalo','dicks'];
const SCALE_COLORS = ['red','gold','green','blue','purple','black','gray','white'];
const SKIN_COLORS = ['human','red','black','green','pale-green','gray','blue','purple','gold'];
const TAIL_SHAPES = ['rat','dog','fox','horse','seal','cow','snake','dragon','cat','demon','goat'];

global.Body = Database.instance().define('body', {
  height:            { type:Sequelize.INTEGER },
  eyeColor:          { type:Sequelize.STRING, validate:{ isIn:[EYE_COLORS] }},
  scaleColor:        { type:Sequelize.STRING, validate:{ isIn:[SCALE_COLORS] }},
  hairColor:         { type:Sequelize.STRING, validate:{ isIn:[HAIR_COLORS] }},
  furColor:          { type:Sequelize.STRING, validate:{ isIn:[HAIR_COLORS] }},
  furShade:          { type:Sequelize.INTEGER, validate:{ min:1, max:5 }},
  skinColor:         { type:Sequelize.STRING, validate:{ isIn:[SKIN_COLORS] }},
  skinShade:         { type:Sequelize.INTEGER, validate:{ min:1, max:5 }},
  tailShape:         { type:Sequelize.STRING, validate:{ isIn:[TAIL_SHAPES] }},
  hornShape:         { type:Sequelize.STRING, validate:{ isIn:[HORN_SHAPES] }},
  faceShape:         { type:Sequelize.STRING, validate:{ isIn:[FACE_SHAPES] }},
  smashLevel:        { type:Sequelize.INTEGER, validate:{ min:0, max:5 }},
  smashCount:        { type:Sequelize.INTEGER },
  smashHealing:      { type:Sequelize.INTEGER },
  smashTeethMissing: { type:Sequelize.INTEGER },
  description:       { type:Sequelize.STRING },
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

// In grams, uses the Hamwi formula
//   Male ideal body weight = 48 kilograms + 110 grams × (height (mm) − 1520)
//   Female ideal body weight = 45.4 kilograms + 90 grams × (height (mm) − 1520)
//
// Futa characters are assumed to be midway between male and female weight.
// This function can also be called durning events where a character has no
// gender yet, but are put into a weaver context. Just return 0 when that
// happens.
Body.prototype.getWeight = async function() {
  const character = await Character.findOne({ where:{ body_id:this.id }});

  if (character == null) { return 0; }
  if (character.genderCode == null) { return 0; }

  const base = {
    male:   48000,
    futa:   46700,
    female: 45400,
  }[character.genderCode]

  const perCentimeter = {
    male:   110,
    futa:   100,
    female: 90,
  }[character.genderCode]

  let weight = (this.height < 1520) ?
    (base * this.height/1520):
    ((perCentimeter * (this.height - 1520)) + base);

  if (character.speciesCode == 'pixie') { return weight/2; }
  if (character.speciesCode == 'dryad') { return weight*1.8; }
  if (character.speciesCode == 'centaur') { return weight*4; }

  return weight;
}
