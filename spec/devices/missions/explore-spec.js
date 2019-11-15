describe.only('Missions: Explore', function() {

  async function setupTest() {
    return {
      mission: Mission.lookup('explore-hinterlands'),
      state: {},
      minions: [
        (await SpecHelper.buildRando()),
        (await SpecHelper.buildRando()),
      ]
    };
  }

  it('explores something', function(done) {
    setupTest().then(data => {
      Mission.resolve(data).then(result => {
        expect(result.story).to.exist;
        done();
      });
    });
  });

});
