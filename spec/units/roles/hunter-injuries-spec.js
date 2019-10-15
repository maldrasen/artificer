describe('Role: Hunter.Injuries', function() {

  describe('injuryChance()', function() {
    it('Is dangerous if you suck', function() {
      expect(Role.Hunter.Injuries.injuryChance({ character:{physical:0}, skill:0, tier:0, success:false })).to.equal(30);
    });
    it('Is a tiny bit better if you strong', function() {
      expect(Role.Hunter.Injuries.injuryChance({ character:{physical:20}, skill:0, tier:0, success:false })).to.equal(29);
    });
    it('Is a bit better if you skilled', function() {
      expect(Role.Hunter.Injuries.injuryChance({ character:{physical:0}, skill:3, tier:0, success:false })).to.equal(24);
    });
    it('Is a bit better if you equipped', function() {
      expect(Role.Hunter.Injuries.injuryChance({ character:{physical:0}, skill:0, tier:2, success:false })).to.equal(24);
    });
    it('Is better if you winnin', function() {
      expect(Role.Hunter.Injuries.injuryChance({ character:{physical:0}, skill:0, tier:0, success:true })).to.equal(20);
    });
    it('Is best if you all dat', function() {
      expect(Role.Hunter.Injuries.injuryChance({ character:{physical:20}, skill:3, tier:2, success:true })).to.equal(7);
    });
  });

});
