describe('CentralScrutinizer', function() {

  it('Checks day number', function(done) {
    Game.start().then(game => {
      game.update({ dayNumber: 69 }).then(() => {
        CentralScrutinizer.meetsRequirements('game.dayNumber=17').then(past => {
          CentralScrutinizer.meetsRequirements('game.dayNumber=69').then(today => {
            CentralScrutinizer.meetsRequirements('game.dayNumber=131').then(future => {
              expect(past).to.be.true;
              expect(today).to.be.true;
              expect(future).to.be.false;
              done();
            });
          });
        });
      });
    });
  });

  it('Checks flag values', function(done) {
    Flag.create({ code:'anus.flavor', value:'grape' }).then(()=>{
      CentralScrutinizer.meetsRequirements('flag.anus.flavor=grape').then(yep => {
        CentralScrutinizer.meetsRequirements('flag.anus.flavor=lemon').then(nope => {
          expect(yep).to.be.true;
          expect(nope).to.be.false;
          done();
        });
      });
    });
  });

  it('Checks flag presence', function(done) {
    Flag.create({ code:'anus.flavor', value:'grape' }).then(()=>{
      CentralScrutinizer.meetsRequirements('flag.anus.flavor').then(yep => {
        CentralScrutinizer.meetsRequirements('flag.pussy.flavor').then(nope => {
          expect(yep).to.be.true;
          expect(nope).to.be.false;
          done();
        });
      });
    });
  });

});
