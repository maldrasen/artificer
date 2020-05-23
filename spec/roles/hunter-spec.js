describe.only('Role: Hunter', function() {

  async function setup() {
    await Game.start();
    await Game.setPhase('after-work');
    return await SpecHelper.buildJada({ species:'scaven', dutyCode:'hunter' });
  }

  it('goes hunting', function(done) {
    setup().then(jada => {
      Role.work(jada).then(result => {
        done();
      });
    });
  });

});
