describe('Game', function() {

  it('can start a new game', function(done) {
    Game.start().then(game => {
      expect(game.id).to.equal(1);
      expect(game.dayNumber).to.equal(1);
      done();
    });
  });

  it('clears the game, flags, and models', function(done) {
    Game.start().then(game => {
      Flag.set('flag','derp');
      AvailableEvent.add('journal-1').then(() => {
        Game.clear().then(() => {
          expect(Game.instance()).to.be.null;
          expect(Flag.lookup('flag')).to.be.null;
          AvailableEvent.findAll().then(events => {
            expect(events).to.be.empty;
            done();
          })
        });
      });
    });
  });

  describe.only('Game: Events', function() {

    it('can add an event', function(done) {
      Game.start().then(() => {
        Game.setPhase('night');
        Game.addEvent('journal-1');
        expect(Game.checkEvent('night').event.code).to.equal('journal-1');
        done();
      });
    });

    it("can add events with state", function(done) {
      Game.start().then(() => {
        Game.setPhase('wake');
        Game.addEvent('morning-2',{ horse:'cock' });
        expect(Game.checkEvent('wake').state.horse).to.equal('cock');
        done();
      });
    });

    it("can act as a queue for some phases", function(done) {
      Game.start().then(() => {
        Game.clearEventQueues();
        Game.setPhase('after-work');

        Game.addEvent('found-blight-spider');
        Game.addEvent('found-blood-berries');
        Game.addEvent('found-fruits-and-nuts');

        expect(Game.pullNextEvent().event.code).to.equal('found-blight-spider')
        expect(Game.pullNextEvent().event.code).to.equal('found-blood-berries')
        expect(Game.pullNextEvent().event.code).to.equal('found-fruits-and-nuts')
        expect(Game.pullNextEvent()).to.be.null;
        expect(Game.instance().phase).to.equal('evening')

        done();
      });
    });

    it("chains events together and merges their state", function(done) {
      Game.start().then(() => {
        Game.setPhase('after-work');
        Game.addEvent('found-blight-spider',{ blighted:'balls', horse:'cock' });
        Game.pullNextEvent();
        Game.chainEvent('found-blight-spider-normal',{ horse:'pussy', moist:'anus' });

        expect(Game.currentEvent().event.code).to.equal('found-blight-spider-normal');
        expect(Game.currentEvent().state.blighted).to.equal('balls');
        expect(Game.currentEvent().state.horse).to.equal('pussy');
        expect(Game.currentEvent().state.moist).to.equal('anus');
        done();
      });
    });

  });

});
