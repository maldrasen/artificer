describe('CharacterAspect', function() {

  describe('adjustStrength', function() {
    it('adjusts the aspect strength', function(done) {
      SpecHelper.buildJada().then(jada => {
        jada.addAspect('breeder', { strength:1000 }).then(aspect => {
          aspect.adjustStrength(250).then(() => {
            expect(aspect.strength).to.equal(1250);
            done();
          });
        });
      });
    });

    it('prevents negitive strength', function(done) {
      SpecHelper.buildJada().then(jada => {
        jada.addAspect('breeder', { strength:200 }).then(aspect => {
          aspect.adjustStrength(-250).then(() => {
            expect(aspect.strength).to.equal(0);
            done();
          });
        });
      });
    });

    it('has a strength max', function(done) {
      SpecHelper.buildJada().then(jada => {
        jada.addAspect('breeder', { strength:2500 }).then(aspect => {
          aspect.adjustStrength(750).then(() => {
            expect(aspect.strength).to.equal(3000);
            done();
          });
        });
      });
    });
  });

  describe('level', function() {

    async function withStrength(strength) {
      return await CharacterAspect.create({ code:'golden', strength:strength });
    }

    it('can be level 0', function(done) {
      withStrength(100).then(aspect => {
        expect(aspect.level).to.equal(0);
        done();
      });
    });

    it('can be level 1', function(done) {
      withStrength(300).then(aspect => {
        expect(aspect.level).to.equal(1);
        done();
      });
    });

    it('can be level 2', function(done) {
      withStrength(900).then(aspect => {
        expect(aspect.level).to.equal(2);
        done();
      });
    });

    it('can be level 3', function(done) {
      withStrength(2500).then(aspect => {
        expect(aspect.level).to.equal(3);
        done();
      });
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
