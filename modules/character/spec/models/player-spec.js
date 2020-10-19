describe('Player', function() {

  it('is a model', function(done) {
    Player.create({ genderCode:'nope' }).then(player => {
      expect(player.genderCode).to.equal('nope');
      expect(player.id).to.be.above(0);
      done();
    })
  });

});
