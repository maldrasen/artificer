global.Name = Database.instance().define('name', {
  name:          { type:Sequelize.STRING },
  species:       { type:Sequelize.STRING },
  triggers_json: { type:Sequelize.STRING },
  aspects_json:  { type:Sequelize.STRING },
  events_json:   { type:Sequelize.STRING },
  restriction:   { type:Sequelize.STRING, validate:{ isIn:[['male','female','not-male','not-female','has-cock','has-pussy','has-tits']] }},
  position:      { type:Sequelize.STRING, validate:{ isIn:[['pre','first','last']] }},
},{
  timestamps: false,
  getterMethods: {
    triggers() { return JSON.parse(this.triggers_json||'[]') },
    aspects()  { return JSON.parse(this.aspects_json||'[]')   },
    events()   { return JSON.parse(this.events_json||'[]')   },
  }
});

Name.add = function(data, options) {

  each(data.aspects, (code) => {
    Aspect.lookup(code.match(/([^.]*)\.?/)[1]);
  })

  each(data.triggers, (code) => {
    if (CharacterAdjuster.TRIGGERS.indexOf(code) < 0) {
      throw `Unknown Character Adjuster Trigger - ${code}`
    }
  });

  Name.create({
    name:          data.name,
    species:       options.species,
    restriction:   data.restriction || options.restriction,
    position:      data.position    || options.position,
    triggers_json: JSON.stringify(data.triggers),
    aspects_json:  JSON.stringify(data.aspects),
    events_json:   JSON.stringify(data.events),
  })
}
