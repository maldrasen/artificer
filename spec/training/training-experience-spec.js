describe('TrainingExperience', function() {

  describe('addExperience()', function() {

    async function setup(level) {
      const jada = await SpecHelper.buildJada({});
      if (level > 0) { await jada.addAspect('fighting', { level:level }); }
      return jada
    }

    it(`adds experience to an aspect a character doesn't have`, function(done) {
      setup(0).then(jada => {
        TrainingExperience.addExperience(jada,'fighting',69).then(notification => {
          jada.getCharacterAspect('fighting').then(aspect => {
            expect(notification.name).to.equal('Fighting');
            expect(notification.experience).to.equal(69);
            expect(aspect.strength).to.equal(69);
            done();
          });
        });
      });
    });

    it(`adds experience to an aspect a character has`, function(done) {
      setup(1).then(jada => {
        TrainingExperience.addExperience(jada,'fighting',69).then(notification => {
          jada.getCharacterAspect('fighting').then(aspect => {
            expect(notification.name).to.equal('Fighting');
            expect(notification.experience).to.equal(69);
            expect(aspect.strength).to.equal(469);
            done();
          });
        });
      });
    });

    it(`adds a level up notification`, function(done) {
      setup(1).then(jada => {
        TrainingExperience.addExperience(jada,'fighting',2000).then(notification => {
          jada.getCharacterAspect('fighting').then(aspect => {
            expect(notification.name).to.equal('Fighting');
            expect(notification.experience).to.equal(2000);
            expect(notification.gainedLevel).to.equal(3);
            expect(aspect.strength).to.equal(2400);
            done();
          });
        });
      });
    });

    it('adds a level down notification', function(done) {
      setup(2).then(jada => {
        TrainingExperience.addExperience(jada,'fighting', -666).then(notification => {
          jada.getCharacterAspect('fighting').then(aspect => {
            expect(notification.name).to.equal('Fighting');
            expect(notification.experience).to.equal(-666);
            expect(notification.lostLevel).to.equal(1);
            expect(aspect.strength).to.equal(334);
            done();
          });
        });
      });
    });
  });

  // describe('calculate()', function() {
  //   it("gets experience when action is consenting", function(done) {
  //     setupSummoner({ loyalty:50, lust:50, fear:20 }).then(summoner => {
  //       Summoner.Experience.calculate(summoner).then(experience => {
  //         done();
  //       });
  //     });
  //   });
  //
  //   it("gets more experience when action is enthusiastic", function(done) {
  //     setupSummoner({ loyalty:50, lust:80, fear:20 }).then(summoner => {
  //       Summoner.Experience.calculate(summoner).then(experience => {
  //         done();
  //       });
  //     });
  //   });
  //
  //   it("gets negative experience when action is rape", function(done) {
  //     setupSummoner({ loyalty:10, lust:10, fear:20 }).then(summoner => {
  //       Summoner.Experience.calculate(summoner).then(experience => {
  //         done();
  //       });
  //     });
  //   });
  //
  //   it("gets no experience when action is reluctant", function(done) {
  //     setupSummoner({ loyalty:30, lust:20, fear:80 }).then(summoner => {
  //       Summoner.Experience.calculate(summoner).then(experience => {
  //         done();
  //       });
  //     });
  //   });
  // });

});
