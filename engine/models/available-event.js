global.AvailableEvent = Database.instance().define('available_event', {
  code:          { type:Sequelize.STRING },
  eventType:     { type:Sequelize.STRING },
  state_json:    { type:Sequelize.STRING },
  requires_json: { type:Sequelize.STRING },
  chance:        { type:Sequelize.INTEGER },
},{
  timestamps: false,
  getterMethods: {
    state()    { return JSON.parse(this.state_json||'{}') },
    requires() { return JSON.parse(this.requires_json||'[]') }
  },
  setterMethods: {
    state(json)    { this.setDataValue('state_json',JSON.stringify(json)) },
    requires(json) { this.setDataValue('requires_json',JSON.stringify(json)) },
  }
});

AvailableEvent.addAll = async function(events) {
  return await Promise.all(events.map(async event => {
    return await AvailableEvent.add(event);
  }));
}

// Data should have the following format:
//   code:         (*) code
//   state:        {}
//   requires:     []
//   chance:       1-100 percent chance of happening
AvailableEvent.add = async function(data) {
  let event = Event.lookup(data.code);
  let eventType = (event.location != null) ? 'location' : event.eventType;

  return await AvailableEvent.create({
    code:          data.code,
    eventType:     eventType,
    state_json:    JSON.stringify(data.state||{}),
    requires_json: JSON.stringify(data.requires||[]),
    chance:        data.chance || 100,
  });
}

AvailableEvent.printAll = async function() {
  const events = await AvailableEvent.findAll({ order:[['code', 'ASC']] });

  console.log("\n=== Printing Available Events ===");
  each(events, async event => {
    let valid = await CentralScrutinizer.meetsRequirements(event.requires)
    console.log(`    ${event.code}  -  Requires:${event.requires} Valid:${valid}`);
  });
}
