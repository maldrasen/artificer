describe('Game', function() {

  it('can start a new game', function(done) {
    Game.start((game) => {
      expect(game.id).to.equal(1);
      done();
    });
  });

});
