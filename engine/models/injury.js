const locations = ['body','head','anus','cock','mouth','nipples','pussy','tits']
const types =  ['burn','cut','pierce','rip','smash','blight']

global.Injury = Database.instance().define('injury', {
  character_id: { type:Sequelize.INTEGER },
  severity:     { type:Sequelize.STRING,  validate:{ isIn:[['painful','critical']] }},
  location:     { type:Sequelize.STRING,  validate:{ isIn:[locations] }},
  damageType:   { type:Sequelize.STRING,  validate:{ isIn:[types] }},
  healed:       { type:Sequelize.INTEGER, validate:{ min:0, max:20 }},
  level:        { type:Sequelize.INTEGER },
  description:  { type:Sequelize.STRING  },
  details_json: { type:Sequelize.STRING  },
},{
  timestamps: false,
  getterMethods: {
    details() { return JSON.parse(this.details_json||'{}') },

    properties() {
      return {
        severity: this.severity,
        location: this.location,
        type: this.damageType,
        healed: this.healed,
        level: this.level,
        description: this.description,
        details: this.details
      }
    },

  },
  setterMethods: {
    details(json) { this.setDataValue('details_json',JSON.stringify(json)) },
  }
});

Injury.LOCATIONS = locations;
Injury.DAMAGE_TYPES = types;

// redescribeAll() is just a debugger function, for when I have an existing
// game, but I want to update the injury descriptions to reflect changes I've
// made to the abusers.
Injury.redescribeAll = async function() {
  const injuries = await Injury.findAll();

  console.log("=== Updating Injury Descriptions ===")
  await Promise.all(injuries.map(async injury => {
    const character = await Character.findByPk(injury.character_id);
    const abuser = Abuser.lookup(injury.location);
    const raw = abuser.buildDescription(injury, injury.details);

    injury.description = await Weaver.weaveWithCharacter(raw,'C',character);
    injury.save();

    console.log(`[${injury.id}] ${injury.location} ${injury.damageType}:${injury.level} > ${injury.description}`)
  }));
}
