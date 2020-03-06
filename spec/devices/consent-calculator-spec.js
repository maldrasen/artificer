describe.only('ConsentCalculator', function() {

  async function buildCalculatorWith(buildOptions, otherOptions) {
    const game = await Game.start();
    const jada = await SpecHelper.buildJada(buildOptions);

    await game.createPlayer({
      title: "Master",
      firstName: "Gary",
      lastName: "Gangbang",
      gender: (otherOptions.playerGender || 'male'),
      species: "elf",
    });

    await Promise.all(Object.keys(otherOptions.aspects||[]).map(async code => {
      return jada.addAspect(code, { level:otherOptions.aspects[code] });
    }));

    if (otherOptions.injure == 'pussy.1') { await Abuser.PussyAbuser.addInjury(jada, { type:'burn', level:1 }); }
    if (otherOptions.injure == 'pussy.3') { await Abuser.PussyAbuser.addInjury(jada, { type:'burn', level:3 }); }

    let calc = new ConsentCalculator(jada);
    await calc.init();
    return calc;
  }

  it('calculates the baseline consent for an average action', function(done) {
    buildCalculatorWith({ fear:10, loyalty:30, lust:50 },{}).then(calc => {
      calc.getConsentLevel(SummonAction.lookup('face-sitting')).then(level => {
        expect(level).to.equal('reluctant')
        done();
      })
    });
  });

  describe('calculateGenderFactor()', function() {
    it('takes positive gender preferences into account', function(done) {
      buildCalculatorWith({},{ playerGender:'male', aspects:{ 'androphilic':2 }}).then(calc => {
        expect(calc.calculateGenderFactor()).to.equal(1.2);
        done();
      });
    });

    it('takes negative gender preferences into account', function(done) {
      buildCalculatorWith({},{ playerGender:'male', aspects:{'androphobic':1}}).then(calc => {
        expect(calc.calculateGenderFactor()).to.equal(0.5);
        done();
      });
    });

    it('takes all preferences into account for futa characters', function(done) {
      buildCalculatorWith({},{ playerGender:'futa', aspects:{'gynephobic':1,'androphilic':2}}).then(calc => {
        expect(calc.calculateGenderFactor()).to.equal(0.6);
        done();
      });
    });

    it('takes all preferences into account for futa characters', function(done) {
      buildCalculatorWith({},{ playerGender:'futa', aspects:{'gynephilic':2,'androphilic':2}}).then(calc => {
        expect(calc.calculateGenderFactor()).to.equal(1.44);
        done();
      });
    });
  });

  describe('calculateInjuryFactor()', function() {
    it('reduces consent when injured', function(done) {
      buildCalculatorWith({},{ injure:'pussy.1' }).then(calc => {
        calc.calculateInjuryFactor(SummonAction.lookup('eat-pussy')).then(factor => {
          expect(factor).to.equal(0.9);
          done();
        });
      });
    });

    it('ignores injury when a masochist', function(done) {
      buildCalculatorWith({},{ injure:'pussy.3', aspects:{ masochist:2 }}).then(calc => {
        calc.calculateInjuryFactor(SummonAction.lookup('eat-pussy')).then(factor => {
          expect(factor).to.equal(1);
          done();
        });
      });
    });

    it('increases consent when character is a huge masochist', function(done) {
      buildCalculatorWith({},{ injure:'pussy.3', aspects:{ masochist:3 }}).then(calc => {
        calc.calculateInjuryFactor(SummonAction.lookup('eat-pussy')).then(factor => {
          expect(factor).to.equal(1.2);
          done();
        });
      });
    });
  });

});
