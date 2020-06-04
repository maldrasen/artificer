describe.only('Course', function() {

  async function setup(options) {
    const player = await SpecHelper.buildPlayer(options.player);
    const jada = await SpecHelper.buildJada(options.minion);

    const context = new Context();
    await context.addPlayer();
    await context.addCharacter('C',jada);
    return context;
  }

  describe('Course: Fighting', function() {
    it('describes an unskilled fight', function(done) {
      setup({}).then(context => {
        Course.lookup('fighting').description(context).then(desc => {
          expect(desc).to.match(/Both he and I should improve/);
          done();
        });
      });
    });
  });

  describe('Course: Fucking', function() {
    it('describes male/male', function(done) {
      setup({ player:{ gender:'male' }, minion:{ gender:'male' }}).then(context => {
        Course.lookup('fucking').description(context).then(desc => {
          expect(desc).to.match(/I'm going to fuck .* in the ass./)
          done();
        });
      });
    });

    it('describes rough male/female', function(done) {
      setup({ player:{ gender:'male' }, minion:{ gender:'female' }}).then(context => {
        Course.lookup('fucking').sexAction.styles.rough.description(context).then(desc => {
          expect(desc).to.match(/I'm going to slap/)
          done();
        });
      });
    });

    it('describes abusive female/female', function(done) {
      setup({ player:{ gender:'female' }, minion:{ gender:'female' }}).then(context => {
        Course.lookup('fucking').sexAction.styles.abusive.description(context).then(desc => {
          expect(desc).to.match(/I'll brutally pound .* with something huge and phallic./)
          done();
        });
      });
    });
  });

});
