describe('Game', function() {

  it('can start a new game', function(done) {
    Game.start().then(game => {
      expect(game.id).to.equal(1);
      expect(game.dayNumber).to.equal(1);
      expect(game.location).to.equal('courtyard');
      done();
    });
  });

  describe('event queue', function() {
    it("Can add events (and should start with an event queued)", function(done) {
      Game.start().then(game => {
        expect(game.nextEvent.code).to.equal('game-start');
        done();
      });
    });

    it("Can add events with state", function(done) {
      Game.start().then(game => {
        game.enqueueEvent('no-longer-naked',{ horse:'cock' }).then(()=>{
          expect(game.eventQueue[3].state.horse).to.equal('cock');
          done();
        });
      });
    });

    it("Acts as a queue, removing events from the front", function(done) {
      Game.start().then(game => {
        game.unqueueEvent().then(event => {
          expect(event.code).to.equal('game-start');
          expect(game.nextEvent.code).to.equal('game-start-chase');
          done();
        });
      });
    });
  });

});
