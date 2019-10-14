describe('Role: Hunter.Injuries', function() {

  describe('injuryChance()', function() {
    it('Is dangerous if you suck', function() {
      expect(Role.Hunter.Injuries.injuryChance(0,0,0,false)).to.equal(30);
    });
    it('Is a tiny bit better if you strong', function() {
      expect(Role.Hunter.Injuries.injuryChance(20,0,0,false)).to.equal(29);
    });
    it('Is a bit better if you skilled', function() {
      expect(Role.Hunter.Injuries.injuryChance(0,3,0,false)).to.equal(24);
    });
    it('Is a bit better if you equipped', function() {
      expect(Role.Hunter.Injuries.injuryChance(0,0,2,false)).to.equal(24);
    });
    it('Is better if you winnin', function() {
      expect(Role.Hunter.Injuries.injuryChance(0,0,0,true)).to.equal(20);
    });
    it('Is best if you all dat', function() {
      expect(Role.Hunter.Injuries.injuryChance(20,3,2,true)).to.equal(7);
    });
  });

});
