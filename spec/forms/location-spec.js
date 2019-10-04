describe('Location', function() {

  it("Builds a view document", function(done) {
    Game.start().then(game => {
      Location.lookup('courtyard').buildView().then(view => {
        expect(view.name).to.equal('Ruined Courtyard')
        expect(view.description).to.exist;
        done();
      });
    });
  });

});
