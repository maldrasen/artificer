describe('Resolver: Lust', function() {

  it('adds an average amount of lust by default', function(done) {
    SpecHelper.buildJada({ lust:0 }).then(jada => {
      Resolver.Lust.applyLust(jada).then(() => {
        expect(jada.lust).to.be.within(8,12);
        done();
      });
    });
  });

  it('adds more lust with slut 1', function(done) {
    SpecHelper.buildJada({ lust:0 }).then(jada => {
      jada.addAspect('slut',{ level:1 }).then(() => {
        Resolver.Lust.applyLust(jada).then(() => {
          expect(jada.lust).to.be.within(10,16);
          done();
        });
      });
    });
  });

  it('adds even more lust with slut 2', function(done) {
    SpecHelper.buildJada({ lust:0 }).then(jada => {
      jada.addAspect('slut',{ level:2 }).then(() => {
        Resolver.Lust.applyLust(jada).then(() => {
          expect(jada.lust).to.be.within(15,23);
          done();
        });
      });
    });
  });

  it('adds way more lust with slut 3', function(done) {
    SpecHelper.buildJada({ lust:0 }).then(jada => {
      jada.addAspect('slut',{ level:3 }).then(() => {
        Resolver.Lust.applyLust(jada).then(() => {
          expect(jada.lust).to.be.within(20,30);
          done();
        });
      });
    });
  });

  it('adds a little lust with chaste 1', function(done) {
    SpecHelper.buildJada({ lust:0 }).then(jada => {
      jada.addAspect('chaste',{ level:1 }).then(() => {
        Resolver.Lust.applyLust(jada).then(() => {
          expect(jada.lust).to.be.within(4,8);
          done();
        });
      });
    });
  });

  it('adds a tiny amount of lust with chaste 2', function(done) {
    SpecHelper.buildJada({ lust:0 }).then(jada => {
      jada.addAspect('chaste',{ level:2 }).then(() => {
        Resolver.Lust.applyLust(jada).then(() => {
          expect(jada.lust).to.be.within(0,4);
          done();
        });
      });
    });
  });

  it('adds no lust with chaste 3', function(done) {
    SpecHelper.buildJada({ lust:0 }).then(jada => {
      jada.addAspect('chaste',{ level:3 }).then(() => {
        Resolver.Lust.applyLust(jada).then(() => {
          expect(jada.lust).to.equal(0);
          done();
        });
      });
    });
  });

  async function beatJadaUp(injuries) {
    const jada = await SpecHelper.buildJada({ gender:'female', lust:50, tits:{ sizeClass:'huge' }});
    await jada.addAspect('slut',{ level:3 });

    const tits = await jada.getTits();
    const body = await jada.getBody();

    if (injuries == 1) { await tits.update({ smashCount:2, smashLevel:2 }); } // injured
    if (injuries == 2) { await tits.update({ smashCount:3, smashLevel:5 }); } // bad
    if (injuries == 3) { await body.update({ smashCount:3, smashLevel:3 }); } // horrible
    if (injuries == 4) { await body.update({ smashCount:5, smashLevel:5 }); } // critical

    return jada;
  }

  it('reduces lust gain when injured', function(done) {
    beatJadaUp(1).then(jada => {
      Resolver.Lust.applyLust(jada).then(() => {
        expect(jada.lust).to.be.within(60,70);
        done();
      });
    });
  });

  it('reduces lust when badly injured', function(done) {
    beatJadaUp(2).then(jada => {
      Resolver.Lust.applyLust(jada).then(() => {
        expect(jada.lust).to.be.within(45,50);
        done();
      });
    });
  });

  it('greatly reduces lust when horribly injured', function(done) {
    beatJadaUp(3).then(jada => {
      Resolver.Lust.applyLust(jada).then(() => {
        expect(jada.lust).to.be.within(20,40);
        done();
      });
    });
  });

  it('zeros out lust when critically injured', function(done) {
    beatJadaUp(4).then(jada => {
      Resolver.Lust.applyLust(jada).then(() => {
        expect(jada.lust).to.equal(0);
        done();
      });
    });
  });

});
