describe('Flag', function() {

  it('sets a raw flag', function() {
    Flag.set('anything','value');
    expect(Flag.lookup('anything')).to.equal('value');
  });

  it('can have a default value set', function() {
    expect(Flag.lookup('location.keep-name')).to.equal('Faingorn Keep');
  });

  it('sets a flag with an integer validator', function() {
    Flag.set('character.scaven-chief', 20);
    expect(Flag.lookup('character.scaven-chief')).to.equal(20);
  });

  it('sets a flag with an "in" validator', function() {
    Flag.set('location-menu.inventory', 'unlocked');
    expect(Flag.lookup('location-menu.inventory')).to.equal('unlocked');
  });

  it('sets multiple flags', function() {
    Flag.setAll({ flag1:'one', flag2:'two' });
    expect(Flag.lookup('flag1')).to.equal('one');
    expect(Flag.lookup('flag2')).to.equal('two');
  });

  describe("gender preferences", function() {

    function setFlags() {
      Flag.setAll({
        'player.fucks-men':'never',
        'player.fucks-futas':'maybe',
        'player.fucks-women':'always',
      });
    }

    it('gets the "always fuck" gender list', function() {
      setFlags();
      expect(Flag.alwaysFuckGenderList()).to.eql(['female']);
    });

    it('gets the "maybe fuck" gender list', function() {
      setFlags();
      expect(Flag.maybeFuckGenderList()).to.eql(['futa']);
    });

    it('gets the gender preference scores', function() {
      setFlags();
      let compiled = Flag.genderPreferenceScores();
      expect(compiled.male).to.equal(0);
      expect(compiled.futa).to.equal(1);
      expect(compiled.female).to.equal(2);
    });
  });

});
