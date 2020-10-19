describe('Player', function() {

  const defaultPlayer = {
    gender: 'male',
    species: 'human',
    title: 'Master',
    firstName: '',
    lastName: '',
    men: 'always',
    futas: 'always',
    women: 'always'
  }

  it('is a model', function(done) {
    Player.create({ genderCode:'nope' }).then(player => {
      expect(player.genderCode).to.equal('nope');
      expect(player.id).to.be.above(0);
      done();
    });
  });

  it('is created with the build() function', function(done) {
    Player.build(defaultPlayer).then(player => {
      expect(player.title).to.equal('master');
      done();
    });
  });

});
