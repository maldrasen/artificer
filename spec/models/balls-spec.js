describe('Balls', function() {
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
