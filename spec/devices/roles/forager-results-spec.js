describe('Role: Forager.Results', function() {

  describe("getItems()", function() {
    it('gets the requested number of items', function(done) {
      Flag.set('item.blood-berries','unlocked').then(() => {
        Role.Forager.Results.getItems(8).then(items => {
          expect(items['blood-berries']).to.equal(8);
          done();
        });
      });
    });
  });

  describe("getCapacity()", function() {
    it('with no equipment, but uninjured', function(done) {
      SpecHelper.buildJada().then(jada => {
        Role.Forager.Results.getCapacity(jada).then(capacity => {
          expect(capacity).to.equal(2);
          done();
        });
      });
    });
  });

  describe("getUnlockedItems()", function() {
    it("gets items that have been unlocked", function(done) {
      Flag.set('item.blood-berries','unlocked').then(() => {
        Role.Forager.Results.getUnlockedItems().then(items => {
          expect(items.map(fla => { return fla.code })).to.eql(['blood-berries']);
          done();
        });
      });
    });
  });

});
