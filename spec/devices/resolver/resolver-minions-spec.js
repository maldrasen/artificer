describe('Resolver: Minions', function() {

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
          expect(Flag.lookup('minions.loyal-count')).to.equal(1);
          expect(Flag.lookup('minions.afraid-count')).to.equal(1);
          expect(Flag.lookup('minions.rebellious-count')).to.equal(2);
          expect(Flag.lookup('minions.traitorous-count')).to.equal(1);
          done();
        });
      });
    });
  });

});
