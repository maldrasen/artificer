global.CharacterAspect = Database.instance().define('character_aspect', {
  character_id: { type:Sequelize.INTEGER },
  code:         { type:Sequelize.STRING },
  strength:     { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {
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

// === Instance Functions ===
// The Character Aspects should only be modified by the HasAspects concern because the aspect validations are
// complicated and depend on things external to the class.

CharacterAspect.prototype.adjustStrength = function(amount) {
  let value = this.strength + amount;
  if (value < 0)    { value = 0; }
  if (value > 3000) { value = 3000; }
  this.strength = value;
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
