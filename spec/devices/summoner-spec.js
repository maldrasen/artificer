describe('Summoner', function() {

  async function setupGame(options) {
    const game = await Game.start();
    const player = await SpecHelper.buildPlayer(game,{})
    const jada = await SpecHelper.buildJada(options.jada||{});

    await Promise.all(Object.keys(options.aspects||[]).map(async code => {
      return jada.addAspect(code, { level:options.aspects[code] });
    }));

    return jada;
  }

  it("doesn't blow up.", function(done) {
    setupGame({ jada:{ loyalty:50, lust:50, fear:20 }}).then(jada => {
      const summoner = new Summoner(jada.id,'cock-licking');
      summoner.init().then(() => {
        summoner.execute().then(() => {
          const results = summoner.getResult();
          console.log("Results:",results)
          done();
        });
      });
    });
  });

});
