
global.CharacterAspect = class CharacterAspect extends Model {

  static async createModel() {
    await this.buildProxy('character_aspect',{
      parent_id:    { type:Sequelize.INTEGER },
      parent_class: { type:Sequelize.STRING },
      code:         { type:Sequelize.STRING },
      strength:     { type:Sequelize.INTEGER },
    },{
      uniqueKeys:[{
        name:' One aspect per character',
        singleField: false,
        fields: ['parent_id','parent_class','code']
      }]
    });
  }

  get aspect() { return Aspect.lookup(this.code); }
  get name() { return this.aspect.name; }

  get level() {
    if (this.strength < 200) { return 0; }
    if (this.strength < 600) { return 1; }
    if (this.strength < 1400) { return 2; }
    return 3;
  }

  async getParent() {
    return (this.parent_class == 'Player') ? (await Player.instance()) : (await Minion.lookup(this.parent_id));
  }

  async adjustStrength(amount) {
    let character = await this.getParent()

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

  setLevel(level) {
    if (level == 0) { this.strength = 0; }
    if (level == 1) { this.strength = 400; }
    if (level == 2) { this.strength = 1000; }
    if (level == 3) { this.strength = 2200; }
  }
}

Database.registerModel(CharacterAspect);
