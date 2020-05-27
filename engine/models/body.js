
const HAIR_COLORS = ['auburn','black','blond','blue','brown','chestnut','copper','dark-blond','dark-blue','dark-brown',
  'dark-green','dark-purple','golden-blond','gray','green','light-blue','light-brown','light-green','light-purple',
  'platinum-blond','purple','red','strawberry-blond','white'];

const EYE_COLORS = ['amber','black','blue','brown','gold','gray','green','hazel','pink','purple','red'];
const FACE_SHAPES = ['elf','deer','goat','dragon','horse','dog','seal','cow','snake','rat','fox'];
const HORN_SHAPES = ['deer','curved-ram','forward-cow','curved-back','wide-buffalo','dicks'];
const SCALE_COLORS = ['red','gold','green','blue','purple','black','gray','white'];
const SKIN_COLORS = ['human','red','black','green','pale-green','gray','blue','purple','gold'];
const TAIL_SHAPES = ['rat','dog','fox','horse','seal','cow','snake','dragon','cat','demon','goat'];
const FACE_TYPES = ['plain','hard','soft','exotic'];

global.Body = Database.instance().define('body', {
  height:            { type:Sequelize.INTEGER },
  faceType:          { type:Sequelize.STRING, validate:{ isIn:[FACE_TYPES] }},
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
  pierceLevel:       { type:Sequelize.INTEGER, validate:{ min:0, max:5 }},
  pierceCount:       { type:Sequelize.INTEGER },
  pierceHealing:     { type:Sequelize.INTEGER },
  bodyDescription:   { type:Sequelize.STRING },
  faceDescription:   { type:Sequelize.STRING },
},{
  timestamps: false,
  getterMethods: {
    convertedHeight() { return ConversionUtility.milliToInches(this.height); },
    description() { return `${this.faceDescription} ${this.bodyDescription}`; },

    // Both finger and fist sizes are entirely dependent on height.
    fistWidth()   { return Math.round(this.height*(86/1750)); },
    fingerWidth() { return Math.round(this.height*(18/1750)); },
    fistArea()    { return MathUtility.widthToArea(this.fistWidth); },
    fingerArea()  { return MathUtility.widthToArea(this.fingerWidth); },

    // These hight functions are rather arbritrary, but might be used in some
    // events where we need to split paths based on a character's height. I'm
    // not sure that it's reasonable for a four foot tall elf to lift a scaven
    // up off of the ground for instance. Other events may play out differently
    // if a character is over six and a half feet tall too. This is not short
    // or tall for their species, just in general when compared to an average
    // sized elf.
    heightIsShort()    { return this.convertedHeight < 60 }, // Under 5 feet
    heightIsTall()     { return this.convertedHeight > 78 }, // Over 6.5 feet.
    heightIsAverage()  { return ! (this.heightIsShort || this.heightIsTall); },
  }
});

// In grams, uses the Hamwi formula
//   Male ideal body weight = 48 kilograms + 110 grams × (height (mm) − 1520)
//   Female ideal body weight = 45.4 kilograms + 90 grams × (height (mm) − 1520)
//
// Futa characters are assumed to be midway between male and female weight.
// This function can also be called durning events where a character has no
// gender yet, but are put into a context. Just return 0 when that happens.
//
// We then take the ideal weight and adjust it up or down depending on that
// character's physique. Physique effects males more than females though.
Body.prototype.getWeight = async function() {
  const character = await Character.findOne({ where:{ body_id:this.id }});
  const physique = character.getPhysicalWord();

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

  if (character.speciesCode == 'dryad')   { weight *= 1.8; }
  if (character.speciesCode == 'centaur') { weight *= 4; }

  if (character.genderCode == 'male') {
    if (physique == 'feeble')  { return weight * 0.9; }
    if (physique == 'weak')    { return weight; }
    if (physique == 'average') { return weight * 1.1; }
    if (physique == 'strong')  { return weight * 1.2; }
    if (physique == 'mighty')  { return weight * 1.33; }
    return weight * 1.5;
  }

  if (physique == 'feeble')  { return weight * 0.7; }
  if (physique == 'weak')    { return weight * 0.8; }
  if (physique == 'average') { return weight * 0.9; }
  if (physique == 'strong')  { return weight * 1;   }
  if (physique == 'mighty')  { return weight * 1.1; }
  return weight * 1.2;
}

Body.FACE_TYPES = FACE_TYPES;
