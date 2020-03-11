describe('Personality', function() {

  it("Selects a scaven personality", function(done) {
    SpecHelper.buildJada({ species:'scaven' }).then(jada => {
      jada.getPersonality().then(personality => {
        expect(personality.code).to.equal('scaven-default');
        done();
      });
    });
  });

});
