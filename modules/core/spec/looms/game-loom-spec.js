describe('Game Loom', function() {

  it('gets calendar dates', function() {
    Flag.set('game.dayNumber',69);
    expect(Weaver.weave("{{game|dayNumber}}")).to.equal('sixty-nine');
    expect(Weaver.weave("{{game|fullDate}}")).to.equal('Day of The Serpent, Autumn, Year of The Indefatigable Raven, 13th Age of Rhysh');
  });

});
