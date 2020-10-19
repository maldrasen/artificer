describe('Minion', function() {

  it('is a model', function(done) {
    Minion.create({ genderCode:'nope' }).then(minion => {
      expect(minion.genderCode).to.equal('nope');
      expect(minion.id).to.be.above(0);
      done();
    });
  });

});
