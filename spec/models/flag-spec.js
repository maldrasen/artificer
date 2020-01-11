describe('Flag', function() {

  const scores = {
    'player.fucksMen':'never',
    'player.fucksFutas':'maybe',
    'player.fucksWomen':'always',
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
    Flag.set('locationMenu.inventory','unlocked').then(() => {
      Flag.equals('locationMenu.inventory','unlocked').then(result => {
        expect(result).to.be.true;
        done();
      });
    });
  });

  it('sets a flag with an integer value', function(done) {
    Flag.set('character.scavenChief',20).then(() => {
      Flag.lookup('character.scavenChief').then(flag => {
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

  it('gets the "maybe fuck" gender list', function(done) {
    Flag.setAll(scores).then(() => {
      Flag.maybeFuckGenderList().then(list => {
        expect(list).to.eql(['futa'])
        done();
      });
    });
  });

  it('gets the gender preference scores', function(done) {
    Flag.setAll(scores).then(() => {
      Flag.genderPreferenceScores().then(s => {
        expect(s.male).to.equal(0);
        expect(s.futa).to.equal(1);
        expect(s.female).to.equal(2);
        done();
      });
    });
  });

  it('can have a default value set', function(done) {
    Flag.lookup('location.keepName').then(flag => {
      expect(flag.value).to.equal('Faingorn Keep');
      done();
    });
  });

});
