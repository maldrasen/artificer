describe('Personality: Scaven Default', function() {

  // This spec is mostly for development and as a check to make sure nothing
  // blows up unexpectedly, so it makes very few assertions and prints output
  // when spec is verbose.

  describe('reactToPlayer()', function() {

    it('when loving', function(done) {
      SpecHelper.buildJada({ species:'scaven', lust:100, loyalty:100, fear:0 }).then(jada => {
        jada.reactToPlayer().then(reaction => {
          SpecHelper.print(reaction.text);
          done();
        });
      });
    });

    it('when lusty', function(done) {
      SpecHelper.buildJada({ species:'scaven', lust:80, loyalty:60, fear:0 }).then(jada => {
        jada.reactToPlayer().then(reaction => {
          SpecHelper.print(reaction.text);
          done();
        });
      });
    });

    it('when friendly', function(done) {
      SpecHelper.buildJada({ species:'scaven', lust:60, loyalty:80, fear:0 }).then(jada => {
        jada.reactToPlayer().then(reaction => {
          SpecHelper.print(reaction.text);
          done();
        });
      });
    });

    it('when resigned', function(done) {
      SpecHelper.buildJada({ species:'scaven', lust:50, loyalty:50, fear:25 }).then(jada => {
        jada.reactToPlayer().then(reaction => {
          SpecHelper.print(reaction.text);
          done();
        });
      });
    });

    it('when fearful', function(done) {
      SpecHelper.buildJada({ species:'scaven', lust:50, loyalty:50, fear:80 }).then(jada => {
        jada.reactToPlayer().then(reaction => {
          SpecHelper.print(reaction.text);
          done();
        });
      });
    });

    it('when angry', function(done) {
      SpecHelper.buildJada({ species:'scaven', lust:10, loyalty:10, fear:10 }).then(jada => {
        jada.reactToPlayer().then(reaction => {
          SpecHelper.print(reaction.text);
          done();
        });
      });
    });
  });

});
