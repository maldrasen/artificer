describe.only('SexualScrutinizer', function() {

  async function buildContext(jada) {
    const context = new WeaverContext();
    await context.addPlayer();
    await context.addCharacter('C',jada);
    return context;
  }

  // More specs might be needed? More setup than spec at this point though.
  async function setupForOral(cockOptions, mouthOptions) {
    let game = await GameHelper.setupTestGame();
    let player = await Player.instance();
    let cock = await SpecHelper.adjustCock(player,cockOptions);
    let jada = await SpecHelper.buildJada({ mouth:mouthOptions });
    let context = await buildContext(jada);

    return { context };
  }

  it('Checks mouth fit', function(done) {
    setupForOral({ sizeClass:'huge', sizeScale:90 },{ width:35, throatWidth:20 }).then(setup => {
      CentralScrutinizer.meetsRequirements('canSuckCock(C,P).mouthFit=impossible', setup.context).then(passed => {
        expect(passed).to.be.true
        done();
      });
    });
  });

});
