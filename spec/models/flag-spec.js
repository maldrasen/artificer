describe('Flag', function() {

  const scores = {
    'player.fucks-men':'never',
    'player.fucks-futas':'maybe',
    'player.fucks-women':'always',
  };

  it('sets a raw flag', function(done) {
    Flag.set('anything','value').then(() => {
      Flag.lookup('anything').then(flag => {
        expect(flag.value).to.equal('value');
        done();
      });
    });
  });

  it('sets a flag with info', function(done) {
    Flag.set('location-menu.inventory','unlocked').then(() => {
      Flag.equals('location-menu.inventory','unlocked').then(result => {
        expect(result).to.be.true;
        done();
      });
    });
  });

  it('sets a flag with an integer value', function(done) {
    Flag.set('character.scaven-chief',20).then(() => {
      Flag.lookup('character.scaven-chief').then(flag => {
        expect(flag.value).to.equal('20');
        done();
      });
    });
  });

  it('sets multiple flags', function(done) {
    Flag.setAll({ flag1:'one', flag2:'two' }).then(() => {
      Flag.getAll().then(flags => {
        expect(flags.flag1).to.equal('one');
        expect(flags.flag2).to.equal('two');
        done();
      });
    });
  });

  it('gets the "always fuck" gender list', function(done) {
    Flag.setAll(scores).then(() => {
      Flag.alwaysFuckGenderList().then(list => {
        expect(list).to.eql(['female'])
        done();
      });
    });
  });

  // There's a timing issue here. Setting the same flag too rapidly sometimes
  // causes the flag to be set then deleted. Getting all the flags first seems
  // to clear up this issue though.

  it('gets the "maybe fuck" gender list', function(done) {
    Flag.getAll().then(all => {
      Flag.setAll(scores).then(() => {
        Flag.maybeFuckGenderList().then(list => {
          expect(list).to.eql(['futa'])
          done();
        });
      });
    });
  });

  it('gets the gender preference scores', function(done) {
    Flag.getAll().then(all => {
      Flag.setAll(scores).then(() => {
        Flag.genderPreferenceScores().then(s => {
          expect(s.male).to.equal(0);
          expect(s.futa).to.equal(1);
          expect(s.female).to.equal(2);
          done();
        });
      });
    });
  });

  it('can have a default value set', function(done) {
    Flag.lookup('location.keep-name').then(flag => {
      expect(flag.value).to.equal('Faingorn Keep');
      done();
    });
  });

});
