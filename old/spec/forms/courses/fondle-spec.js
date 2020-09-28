describe.only('Course: Fondle', function() {

  async function setup(options) {
    await Game.start();

    TrainingResult.startReport();

    const player = await SpecHelper.buildPlayer(options.player||{});
    const jada = await SpecHelper.buildJada(options.minion||{});

    const context = new Context();
    await context.addPlayer();
    await context.addCharacter('C',jada);

    if (options.history == 'fondle.1') {
      await SexEvent.add({
        eventType: 'training',
        character: jada,
        course:'fondle',
      });
    }

    return new TrainingPlan(Course.lookup('fondle'),null,context);
  }

  it('fondling a scaven', function(done) {
    setup({ minion:{ species:'scaven' } }).then(plan => {
      Course.lookup('fondle').execute(plan).then(result => {
        console.log("Result",result)
        done();
      });
    });
  });

  it('fondling a scaven again', function(done) {
    setup({ minion:{ species:'scaven' }, history:'fondle.1' }).then(plan => {
      Course.lookup('fondle').execute(plan).then(result => {
        console.log("Result",result)
        done();
      });
    });
  });

});
