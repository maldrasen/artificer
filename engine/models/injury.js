global.Injury = Database.instance().define('injury', {
  character_id: { type:Sequelize.INTEGER },
  severity:     { type:Sequelize.STRING,  validate:{ isIn:[['painful','critical']] }},
  level:        { type:Sequelize.INTEGER, validate:{ min:1, max:5 }},
  healed:       { type:Sequelize.INTEGER, validate:{ min:0, max:20 }},
  location:     { type:Sequelize.STRING,  validate:{ isIn:[['anus','body','cock','mouth','nipples','pussy','tits']] }},
  damageType:   { type:Sequelize.STRING,  validate:{ isIn:[['burn','cut','pierce','rip','smash']] }},
  description:  { type:Sequelize.STRING },
},{
  timestamps: false,
  getterMethods: {}
});
