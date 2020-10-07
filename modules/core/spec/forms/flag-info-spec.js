describe("FlagInfo", function() {

  before(function() {
    FlagInfo.buildTemp('flag.must-be-dicks',  { validateIn:['dicks'] });
    FlagInfo.buildTemp('flag.must-be-number', { validateInteger:true });
  });

  after(function() {
    FlagInfo.purgeTemp();
  });

  it('checks for invalid values', function() {
    expect(function() {
      Flag.set('flag.must-be-dicks', 'tits');
    }).to.throw();
  });

  it('checks for invalid values', function() {
    Flag.set('flag.must-be-dicks', 'dicks');
    expect(Flag.lookup('flag.must-be-dicks')).to.equal('dicks');
  });

  it('checks for invalid numbers', function() {
    expect(function() {
      Flag.set('flag.must-be-number', 'dicks');
    }).to.throw();
  });

  it('checks for valid numbers', function() {
    Flag.set('flag.must-be-number', 20);
    expect(Flag.lookup('flag.must-be-number')).to.equal(20);
  });

});
