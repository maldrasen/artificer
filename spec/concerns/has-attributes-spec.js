describe.only('HasAttributes', function() {

  it('adjusts fear', function(done) {
    SpecHelper.buildJada().then(jada => {
      jada.fear = 10;
      jada.adjustFear(1);      expect(jada.fear).to.equal(13);
      jada.adjustFear(2);      expect(jada.fear).to.equal(19);
      jada.adjustFear(3);      expect(jada.fear).to.equal(25);
      jada.adjustFear(-1);     expect(jada.fear).to.equal(24);
      jada.adjustFear(-2);     expect(jada.fear).to.equal(21);
      jada.adjustFear(-3);     expect(jada.fear).to.equal(17);

      jada.fear = 60;
      jada.adjustFear(1);      expect(jada.fear).to.equal(61);
      jada.adjustFear(2);      expect(jada.fear).to.equal(64);
      jada.adjustFear(3);      expect(jada.fear).to.equal(69);
      jada.adjustFear(-1);     expect(jada.fear).to.equal(68);
      jada.adjustFear(-2);     expect(jada.fear).to.equal(65);
      jada.adjustFear(-3);     expect(jada.fear).to.equal(60);

      jada.fear = 80
      jada.adjustFear(1);      expect(jada.fear).to.equal(81);
      jada.adjustFear(2);      expect(jada.fear).to.equal(83);
      jada.adjustFear(3);      expect(jada.fear).to.equal(86);
      jada.adjustFear(-1);     expect(jada.fear).to.equal(83);
      jada.adjustFear(-2);     expect(jada.fear).to.equal(77);
      jada.adjustFear(-3);     expect(jada.fear).to.equal(72);

      done();
    });
  })

  it('adjusts loyalty', function(done) {
    SpecHelper.buildJada().then(jada => {
      jada.loyalty = 18;
      jada.adjustLoyaly(1);      expect(jada.loyalty).to.equal(20);
      jada.adjustLoyaly(2);      expect(jada.loyalty).to.equal(24);
      jada.adjustLoyaly(3);      expect(jada.loyalty).to.equal(29);
      jada.adjustLoyaly(-1);     expect(jada.loyalty).to.equal(28);
      jada.adjustLoyaly(-2);     expect(jada.loyalty).to.equal(25);
      jada.adjustLoyaly(-3);     expect(jada.loyalty).to.equal(20);

      jada.loyalty = 76;
      jada.adjustLoyaly(1);      expect(jada.loyalty).to.equal(77);
      jada.adjustLoyaly(2);      expect(jada.loyalty).to.equal(80);
      jada.adjustLoyaly(3);      expect(jada.loyalty).to.equal(84);
      jada.adjustLoyaly(-1);     expect(jada.loyalty).to.equal(81);
      jada.adjustLoyaly(-2);     expect(jada.loyalty).to.equal(77);
      jada.adjustLoyaly(-3);     expect(jada.loyalty).to.equal(72);

      jada.loyalty = 90
      jada.adjustLoyaly(1);      expect(jada.loyalty).to.equal(91);
      jada.adjustLoyaly(2);      expect(jada.loyalty).to.equal(93);
      jada.adjustLoyaly(3);      expect(jada.loyalty).to.equal(96);
      jada.adjustLoyaly(-1);     expect(jada.loyalty).to.equal(93);
      jada.adjustLoyaly(-2);     expect(jada.loyalty).to.equal(87);
      jada.adjustLoyaly(-3);     expect(jada.loyalty).to.equal(78);
      done();
    });
  });

});
