describe('EventQueue', function() {

  it("Can add events with state", function(done) {
    EventQueue.enqueueEvent('got-fleas',{ horse:'cock' }).then(() => {
      EventQueue.nextEvent().then(event => {
        expect(event.code).to.equal('got-fleas');
        expect(event.state.horse).to.equal('cock');
        done();
      })
    });
  });

  it("Can add location events with state", function(done) {
    EventQueue.enqueueEvent('great-hall-talk-to-rat-chief',{ horse:'cock' }).then(() => {
      EventQueue.nextLocationEvent('great-hall').then(event => {
        expect(event.code).to.equal('great-hall-talk-to-rat-chief');
        expect(event.location).to.equal('great-hall');
        expect(event.state.horse).to.equal('cock');
        done();
      })
    });
  });

  it("Acts as a queue, removing events from the front", function(done) {
    let eventList = [
      { code:'journal-1' },
      { code:'journal-2' },
      { code:'journal-3' }]

    EventQueue.enqueueEvents(eventList).then(() => {
      EventQueue.unqueueEvent().then(event => {
        expect(event.code).to.equal('journal-1');
        done();
      });
    });
  });

  it("unqueues location events", function(done) {
    EventQueue.enqueueEvent('courtyard-walk-on-walls').then(() => {
      Game.start().then(game => {
        EventQueue.unqueueLocationEvent('courtyard').then(event => {
          expect(event.code).to.equal('courtyard-walk-on-walls');
          done();
        });
      });
    });
  });

});
