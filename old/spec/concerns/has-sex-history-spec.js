describe.only('HasSexHistory', function() {

  async function setup() {
    await Game.start();
    return SpecHelper.buildJada({});
  }

  describe('hasHadSexWithPlayer()', function() {
    it('can be false', function(done) {
      setup().then(jada => {
        jada.hasHadSexWithPlayer().then(nope => {
          expect(nope).to.be.false;
          done();
        });
      });
    });

    it('can be true', function(done) {
      setup().then(jada => {
        SexEvent.add({ character:jada, eventType:'event' }).then(_ => {
          jada.hasHadSexWithPlayer().then(yep => {
            expect(yep).to.be.true;
            done();
          });
        });
      });
    });
  });

  describe('hasBeenTrained()', function() {
    it('checks for any training', function(done) {
      setup().then(jada => {
        SexEvent.add({ character:jada, eventType:'training', course:'fucking' }).then(_ => {
          jada.hasBeenTrained().then(yep => {
            expect(yep).to.be.true;
            done();
          });
        });
      });
    });

    it('checks for a specific course', function(done) {
      setup().then(jada => {
        SexEvent.add({ character:jada, eventType:'training', course:'fucking' }).then(_ => {
          jada.hasBeenTrained('fucking').then(yep => {
            jada.hasBeenTrained('oral').then(nope => {
              expect(yep).to.be.true;
              expect(nope).to.be.false;
              done();
            });
          });
        });
      });

    });
  })

});
