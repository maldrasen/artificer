describe('Flag Info', function() {

  it("gets all flag groups", function() {
    let groups = FlagInfo.getFlagGroups();
    expect(groups).to.contain('act-1.0');
    expect(groups).to.contain('act-1.1');
  });

  it("gets all flags within a group", function() {
    let flags = FlagInfo.getFlagGroup('act-1.0');
    expect(flags.length).to.equal(3);
    expect(flags[0].code).to.equal('locationMenu.inventory');
  });

  it("unlocks all flags in a group", function(done) {
    FlagInfo.setFlagGroup('act-1.0').then(() => {
      Flag.getAll().then(flags => {
        expect(flags['locationMenu.inventory']).to.equal('unlocked');
        expect(flags['locationMenu.map']).to.equal('unlocked');
        expect(flags['locationMenu.minions']).to.equal('unlocked');
        done();
      });
    });
  });

});
