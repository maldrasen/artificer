describe('AvailableMission', function() {

  it('can add a mission with default values', function(done) {
    AvailableMission.add('gather-stone').then(mission => {
      expect(mission.code).to.equal('gather-stone');
      expect(mission.requires).to.eql([]);
      done();
    });
  });

});
