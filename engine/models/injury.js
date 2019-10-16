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
