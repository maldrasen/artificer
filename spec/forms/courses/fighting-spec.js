describe('Course: Fighting', function() {

  async function setup(options) {
    const player = await SpecHelper.buildPlayer(options.player||{});
    const jada = await SpecHelper.buildJada(options.minion||{});

    if (options.playerSkill != null) { await player.addAspect('fighting',{ level:options.playerSkill }); }
    if (options.minionSkill != null) { await jada.addAspect('fighting',{ level:options.minionSkill }); }

    const context = new Context();
    await context.addPlayer();
    await context.addCharacter('C',jada);

    return new TrainingPlan(Course.lookup('fighting'),null,context);
  }

  it('describes an unskilled fight', function(done) {
    setup({}).then(plan => {
      Course.lookup('fighting').description(plan.context).then(desc => {
        expect(desc).to.match(/Both {{he}} and I should improve/);
        done();
      });
    });
  });

  it('executes when both characters are unskilled.', function(done) {
    setup({}).then(plan => {
      const result = new TrainingResult(plan.context);
      Course.lookup('fighting').execute(plan, result).then(_ => {
        result.forReport().then(report => {
          done();
        });
      });
    });
  });

  it('executes when player is stronger.', function(done) {
    setup({ minionSkill:1, playerSkill:3 }).then(plan => {
      const result = new TrainingResult(plan.context);
      Course.lookup('fighting').execute(plan, result).then(_ => {
        result.forReport().then(report => {
          done();
        });
      });
    });
  });

  it('executes when player is much stronger.', function(done) {
    setup({ playerSkill:2 }).then(plan => {
      const result = new TrainingResult(plan.context);
      Course.lookup('fighting').execute(plan, result).then(_ => {
        result.forReport().then(report => {
          done();
        });
      });
    });
  });

  it('executes when minion is stronger.', function(done) {
    setup({ playerSkill:1, minionSkill:3 }).then(plan => {
      const result = new TrainingResult(plan.context);
      Course.lookup('fighting').execute(plan, result).then(_ => {
        result.forReport().then(report => {
          done();
        });
      });
    });
  });

  it('executes when minion is much stronger.', function(done) {
    setup({ minionSkill:3 }).then(plan => {
      const result = new TrainingResult(plan.context);
      Course.lookup('fighting').execute(plan, result).then(_ => {
        result.forReport().then(report => {
          done();
        });
      });
    });
  });

});
