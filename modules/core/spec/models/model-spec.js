describe('Model', function() {

  it("creates a model with accessible properties.", function(done) {
    AvailableEvent.create({ code:'code' }).then(event => {
      expect(event.code).to.equal('code');
      event.code = 'code-2'
      expect(event.code).to.equal('code-2');
      done();
    });
  });

  it("saves and finds one model", function(done) {
    AvailableEvent.create({ code:'code', location:'bathroom' }).then(e => {
      AvailableEvent.findOne({ where:{ code:'code' }}).then(event => {
        expect(event.location).to.equal('bathroom');
        done();
      });
    });
  });

});
