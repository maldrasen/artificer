describe('Anus', function() {
  it('calculates width and area', function(done) {
    Anus.create({ width:30 }).then(anus => {
      expect(anus.width).to.equal(30);
      expect(anus.convertedWidth).to.equal(1.25);
      expect(anus.area).to.equal(707);
      done();
    });
  });

  it('converts prolapse units', function(done) {
    Anus.create({ prolapseLength:100 }).then(anus => {
      expect(anus.prolapseLength).to.equal(100);
      expect(anus.convertedProlapseLength).to.equal(4);
      done();
    });
  });
});
