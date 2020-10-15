describe('AvailableEvent', function() {

  before(async function() {
    Event.build('location-event-1', { setting: { phase:'morning', location:'courtyard' }});
    Event.build('location-event-2', { setting: { phase:'morning', location:'courtyard' }});
    Event.build('location-event-3', { setting: { phase:'morning', location:'basement' }});
    Event.build('normal-event',     { setting: { phase:'night' }});
  });

  async function setupLocationEvents(done) {
    await AvailableEvent.add('location-event-1');
    await AvailableEvent.add('location-event-2', { requires:'flag.derp' });
    await AvailableEvent.add('location-event-3');
    await AvailableEvent.add('normal-event');

    Game.setLocation('courtyard');
    await Game.setPhase('morning');
  }

  it('sets and retrieves state through serialized JSON', function(done) {
    AvailableEvent.create({ code:'has-state' }).then(event => {
      event.state = { has:'state' };
      event.save().then(() => {
        AvailableEvent.findOne({ where:{ code:'has-state' }}).then(again => {
          expect(again.state.has).to.equal('state');
          expect(again.state_json).to.equal('{"has":"state"}');
          done();
        });
      });
    });
  });

  it('can add an event with default values', function(done) {
    AvailableEvent.add('location-event-1').then(event => {
      expect(event.code).to.equal('location-event-1');
      expect(event.eventType).to.equal('location');
      expect(event.state).to.eql({});
      expect(event.requires).to.eql([]);
      expect(event.chance).to.equal(100);
      done()
    });
  });

  it('can destroy an available event', function(done) {
    AvailableEvent.add('location-event-1').then(() => {
      AvailableEvent.remove('location-event-1').then(() => {
        AvailableEvent.findOne({ where:{ code:'location-event-1' }}).then(event => {
          expect(event).to.be.null;
          done();
        });
      });
    });
  });

  it('can get valid location events for the current location', function(done) {
    setupLocationEvents().then(() => {
      AvailableEvent.currentLocationEvents('courtyard').then(events => {
        expect(events.length).to.equal(1);
        expect(events[0].code).to.equal('location-event-1');
        done();
      });
    });
  });

  it('can get all valid location events', function(done) {
    setupLocationEvents().then(() => {
      AvailableEvent.locationEvents().then(events => {
        expect(events.length).to.equal(2);
        expect(events[0].code).to.equal('location-event-1');
        expect(events[1].code).to.equal('location-event-3');
        done();
      });
    });
  });

  it('can get all valid normal events', function(done) {
    setupLocationEvents().then(() => {
      Game.setPhase('night');
      AvailableEvent.validEvents().then(events => {
        expect(events.length).to.equal(1);
        expect(events[0].code).to.equal('normal-event');
        done();
      });
    });
  });

});
