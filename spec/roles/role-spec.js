describe.only('Role', function() {

  async function setupResult() {
    const jada = await SpecHelper.buildJada({ species:'scaven' });
    const context = new Context();
    await context.addCharacter('C',jada);
    return new RoleResult(context);
  }

  describe('addInjury()', function() {
    it('adds injuries from hazard functions', function(done) {
      setupResult().then(result => {
        Role.addInjury(result, Hazard.hinterlandsForaging).then(_ => {
          result.character.getHealth().then(health => {
            expect(result.injury).to.exist;
            expect(health).to.be.below(100);
            done();
          });
        });
      });
    });
  });

  describe('skillLevel()', function() {
    it("is 0 when the character doesn't have the aspect", function(done) {
      SpecHelper.buildJada().then(jada => {
        Role.skillLevel(jada,'foraging').then(level => {
          expect(level).to.equal(0);
          done();
        });
      });
    });

    it("gets the character's skill level", function(done) {
      SpecHelper.buildJada().then(jada => {
        jada.addAspect('hunting', { level:2 }).then(() => {
          Role.skillLevel(jada,'hunting').then(level => {
            expect(level).to.equal(2);
            done();
          });
        });
      });
    });
  });

  describe("addExperience()", function() {
    it("defaults to 5xp", function(done) {
      setupResult().then(result => {
        Role.addExperience(result, 'foraging').then(_ => {
          result.character.getCharacterAspect('foraging').then(aspect => {
            expect(aspect.strength).to.equal(5);
            expect(result.notifications[0].name).to.equal('Foraging');
            expect(result.notifications[0].experience).to.equal(5);
            done();
          });
        });
      });
    });

    it("adds experience", function(done) {
      setupResult().then(result => {
        result.character.addAspect('hunting', { strength:100 }).then(() => {
          Role.addExperience(result, 'hunting').then(_ => {
            result.character.getCharacterAspect('hunting').then(aspect => {
              expect(aspect.strength).to.equal(105);
              expect(result.notifications[0].name).to.equal('Hunting');
              expect(result.notifications[0].experience).to.equal(5);
              done();
            });
          });
        });
      });
    });

    it("shows the gained level up when a level is earned", function(done) {
      setupResult().then(result => {
        result.character.addAspect('hunting', { strength:199 }).then(() => {
          Role.addExperience(result,'hunting').then(_ => {
            result.character.getCharacterAspect('hunting').then(aspect => {
              expect(aspect.strength).to.equal(200);
              expect(result.notifications[0].name).to.equal('Hunting');
              expect(result.notifications[0].experience).to.equal(5);
              expect(result.notifications[0].gainedLevel).to.equal(1);
              done();
            });
          });
        });
      });
    });
  });

});
