describe('Flag', function() {

  before(function() {
    FlagInfo.build('flag.with-default',   { default:'Horsecocks' });
    FlagInfo.build('flag.must-be-number', { validateInteger:true });
    FlagInfo.build('flag.must-be-dicks',  { validateIn:['dicks'] });
  });

  after(function() {
    FlagInfo.remove('flag.with-default');
    FlagInfo.remove('flag.must-be-number');
    FlagInfo.remove('flag.must-be-dicks');
  })

  it('sets a raw flag', function() {
    Flag.set('anything','value');
    expect(Flag.lookup('anything')).to.equal('value');
  });

  it('can have a default value set', function() {
    expect(Flag.lookup('flag.with-default')).to.equal('Horsecocks');
  });

  it('sets a flag with an integer validator', function() {
    Flag.set('flag.must-be-number', 20);
    expect(Flag.lookup('flag.must-be-number')).to.equal(20);
  });

  it('sets a flag with an "in" validator', function() {
    Flag.set('flag.must-be-dicks', 'dicks');
    expect(Flag.lookup('flag.must-be-dicks')).to.equal('dicks');
  });

  it('sets multiple flags', function() {
    Flag.setAll({ flag1:'one', flag2:'two' });
    expect(Flag.lookup('flag1')).to.equal('one');
    expect(Flag.lookup('flag2')).to.equal('two');
  });

});
