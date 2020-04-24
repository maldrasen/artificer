describe('MinionScrutinizer', function() {

  describe('checkBetray()', function() {
    it('is true if there is a traitorous minion', function(done) {
      Flag.set('minions.traitorous-count',0);
      CentralScrutinizer.meetsRequirements('minions.will-betray').then(betray => {
        expect(betray).to.be.false;
        done();
      });
    });

    it('is false if there are no traitorous minions', function(done) {
      Flag.set('minions.traitorous-count',1);
      CentralScrutinizer.meetsRequirements('minions.will-betray').then(betray => {
        expect(betray).to.be.true;
        done();
      });
    });
  });

  describe('checkMutiny()', function() {
    it("is false when there are less than 4 minions total", function(done) {
      Flag.setAll({'minions.rebellious-count':2, 'minions.loyal-count':1  });
      CentralScrutinizer.meetsRequirements('minions.will-mutiny').then(mutiny => {
        expect(mutiny).to.be.false;
        done();
      });
    });

    it("is false when there are enough loyal minions", function(done) {
      Flag.setAll({'minions.rebellious-count':4, 'minions.loyal-count':4  });
      CentralScrutinizer.meetsRequirements('minions.will-mutiny').then(mutiny => {
        expect(mutiny).to.be.false;
        done();
      });
    });

    it("is true when there are more rebellious minions", function(done) {
      Flag.setAll({'minions.rebellious-count':4, 'minions.loyal-count':0  });
      CentralScrutinizer.meetsRequirements('minions.will-mutiny').then(mutiny => {
        expect(mutiny).to.be.true;
        done();
      });
    });
  });

  describe('checkInjuredCount()', function() {
    async function setup() {
      const r1 = await SpecHelper.buildRando();
      const r2 = await SpecHelper.buildRando();
      const r3 = await SpecHelper.buildRando();

      await Abuser.addAnusInjury(r2, { type:'smash', level:1, count:1, details:{ shape:'whip' }});
      await Abuser.addHeadInjury(r3, { type:'smash', level:2, count:1 });
    }

    it('checks injured counts', function(done) {
      setup().then(() => {
        CentralScrutinizer.meetsRequirements('minions.injured-count=2').then(yep => {
          CentralScrutinizer.meetsRequirements('minions.injured-count=1').then(nope => {
            expect(yep).to.be.true;
            expect(nope).to.be.false;
            done();
          });
        });
      });
    });

    it('checks badly injured counts', function(done) {
      setup().then(() => {
        CentralScrutinizer.meetsRequirements('minions.badly-injured-count=1').then(yep => {
          CentralScrutinizer.meetsRequirements('minions.badly-injured-count=2').then(nope => {
            expect(yep).to.be.true;
            expect(nope).to.be.false;
            done();
          });
        });
      });
    });
  });

});
