describe.only('Role: Forager.Results', function() {

  it("does something", function(done) {
    SpecHelper.buildJada().then(jada => {
      Role.Forager.Results.getResults(jada).then(results => {
        done();
      });
    });
  });

  describe("getItems()", function() {
    it('unlocks items', function(done) {
      SpecHelper.buildJada().then(jada => {
        Role.Forager.Results.getItems(jada, 'healthy', 4, { unlock:'blood-berries', event:'found-blood-berries' }).then(items => {
          Flag.lookupValue('item.blood-berries').then(flag => {
            EventQueue.nextEvent().then(event => {
              expect(items['blood-berries']).to.be.at.least(1);
              expect(flag).to.equal('unlocked');
              expect(event.code).to.equal('found-blood-berries');
              done();
            });
          });
        });
      });
    });
  })

  describe("getCapacity()", function() {
    it('with no equipment, but uninjured', function(done) {
      SpecHelper.buildJada().then(jada => {
        expect(Role.Forager.Results.getCapacity(jada, 'healthy')).to.equal(2);
        done();
      });
    });

    it('with no equipment, and severly injured', function(done) {
      SpecHelper.buildJada().then(jada => {
        expect(Role.Forager.Results.getCapacity(jada, 'horrible')).to.equal(1);
        done();
      });
    });
  });

  describe("getPossibleItems()", function() {
    it("return the list of items that are always unlocked", function(done) {
      Role.Forager.Results.getPossibleItems().then(items => {
        let list = items.map(fla => { return fla.code }).sort();
        expect(list.length).to.equal(4)
        expect(list[0]).to.equal('bitter-fruits');
        done();
      });
    });

    it("gets items that have been unlocked", function(done) {
      Flag.set('item.blood-berries','unlocked').then(() => {
        Role.Forager.Results.getPossibleItems().then(items => {
          let list = items.map(fla => { return fla.code }).sort();
          expect(list.length).to.equal(5)
          expect(list[0]).to.equal('bitter-fruits');
          expect(list[1]).to.equal('blood-berries');
          done();
        });
      });
    });
  });

  describe("updateFlag()", function() {
    it("creates the success count", function(done) {
      Role.Forager.Results.updateFlag(false).then(counts => {
        expect(counts.failure).to.equal(0);
        expect(counts.success).to.equal(1);
        done();
      });
    });

    it("increments the failure count", function(done) {
      Flag.set('role.forage.failureCount', 5).then(() => {
        Role.Forager.Results.updateFlag(true).then(counts => {
          expect(counts.failure).to.equal(6);
          expect(counts.success).to.equal(0);
          done();
        });
      });
    });
  });

  describe("getScheduled()", function() {
    it("gets a failure event", function() {
      expect(Role.Forager.Results.getScheduled(true,{ failure:1 }).unlock).to.equal('blight-spider');
    });

    it("gets a success event", function() {
      expect(Role.Forager.Results.getScheduled(false,{ success:2 }).unlock).to.equal('blood-berries');
    });
  });

});
