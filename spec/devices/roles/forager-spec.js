describe('Role: Forager', function() {

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
    SpecHelper.buildJada({ species:'scaven' }).then(jada => {
      Role.Forager.work(jada).then(results => {
        expect(results.injury).to.be.undefined;
        expect(results.flavors['bitter-fruits']).to.equal(2);
        expect(results.flavors['goat-nuts']).to.equal(3);
        expect(results.flavors['juice-berries']).to.equal(2);
        expect(results.flavors['sweet-fruits']).to.equal(1);
        expect(results.notifications).to.eql([{ skill:'Foraging', experience:14 }]);
        done();
      });
    });
  });

  // This spec is kind of fucked too. We have to sleep before we set the flag
  // to make sure they're cleared from the previous spec, then we sleep after
  // we set the flags to make sure they're correct when they're read by this
  // spec.
  it('goes foraging for a second time.', function(done) {

    let flags = {
      'role.forage.success-count': 1,
      'role.forage.failure-count': 0,
      'item.goat-nuts': 'unlocked'
    };

    SpecHelper.sleep(10).then(() => {
      Flag.setAll(flags).then(()=> {
        SpecHelper.buildJada({ species:'scaven' }).then(jada => {
          SpecHelper.sleep(10).then(() => {
            Role.Forager.work(jada).then(results => {

              // It's possible that the character may have been injured and
              // brought nothing back, so this spec is only valid when that's
              // not the case.
              if (results.injury == null) {
                expect(results.notifications[0].skill).to.equal('Foraging');
                expect(results.flavors['goat-nuts']).to.be.at.least(1);
                expect(results.flavors['willow-branches']).to.equal(1);
              }

              done();
            });
          });
        });
      });
    });
  });

  it('goes foraging a third time', function(done) {

    let flags = {
      'role.forage.success-count': 2,
      'role.forage.failure-count': 0,
      'item.goat-nuts': 'unlocked'
    };

    SpecHelper.sleep(10).then(() => {
      Flag.setAll(flags).then(()=> {
        SpecHelper.buildJada({ species:'scaven' }).then(jada => {
          SpecHelper.sleep(10).then(() => {
            Role.Forager.work(jada).then(results => {

              if (results.injury == null) {
                expect(results.notifications[0].skill).to.equal('Foraging');
                expect(Object.keys(results.flavors)).to.eql(['goat-nuts'])
              }

              done();
            });
          });
        });
      });
    });
  });

});
