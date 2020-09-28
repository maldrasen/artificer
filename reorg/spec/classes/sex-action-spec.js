describe('SexAction', function() {

  describe('getComplementingAspects()', function() {
    it('gets nothing', function() {
      expect((new SexAction({})).getComplementingAspects()).to.eql([]);
    });

    it('gets arrays', function() {
      expect(new SexAction({ complementing:['ass'] }).getComplementingAspects()).to.eql(['ass']);
    });

    it('also gets aspects from styles', function() {
      let action = new SexAction({
        complementing:['ass'],
        styles:{ hard:{ complementing:['fist']
      }}});

      expect(action.getComplementingAspects('hard')).to.eql(['ass','fist']);
    });

    it('calls functions to get aspects', function() {
      let action = new SexAction({
        complementing: context => ['eat'],
        styles:{ hard:{ complementing: context => ['shit'] }},
      });

      expect(action.getComplementingAspects('hard')).to.eql(['eat','shit']);
    });
  });

});
