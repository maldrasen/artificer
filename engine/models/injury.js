global.Injury = Database.instance().define('injury', {
  character_id: { type:Sequelize.INTEGER },
  severity:     { type:Sequelize.STRING,  validate:{ isIn:[['painful','critical']] }},
  location:     { type:Sequelize.STRING,  validate:{ isIn:[['body','head','anus','cock','mouth','nipples','pussy','tits']] }},
  damageType:   { type:Sequelize.STRING,  validate:{ isIn:[['burn','cut','pierce','rip','smash']] }},
  healed:       { type:Sequelize.INTEGER, validate:{ min:0, max:20 }},
  level:        { type:Sequelize.INTEGER },
  description:  { type:Sequelize.STRING  },
  details_json: { type:Sequelize.STRING  },
},{
  timestamps: false,
  getterMethods: {
    details() { return JSON.parse(this.details_json||'{}') }
  },
  setterMethods: {
    details(json) { this.setDataValue('details_json',JSON.stringify(json)) },
  }
});
