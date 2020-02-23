describe('Character', function() {

  describe('reduceAllLoyalty()', function() {
    it('reduces loyalty on all minions', function() {
      SpecHelper.buildJada({ loyalty:50 }).then(() => {
        Character.reduceAllLoyalty().then(minions => {
          expect(minions[0].loyalty).to.be.within(45,50)
        });
      });
    });
  });

  describe('loyalty', function() {
    it('is loyal when loyalty is 25 or over', function(done) {
      SpecHelper.buildJada({ loyalty:25 }).then(jada => {
        expect(jada.isLoyal).to.be.true;
        done();
      })
    });

    it('is not loyal when loyalty is under 25', function(done) {
      SpecHelper.buildJada({ loyalty:24 }).then(jada => {
        expect(jada.isLoyal).to.be.false;
        done();
      })
    });

    it('is fearful when fear is 25 or over', function(done) {
      SpecHelper.buildJada({ fear:25 }).then(jada => {
        expect(jada.isAfraid).to.be.true;
        done();
      })
    });

    it('is not fearful when fear is under 25', function(done) {
      SpecHelper.buildJada({ fear:24 }).then(jada => {
        expect(jada.isAfraid).to.be.false;
        done();
      })
    });

    it('is rebellious when fear is very low', function(done) {
      SpecHelper.buildJada({ fear:6, loyalty:24 }).then(jada => {
        expect(jada.isRebellious).to.be.true;
        done();
      })
    });

    it('is rebellious when fear and loyalty are low', function(done) {
      SpecHelper.buildJada({ fear:14, loyalty:14 }).then(jada => {
        expect(jada.isRebellious).to.be.true;
        done();
      })
    });

    it('is rebellious when loyalty is very low', function(done) {
      SpecHelper.buildJada({ fear:24, loyalty:6 }).then(jada => {
        expect(jada.isRebellious).to.be.true;
        done();
      })
    });

    it('is not rebellious otherwise', function(done) {
      SpecHelper.buildJada({ fear:14, loyalty:15 }).then(jada => {
        expect(jada.isRebellious).to.be.false;
        done();
      })
    });

    it('is traitorous when fear and loyalty are very low', function(done) {
      SpecHelper.buildJada({ fear:8, loyalty:7 }).then(jada => {
        expect(jada.isTraitorous).to.be.true;
        done();
      })
    });

    it('is not traitorous otherwise', function(done) {
      SpecHelper.buildJada({ fear:8, loyalty:8 }).then(jada => {
        expect(jada.isTraitorous).to.be.false;
        done();
      })
    });
  });

});
