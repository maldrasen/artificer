describe('CharacterAspect', function() {

  describe('adjustStrength', function() {
    let aspect;

    it('adjusts the aspect strength', function() {
      aspect = new CharacterAspect({ code:'breeder', strength:1000 });
      aspect.adjustStrength(250);
      expect(aspect.strength).to.equal(1250);
    });

    it('prevents negitive strength', function() {
      aspect = new CharacterAspect({ code:'breeder', strength:200 });
      aspect.adjustStrength(-250);
      expect(aspect.strength).to.equal(0);
    });

    it('has a strength max', function() {
      aspect = new CharacterAspect({ code:'breeder', strength:2500 });
      aspect.adjustStrength(750);
      expect(aspect.strength).to.equal(3000);
    });
  });

  describe('level', function() {
    it('can be level 0', function() {
      expect(new CharacterAspect({ strength:100 }).level).to.equal(0);
    });

    it('can be level 1', function() {
      expect(new CharacterAspect({ strength:300 }).level).to.equal(1);
    });

    it('can be level 2', function() {
      expect(new CharacterAspect({ strength:900 }).level).to.equal(2);
    });

    it('can be level 3', function() {
      expect(new CharacterAspect({ strength:2500 }).level).to.equal(3);
    });
  });

  describe('setLevel', function() {
    let aspect;

    beforeEach(function() {
      aspect = new CharacterAspect({ code:'breeder' });
    });

    it('sets level 0', function() {
      aspect.setLevel(0);
      expect(aspect.strength).to.equal(0);
    });

    it('sets level 1', function() {
      aspect.setLevel(1);
      expect(aspect.strength).to.equal(400);
    });

    it('sets level 2', function() {
      aspect.setLevel(2);
      expect(aspect.strength).to.equal(1000);
    });

    it('sets level 3', function() {
      aspect.setLevel(3);
      expect(aspect.strength).to.equal(2200);
    });
  });

});
