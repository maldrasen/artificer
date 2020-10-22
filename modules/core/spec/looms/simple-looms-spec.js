describe('Simple Loom', function() {

  it('gets a word for a demon', function() {
    expect(Weaver.weave("{{maleDemon}}").indexOf('error')).to.equal(-1)
  });

  it('swaps between metric and american', function() {
    expect(Weaver.weave("Three {{meters}}")).to.equal('Three yards')
  });

});
