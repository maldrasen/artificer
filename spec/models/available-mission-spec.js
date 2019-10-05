describe('AvailableMission', function() {

  it('can add a mission with default values', function(done) {
    AvailableProject.addAll([
      { code:'gather-stone' }
    ]).then(missions => {
      let mission = missions[0];
      expect(mission.code).to.equal('gather-stone');
      expect(mission.requires).to.eql([]);
      done()
    });
  });

});
