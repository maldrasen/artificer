describe('AvailableProject', function() {

  it('can add a project with default values', function(done) {
    AvailableProject.addAll([
      { code:'clear-great-hall' }
    ]).then(projects => {
      let project = projects[0];
      expect(project.code).to.equal('clear-great-hall');
      expect(project.requires).to.eql([]);
      done()
    });
  });

});
