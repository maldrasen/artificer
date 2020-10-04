describe('AvailableEvent', function() {

  before(async function() {
    Event.build('game-start-1',     { setting: { phase:'early', location:'void' }});
    Event.build('location-event-1', { setting: { phase:'morning', location:'courtyard' }});
    Event.build('location-event-2', { setting: { phase:'morning', location:'courtyard' }});
    Event.build('location-event-3', { setting: { phase:'morning', location:'basement' }});

  });

  async function setupLocationEvents() {
    await Game.start();
    console.log("=== OK? ===")
    // await AvailableEvent.add('location-event-1');
    // await AvailableEvent.add('location-event-2', { requires:'flag.derp' });
    // await AvailableEvent.add('location-event-3');
    //
    //
    // Game.setLocation('courtyard');
    // Game._instance.phase = 'morning';
  }

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

  // it('can get valid location events for the current location', function(done) {
  //   setupLocationEvents().then(() => {
  //     AvailableEvent.currentLocationEvents('courtyard').then(events => {
  //       expect(events.length).to.equal(1);
  //       expect(events[0].code).to.equal('morning-1')
  //       done();
  //     });
  //   });
  // });

  // it('can get all valid location events', function(done) {
  //   setupLocationEvents().then(() => {
  //     AvailableEvent.locationEvents().then(events => {
  //       expect(events.length).to.equal(2);
  //       expect(events[0].code).to.equal('morning-1')
  //       expect(events[1].code).to.equal('journal-4-well-talk')
  //       done();
  //     });
  //   });
  // });
  //
  // it('can get all valid normal events', function(done) {
  //   setupLocationEvents().then(() => {
  //     Game._instance.phase = 'night';
  //     AvailableEvent.validEvents().then(events => {
  //       expect(events.length).to.equal(1);
  //       expect(events[0].code).to.equal('journal-1');
  //       done();
  //     });
  //   });
  // });

});
