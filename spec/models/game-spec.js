describe('Game', function() {

  it('can start a new game', function(done) {
    Game.start().then(game => {
      expect(game.id).to.equal(1);
      expect(game.dayNumber).to.equal(1);
      done();
    });
  });

  // TODO: Finish this spec before completing this task please.
  it('clears the game, flags, events, and models', function(done) {
    Game.start().then(game => {
      Flag.set('flag','derp');
      done();
    });
  });

});
