describe('Role: Hunter', function() {

  async function setup(flag) {
    Settings.DebugSwitches[flag] = true;

    await Game.start();
    await Game.setPhase('after-work');
    return await SpecHelper.buildJada({ species:'scaven', dutyCode:'hunter' });
  }

  // Not much we can actually assert in these specs. Mostly ensure that it
  // doesn't blow up.

  it('goes hunting', function(done) {
    setup('never-injure').then(jada => {
      Role.work(jada).then(result => {
        result.forReport().then(report => {
          expect(report.story).to.exist;
          done();
        });
      });
    });
  });

  it('goes hunting and gets injured', function(done) {
    setup('always-injure').then(jada => {
      Role.work(jada).then(result => {
        result.forReport().then(report => {
          expect(report.story).to.exist;
          done();
        });
      });
    });
  });

});
