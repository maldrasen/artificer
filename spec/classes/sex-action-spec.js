describe.only('SexAction', function() {

  describe('getComplementingAspects()', function() {

    it('gets nothing', function(done) {
      (new SexAction({})).getComplementingAspects().then(aspects => {
        expect(aspects).to.eql([]);
        done();
      });
    });

    it('gets arrays', function(done) {
      (new SexAction({ complementing:['ass'] }).getComplementingAspects().then(aspects => {
        expect(aspects).to.eql(['ass']);
        done();
      }));
    });

    it('also gets aspects from styles', function(done) {
      (new SexAction({ complementing:['ass'], styles:{ hard:{ complementing:['fist'] }}}).getComplementingAspects('hard').then(aspects => {
        expect(aspects).to.eql(['ass','fist']);
        done();
      }));
    });

    it('calls functions to get aspects', function(done) {
      let action = new SexAction({
        complementing: async (player, character) => ['eat'],
        styles:{ hard:{ complementing: async (player, character) => ['shit'] }},
      });

      action.getComplementingAspects('hard').then(aspects => {
        expect(aspects).to.eql(['eat','shit']);
        done();
      });
    });
  });

});
