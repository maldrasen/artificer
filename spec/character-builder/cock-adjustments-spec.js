describe('Adjustments - Cock', function() {

  it('gives small cock', function(done) {
    SpecHelper.buildJada({},['small-cock']).then(character => {
      character.getCock().then(cock => {
        expect(cock.convertedLength).to.be.within(5,7);
        done();
      });
    });
  });

  it('gives big cock', function(done) {
    SpecHelper.buildJada({},['big-cock']).then(character => {
      character.getCock().then(cock => {
        expect(cock.convertedLength).to.be.within(13,15);
        done();
      });
    });
  });

  it('gives monster cock', function(done) {
    SpecHelper.buildJada({},['monster-cock']).then(character => {
      character.getCock().then(cock => {
        expect(cock.convertedLength).to.be.within(18,22);
        done();
      });
    });
  });

  it('gives big balls', function(done) {
    SpecHelper.buildJada({},['big-balls']).then(character => {
      character.getCock().then(cock => {
        expect(cock.ballsSizeFactor).to.equal(1.5);
        done();
      });
    });
  });

  it('gives monster balls', function(done) {
    SpecHelper.buildJada({},['monster-balls']).then(character => {
      character.getCock().then(cock => {
        expect(cock.ballsSizeFactor).to.equal(2);
        done();
      });
    });
  });

  it('gives horse cocks', function(done) {
    SpecHelper.buildJada({},['horse-cock']).then(character => {
      character.getCock().then(cock => {
        expect(cock.shape).to.equal('horse');
        expect(cock.convertedLength).to.be.within(12,16);
        done();
      });
    });
  });

  it('inflates horse cocks', function(done) {
    SpecHelper.buildJada({ species:'equian', cock:{ sizeClass:'huge', sizeScale:50 }},['horse-cock']).then(character => {
      character.getCock().then(cock => {
        expect(cock.shape).to.equal('horse');
        expect(cock.sizeScale).to.equal(75);
        expect(cock.convertedLength).to.equal(17.25);
        done();
      });
    });
  });

  it('gives dog cocks', function(done) {
    SpecHelper.buildJada({},['dog-cock']).then(character => {
      character.getCock().then(cock => {
        expect(cock.shape).to.equal('dog');
        expect(cock.knotWidthRatio).to.be.within(1.3,2);
        done();
      });
    });
  });

  it('inflates dog cocks', function(done) {
    SpecHelper.buildJada({ species:'lupin', cock:{ sizeClass:'huge', sizeScale:50, knotWidthRatio:2 }},['dog-cock']).then(character => {
      character.getCock().then(cock => {
        expect(cock.shape).to.equal('dog');
        expect(cock.sizeScale).to.equal(60);
        expect(cock.knotWidthRatio).to.be.within(2,2.2);
        done();
      });
    });
  });

  it('gives multiple cocks', function(done) {
    SpecHelper.buildJada({},['multi-cock']).then(character => {
      character.getCock().then(cock => {
        expect(cock.count).to.equal(2);
        done();
      });
    });
  });

  it('gives a cock tonugue', function(done) {
    SpecHelper.buildJada({},['cock-tongue']).then(character => {
      character.getMouth().then(mouth => {
        expect(mouth.tongueShape).to.equal('cock');
        done();
      });
    });
  });

});
