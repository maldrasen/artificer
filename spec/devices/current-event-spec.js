describe.only('CurrentEvent', function() {

  it('can set the current event', function(done) {
    Game.start().then(() => {
      Game.setPhase('night');
      CurrentEvent.set('journal-1');
      expect(CurrentEvent.fetch().event.code).to.equal('journal-1');
      done();
    });
  });

  it("can add events with state", function(done) {
    Game.start().then(() => {
      Game.setPhase('wake');
      CurrentEvent.set('morning-2',{ horse:'cock' });
      expect(CurrentEvent.fetch().state.horse).to.equal('cock');
      done();
    });
  });

  it("can act as a queue for some phases", function(done) {
    Game.start().then(() => {
      Game.setPhase('after-work');

      CurrentEvent.set('found-blight-spider');
      CurrentEvent.set('found-blood-berries');
      CurrentEvent.set('found-fruits-and-nuts');

      expect(CurrentEvent.remove().event.code).to.equal('found-blight-spider')
      expect(CurrentEvent.remove().event.code).to.equal('found-blood-berries')
      expect(CurrentEvent.remove().event.code).to.equal('found-fruits-and-nuts')
      done();
    });
  });

  it("chains events together and merges their state", function(done) {
    Game.start().then(() => {
      Game.setPhase('after-work');

      CurrentEvent.set('found-blight-spider',{ blighted:'balls', horse:'cock' });
      CurrentEvent.chain('found-blight-spider-normal',{ horse:'pussy', moist:'anus' });

      expect(CurrentEvent.fetch().event.code).to.equal('found-blight-spider-normal');
      expect(CurrentEvent.fetch().state.blighted).to.equal('balls');
      expect(CurrentEvent.fetch().state.horse).to.equal('pussy');
      expect(CurrentEvent.fetch().state.moist).to.equal('anus');
      done();
    });
  });

});
