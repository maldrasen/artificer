describe('Adjustments - Tits', function() {

  it ('gives zero tits', function(done) {
    SpecHelper.buildJada({},['zero-tits']).then(character => {
      character.getTits().then(tits => {
        expect(tits.sizeClass).to.equal('zero');
        expect(tits.size).to.equal(0);
        expect(tits.shape).to.equal('flat');
        done();
      });
    });
  });

  it ('gives small tits', function(done) {
    SpecHelper.buildJada({},['small-tits']).then(character => {
      character.getTits().then(tits => {
        expect(tits.sizeClass).to.equal('tiny');
        expect(tits.size).to.within(0,10);
        expect(tits.shape).to.equal('flat');
        done();
      });
    });
  });

  it ('gives big tits', function(done) {
    SpecHelper.buildJada({},['big-tits']).then(character => {
      character.getTits().then(tits => {
        expect(tits.sizeClass).to.equal('huge');
        expect(tits.size).to.be.within(700,900);
        expect(tits.shape).to.be.oneOf(['round','dangling','bell']);
        done();
      });
    });
  });

  it ('gives monster tits', function(done) {
    SpecHelper.buildJada({},['monster-tits']).then(character => {
      character.getTits().then(tits => {
        expect(tits.sizeClass).to.equal('monster');
        expect(tits.size).to.be.within(1200,1800);
        expect(tits.shape).to.be.oneOf(['round','dangling','bell']);
        done();
      });
    });
  });

});
