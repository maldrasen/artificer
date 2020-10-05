describe('SexualScrutinizer', function() {

  async function buildContext(jada) {
    const context = new Context();
    await context.addPlayer();
    await context.addCharacter('C',jada);
    return context;
  }

  // More specs might be needed? More setup than spec at this point though.
  async function setupForOral(cockOptions, mouthOptions) {
    await GameHelper.setupTestGame();
    let player = await Player.instance();
    let cock = await SpecHelper.adjustCock(player,cockOptions);
    let jada = await SpecHelper.buildJada({ mouth:mouthOptions });
    let context = await buildContext(jada);

    return { context };
  }

  it('Checks mouth fit', function(done) {
    setupForOral({ sizeClass:'huge', sizeScale:90 },{ width:35, throatWidth:20 }).then(setup => {
      CentralScrutinizer.meetsRequirements('sex.canSuckCock(C,P).mouthFit=impossible', setup.context).then(passed => {
        expect(passed).to.be.true
        done();
      });
    });
  });

  it('Checks anti mouth fit', function(done) {
    setupForOral({ sizeClass:'huge', sizeScale:90 },{ width:35, throatWidth:20 }).then(setup => {
      CentralScrutinizer.meetsRequirements('sex.canSuckCock(C,P).mouthFit!=impossible', setup.context).then(passed => {
        expect(passed).to.be.false
        done();
      });
    });
  });

  describe('checkFuckingPossible()', function() {
    async function setup(playerGender, minionGender) {
      const player = await SpecHelper.buildPlayer({ gender:playerGender });
      const jada = await SpecHelper.buildJada({ gender:minionGender });
      const context = new Context();
      await context.addPlayer();
      await context.addCharacter('C',jada);
      return context;
    }

    it('is possible when the player has a cock', function(done) {
      setup('male','male').then(context => {
        CentralScrutinizer.meetsRequirements('sex.fuckingPossible',context).then(possible => {
          expect(possible).to.be.true;
          done();
        });
      });
    });

    it('is possible when a minion has a cock', function(done) {
      setup('female','futa').then(context => {
        CentralScrutinizer.meetsRequirements('sex.fuckingPossible',context).then(possible => {
          expect(possible).to.be.true;
          done();
        });
      });
    });

    it('is not possible when no one has a cock', function(done) {
      setup('female','female').then(context => {
        CentralScrutinizer.meetsRequirements('sex.fuckingPossible',context).then(possible => {
          expect(possible).to.be.false;
          done();
        });
      });
    });
  });

});
