describe('Flag Loom', function() {

  it('gets flag values', function() {
    Flag.set('cock.type','horse');
    expect(Weaver.weave("Suck that {{flag|cock.type}} cock!")).to.equal('Suck that horse cock!')
  });

});
