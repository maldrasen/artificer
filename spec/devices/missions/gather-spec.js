describe.only('Missions: Gather', function() {

  async function setupTest() {
    return {
      mission: Mission.lookup('gather-stone'),
      state: {},
      minions: [(await SpecHelper.buildRando())]
    };
  }

  it('gathers materials', function(done) {
    setupTest().then(data => {
      Mission.resolve(data).then(result => {
        console.log("Result:",result)
        done();
      });
    });
  })

});
