describe('AvailableEvent', function() {

  it('can add an event with default values', function(done) {
    AvailableEvent.addAll([
      { code:'no-longer-naked' }
    ]).then(events => {
      let event = events[0];
      expect(event.code).to.equal('no-longer-naked');
      expect(event.eventType).to.equal('location');
      expect(event.state).to.eql({});
      expect(event.requires).to.eql([]);
      expect(event.chance).to.equal(100);
      expect(event.repeat).to.equal(false);
      done()
    });
  });

});
