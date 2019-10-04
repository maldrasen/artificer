describe('Game', function() {

  it('can start a new game', function(done) {
    Game.start().then(game => {
      expect(game.id).to.equal(1);
      expect(game.dayNumber).to.equal(1);
      expect(game.location).to.equal('courtyard');
      done();
    });
  });

  describe('Event Queues', function() {
    it("Can add game events (and should start with events queued)", function(done) {
      Game.start().then(game => {
        expect(game.nextGameEvent.code).to.equal('game-start');
        expect(game.nextLocationEvent.code).to.equal('courtyard-get-minions');
        done();
      });
    });

    it("Can add events with state", function(done) {
      Game.start().then(game => {
        game.enqueueGameEvent('no-longer-naked',{ horse:'cock' }).then(()=>{
          expect(game.gameEventQueue[2].state.horse).to.equal('cock');
          done();
        });
      });
    });

    it("Acts as a queue, removing events from the front", function(done) {
      Game.start().then(game => {
        game.unqueueGameEvent().then(event => {
          expect(event.code).to.equal('game-start');
          expect(game.nextGameEvent.code).to.equal('game-start-chase');
          done();
        });
      });
    });

    it("unqueues location events", function(done) {
      Game.start().then(game => {
        game.unqueueLocationEvent().then(event => {
          expect(event.code).to.equal('courtyard-get-minions');
          expect(game.nextLocationEvent).to.not.exist;
          done();
        });
      });
    });
  });

  describe("Game Flags", function() {
    it("adds flags at game start", function(done) {
      Game.start().then(game => {
        game.getFlags().then(flags => {
          expect(flags['locationMenu.map']).to.equal('locked');
          done();
        });
      });
    });
  });

});
