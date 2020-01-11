describe.only('Flag', function() {

  it('sets a raw flag', function(done) {
    Flag.set('anything','value').then(() => {
      Flag.lookup('anything').then(flag => {
        expect(flag.value).to.equal('value');
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

  it('gets the "maybe fuck" gender list')
  it('gets the gender score list')

});
