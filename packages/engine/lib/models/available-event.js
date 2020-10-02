global.AvailableEvent = (function() {

  function createModel() {
    global.AvailableEvent = Database.instance().define('available_event', {
      code:          { type:Sequelize.STRING },
      eventType:     { type:Sequelize.STRING, validate:{ isIn:[['location','normal']] }},
      location:      { type:Sequelize.STRING },
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

    // Data can have the following attributes, but they're all optional. The
    // requirements and the chance can both be defined on the event itself, but
    // they can be set when enqueued if they're based on some other current value.
    //   state:        {}
    //   requires:     []
    //   chance:       1-100 percent chance of happening
    AvailableEvent.add = async function(code, data={}) {
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

    // AvailableEvent.remove = async function(code) {
    //   await AvailableEvent.destroy({ where:{ code }});
    // }
    //
    // AvailableEvent.printAll = async function() {
    //   const events = await AvailableEvent.findAll({ order:[['code', 'ASC']] });
    //
    //   console.log("\n=== Printing Available Events ===");
    //   each(events, async event => {
    //     console.log(`    ${event.code} - Valid:${await event.isValid()} State:${event.state_json}`);
    //   });
    // }
    //
    // // Get all of the valid location events for this location.
    // AvailableEvent.currentLocationEvents = async function() {
    //   return await validateEvents((await AvailableEvent.findAll({ where:{ eventType:'location', location:validLocations() }})));
    // }
    //
    // // Get all valid location events.
    // AvailableEvent.locationEvents = async function() {
    //   return await validateEvents((await AvailableEvent.findAll({ where:{ eventType:'location' }})));
    // }
    //
    // // Get all valid non-location events.
    // AvailableEvent.validEvents = async function() {
    //   return await validateEvents((await AvailableEvent.findAll({ where:{ eventType:'normal' }})));
    // }
    //
    // AvailableEvent.prototype.isValid = async function() {
    //   const event = Event.lookup(this.code);
    //
    //   if (event.setting.phase != 'any-time') {
    //     if (event.setting.phase != Game.phase()) { return false; }
    //   }
    //
    //   return (await CentralScrutinizer.meetsRequirements(this.requires)) &&
    //          (await CentralScrutinizer.meetsRequirements(Event.lookup(this.code).requires))
    // }
    //
    // async function ensureCanAdd(code) {
    //   if ((await AvailableEvent.findOne({ where:{ code:code }})) != null) {
    //     throw `Cannot add ${code}, the event is already available.`
    //   }
    //
    //   if (Flag.lookup(`completed.${code}`) && Event.lookup(code).repeatable != true) {
    //     throw `Cannot add ${code}, it has already been done and is not repeatable.`
    //   }
    // }
    //
    // async function validateEvents(events) {
    //   return ArrayUtility.compact(await Promise.all(events.map(async event => {
    //     return (await event.isValid()) ? event : null;
    //   })));
    // }
    //
    // // Sometimes a location may be represented in several ways in the event. If the
    // // event setting is set to void it's valid for any location.
    // function validLocations() {
    //   const current = Game.location();
    //   const locations = [current,'void'];
    //
    //   if (current == Flag.lookup('player.report-location')) {
    //     locations.push('report-location');
    //   }
    //
    //   if (current == Flag.lookup('player.bed-location')) {
    //     locations.push('player-bedroom');
    //   }
    //
    //   return locations;
    // }
  }

  return { createModel };

})();
