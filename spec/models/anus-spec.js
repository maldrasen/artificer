describe('Anus', function() {
  let anus, character;

  it('can be persisted in the database', function(done) {
    Database.createDatabase(() => {

      anus = new Anus({
        shape: 'horse',
        elasticity: 1,
        width: 5,
        prolapseLength: 0 });

      anus.save((id) => {
        Anus.load(id, (anus) => {
          expect(anus.shape).to.equal('horse');
          expect(anus.elasticity).to.equal(1);
          expect(anus.width).to.equal(5);
          expect(anus.prolapseLength).to.equal(0);
          done();
        });
      });
    });
  });

  describe('Basic Attributes', function() {
    let anus;

    beforeEach(function() {
      anus = new Anus({ shape:'normal' });
    });

    it('set the shape', function() {
      anus.setShape('mouth');
      expect(anus.shape).to.equal('mouth');
    });

    it('set the elasticity', function() {
      anus.setElasticity(10);
      expect(anus.elasticity).to.equal(10);
    });

    it('calculates width and area', function() {
      anus.setWidth(30);
      expect(anus.width).to.equal(30);
      expect(anus.convertedWidth).to.equal(1.25);
      expect(anus.area).to.equal(707);
    });

    it('converts prolapse units', function() {
      anus.setProlapseLength(100);
      expect(anus.prolapseLength).to.equal(100);
      expect(anus.convertedProlapseLength).to.equal(4);
    });
  });

});
