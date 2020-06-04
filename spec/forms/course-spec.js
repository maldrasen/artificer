describe('Course', function() {

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

  describe('Course: Oral', function() {
    it('describes futa', function(done) {
      setup({ player:{ gender:'futa' }}).then(context => {
        Course.lookup('oral').description(context).then(desc => {
          expect(desc).to.match(/pleasure me with {{his}} mouth, both sucking my cock and eating my pussy/)
          done();
        });
      });
    });

    it('describes rough male', function(done) {
      setup({ player:{ gender:'male' }}).then(context => {
        Course.lookup('oral').sexAction.styles.rough.description(context).then(desc => {
          expect(desc).to.match(/ramming it as deep into {{his}} throat as I can/)
          done();
        });
      });
    });

    it('describes abusive female', function(done) {
      setup({ player:{ gender:'female' }}).then(context => {
        Course.lookup('oral').sexAction.styles.abusive.description(context).then(desc => {
          expect(desc).to.match(/grind my ass and pussy against {{his}} face/)
          done();
        });
      });
    });
  });

});
