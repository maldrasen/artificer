// Will move this functionality into training execution

describe('Summoner: Experience', function() {

  async function setupSummoner(options) {
    await Game.start();
    const player = await SpecHelper.buildPlayer({});
    const jada = await SpecHelper.buildJada(options);

    const summoner = new Summoner(jada.id,'cock-licking');
    await summoner.init();

    return summoner;
  }

  // The experience that's awarded for an action is random, so we can't really
  // make real expectations here at all. If something isn't working right with
  // the experience we can print it out here, but these specs are mostly to
  // make sure that nothing blows up.
  describe('calculate()', function() {
    it("gets experience when action is consenting", function(done) {
      setupSummoner({ loyalty:50, lust:50, fear:20 }).then(summoner => {
        Summoner.Experience.calculate(summoner).then(experience => {
          done();
        });
      });
    });

    it("gets more experience when action is enthusiastic", function(done) {
      setupSummoner({ loyalty:50, lust:80, fear:20 }).then(summoner => {
        Summoner.Experience.calculate(summoner).then(experience => {
          done();
        });
      });
    });

    it("gets negative experience when action is rape", function(done) {
      setupSummoner({ loyalty:10, lust:10, fear:20 }).then(summoner => {
        Summoner.Experience.calculate(summoner).then(experience => {
          done();
        });
      });
    });

    it("gets no experience when action is reluctant", function(done) {
      setupSummoner({ loyalty:30, lust:20, fear:80 }).then(summoner => {
        Summoner.Experience.calculate(summoner).then(experience => {
          done();
        });
      });
    });
  });

  // We can test that the experience is added properly and that the
  // notifications are what we expect them to be.
  describe('addExperience()', function() {
    it('adds a new aspect', function(done) {
      SpecHelper.buildJada().then(jada => {
        Summoner.Experience.addExperience(jada, 'breeder', 20).then(result => {
          expect(result.name).to.equal('Breeder');
          expect(result.experience).to.equal(20);
          done();
        });
      });
    });

    it('adjusts an existing aspect', function(done) {
      SpecHelper.buildJada().then(jada => {
        jada.addAspect('breeder', { strength:30 }).then(() => {
          Summoner.Experience.addExperience(jada, 'breeder', 20).then(result => {
            expect(result.name).to.equal('Breeder');
            expect(result.experience).to.equal(20);
            done();
          });
        });
      });
    });

    it('can go up a level', function(done) {
      SpecHelper.buildJada().then(jada => {
        jada.addAspect('breeder', { strength:190 }).then(() => {
          Summoner.Experience.addExperience(jada, 'breeder', 20).then(result => {
            expect(result.name).to.equal('Breeder');
            expect(result.experience).to.equal(20);
            expect(result.gainedLevel).to.equal(1);
            done();
          });
        });
      });
    });

    it('can go down a level', function(done) {
      SpecHelper.buildJada().then(jada => {
        jada.addAspect('breeder', { strength:1410 }).then(() => {
          Summoner.Experience.addExperience(jada, 'breeder', -20).then(result => {
            expect(result.name).to.equal('Breeder');
            expect(result.experience).to.equal(-20);
            expect(result.lostLevel).to.equal(2);
            done();
          });
        });
      });
    });

  });
});
