global.CharacterAspect = Database.instance().define('character_aspect', {
  character_id: { type:Sequelize.INTEGER },
  code:         { type:Sequelize.STRING },
  strength:     { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {

    name() { return Aspect.lookup(this.code).getName() },

    level() {
      if (this.strength < 200) { return 0; }
      if (this.strength < 600) { return 1; }
      if (this.strength < 1400) { return 2; }
      return 3;
    }
  },
  uniqueKeys:[{
    name:' One aspect per character',
    singleField: false,
    fields: ['character_id','code']
  }]
});

CharacterAspect.prototype.adjustStrength = async function(amount) {
  let character = await Character.lookup(this.character_id);

  let value = this.strength + amount;
  if (value < 0)    { value = 0; }
  if (value > 3000) { value = 3000; }

  if (character.species.skillCaps && character.species.skillCaps[this.code]) {
    let cap = character.species.skillCaps[this.code];
    if (cap == 1 && value > 200) { value = 200; }
    if (cap == 2 && value > 600) { value = 600; }
  }

  this.strength = value;
  await this.save();
}

CharacterAspect.prototype.setLevel = function(level) {
  if (level == 0) { this.strength = 0; }
  if (level == 1) { this.strength = 400; }
  if (level == 2) { this.strength = 1000; }
  if (level == 3) { this.strength = 2200; }
}

CharacterAspect.prototype.getAspect = function() {
  return Aspect.lookup(this.code);
}
