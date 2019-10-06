describe('Adjustments - Cock', function() {

  it ('gives small cock', function(done) {
    CharacterBuilder.build({ species:'elf', gender:'male', triggers:['small-cock'] }).then(character => {
      character.getCock().then(cock => {
        expect(cock.convertedLength).to.equal(6);
        done();
      });
    });
  });

  it ('gives big cock', function(done) {
    CharacterBuilder.build({ species:'elf', gender:'male', triggers:['big-cock'] }).then(character => {
      character.getCock().then(cock => {
        expect(cock.convertedLength).to.equal(14);
        done();
      });
    });
  });

  it ('gives monster cock', function(done) {
    CharacterBuilder.build({ species:'elf', gender:'futa', triggers:['monster-cock'] }).then(character => {
      character.getCock().then(cock => {
        expect(cock.convertedLength).to.equal(20);
        done();
      });
    });
  });

  it ('gives big balls', function(done) {
    CharacterBuilder.build({ species:'elf', gender:'male', triggers:['big-balls'] }).then(character => {
      character.getCock().then(cock => {
        expect(cock.ballsSizeFactor).to.equal(1.5);
        done();
      });
    });
  });

  it ('gives monster balls', function(done) {
    CharacterBuilder.build({ species:'elf', gender:'male', triggers:['monster-balls'] }).then(character => {
      character.getCock().then(cock => {
        expect(cock.ballsSizeFactor).to.equal(2);
        done();
      });
    });
  });

  it ('gives horse cocks', function(done) {
    CharacterBuilder.build({ species:'elf', gender:'male', triggers:['horse-cock'] }).then(character => {
      character.getCock().then(cock => {
        expect(cock.shape).to.equal('horse');
        expect(cock.convertedLength).to.be.within(12,16);
        done();
      });
    });
  });

  it ('inflates horse cocks', function(done) {
    CharacterBuilder.build({ species:'equian', gender:'male', cock:{ sizeClass:'huge', sizeScale:50 }, triggers:['horse-cock'] }).then(character => {
      character.getCock().then(cock => {
        expect(cock.shape).to.equal('horse');
        expect(cock.sizeScale).to.equal(75);
        expect(cock.convertedLength).to.equal(17.5);
        done();
      });
    });
  });

  it ('gives dog cocks', function(done) {
    CharacterBuilder.build({ species:'elf', gender:'male', triggers:['dog-cock'] }).then(character => {
      character.getCock().then(cock => {
        expect(cock.shape).to.equal('dog');
        expect(cock.knotWidthRatio).to.be.within(1.3,2);
        done();
      });
    });
  });

  it ('inflates dog cocks', function(done) {
    CharacterBuilder.build({ species:'lupin', gender:'male', cock:{ sizeClass:'huge', sizeScale:50, knotWidthRatio:2 }, triggers:['dog-cock'] }).then(character => {
      character.getCock().then(cock => {
        expect(cock.shape).to.equal('dog');
        expect(cock.sizeScale).to.equal(60);
        expect(cock.knotWidthRatio).to.be.within(2,2.2);
        done();
      });
    });
  });


  it ('gives multiple cocks', function(done) {
    CharacterBuilder.build({ species:'elf', gender:'male', triggers:['multi-cock'] }).then(character => {
      character.getCock().then(cock => {
        expect(cock.count).to.equal(2);
        done();
      });
    });
  });

  it ('gives a cock tonugue', function(done) {
    CharacterBuilder.build({ species:'elf', gender:'male', triggers:['cock-tongue'] }).then(character => {
      character.getMouth().then(mouth => {
        expect(mouth.tongueShape).to.equal('cock');
        done();
      });
    });
  });

});
