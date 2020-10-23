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
    Player.build(defaultPlayer).then(() => {
      Player.forClient().then(player => {
        expect(player.gender).to.equal('Male');
        expect(player.species).to.equal('Human');
        expect(player.name.length).to.above(0);
        expect(player.description.length).to.above(0);
        done();
      });
    });
  });

});
