describe('AvailableEvent', function() {

  it('can add an event with default values', function(done) {
    AvailableEvent.addAll([
      { code:'great-hall-talk-to-rat-chief' }
    ]).then(events => {
      let event = events[0];
      expect(event.code).to.equal('great-hall-talk-to-rat-chief');
      expect(event.eventType).to.equal('location');
      expect(event.state).to.eql({});
      expect(event.requires).to.eql([]);
      expect(event.chance).to.equal(100);
      expect(event.repeat).to.equal(false);
      done()
    });
  });

});
