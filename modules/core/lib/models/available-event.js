global.AvailableEvent = class AvailableEvent extends Model {

  static async createModel() {
    await this.buildProxy('available-event',{
      code:          { type:Sequelize.STRING },
      eventType:     { type:Sequelize.STRING, validate:{ isIn:[['location','normal']] }},
      location:      { type:Sequelize.STRING },
      state_json:    { type:Sequelize.STRING },
      requires_json: { type:Sequelize.STRING },
      chance:        { type:Sequelize.INTEGER },
    });
  }

  get state()    { return JSON.parse(this.state_json||'{}') }
  get requires() { return JSON.parse(this.requires_json||'[]') }

  set state(data)    { this.instance.setDataValue('state_json',JSON.stringify(data)) }
  set requires(data) { this.instance.setDataValue('requires_json',JSON.stringify(data)) }

  // Data can have the following attributes, but they're all optional. The
  // requirements and the chance can both be defined on the event itself, but
  // they can be set when enqueued if they're based on some other current value.
  //   state:        {}
  //   requires:     []
  //   chance:       1-100 percent chance of happening
  static async add(code, data={}) {
    await ensureCanAdd(code);

    const event = Event.lookup(code);
    const type = (Game.EventPhases[event.setting.phase].type == 'control') ? 'location' : 'normal';
    const requirements = (data.requires||[]).concat(event.requires||[]);

    const chance = data.chance || event.chance || 100;

    return await AvailableEvent.create({
      code:          code,
      eventType:     type,
      chance:        chance,
      location:      event.setting.location,
      state_json:    JSON.stringify(data.state||{}),
      requires_json: JSON.stringify(requirements),
    });
  }

  //     AvailableEvent.remove = async function(code) {
  //       await AvailableEvent.destroy({ where:{ code }});
  //     }
  //
  //     AvailableEvent.printAll = async function() {
  //       const events = await AvailableEvent.findAll({ order:[['code', 'ASC']] });
  //
  //       console.log("\n=== Printing Available Events ===");
  //       each(events, async event => {
  //         console.log(`    ${event.code} - Valid:${await event.isValid()} State:${event.state_json}`);
  //       });
  //     }

  // Get all of the valid location events for this location.
  static async currentLocationEvents() {
    return await validateEvents((await AvailableEvent.findAll({ where:{
      eventType: 'location',
      location: possibleValidLocations()
    }})));
  }

  // Get all valid location events.
  static async locationEvents() {
    return await validateEvents((await AvailableEvent.findAll({ where:{ eventType:'location' }})));
  }

  // Get all valid non-location events.
  static async validEvents() {
    return await validateEvents((await AvailableEvent.findAll({ where:{ eventType:'normal' }})));
  }

  async isValid() {
    const event = Event.lookup(this.code);

    if (event.setting.phase != 'any-time') {
      if (event.setting.phase != Game.getPhase()) { return false; }
    }

    return true;
    // return (await CentralScrutinizer.meetsRequirements(this.requires)) &&
    //        (await CentralScrutinizer.meetsRequirements(Event.lookup(this.code).requires))
  }
}

async function ensureCanAdd(code) {
  if ((await AvailableEvent.findOne({ where:{ code:code }})) != null) {
    throw `Cannot add ${code}, the event is already available.`
  }

  if (Flag.lookup(`completed.${code}`) && Event.lookup(code).repeatable != true) {
    throw `Cannot add ${code}, it has already been done and is not repeatable.`
  }
}

async function validateEvents(events) {
  return ArrayUtility.compact(await Promise.all(events.map(async event => {
    return (await event.isValid()) ? event : null;
  })));
}

// Sometimes an available event needs to specify a type of location rather than
// a specific location. In the previous version a location event could have its
// location set to "report-location". The location the report was given in
// though might change over time. It was all very scenario specific so it's not
// going to work this way going forward, however we will need some other
// implementation of this same functionality eventually. One possible way to
// do this is to check for an getValidLocations() function on the event form
// that returns all the current possible locations this event can happen in.
function possibleValidLocations() {
  return [Game.getLocation(),'void'];
}

Database.registerModel(AvailableEvent);
