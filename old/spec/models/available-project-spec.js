describe('AvailableProject', function() {

  it('can add a project with default values', function(done) {
    AvailableProject.add('clear-great-hall').then(project => {
      expect(project.code).to.equal('clear-great-hall');
      expect(project.requires).to.eql([]);
      done();
    });
  });

});
