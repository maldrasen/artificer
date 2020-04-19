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

});
