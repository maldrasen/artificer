describe('Measurement Loom', function() {

  it('gets american inches', function() {
    expect(Weaver.weave("Her clit was {{inches|4}} long")).to.equal('Her clit was four inches long')
  });

  it('gets metric centimeters', function() {
    Settings.set({ metric:true });
    expect(Weaver.weave("Her nipple are each {{inches|4}} long")).to.equal('Her nipple are each ten centimeters long')
  });

  it('gets three american feet', function() {
    expect(Weaver.weave("A {{foot|3}} long horsecock")).to.equal('A three foot long horsecock')
  });

  it('gets a metric meter', function() {
    Settings.set({ metric:true });
    expect(Weaver.weave("A {{foot|3}} long horsecock")).to.equal('A meter long horsecock')
  });

});
