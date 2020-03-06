describe.only('ConsentCalculator', function() {

  it('calculates the baseline consent for an average action', function(done) {
    SpecHelper.buildJada({ fear:10, loyalty:30, lust:50 }).then(jada => {
      let calc = new ConsentCalculator(jada);
      let action = SummonAction.lookup('face-sitting');

      calc.init().then(() => {
        expect(calc.getConsentLevel(action)).to.equal('reluctant')
        done();
      });
    });
  });

});
