describe.only('Resolver: Minions', function() {

  describe('checkLoyalty()', function() {
    async function buildMinions() {
      let m1 = await SpecHelper.buildJada({ loyalty:25 });
      let m2 = await SpecHelper.buildJada({ fear:25 });
      let m3 = await SpecHelper.buildJada({ fear:6, loyalty:24 });
      let m4 = await SpecHelper.buildJada({ fear:1, loyalty:1 });
      return [m1,m2,m3,m4];
    }

    it('sets the loyalty flags', function(done) {
      buildMinions().then(minions => {
        Resolver.Minions.checkLoyalty(minions).then(() => {
          Flag.getAll().then(flags => {
            expect(flags['minions.loyal-count']).to.equal('1');
            expect(flags['minions.afraid-count']).to.equal('1');
            expect(flags['minions.rebellious-count']).to.be.oneOf(['1','2']);

            if (flags['minions.rebellious-count'] == '1') { expect(flags['minions.traitorous-count']).to.equal('1') }
            if (flags['minions.rebellious-count'] == '2') { expect(flags['minions.traitorous-count']).to.equal('0') }

            done();
          });
        });
      });
    });
  });

});
