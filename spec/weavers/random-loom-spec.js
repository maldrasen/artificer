describe.only('Random Loom', function() {
  let context = new WeaverContext();

  it('gets a random digit', function() {
    expect(Weaver.weave("{{random|9-12}} inch cock", context).indexOf('error')).to.equal(-1)
  });

  it('gets a random number in English', function() {
    expect(Weaver.weave("{{randomEng|9-12}} inch cock", context).indexOf('error')).to.equal(-1)
  });

  it('gets a random number in English, uppercased', function() {
    expect(Weaver.weave("{{RandomEng|9-12}} inch cock", context).indexOf('error')).to.equal(-1)
  });
});
