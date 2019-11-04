describe('EventQueue', function() {

  it("Games start with events queued", function(done) {
    Game.start().then(game => {
      EventQueue.getQueuedEvents().then(queue => {
        expect(queue[0].code).to.equal('game-start');
        done();
      });
    });
  });

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
    Game.start().then(game => {
      EventQueue.unqueueEvent().then(event => {
        expect(event.code).to.equal('game-start');
        done();
      });
    });
  });

  it("unqueues location events", function(done) {
    Game.start().then(game => {
      EventQueue.unqueueLocationEvent('courtyard').then(event => {
        expect(event.code).to.equal('courtyard-get-minions');
        done();
      });
    });
  });

});
