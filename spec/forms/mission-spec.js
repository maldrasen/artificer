describe('Mission', function() {

  describe('available()', function() {
    it("Is empty when flag isn't set", function(done) {
      Mission.available().then(available => {
        expect(available).to.eql([]);
        done();
      });
    });

    it("Checks for mission flags", function(done) {
      Flag.setAll({
        'plan-view.missions': 'Y',
        'mission.gather-sisal': 'Y',
      });

      Mission.available().then(available => {
        expect(available.map(m => m.code)).to.eql(['gather-sisal']);
        done();
      });
    });

    it("Checks for mission flags and specific mission requirements", function(done) {
      Flag.setAll({
        'plan-view.missions': 'Y',
        'mission.catch-sheep': 'Y',
        'location.sheepfold-built': 'Y',
      });

      Mission.available().then(available => {
        expect(available.map(m => m.code)).to.eql(['catch-sheep']);
        done();
      });
    });
  });

});
