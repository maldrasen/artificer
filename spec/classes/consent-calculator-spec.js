describe('ConsentCalculator', function() {

  async function buildCalculatorWith(options = {}) {
    const player = await SpecHelper.buildPlayer(options.player);
    const jada = await SpecHelper.buildJada(options.minion);

    await Promise.all(Object.keys(options.aspects||{}).map(async code => {
      return jada.addAspect(code, { level:options.aspects[code] });
    }));

    if (options.injure == 'head.2')  { await Abuser.addHeadInjury(jada, { type:'smash', level:2 }); }
    if (options.injure == 'pussy.1') { await Abuser.addPussyInjury(jada, { type:'burn', level:1 }); }
    if (options.injure == 'pussy.3') { await Abuser.addPussyInjury(jada, { type:'burn', level:3 }); }

    const context = new Context();
    await context.addPlayer();
    await context.addCharacter('C',jada);

    // We need to cache the aspects by hand here because we're calling some of
    // the caculate outside of the main calculate function. This shouldn't
    // normally need to be done when getting the full details.
    const calculator = new ConsentCalculator(context);
    await calculator.cacheAspects();
    return calculator;
  }

  function averageAction() {
    return new SexAction({ difficulty:3 });
  }

  function cockAction() {
    return new SexAction({
      difficulty: 2,
      effects: 'head',
      complementing: ['cock-lover','masochist','submissive'],
      conflicting: ['dominant'],
    });
  }

  function pussyAction() {
    return new SexAction({
      difficulty: 0,
      effects: 'pussy',
      complementing: ['oral-lover','pussy-slut'],
    });
  }

  it('calculates the baseline consent for an average action', function(done) {
    buildCalculatorWith({ minion:{ fear:10, loyalty:30, lust:50 }}).then(calc => {
      calc.getConsentDetails(averageAction()).then(detail => {
        expect(detail.level).to.equal('reluctant');
        done();
      });
    });
  });

  it('combines everything into one consent detail object', function(done) {

    let settings = {
      minion:{ fear:10, loyalty:40, lust:40 },
      aspects:{ androphilic:2, masochist:3, submissive:2 },
      injure:'head.2',
    };

    buildCalculatorWith(settings).then(calc => {
      calc.getConsentDetails(cockAction()).then(detail => {
        expect(detail.genderFactor).to.equal(1.2);
        expect(detail.injuryFactor).to.equal(1.1);
        expect(detail.aspectFactor).to.equal(1.56);
        expect(detail.overallFactor).to.equal(2.27);
        expect(detail.level).to.equal('enthusiastic');
        done();
      });
    });
  });

  describe('calculateGenderFactor()', function() {
    it('takes positive gender preferences into account', function(done) {
      buildCalculatorWith({ player:{ gender:'male' }, aspects:{ 'androphilic':2 }}).then(calc => {
        expect(calc.calculateGenderFactor()).to.equal(1.2);
        done();
      });
    });

    it('takes negative gender preferences into account', function(done) {
      buildCalculatorWith({ player:{ gender:'male' }, aspects:{'androphobic':1}}).then(calc => {
        expect(calc.calculateGenderFactor()).to.equal(0.5);
        done();
      });
    });

    it('takes all preferences into account for futa characters', function(done) {
      buildCalculatorWith({ player:{ gender:'futa' }, aspects:{'gynephobic':1,'androphilic':2}}).then(calc => {
        expect(calc.calculateGenderFactor()).to.equal(0.6);
        done();
      });
    });

    it('takes all preferences into account for futa characters', function(done) {
      buildCalculatorWith({ player:{ gender:'futa' }, aspects:{'gynephilic':2,'androphilic':2}}).then(calc => {
        expect(calc.calculateGenderFactor()).to.equal(1.44);
        done();
      });
    });
  });

  describe('calculateInjuryFactor()', function() {
    it('reduces consent when injured', function(done) {
      buildCalculatorWith({ injure:'pussy.1' }).then(calc => {
        calc.calculateInjuryFactor(pussyAction()).then(factor => {
          expect(factor).to.equal(0.9);
          done();
        });
      });
    });

    it('ignores injury when a masochist', function(done) {
      buildCalculatorWith({ injure:'pussy.3', aspects:{ masochist:2 }}).then(calc => {
        calc.calculateInjuryFactor(pussyAction()).then(factor => {
          expect(factor).to.equal(1);
          done();
        });
      });
    });

    it('increases consent when character is a huge masochist', function(done) {
      buildCalculatorWith({ injure:'pussy.3', aspects:{ masochist:3 }}).then(calc => {
        calc.calculateInjuryFactor(pussyAction()).then(factor => {
          expect(factor).to.equal(1.2);
          done();
        });
      });
    });
  });

  describe('calculateAspectFactor()', function(done) {
    it('increases consent with complementing aspects', function(done) {
      buildCalculatorWith({ aspects:{ 'pussy-slut':2 }}).then(calc => {
        expect(calc.calculateAspectFactor(pussyAction())).to.equal(1.2);
        done();
      });
    });

    it('greatly increases consent with multiple complementing aspects', function(done) {
      buildCalculatorWith({ aspects:{ 'oral-lover':1, 'pussy-slut':2 }}).then(calc => {
        expect(calc.calculateAspectFactor(pussyAction())).to.equal(1.32);
        done();
      });
    });

    it('reduces consent with conflicting aspects', function(done) {
      buildCalculatorWith({ aspects:{ 'dominant':1 }}).then(calc => {
        expect(calc.calculateAspectFactor(cockAction())).to.equal(0.9);
        done();
      });
    });
  });

});
