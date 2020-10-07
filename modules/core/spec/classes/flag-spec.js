describe('Flag', function() {

  before(function() {
    FlagInfo.buildTemp('flag.with-default', { default:'Horsecocks' });
  });

  after(function() {
    FlagInfo.purgeTemp();
  });

  it('sets a raw flag', function() {
    Flag.set('anything','value');
    expect(Flag.lookup('anything')).to.equal('value');
  });

  it('can have a default value set', function() {
    expect(Flag.lookup('flag.with-default')).to.equal('Horsecocks');
  });

  it('gets and sets multiple flags', function() {
    Flag.setAll({ flag2:'two', flag1:'one' });
    expect(Flag.getAll()).to.eql({ flag1:'one', flag2:'two' });
  });

});
