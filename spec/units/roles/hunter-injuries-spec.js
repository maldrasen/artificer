describe('Role: Hunter.Injuries', function() {

  describe('injuryChance()', function() {
    it('is dangerous if you suck', function() {
      expect(Role.Hunter.Injuries.injuryChance({ character:{physical:0}, skill:0, tier:0, success:false })).to.equal(30);
    });
    it('is a tiny bit better if you strong', function() {
      expect(Role.Hunter.Injuries.injuryChance({ character:{physical:20}, skill:0, tier:0, success:false })).to.equal(29);
    });
    it('is a bit better if you skilled', function() {
      expect(Role.Hunter.Injuries.injuryChance({ character:{physical:0}, skill:3, tier:0, success:false })).to.equal(24);
    });
    it('is a bit better if you equipped', function() {
      expect(Role.Hunter.Injuries.injuryChance({ character:{physical:0}, skill:0, tier:2, success:false })).to.equal(24);
    });
    it('is better if you winnin', function() {
      expect(Role.Hunter.Injuries.injuryChance({ character:{physical:0}, skill:0, tier:0, success:true })).to.equal(20);
    });
    it('is best if you all dat', function() {
      expect(Role.Hunter.Injuries.injuryChance({ character:{physical:20}, skill:3, tier:2, success:true })).to.equal(7);
    });
  });

  describe('meetsRequirement()', function() {
    it('is true by default', function() {
      expect(Role.Hunter.Injuries.meetsRequirement({},{})).to.equal(true)
    });
    it('checks for a cock', function() {
      expect(Role.Hunter.Injuries.meetsRequirement({ location:'cock' },{})).to.equal(false);
      expect(Role.Hunter.Injuries.meetsRequirement({ location:'cock' },{ cock:true })).to.equal(true);
    });
    it('checks for a pussy', function() {
      expect(Role.Hunter.Injuries.meetsRequirement({ location:'pussy' },{})).to.equal(false);
      expect(Role.Hunter.Injuries.meetsRequirement({ location:'pussy' },{ pussy:true })).to.equal(true);
    });
    it('checks for tits', function() {
      expect(Role.Hunter.Injuries.meetsRequirement({ location:'tits' },{})).to.equal(false);
      expect(Role.Hunter.Injuries.meetsRequirement({ location:'tits' },{ tits:true })).to.equal(true);
    });
    it('checks for success', function() {
      expect(Role.Hunter.Injuries.meetsRequirement({ requires:['success'] },{ success:false })).to.equal(false);
      expect(Role.Hunter.Injuries.meetsRequirement({ requires:['success'] },{ success:true  })).to.equal(true);
    });
    it('checks for failure', function() {
      expect(Role.Hunter.Injuries.meetsRequirement({ requires:['failure'] },{ success:true  })).to.equal(false);
      expect(Role.Hunter.Injuries.meetsRequirement({ requires:['failure'] },{ success:false })).to.equal(true);
    });
    it('checks for tier-0', function() {
      expect(Role.Hunter.Injuries.meetsRequirement({ requires:['tier-0'] },{ tier:1 })).to.equal(false);
      expect(Role.Hunter.Injuries.meetsRequirement({ requires:['tier-0'] },{ tier:0 })).to.equal(true);
    });
    it('checks for rat', function() {
      expect(Role.Hunter.Injuries.meetsRequirement({ requires:['species-rat'] },{ character:{ speciesCode:'not-rat' } })).to.equal(false);
      expect(Role.Hunter.Injuries.meetsRequirement({ requires:['species-rat'] },{ character:{ speciesCode:'rat' } })).to.equal(true);
    });
    it('checks for biter', function() {
      expect(Role.Hunter.Injuries.meetsRequirement({ requires:['species-biter'] },{ character:{ biter:false } })).to.equal(false);
      expect(Role.Hunter.Injuries.meetsRequirement({ requires:['species-biter'] },{ character:{ biter:true } })).to.equal(true);
    });
  });

});
