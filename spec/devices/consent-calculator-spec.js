describe.only('ConsentCalculator', function() {

  async function buildCalculatorWith(options, aspects, playerGender) {
    const game = await Game.start();
    const jada = await SpecHelper.buildJada(options);

    await game.createPlayer({
      title: "Master",
      firstName: "Testes",
      lastName: "Baggywrinkle",
      gender: playerGender,
      species: "caprien",
    });

    await Promise.all(Object.keys(aspects).map(async code => {
      return jada.addAspect(code, { level:aspects[code] });
    }));

    let calc = new ConsentCalculator(jada);
    await calc.init();

    return calc;
  }

  it('calculates the baseline consent for an average action', function(done) {
    buildCalculatorWith({ fear:10, loyalty:30, lust:50 },{},'male').then(calc => {
      expect(calc.getConsentLevel(SummonAction.lookup('face-sitting'))).to.equal('reluctant')
      done();
    });
  });

  describe('calculateGenderFactor()', function() {
    it('takes positive gender preferences into account', function(done) {
      buildCalculatorWith({},{'androphilic':2},'male').then(calc => {
        expect(calc.calculateGenderFactor()).to.equal(1.2);
        done();
      });
    });

    it('takes negative gender preferences into account', function(done) {
      buildCalculatorWith({},{'androphobic':1},'male').then(calc => {
        expect(calc.calculateGenderFactor()).to.equal(0.5);
        done();
      });
    });

    it('takes all preferences into account for futa characters', function(done) {
      buildCalculatorWith({},{'gynephobic':1,'androphilic':2},'futa').then(calc => {
        expect(calc.calculateGenderFactor()).to.equal(0.6);
        done();
      });
    });

    it('takes all preferences into account for futa characters', function(done) {
      buildCalculatorWith({},{'gynephilic':2,'androphilic':2},'futa').then(calc => {
        expect(calc.calculateGenderFactor()).to.equal(1.44);
        done();
      });
    });

  });

});
