describe('Role: Hunter', function() {

  describe('successChance()', function() {
    it("A weak character has a low chance of success", function() {
      expect(Role.Hunter.successChance(0,0)).to.equal(30)
    });
    it("A stronger character has a slightly higher chance of success", function() {
      expect(Role.Hunter.successChance(10,0)).to.equal(60)
    });
    it("A strong character has a higher chance of success", function() {
      expect(Role.Hunter.successChance(30,0)).to.equal(75)
    });
    it("A skilled character has a slightly higher chance of success", function() {
      expect(Role.Hunter.successChance(0,1)).to.equal(50)
    });
    it("A skilled and strong character has a high chance of success", function() {
      expect(Role.Hunter.successChance(30,3)).to.equal(90)
    });
  });

  describe('injuryChance()', function() {
    it('Is dangerous if you suck', function() {
      expect(Role.Hunter.injuryChance(0,0,0,false)).to.equal(30);
    });
    it('Is a tiny bit better if you strong', function() {
      expect(Role.Hunter.injuryChance(20,0,0,false)).to.equal(29);
    });
    it('Is a bit better if you skilled', function() {
      expect(Role.Hunter.injuryChance(0,3,0,false)).to.equal(24);
    });
    it('Is a bit better if you equipped', function() {
      expect(Role.Hunter.injuryChance(0,0,2,false)).to.equal(24);
    });
    it('Is better if you winnin', function() {
      expect(Role.Hunter.injuryChance(0,0,0,true)).to.equal(20);
    });
    it('Is best if you all dat', function() {
      expect(Role.Hunter.injuryChance(20,3,2,true)).to.equal(7);
    });
  });

  describe('huntingResults()', function() {
    it("Gets the table for the tier and skill level", function() {
      expect(Role.Hunter.huntingResults(0,0)[1]).to.eql({ min:0, max:2, type:'small-game-pelt' });
      expect(Role.Hunter.huntingResults(0,2)[0]).to.eql({ min:3, max:8, type:'small-game' });
    });
  });

});
