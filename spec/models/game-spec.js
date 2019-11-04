describe('Game', function() {

  it('can start a new game', function(done) {
    Game.start().then(game => {
      expect(game.id).to.equal(1);
      expect(game.dayNumber).to.equal(1);
      expect(game.location).to.equal('courtyard');
      done();
    });
  });

  describe("Game Flags", function() {
    it("adds flags at game start", function(done) {
      Game.start().then(game => {
        Flag.getAll().then(flags => {
          expect(flags['locationMenu.map']).to.equal('locked');
          done();
        });
      });
    });
  });

});
