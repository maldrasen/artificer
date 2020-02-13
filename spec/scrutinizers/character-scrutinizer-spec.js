describe('CharacterScrutinizer', function() {

  it('Checks an attribute value', function(done) {
    let context = new WeaverContext();

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

});
