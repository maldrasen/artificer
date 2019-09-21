describe('Anus', function() {

  it('can be persisted in the database', function(done) {
    Anus.create({
      shape: 'horse',
      elasticity: 1,
      width: 5,
      prolapseLength: 0
    }).then(anus => {
      expect(anus.shape).to.equal('horse');
      expect(anus.elasticity).to.equal(1);
      expect(anus.width).to.equal(5);
      expect(anus.prolapseLength).to.equal(0);
      done();
    });
  });

  describe('Basic Attributes', function() {
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

});
