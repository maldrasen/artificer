describe.only('Role: Hunter', function() {

  async function setup() {
    await Game.start();
    await Game.setPhase('after-work');
    return await SpecHelper.buildJada({ species:'scaven', dutyCode:'hunter' });
  }

  it('goes hunting', function(done) {
    Settings.DebugSwitches['never-injure'] = true;

    setup().then(jada => {
      Role.work(jada).then(result => {
        result.forReport().then(report => {
          console.log(report)
          done();
        });
      });
    });
  });

  it.only('goes hunting and gets injured', function(done) {
    Settings.DebugSwitches['always-injure'] = true;

    setup().then(jada => {
      Role.work(jada).then(result => {
        result.forReport().then(report => {
          console.log(report)
          done();
        });
      });
    });
  });

});
