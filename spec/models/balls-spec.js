describe('Balls', function() {

  it('can be persisted in the database', function(done) {
    Balls.create({
      width: 50,
      internal: false,
      productionMultiplier: 100,
    }).then(balls => {
      expect(balls.width).to.equal(50);
      expect(balls.convertedWidth).to.equal(2);
      expect(balls.scrotumWidth).to.equal(150);
      expect(balls.convertedScrotumWidth).to.equal(6);
      expect(balls.internal).to.be.false;
      expect(balls.productionMultiplier).to.equal(100);
      expect(balls.ejaculationVolume).to.equal(5000);
      done();
    });
  });

  describe('Basic Attributes', function() {
    it('has width values', function(done) {
      Balls.create({ width:30 }).then(balls => {
        expect(balls.width).to.eql(30);
        expect(balls.convertedWidth).to.eql(1.25);
        expect(balls.scrotumWidth).to.eql(90);
        expect(balls.convertedScrotumWidth).to.eql(3.5);
        done();
      });
    });

    it('ejaculationVolume', function(done) {
      Balls.create({
        width: 30,
        productionMultiplier: 1.5
      }).then(balls => {
        expect(balls.ejaculationVolume).to.equal(45);
        done();
      });
    });
  });

});
