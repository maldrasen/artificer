describe('Location', function() {

  it("Builds a view document", function(done) {
    Location.lookup('courtyard').buildView(view => {
      expect(view.name).to.equal('Ruined Courtyard')
      expect(view.description).to.exist;
      done();
    });
  });

});
