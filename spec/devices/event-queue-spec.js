describe('EventQueue', function() {

  it("Can add events with state", function(done) {
    EventQueue.enqueueEvent('morning-2',{ horse:'cock' }).then(() => {
      EventQueue.nextEvent().then(event => {
        expect(event.code).to.equal('morning-2');
        expect(event.state.horse).to.equal('cock');
        done();
      })
    });
  });

  it("Can add location events with state", function(done) {
    EventQueue.enqueueEvent('morning-3',{ horse:'cock' }).then(() => {
      EventQueue.nextLocationEvent('great-hall').then(event => {
        expect(event.code).to.equal('morning-3');
        expect(event.location).to.equal('great-hall');
        expect(event.state.horse).to.equal('cock');
        done();
      })
    });
  });

  it("Acts as a queue, removing events from the front", function(done) {
    let eventList = [
      { code:'found-blight-spider' },
      { code:'found-blood-berries' },
      { code:'found-fruits-and-nuts' }]

    EventQueue.enqueueEvents(eventList).then(() => {
      EventQueue.unqueueEvent().then(event => {
        expect(event.code).to.equal('found-blight-spider');
        done();
      });
    });
  });

  it("unqueues location events", function(done) {
    EventQueue.enqueueEvent('looking-outside-1').then(() => {
      Game.start().then(game => {
        EventQueue.unqueueLocationEvent('courtyard').then(event => {
          expect(event.code).to.equal('looking-outside-1');
          done();
        });
      });
    });
  });

});
