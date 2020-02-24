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

  it("Acts as a prioritized queue, removing high priority events first", function(done) {
    let eventList = [
      { code:'found-blight-spider' },
      { code:'found-blood-berries' },
      { code:'found-fruits-and-nuts', state:{ priority:'next' }}]

    // Some kind of SQLite bullshit happening here where the event queue is
    // being created and cleared too quickly for SQLlite to keep up with.
    // Shouldn't be a real problem in production though as we don't clear the
    // event queue out but one event at a time.
    setTimeout(() => {
      EventQueue.enqueueEvents(eventList).then(() => {
        EventQueue.unqueueEvent().then(event => {
          expect(event.code).to.equal('found-fruits-and-nuts');
          done();
        });
      });
    },10)
  });

  it("Acts as a prioritized queue, removing last events last", function(done) {
    let eventList = [
      { code:'found-blight-spider', state:{ priority:'last' }},
      { code:'found-blood-berries' },
      { code:'found-fruits-and-nuts', state:{ priority:'last' }}]

    setTimeout(() => {
      EventQueue.enqueueEvents(eventList).then(() => {
        EventQueue.unqueueEvent().then(event => {
          expect(event.code).to.equal('found-blood-berries');
          done();
        });
      });
    },10);
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
