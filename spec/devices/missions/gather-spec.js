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
        expect(result.flavors[0].code).to.equal('stones');
        expect(result.items.stone).to.be.within(4,6);
        done();
      });
    });
  })

});
