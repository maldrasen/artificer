describe.only('Game', function() {

  it('can start a new game', function(done) {
    Game.start().then(game => {
      expect(game.id).to.equal(1);
      expect(game.dayNumber).to.equal(1);
      done();
    });
  });

});
