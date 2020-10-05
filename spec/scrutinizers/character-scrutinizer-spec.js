describe('CharacterScrutinizer', function() {

  it('Checks an attribute value', function(done) {
    let context = new Context();

    SpecHelper.buildJada({ magical:20 }).then(jada => {
      context.addCharacter('C',jada).then(() => {
        CentralScrutinizer.meetsRequirements('minion(C).magical>15',context).then(yep => {
          CentralScrutinizer.meetsRequirements('minion(C).magical<20',context).then(nope => {
            expect(yep).to.be.true;
            expect(nope).to.be.false;
            done();
          });
        });
      });
    });
  });

  it('checks the number of minions working a role', function(done) {
    SpecHelper.buildJada({ currentDuty:'role', dutyCode:'forager' }).then(jada => {
      CentralScrutinizer.meetsRequirements('minions.forager-count=1').then(yep => {
        CentralScrutinizer.meetsRequirements('minions.forager-count=2').then(nope => {
          expect(yep).to.be.true;
          expect(nope).to.be.false;
          done();
        });
      });
    });
  });

});
