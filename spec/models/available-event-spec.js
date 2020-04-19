describe.only('AvailableEvent', function() {

  it('can add an event with default values', function(done) {
    AvailableEvent.add('looking-outside-1').then(event => {
      expect(event.code).to.equal('looking-outside-1');
      // expect(event.eventType).to.equal('location');
      // expect(event.state).to.eql({});
      // expect(event.requires).to.eql([]);
      // expect(event.chance).to.equal(100);
      done()
    });
  });

});
