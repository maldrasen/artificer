describe('Role.Skills', function() {

  describe('skillLevel()', function() {
    it("is 0 when the character doesn't have the aspect", function(done) {
      SpecHelper.buildJada().then(jada => {
        Role.Skills.skillLevel(jada,'foraging').then(level => {
          expect(level).to.equal(0);
          done();
        });
      });
    });

    it("gets the character's skill level", function(done) {
      SpecHelper.buildJada().then(jada => {
        jada.addAspect('hunting', { level:2 }).then(() => {
          Role.Skills.skillLevel(jada,'hunting').then(level => {
            expect(level).to.equal(2);
            done();
          });
        });
      });
    });
  });

  describe("addExperience()", function() {
    it("defaults to 5xp", function(done) {
      SpecHelper.buildJada().then(jada => {
        Role.Skills.addExperience({ character:jada, skill:'foraging' }).then(notification => {
          jada.getCharacterAspect('foraging').then(aspect => {
            expect(aspect.strength).to.equal(5);
            expect(notification.skill).to.equal('Foraging');
            expect(notification.experience).to.equal(5);
            done();
          });
        });
      });
    });

    it("adds experience", function(done) {
      SpecHelper.buildJada().then(jada => {
        jada.addAspect('hunting', { strength:100 }).then(() => {
          Role.Skills.addExperience({ character:jada, skill:'hunting' }).then(notification => {
            jada.getCharacterAspect('hunting').then(aspect => {
              expect(aspect.strength).to.equal(105);
              expect(notification.skill).to.equal('Hunting');
              expect(notification.experience).to.equal(5);
              done();
            });
          });
        });
      });
    });

    it("shows the gained level up when a level is earned", function(done) {
      SpecHelper.buildJada({species:'scaven'}).then(jada => {
        jada.addAspect('hunting', { strength:199 }).then(() => {
          Role.Skills.addExperience({ character:jada, skill:'hunting' }).then(notification => {
            jada.getCharacterAspect('hunting').then(aspect => {
              expect(aspect.strength).to.equal(200);
              expect(notification.skill).to.equal('Hunting');
              expect(notification.experience).to.equal(5);
              expect(notification.gainedLevel).to.equal(1);
              done();
            });
          });
        });
      });
    });
  });

});
