describe.only('Role: Forager', function() {

  async function setup() {
    await Game.start();
    await Game.setPhase('after-work');
    return await SpecHelper.buildJada({ species:'scaven', dutyCode:'forager' });
  }

  // TODO: I would have liked to have run this ten times so that it goes
  //       through the first several events, setting flags and unlocking items
  //       and enqueueing events and all that, but again we run into the
  //       problem where we set a flag and immediately try to read it's value.
  //       Because the spec runs too fast the flags cannot be updated when run
  //       like this.
  //
  //       This might also be a problem when multiple minions go foraging at
  //       the same time and all try to update the flag counts at once. We
  //       might have to move all of the flags into the report, reading them
  //       all at once, then writing them to the database all at once in order
  //       to make them atomic.

  // Each one of these specs hit a different branch. First, a scheduled
  // foraging with a special() function, then a normal scheduled foraging,
  // then the standard foraging.

  it('goes foraging for the first time.', function(done) {
    setup().then(jada => {
      Role.work(jada).then(result => {
        expect(result.injury).to.be.undefined;
        expect(result.flavors['bitter-fruits']).to.equal(2);
        expect(result.flavors['goat-nuts']).to.equal(3);
        expect(result.flavors['juice-berries']).to.equal(2);
        expect(result.flavors['sweet-fruits']).to.equal(1);
        expect(result.notifications).to.eql([{ code:'foraging', name:'Foraging', experience:14 }]);
        done();
      });
    });
  });

  // In the next two specs, it's possible that the character may have been
  // injured and brought nothing back, so these specs only continue when that's
  // not the case.

  // it('goes foraging for a second time.', function(done) {
  //   Flag.setAll({
  //     'role.forage.success-count': 1,
  //     'role.forage.failure-count': 0,
  //     'item.goat-nuts': 'Y'
  //   });
  //
  //   Game.start().then(() => {
  //     Game.setPhase('after-work').then(() => {
  //       SpecHelper.buildJada({ species:'scaven' }).then(jada => {
  //         Role.Forager.work(jada).then(results => {
  //           if (results.injury == null) {
  //             expect(results.notifications[0].name).to.equal('Foraging');
  //             expect(results.flavors['goat-nuts']).to.be.at.least(1);
  //             expect(results.flavors['willow-branches']).to.equal(1);
  //           }
  //           done();
  //         });
  //       });
  //     });
  //   });
  // });
  //
  // it('goes foraging a third time', function(done) {
  //   Flag.setAll({
  //     'role.forage.success-count': 2,
  //     'role.forage.failure-count': 0,
  //     'item.goat-nuts': 'Y'
  //   });
  //
  //   Game.start().then(() => {
  //     Game.setPhase('after-work').then(() => {
  //       SpecHelper.buildJada({ species:'scaven' }).then(jada => {
  //         Role.Forager.work(jada).then(results => {
  //           if (results.injury == null) {
  //             expect(results.notifications[0].name).to.equal('Foraging');
  //             expect(Object.keys(results.flavors)).to.eql(['goat-nuts'])
  //           }
  //           done();
  //         });
  //       });
  //     });
  //   });
  // });

});
